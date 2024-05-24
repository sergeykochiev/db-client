import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
            const data = await fetch("http://localhost:5132/api/" + params.tableName + "s/")
            return (await data.json()).result
        },
        element: <Entities/>,
    },
    {
        path: ":tableName/create",
        element: <Create/>
    },
    {
        path: ":tableName/:id",
        loader: async ({ params, request }) => {
            const data = await fetch("http://localhost:5132/api/" + params.tableName + "s/id?id=" + params.id)
            return (await data.json())
        },
        element: <EditEntity/>
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
