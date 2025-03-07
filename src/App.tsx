import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { AnalyticsWithJS } from './pages/AnalyticsWithJS';
import { AnalyticsWithEdgee } from './pages/AnalyticsWithEdgee';

const Layout = () => (
  <div className="min-h-screen bg-background font-sans antialiased w-full">
    <Navigation />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/analytics-with-js",
        element: <AnalyticsWithJS />
      },
      {
        path: "/analytics-with-edgee",
        element: <AnalyticsWithEdgee />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }} />;
}

export default App;
