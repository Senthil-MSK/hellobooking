import { UploadStyles } from "./UploadStyles";
import FileUpload from "../../../components/form/FileUpload/Index.fileUpload";
import SectionHeader from "../../../components/SectionHeader/Index.sectionheader";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../../redux/store/store";
import { userObject } from "../../../redux/auth/auth.selectors";
import { useAppDispatch } from "../../../redux/store/store";
import { documentActions } from "../../../redux/documents/document.actions";

// ----- Default export for Upload files component -----
export default function UploadFiles() {
  const { projectId } = useAppSelector<any>(userObject);
  const dispatch = useAppDispatch();

  const acceptedFileFormats = {
    "application/pdf": [".pdf"],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      ".docx",
    ],
    "application/msword": [".doc"],
    "application/vnd.ms-excel": [".xls"],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
      ".xlsx",
    ],
    "text/csv": [".csv"],
  };

  const fileUpload = (file: string) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("directoryName", "Uploads");

    dispatch(
      documentActions.fileUploadAction({
        projectId,
        formData,
      })
    );
  };

  return (
    <UploadStyles>
      <SectionHeader>
        <Typography variant="h4">Upload Files</Typography>
      </SectionHeader>
      <FileUpload fileFormat={acceptedFileFormats} upload={fileUpload} />
    </UploadStyles>
  );
}
