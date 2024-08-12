import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrow from "./SVG/RightArrow";
import BottomArrow from "./SVG/BottomArrow";
import RenderFileIcon from "./SVG/RenderFileIcon";
import { setFileClicked, setOpenedFile } from "../app/features/fileTreeSlice";
import { useDispatch, useSelector } from "react-redux";
import { checkFileExists } from "../utilis/function";
import { RootState } from "../app/store";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const toggleOpen = () => setIsOpened(!isOpened);
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);
  const { id } = useSelector((state: RootState) => state.fileTree.clickedFile);

  const onFileClicked = () => {
    onSetFileClicked();
    if (checkFileExists(openedFiles, fileTree.id)) {
      return;
    }
    dispatch(setOpenedFile(fileTree));
  };
  // Handler
  const onSetFileClicked = () => {
    dispatch(
      setFileClicked({
        fileContent: fileTree.content,
        fileName: fileTree.name,
        id: fileTree.id,
      })
    );
  };
  return (
    <div className=" mb-2 ml-3 cursor-pointer">
      <div className=" flex items-center mb-3">
        {fileTree.isFolder ? (
          <div onClick={toggleOpen} className=" flex items-center ">
            <span className="mr-2">
              {isOpened ? <BottomArrow /> : <RightArrow />}
            </span>
            <RenderFileIcon
              fileName={fileTree.name}
              isFolder={fileTree.isFolder}
              isOpen={isOpened}
            />

            <span className="text-white ml-1">{fileTree.name}</span>
          </div>
        ) : (
          <>
            <div
              className={`flex px-5 py-1 items-center ${
                fileTree.id === id && "bg-[#0e293f]"
              }`}
              onClick={onFileClicked}
            >
              <RenderFileIcon fileName={fileTree.name} />
              <span className="text-white ml-1">{fileTree.name}</span>
            </div>
          </>
        )}
      </div>
      {fileTree.children &&
        isOpened &&
        fileTree.children.map((file, index) => (
          <RecursiveComponent key={index} fileTree={file} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
