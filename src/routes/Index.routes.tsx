import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../pages/static/Loader";
// import CustomLoader from "../components/Loader/Index.skeleton.loader";
import { selectLoader } from "../redux/common/common.selectors";
import { useAppSelector } from "../redux/store/store";

// Import all paths
import * as Paths from "./Paths";

// ProjectedRoute to validate if the session is valid or user has relevant permission
import ProtectedRoute from "./ProtectedRoutes";

// Import Page Components

const NotFound = lazy(
  () => import("../pages/Authentication/NotFound/Index.notFound")
);
const Layout = lazy(() => import("./Layout"));
const Login = lazy(() => import("../pages/Authentication/Login/Index.login"));
const Register = lazy(
  () => import("../pages/Authentication/Register/Index.register")
);
const ForgotPassword = lazy(
  () => import("../pages/Authentication/ForgotPassword/Index.forgotPassword")
);
const ProjectsOverview = lazy(
  () => import("../pages/projects/projectsOverview/Index.projectsOverview")
);
const Messages = lazy(() => import("../pages/mesages/Index.messages"));
const MessageList = lazy(
  () => import("../pages/mesages/MessageList/Index.messageList")
);
const MessageThread = lazy(
  () => import("../pages/mesages/MessageThread/Index.messageThread")
);
const MaterialSelection = lazy(
  () => import("../pages/materialSelection/MaterialSelection")
);
const Documents = lazy(() => import("../pages/Documents/Index.documents"));
const FilesUpload = lazy(() => import("../pages/Documents/Index.folderFiles"));

// Redirection path
const authenticationPath = "/login";

function RoutesWapper() {
  const isAuthenticated = !!localStorage.getItem("token");
  const loaderStatus = useAppSelector(selectLoader);

  return (
    <>
      {/* <CustomLoader isLoading={loaderStatus} isLogin={false} /> */}
      <BrowserRouter>
        <Suspense fallback={<Loader text="component loading..." />}>
          <Routes>
            {/* following routes if you need to render inside the layout (Dashboard,Documents) */}
            <Route element={<Layout loginHeader={true} />}>
              <Route
                index
                element={
                  <ProtectedRoute
                    authenticationPath={authenticationPath}
                    isAuthenticated={isAuthenticated}
                    outlet={<ProjectsOverview />}
                  />
                }
              />
              <Route
                path={Paths.DOCUMENTS}
                element={
                  <ProtectedRoute
                    authenticationPath={authenticationPath}
                    isAuthenticated={isAuthenticated}
                    outlet={<Documents />}
                  />
                }
              />
              <Route
                path={Paths.FOLDERFILES}
                element={
                  <ProtectedRoute
                    authenticationPath={authenticationPath}
                    isAuthenticated={isAuthenticated}
                    outlet={<FilesUpload />}
                  />
                }
              />
              <Route path={Paths.MESSAGETHREAD} element={<MessageThread />} />
              <Route path={Paths.MESSAGELIST} element={<MessageList />} />
              <Route path={Paths.MESSAGES} element={<Messages />} />
              <Route
                path={Paths.MATERIAL_SELECTION}
                element={<MaterialSelection />}
              />
            </Route>
            {/* following routes do not need any layout (header,footer) */}
            <Route path={Paths.LOGIN} element={<Login />} />
            <Route path={Paths.REGISTER} element={<Register />} />
            <Route path={Paths.FORGOT_PASSWORD} element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      {loaderStatus && <Loader text="Featching Data..." />}
    </>
  );
}

export default RoutesWapper;
