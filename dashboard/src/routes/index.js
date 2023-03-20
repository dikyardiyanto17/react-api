import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout';
import Berita from '../views/Berita';
import Film from '../views/Film';
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
            {
                path: 'berita',
                element: (
                    <Berita />
                )
            },
            {
                path: 'Film',
                element: (
                    <Film />
                )
            }
        ]
    }
]);

export default router