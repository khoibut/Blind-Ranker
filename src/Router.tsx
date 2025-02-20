import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ExplorePage from "./pages/ExplorePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignupPage";
import CreateListPage from "./pages/CreateListPage";
import BlindRankPage from "./pages/BlindRankPage";
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/explore" replace />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/results" element={<SearchResultsPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/create" element={<CreateListPage />} />
                <Route path="/rank" element={<BlindRankPage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
