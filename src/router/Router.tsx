import { createBrowserRouter } from "react-router";
import App from "../App";
import LoginPage from "../pages/login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/auth/login",
        element: <LoginPage />
    }
])


export default router;