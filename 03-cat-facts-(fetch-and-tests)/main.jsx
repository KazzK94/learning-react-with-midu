/* eslint-disable no-tabs */

import { createRoot } from 'react-dom/client'

import App from './src/App'

/* Hecho por nosotros */
const root = createRoot(document.getElementById('app'))
root.render(<App />)
/* Fin de nuestro código */

/* Código previo, por defecto: */
/*
document.querySelector('#app').innerHTML = `
  <div>
	<h1>Hello Vite!</h1>
	<div class="card">
	  <button id="counter" type="button"></button>
	</div>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/
