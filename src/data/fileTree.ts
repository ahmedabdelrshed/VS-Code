import { IFile } from "../interfaces";
import { v4 as uuid } from 'uuid';

export const fileTree: IFile = {
    id: uuid(),
    name: "VS-CODE",
    isFolder: true,
    children: [
        {
            id: uuid(),
            name: "node_modules",
            isFolder: true,

        }
        , {
            id: uuid(),
            name: "public",
            isFolder: true,
            children: [{
                id: uuid(), name: "index.html", isFolder: false, content: `<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VS-Code</title>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>

</html>` }]
        },
        {
            id: uuid(),
            name: "src",
            isFolder: true,
            children: [
                {
                    id: uuid(), name: "App.tsx", isFolder: false, content: `import RecursiveComponent from "./components/RecursiveComponent";
import SelectedFilesBar from "./components/selectedFilesBar";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <div >
      <div className="flex text-white">
        <div className="pt-3 w-72 h-screen border-r border-r-white">
          <RecursiveComponent fileTree={fileTree} />
        </div>
        <SelectedFilesBar/>
        
      </div>
    </div>
  );
}

export default App ✔ ❤💖;
` },
                { id: uuid(), name: "components", isFolder: true, children: [{ id: uuid(), name: "RecursiveComponent.tsx", isFolder: false, content: `RecursiveComponent` }] },
                { id: uuid(), name: "data", isFolder: true, children: [{ id: uuid(), name: "fileTree.ts", isFolder: false, content: `fileTree` }] },
                { id: uuid(), name: "interfaces", isFolder: true, children: [{ id: uuid(), name: "index.ts", isFolder: false, content: `fileTree` }] },
                { id: uuid(), name: "index.css", isFolder: false, content: `index.css` },
                { id: uuid(), name: "main.tsx", isFolder: false, content: `main.ts` }
            ]
        }

        ,
        {
            id: uuid(),
            name: "index.html",
            isFolder: false,

        }
    ]
}