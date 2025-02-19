import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ExplorePage from "./pages/ExplorePage";
function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/explore" replace />} />
            <Route path="/explore" element={<ExplorePage />} />
        </Routes>
        </BrowserRouter>
    )
}
export default Router