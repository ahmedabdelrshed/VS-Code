import { useSelector } from "react-redux";
import ContentHighlighter from "./ContentHighlighter";
import { RootState } from "../app/store";
import SelectedFilesBar from "./selectedFilesBar";

const Preview = () => {
  const { fileContent } = useSelector(
    (state: RootState) => state.fileTree.clickedFile
  );
  return (
    <div>
      <SelectedFilesBar />
      <ContentHighlighter content={String(fileContent)} />
    </div>
  );
};

export default Preview;
