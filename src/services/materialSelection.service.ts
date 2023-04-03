import http from "./http";

export const materialSelectionService = {
  matrialselectionNewService,
  matrialselectionVersioningService,
  matrialselectionAcceptChangeService,
  matrialselectionAwaitingSignOffListService,
  matrialselectionReviewSaveService,
  matrialselectionReviewListService
};

// material Selection Service
function matrialselectionNewService(payload: {
  projectId: string;
  page: number;
}) {
  return http.get(
    `${process.env.REACT_APP_BASE_URL}/material/${payload.projectId}/list?page=${payload.page}`
  );
}

// material Selection Versioning
function matrialselectionVersioningService(payload: { materialId: string }) {
  return http.get(
    `${process.env.REACT_APP_BASE_URL}/material/${payload.materialId}/detail`
  );
}

// material Selection Versioning
function matrialselectionAcceptChangeService(payload: {
  materialId: string;
  status: boolean;
}) {
  return http.put(
    `${process.env.REACT_APP_BASE_URL}/material/${payload.materialId}/accept`,
    {
      status: payload.status,
    }
  );
}

// material Selection Awaiting list off
function matrialselectionAwaitingSignOffListService(payload: {
    projectId: string;
    page: number;
  }) {
    return http.get(
      `${process.env.REACT_APP_BASE_URL}/material/${payload.projectId}/sheet/tiles?page=${payload.page}`
    );
  }

// material Review Save
function matrialselectionReviewSaveService(payload: {
    id: string;
    status: boolean;
  }) {
    return http.put(
      `${process.env.REACT_APP_BASE_URL}/material/${payload.id}/reviewstatus`, {
        status: payload.status
      }
    );
  }


// material Review List
function matrialselectionReviewListService(payload: {
  projectId: string;
}) {
  return http.get(
    `${process.env.REACT_APP_BASE_URL}/material/${payload.projectId}/review-summery`
  );
}
