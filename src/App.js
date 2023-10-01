import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import PageLayout from "./pages/Dashboard/PageLayout";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import Projects from "./pages/Projects/Proj";
import Project from "./pages/Project/Project";
import Login from "./pages/LogIn/Login";
import SignUp from "./pages/SignUp/SignUp";
import Category from "./pages/Category/Category";
import Color from "./pages/Color/Color";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";

const DashboardLayout = () => {
  return (
    <>
      <PageLayout />
    </>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="files" element={<Home />} />
      </Route>
      <Route path="project/:id?" element={<Project />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      {/* public page */}
      <Route path="category" element={<Category />} />
      {/* private page */}
      <Route element={<PrivateRoutes />}>
        <Route path="color" element={<Color />} />
      </Route>
    </>
  )
);
function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <DashboardLayout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "projects",
//         element: <Projects />,
//       },
//       {
//         path: "files",
//         element: <Home />,
//       },
//     ],
//   },
//   { path: "project/:id?", element: <Project /> },
//   { path: "login", element: <Login /> },
//   { path: "signup", element: <SignUp /> },
// ]);
