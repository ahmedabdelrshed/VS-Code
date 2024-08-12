import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFileBar from "./openedFileBar";
import { useState } from "react";
import DropMenu from "./ui/DropMenu";

const SelectedFilesBar = () => {
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div>
      <div
        className="text-white flex "
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuPosition({ x: e.clientX, y: e.clientY });
          setOpenMenu(true);
        }}
      >
        {openedFiles.map((file) => (
          <OpenedFileBar key={file.id} file={file} />
        ))}
      </div>
      {openMenu && (
        <DropMenu setShowMenu={setOpenMenu} position={menuPosition} />
      )}
    </div>
  );
};

export default SelectedFilesBar;
