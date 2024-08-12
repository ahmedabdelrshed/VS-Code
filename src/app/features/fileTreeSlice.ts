import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

export interface IClickedFile {
    id: string;
    fileName: string;
    fileContent: string | undefined;
}

export interface IInitialState {
    openedFiles: IFile[]
    clickedFile: IClickedFile
    removeTabID: string
}
const initialState: IInitialState = {
    openedFiles: [],
    clickedFile: { id: "", fileName: "", fileContent: "" },
    removeTabID: ""
}

const fileTreeSlice = createSlice({
    name: "fileTree",
    initialState,
    reducers: {
        setOpenedFile: (state, action: PayloadAction<IFile>) => {
            // state.clickedFile = file.payload
            state.openedFiles = [...state.openedFiles, action.payload]
        },
        setOpenedFiles: (state, files: PayloadAction<IFile[]>) => {
            // state.clickedFile = file.payload
            state.openedFiles = files.payload
        },
        setFileClicked: (state, action: PayloadAction<IClickedFile>) => {
            state.clickedFile = action.payload
        },
        setRemoveTabID: (state, action: PayloadAction<string>) => {
            state.removeTabID = action.payload
        }
    }
})
export const { setOpenedFile, setFileClicked, setOpenedFiles, setRemoveTabID } = fileTreeSlice.actions
export default fileTreeSlice.reducer