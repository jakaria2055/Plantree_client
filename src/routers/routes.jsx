import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Popular from "../pages/Popular";
import Review from "../pages/Review";
import Services from "../components/Services";
import ShopNow from "../pages/ShopNow";
import Cart from "../pages/Cart";
import Flower from "../components/quicklink/Flower";
import GardeningTools from "../components/quicklink/GardeningTools";
import Seeds from "../components/quicklink/Seeds";
import Shipping from "../components/quicklink/Shipping";
import TreePlanting from "../components/popularService/TreePlanting";
import GrassCutting from "../components/popularService/GrassCutting";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children: [
            {
                path:"/",
                element: <Home />,
            },
            {
                path:"/about",
                element: <About />,
            },
            {
                path:"/popular",
                element: <Popular />,
            },
            {
                path:"/review",
                element: <Review />,
            },
            {
                path:"/services",
                element: <Services/>,
            },
            {
                path:"/shopnow",
                element: <ShopNow/>,
            },
            {
                path:"/cart/:id",
                element: <Cart />,
            },
             {
                path:"/flower",
                element: <Flower />,
            },
            {
                path:"/gardening",
                element: <GardeningTools />,
            },
            {
                path:"/seeds",
                element: <Seeds />,
            },
            {
                path:"/shipping",
                element: <Shipping />,
            },
            {
                path:"/treeplanting",
                element: <TreePlanting />,
            },
             {
                path:"/grasscutting",
                element: <GrassCutting />,
            },
        ]
    }
])