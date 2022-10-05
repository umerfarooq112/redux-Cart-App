import React from 'react'
import Login from '../Pages/Login'
import { Routes, Route, BrowserRouter as Router, } from "react-router-dom"
import Dashboard from '../Pages/Dashboard/index'
import Signup from '../Pages/Login/Signup'
import Items from '../Pages/Items'
import Settings from '../Pages/Settings'

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/items" element={<Items />} />
                <Route path="/settings" element={<Settings />} />


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

