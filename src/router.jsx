import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact"
import Notfound from "./pages/Notfound";
import Service from "./pages/Service"
import Layout from "./components/layout/Layout";
import ProductDetail from "./pages/ProductDetail";
import File from "./pages/File";
import Main from "./pages/Main"
import CreateProduct from "./pages/CreateProduct";
import Make from "./pages/Make";
import CreateExample from "./pages/CreateExample";

export const myRouter = createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        children: [
            {
                path: "/",
                element:<Home/>,
            },
            {
                path:'about',
                element:<About/>,
            },
            {
                path:'file',
                element:<File/>,
            },
            {
                path:'contact',
                element: <Contact/>,
            },
            {
                path:'*',
                element: <Notfound/>,
            },
        
            {
                path:'service',
                element: <Service/>,
            },
            {
                path: "product/:id",
                element: <ProductDetail/>
            },
            {
                path: "main",
                element: <Main/>
            },
            {
                path: "create-product",
                element: <CreateProduct/>
            },
            {
                path: "make",
                element: <Make/>
            },
            {
                path: "create-example",
                element: <CreateExample/>
            },


        ]
}])