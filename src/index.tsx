import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Table from './pages/Entities';
import Edit from './pages/EditEntity';
import Init from './pages/Init';
import Entities from './pages/Entities';
import EditEntity from './pages/EditEntity';
import Create from './pages/Create';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Init/>,
    },
    {
        path: ":tableName",
        loader: async ({ params, request }) => {
            // const data = await fetch("/api/" + params.tableName + "/")
            // return (await data.json()).results
            return []
        },
        element: <Entities/>,
    },
    {
        path: ":tableName/:id",
        loader: async ({ params, request }) => {
            // const data = await fetch("/api/" + params.tableName + "/" + params.id + "/")
            // return await data.json()
            return {}
        },
        element: <EditEntity/>
    },
    {
        path: ":tableName/create",
        element: <Create/>
    },
])
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
