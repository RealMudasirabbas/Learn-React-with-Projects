import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Layout } from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About us/About.jsx'
import Contact from './components/Contact us/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import {Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// const router = createBrowserRouter(
//     [
//         {
//             path: '/',
//             element: <Route />,
//             children: [
//                 {
//                     path: "",
//                     element: <Home />
//                 },{
//                     path: "about",
//                     element: <About />
//                 },
//                 {
//                     path: "contact",
//                     element: <Contact />
//                 }
//             ]
//         }
//     ]
// )

const router = createBrowserRouter(
    createRoutesFromElements(
        
        <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="user/:userid" element={<User />}></Route>
        <Route path="github" element={<Github />} loader={githubInfoLoader}></Route>
        
        </Route>
    
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <RouterProvider  router={router}/>
    </React.StrictMode>,
)
