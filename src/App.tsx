import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import WelcomeIcon from "./components/SVG/WelcomeIcon";
import { fileTree } from "./data/fileTree";

function App() {
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);
  return (
    <div>
      <div className=" h-screen text-white">
        <ResizablePanel
          leftPanel={
            <div className="pt-3 w-72  ">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={openedFiles.length ? <Preview /> : <WelcomeIcon />}
        />
      </div>
    </div>
  );
}

export default App;
