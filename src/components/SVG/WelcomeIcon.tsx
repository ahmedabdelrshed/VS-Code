import { IFile } from "../../interfaces";
import OpenedFileBar from "../openedFileBar";

const WelcomeIcon = () => {
  const welcomeFile: IFile = {
    id: "welcome",
    isFolder: false,
    name: "welcome",
  };
  return (
    <div className="">
      <OpenedFileBar file={welcomeFile} />

      <div className="flex items-center justify-center h-screen">
        <img src="/public/icons/vscode.svg" alt="icon" className="w-80 h-80" />
      </div>
    </div>
  );
};

export default WelcomeIcon;
