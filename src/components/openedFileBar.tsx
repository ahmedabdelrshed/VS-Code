import { useSelector } from "react-redux";
import {
  setFileClicked,
  setOpenedFiles,
  setRemoveTabID,
} from "../app/features/fileTreeSlice";
import { RootState, useAppDispatch } from "../app/store";
import { IFile } from "../interfaces";
import RenderFileIcon from "./SVG/RenderFileIcon";
import { MouseEvent } from "react";

interface IProps {
  file: IFile;
}

const OpenedFileBar = ({ file }: IProps) => {
  const dispatch = useAppDispatch();
  // Handler
  const handleClicked = () => {
    dispatch(
      setFileClicked({
        fileContent: file.content,
        fileName: file.name,
        id: file.id,
      })
    );
  };
  const { id } = useSelector((state: RootState) => state.fileTree.clickedFile);
  const openedFiles = useSelector(
    (state: RootState) => state.fileTree.openedFiles
  );
  const handleRemove = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    const filteredFiles = openedFiles.filter(
      (fileOpened) => fileOpened.id !== file.id
    );
    dispatch(setOpenedFiles(filteredFiles));
    if (filteredFiles.length === 0) {
      dispatch(setFileClicked({ id: "", fileContent: "", fileName: "" }));
      return;
    }
    const indexFile = filteredFiles.length - 1;
    dispatch(
      setFileClicked({
        id: filteredFiles[indexFile].id,
        fileContent: filteredFiles[indexFile].content,
        fileName: filteredFiles[indexFile].name,
      })
    );
  };
  return (
    <div
      className={`flex items-center p-2 cursor-pointer   border-b border-t-2 border-gray-400 ${
        file.id === id ? " bg-[#0b2942]" : "bg-[#010e1a]"
      } ${file.id === id ? "border-t-[#219fd5]" : "border-t-transparent"}`}
      onClick={handleClicked}
      onContextMenu={() => {
        dispatch(setRemoveTabID(file.id));
      }}
    >
      <RenderFileIcon fileName={file.name} />
      <span className="mx-2 text-center w-fit">{file.name}</span>
      <span
        className="border mx-2 border-gray-500 rounded-md  w-fit hover:bg-gray-800"
        onClick={handleRemove}
      >
        ✖
      </span>
    </div>
  );
};

export default OpenedFileBar;
