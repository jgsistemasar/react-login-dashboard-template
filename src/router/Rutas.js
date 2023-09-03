import React from 'react'
import { Login } from '../components/login/Login';
import { Layout } from '../components/layout/Layout';
import {Routes, Route, BrowserRouter, NavLink, Navigate} from "react-router-dom";



export const Rutas = () => {
  return (
    <BrowserRouter>
    {/*Header y Navegacion*/}

    {/*Contenido Central*/}
    <section class="content">
    <Routes>
        <Route path="/" element= {<Navigate to ="/login"/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/layout" element= {<Layout/>}/>
    </Routes>

    </section>

    {/*Footer*/}
    </BrowserRouter>
  )
}
