import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'

import './App.css'

export default function App() {

    let router = useRoutes(routes)

    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />
                {router}
            </div>
        </>
    )
}


