import { createSlice } from "@reduxjs/toolkit";

type UserState = {
    data: null,
    loading: false,
    error: null
}

const initialState: UserState = {
    data: null,
    loading: false,
    error: null
}

// this is sample of async thunk
// export const fetchFile = createAsyncThunk("file/fetchFile",
//     async (fileId: string, thunkAPI) => {
//         const response = await new Promise((resolve) =>
//             setTimeout(() => resolve({ id: fileId, name: "Sample File" }), 1000)
//         );
//         return response;
//     }
// )

export const fileSlice = createSlice({
    name: "file",
    initialState,
    // this is where to store actions that are not saved to db
    reducers: {


    },
    // whereas here, this allows to interact with functions (inside those functions can have api)
    // extraReducers: (builder) => {
    //     builder
    //         // full example of possibilities
    //         .addCase(fetchFile.pending, (state) => {
    //             state.loading = true;
    //             state.error = false;
    //         })
    //         .addCase(fetchFile.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.data = action.payload;
    //         })
    //         .addCase(fetchFile.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.error.message || "some error";
    //         })
})

export const fileSliceReducer = fileSlice.reducer