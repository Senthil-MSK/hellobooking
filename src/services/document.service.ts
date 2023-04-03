import http from "./http";

export const documentService = {
  documentUploadService,
  documentRecentFilesService,
  documentListDirectoriesService,
};

// Document Uploads
function documentUploadService(projectId: string, formData: {}) {
  return http.post(
    `${process.env.REACT_APP_BASE_URL}/projects/${projectId}/documents/upload`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
}

// Recent Files
function documentRecentFilesService(
  projectId: string,
  page: number = 1,
  perPage: number = 10,
  folderName: string = "Uploads"
) {
  return http.post(
    `${process.env.REACT_APP_BASE_URL}/documents/${projectId}/recent?page=${page}&perPage=${perPage}&folderName=${folderName}`,
    {}
  );
}

// List Directories
function documentListDirectoriesService(
  projectId: string,
  showAll: string = "1"
) {
  return http.get(
    `${process.env.REACT_APP_BASE_URL}/documents/${projectId}/list-directories?showAll=${showAll}`
  );
}
