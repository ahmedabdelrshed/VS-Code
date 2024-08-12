import IconFile from "./IconFile";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ fileName, isFolder, isOpen }: IProps) => {
  const extension = fileName.split(".").pop();
  //** File */
  if (extension === "welcome")
    return (
      <img src="/public/icons/vscode.svg" alt="icon" className="w-5 h-5" />
    );
  if (extension === "tsx")
    return (
      <img src="/public/icons/react_ts.svg" alt="icon" className="w-5 h-5" />
    );
  if (extension === "js")
    return (
      <img src="/public/icons/javascript.svg" alt="icon" className="w-5 h-5" />
    );
  if (extension === "ts")
    return (
      <img src="/public/icons/typescript.svg" alt="icon" className="w-5 h-5" />
    );
  if (extension === "html")
    return <img src="/public/icons/html.svg" alt="icon" className="w-5 h-5" />;
  if (extension === "css")
    return <img src="/public/icons/css.svg" alt="icon" className="w-5 h-5" />;
  //**Folder
  if (extension === "node_modules" && isFolder)
    return isOpen ? (
      <img
        src="/public/icons/folder-node-open.svg"
        alt="icon"
        className="w-5 h-5"
      />
    ) : (
      <img src="/public/icons/folder-node.svg" alt="icon" className="w-5 h-5" />
    );
  if (extension === "public" && isFolder)
    return isOpen ? (
      <img
        src="/public/icons/folder-public-open.svg"
        alt="icon"
        className="w-5 h-5"
      />
    ) : (
      <img
        src="/public/icons/folder-public.svg"
        alt="icon"
        className="w-5 h-5"
      />
    );
  if (extension === "src" && isFolder)
    return isOpen ? (
      <img
        src="/public/icons/folder-src-open.svg"
        alt="icon"
        className="w-5 h-5"
      />
    ) : (
      <img src="/public/icons/folder-src.svg" alt="icon" className="w-5 h-5" />
    );
  if (extension === "components" && isFolder)
    return isOpen ? (
      <img
        src="/public/icons/folder-components-open.svg"
        alt="icon"
        className="w-5 h-5"
      />
    ) : (
      <img
        src="/public/icons/folder-components.svg"
        alt="icon"
        className="w-5 h-5"
      />
    );
  if (extension === "data" && isFolder)
    return isOpen ? (
      <img
        src="/public/icons/folder-database-open.svg"
        alt="icon"
        className="w-5 h-5"
      />
    ) : (
      <img
        src="/public/icons/folder-database.svg"
        alt="icon"
        className="w-5 h-5"
      />
    );
  if (extension === "interfaces" && isFolder)
    return isOpen ? (
      <img
        src="/public/icons/folder-interface-open.svg"
        alt="icon"
        className="w-5 h-5"
      />
    ) : (
      <img
        src="/public/icons/folder-interface.svg"
        alt="icon"
        className="w-5 h-5"
      />
    );
  // default icons
  if (isFolder && isOpen)
    return (
      <img
        src="/public/icons/folder-cluster-open.svg"
        alt="icon"
        className="w-5 h-5"
      />
    );
  if (isFolder && !isOpen)
    return (
      <img
        src="/public/icons/folder-cluster.svg"
        alt="icon"
        className="w-5 h-5"
      />
    );
  return <IconFile />;
};

export default RenderFileIcon;
