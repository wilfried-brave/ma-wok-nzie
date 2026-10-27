import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'

// Plus tard : ajouter ici les providers (React Query, notifications, thème…)
export default function App() {
  return <RouterProvider router={router} />
}