import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { CreateTripPage } from './pages/create_trip/create_trip.page';
import { TripDetailsPage } from './pages/trip_details/trip_details.page';

const router = createBrowserRouter([
  { path: "/", element: <CreateTripPage />},
  { path: "/trips/:tripId", element: <TripDetailsPage />}
])

export function App() {
  return (
      <RouterProvider router={router} />
  );
}
