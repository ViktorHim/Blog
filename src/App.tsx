import { Route, Routes } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import "./index.scss";
export const App = () => {
    return (
        <div className="app">
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageLazy/>}/>
                    <Route path="/" element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    )
};