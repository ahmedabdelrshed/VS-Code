import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
interface IProps {

content:string ;
}

const ContentHighlighter = ({content}: IProps) => {
  return   <SyntaxHighlighter language="javascript" style={coldarkDark} >
  {content}
</SyntaxHighlighter>
}

export default ContentHighlighter