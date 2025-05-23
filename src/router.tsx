import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashbord";
import CustomerPage from "./pages/CustomerPage";
import StockPage from "./pages/StockPage.tsx";
import OrderPage from "./pages/OrderPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "dashboard/CustomerPage", element: <CustomerPage /> },
      { path: "dashboard/StockPage", element: <StockPage /> },
      { path: "dashboard/OrderPage", element: <OrderPage /> }
    ]
  }
]);

export default router;