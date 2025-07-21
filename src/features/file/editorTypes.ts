export type PlaceHolder = {
    name: string;
    value: string
}

export type Template = {
    id: number;
    name: string;
    content: string;
    placeholders: PlaceHolder[];
}

export type EditorState = {
    templates: Template[];
    activeTemplateId: number;
    menuExpand: boolean;
}
