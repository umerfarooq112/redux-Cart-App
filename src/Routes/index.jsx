import React from 'react'
import Login from '../Pages/Login'
import { Routes, Route, BrowserRouter as Router, } from "react-router-dom"
function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route
                    path="*"
                    element={
                        <div>
                            <h2>404 Page not found etc</h2>
                        </div>
                    }
                />
            </Routes>

        </Router >
    )
}

export default AppRoutes

