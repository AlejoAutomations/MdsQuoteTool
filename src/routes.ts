import { createBrowserRouter } from "react-router";
import FormPage from "./pages/FormPage";
import PreviewPage from "./pages/PreviewPage";
import SettingsPage from "./pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: FormPage,
  },
  {
    path: "/preview",
    Component: PreviewPage,
  },
  {
    path: "/settings",
    Component: SettingsPage,
  },
]);