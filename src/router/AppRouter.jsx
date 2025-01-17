import { Route, Routes } from "react-router"
import PortfolioPage from "../Portfolio/Pages/PortfolioPage";
import ContactPage from "../Portfolio/Pages/BlogPage";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/*" element={<PortfolioPage />} />
            <Route path="/contacto" element={<ContactPage />} />
        </Routes>
    )
    
}

export default AppRouter
