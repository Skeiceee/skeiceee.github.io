import { Route, Routes } from "react-router"
import PortfolioPage from "../Portfolio/Pages/PortfolioPage";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/*" element={<PortfolioPage />} />
        </Routes>
    )
    
}

export default AppRouter
