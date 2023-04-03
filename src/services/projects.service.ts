import http from "./http";

export const projectsService = {
  projectsTimeService,
  projectsPaymentService,
  projectsGalleryService,
  projectsPendingActionsService
};

// Timeline Service
function projectsTimeService(id: string) {
  return http.get(`${process.env.REACT_APP_BASE_URL}/projects/timeline/${id}`, );
}
// Payment Service
function projectsPaymentService(id: string) {
  return http.get(`${process.env.REACT_APP_BASE_URL}/projects/payment-milestones/${id}`, );
}
// Gallery Service
function projectsGalleryService(id: string) {
  return http.get(`${process.env.REACT_APP_BASE_URL}/projects/gallery-overview/${id}`, );
}
// Priority Actions Service
function projectsPendingActionsService(id: string) {
  return http.get(`${process.env.REACT_APP_BASE_URL}/projects/priority-actions/${id}`, );
}

 

