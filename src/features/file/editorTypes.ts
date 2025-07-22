import { z } from "zod"
export const PlaceHolderSchema = z.object({
    name: z.string().min(1, "Required"),
    value: z.string().min(1, "Required"),
})

export const TemplateSchema = z.object({
    id: z.number(),
    name: z.string(),
    content: z.string(),
    placeholders: z.array(PlaceHolderSchema),
})

export const EditorStateSchema = z.object({
    templates: z.array(TemplateSchema),
    activeTemplateId: z.number(),
    menuExpand: z.boolean(),
})

export type PlaceHolder = z.infer<typeof PlaceHolderSchema>
export type Template = z.infer<typeof TemplateSchema>
export type EditorState = z.infer<typeof EditorStateSchema>


