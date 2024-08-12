import { useEffect, useRef } from "react";
import { RootState, useAppDispatch } from "../../app/store";
import {
  setFileClicked,
  setOpenedFiles,
} from "../../app/features/fileTreeSlice";
import { useSelector } from "react-redux";

interface IProps {
  setShowMenu: (val: boolean) => void;
  position: {
    x: number;
    y: number;
  };
}

const DropMenu = ({ position: { x, y }, setShowMenu }: IProps) => {
  const dispatch = useAppDispatch();
  let openedFiles = useSelector(
    (state: RootState) => state.fileTree.openedFiles
  );
  const tabId = useSelector((state: RootState) => state.fileTree.removeTabID);
  const { id } = useSelector((state: RootState) => state.fileTree.clickedFile);
  const refDiv = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refDiv.current && !refDiv.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);
  // function
  const handleActiveTab = () => {
    const indexFile = openedFiles.length - 1;
    dispatch(
      setFileClicked({
        id: openedFiles[indexFile].id,
        fileContent: openedFiles[indexFile].content,
        fileName: openedFiles[indexFile].name,
      })
    );
  };
  // Handler
  // Close All Event
  const onCloseAll = () => {
    dispatch(setOpenedFiles([]));
    setShowMenu(false);
  };
  // Close Tab
  const onCloseTab = () => {
    openedFiles = openedFiles.filter((fileOpened) => fileOpened.id !== tabId);
    dispatch(setOpenedFiles(openedFiles));
    setShowMenu(false);
    if (id === tabId) handleActiveTab();
  };
  // Close Other Tabs
  const onCloseOtherTabs = () => {
    openedFiles = openedFiles.filter((fileOpened) => fileOpened.id === tabId);
    dispatch(setOpenedFiles(openedFiles));
    setShowMenu(false);
    handleActiveTab();
  };
  // Render
  return (
    <ul
      ref={refDiv}
      className="bg-[#3c3c3c] w-fit  px-2 py-2  rounded-md"
      style={{
        position: "absolute",
        left: x,
        top: y,
      }}
    >
      <li
        className=" mb-2 py-1 cursor-pointer px-3 hover:bg-[#0288d1] rounded-md "
        onClick={onCloseTab}
      >
        Close
      </li>
      <li
        className=" mb-2 py-1 cursor-pointer px-3 hover:bg-[#0288d1] rounded-md  "
        onClick={onCloseOtherTabs}
      >
        Close Other
      </li>
      <li
        className="  cursor-pointer py-1 px-3 hover:bg-[#0288d1] rounded-md "
        onClick={onCloseAll}
      >
        Close All
      </li>
    </ul>
  );
};

export default DropMenu;
