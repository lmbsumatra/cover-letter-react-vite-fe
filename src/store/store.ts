import { configureStore } from "@reduxjs/toolkit"
import { editorSliceReducer } from "../features/file/editorSlice"

export const store = configureStore({
    reducer: {
        editor: editorSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDisptach = typeof store.dispatch

