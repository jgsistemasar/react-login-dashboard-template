import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './menu/Menu';
import { Home } from './home/Home';


export const Layout = () => {
  return (
    <div class="container-fluid">
		<div class="row">
			<Menu/>
			<main class="main col">
			<div class="row titulo_layout">
					<h1 class="titulo_layout_text">Pantalla de Inicio</h1>
					<div/>
				</div>
			<Home/>
			</main>
		</div> 
        </div>
)
}
