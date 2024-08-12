import { IFile } from "../interfaces";

export const checkFileExists = (treeFiles:IFile[],id:string) => {
    return treeFiles.some(file => file.id === id);
}
