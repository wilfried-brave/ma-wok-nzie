import { Navigate, createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import HomePage from '../pages/HomePage'
import MenuPage from '../pages/MenuPage'
import AboutPage from '../pages/AboutPage'
import ComingSoonPage from '../pages/ComingSoonPage'
import NotFoundPage from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'menu', element: <Navigate to="/menu/plats" replace /> },
      { path: 'menu/:categoryId', element: <MenuPage /> },
      { path: 'cave', element: <ComingSoonPage title="La Cave Goûtes de Dieu" step={2} /> },
      { path: 'a-propos', element: <AboutPage /> },
      { path: 'reservation', element: <ComingSoonPage title="Réservation" step={3} /> },
      { path: 'contact', element: <ComingSoonPage title="Nous contacter" step={3} /> },
      { path: 'connexion', element: <ComingSoonPage title="Authentification" step={4} /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])