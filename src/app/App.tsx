import { Suspense, useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProviders";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "../pages/MainPage";
import {classNames} from "shared/lib/classNames";
import {Navbar} from "widgets/Navbar";
import Sidebar from "../widgets/Sidebar/ui/Sidebar";
import {AppRouter} from "app/providers/router";
import {useTranslation} from "react-i18next";

const App = () => {

   const {theme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>

            <Suspense fallback="">
                <Navbar />
                <div className={"content-page"}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
        
    )
}

export default App;