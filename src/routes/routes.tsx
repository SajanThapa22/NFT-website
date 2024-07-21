import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Bids from "../pages/Bids";
import SavedItems from "../pages/SavedItems";
import Collection from "../pages/Collection";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "bids", element: <Bids /> },
        { path: "saved", element: <SavedItems /> },
        { path: "collection", element: <Collection /> },
        { path: "profile", element: <Profile /> },
        { path: "setting", element: <Setting /> },
      ],
    },
  ],
  { basename: "/nft-website" }
);

export default router;
