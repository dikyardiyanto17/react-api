import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout';
import Berita from '../views/Berita';
import Home from '../views/Home';
import Pahlawan from '../views/Pahlawan';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: (
                    <Home />
                ),
            },
            {
                path: 'pahlawan',
                element: (
                    <Pahlawan />
                )
            },
            ,
            {
                path: 'berita',
                element: (
                    <Berita />
                )
            }
        ]
    }
]);

export default router