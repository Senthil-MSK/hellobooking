import {DocumentStyles} from "./DocumentStyles";
import RecentFiles from "./RecentFiles/Index.recentFiles";

// Default export for Files inside Folder
export default function FolderFiles(){
  return (
    <DocumentStyles>
      <RecentFiles showBackButton={true} />
    </DocumentStyles>
  )
}