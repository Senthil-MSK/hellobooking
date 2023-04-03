import { DocumentStyles } from "./DocumentStyles";
import Folders from "./Folders/Index.folders";
import RecentFiles from "./RecentFiles/Index.recentFiles";
import UploadFiles from "./UploadFiles/Index.uploadFiles";
import { useAppSelector } from "../../redux/store/store";
import {
  selectUploadBtn,
  selectMobileView,
} from "../../redux/common/common.selectors";

// Default export for Documents
export default function Documents() {
  const showUploadBtn = useAppSelector<any>(selectUploadBtn);
  const isMobileView = useAppSelector(selectMobileView);

  return (
    <DocumentStyles>
      {(showUploadBtn || !isMobileView) && (
        <>
          <Folders />
          <RecentFiles />
        </>
      )}
      <UploadFiles />
    </DocumentStyles>
  );
}
