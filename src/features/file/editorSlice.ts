import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { EditorState } from "./editorTypes";


const extractPlaceholders = (text: string) => {
    const matches = text.match(/\[([^\]]+)\]/g);
    const placeholders = matches ? matches.map((match) => match.slice(1, -1)) : [];

    return placeholders.map((placeholder) => ({ name: placeholder, value: "" }))
};

const templateContent = `[Hiring Manager]
[Company Name]
[Company Address]
[City, ZIP Code]

Good day, Hiring Manager,

I am writing to express my interest in the [Position Applying For] at your company. I will be graduating in August 2025 with a Bachelor's degree in Information Technology, and I am excited to bring my hands-on experience in full-stack web development into a professional environment where I can continue to grow and contribute meaningfully.

During my internship at Lightweight Global Tech Solutions Corp., I worked closely with a software development team to build a custom AI chatbot. I focused on the frontend using technologies such as Next.js, ShadCN, TailwindCSS, and Zustand. As I quickly adapted to new tools, my mentor entrusted me with backend tasks using Python, OpenAI, and LangChain. This experience strengthened both my technical skills and my confidence in learning emerging technologies.

I would be honored to bring my enthusiasm, adaptability, and growing skill set to your team. Thank you for considering my application.

Sincerely,
Love Missy B. Sumatra`;

const initialState: EditorState = {
    templates: [{
        id: 1,
        name: "Software Developer Template",
        content: templateContent,
        placeholders: extractPlaceholders(templateContent)

    }],
    activeTemplateId: 1,
    menuExpand: false
}


export const editorSlice = createSlice({
    name: "editor",
    initialState,
    reducers: {
        updateContent: (state, action: PayloadAction<{ id: number, content: string }>) => {
            const template = state.templates.find(template => template.id === action.payload.id)
            if (template) {
                template.content = action.payload.content
                template.placeholders = extractPlaceholders(action.payload.content)
            }
        },
        toggleMenuExpand: (state) => {
            state.menuExpand = !state.menuExpand
        },
        updatePlaceholderValue: (state, action: PayloadAction<{ id: number, name: string, value: string }>) => {
           
            const template = state.templates.find(template => template.id === action.payload.id)
             
            if (template) {
                const placeholder = template.placeholders.find(ph => ph.name === action.payload.name)
                if (placeholder) {
                    placeholder.value = action.payload.value
                }
            }
        }
    },
})

export const { toggleMenuExpand, updateContent, updatePlaceholderValue } = editorSlice.actions

export const editorSliceReducer = editorSlice.reducer