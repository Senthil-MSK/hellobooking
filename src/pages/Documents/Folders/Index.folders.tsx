import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import { FolderStyles } from "./folderStyles";
import Typography from "@mui/material/Typography";
import { ReactComponent as FolderIcon } from "../../../assets/images/icons/folder.svg";
import CustomButton from "../../../components/Button/Index.button";
import SectionHeader from "../../../components/SectionHeader/Index.sectionheader";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/store/store";
import { userObject } from "../../../redux/auth/auth.selectors";
import { documentService } from "../../../services/document.service";

type DirectoryListTypes = {
  count: number;
  id: string;
  label: string;
};

// ----- Default Export for Folders Component -----
export default function Folders() {
  const [showAll, setShowAll] = useState("1");
  const [dirList, setDirList] = useState<Array<DirectoryListTypes>>([]);

  const navigate = useNavigate();
  const { projectId } = useAppSelector<any>(userObject);

  const handleShowAllBtn = () => {
    if (showAll === "0") {
      setShowAll("1");
    } else {
      setShowAll("0");
    }
  };

  useEffect(() => {
    var authToken: any = jwt_decode(localStorage.getItem("token") || "");
    if (authToken) {
      documentService
        .documentListDirectoriesService(projectId, showAll)
        .then((response) => {
          setDirList(response.data?.data);
        });
    } else if (!authToken) {
      navigate("/login");
    }
  }, [projectId, showAll]);

  return (
    <FolderStyles>
      <SectionHeader>
        <Typography variant="h4">Folders</Typography>
        <CustomButton onClick={handleShowAllBtn} variant="text">
          {showAll === "0" ? "Show All" : "Show Less"}
        </CustomButton>
      </SectionHeader>
      <Box className="folderWrapper">
        {dirList?.map((dir: DirectoryListTypes) => (
          <React.Fragment key={dir.id}>
            <Link className="folderLink" to={`/documents/${dir.label}`}>
              <Box className="image">
                <FolderIcon />
              </Box>
              <Box className="folders-item-content">
                <Typography variant="h4">{dir.label}</Typography>
                <Typography variant="h5">{`${dir.count} Documents`}</Typography>
              </Box>
            </Link>
          </React.Fragment>
        ))}
      </Box>
    </FolderStyles>
  );
}
