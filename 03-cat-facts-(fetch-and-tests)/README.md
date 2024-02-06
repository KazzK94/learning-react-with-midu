
# Init

- Install VanillaJS server
npm create vite@latest
 -> Select 'Vanilla'

- Install React and ReactDOM packages
cd project-name
npm install react react-dom

- Install Linter
npm install standard -D
 -> (Then go to package.json and add the following):
	"eslintConfig": {
		"extends" : "./node_modules/standard/eslintrc.json",
		"rules" : (here we add all exceptions for the standard rules)
	}

- Setup React
	1) Go to main.js and import React from 'react', and { createRoot } from 'react-dom'
	2) Use createRoot with an element in the index.html file, and store it in a constant
		-> const root = createRoot(document.getElementById('app'))
	3) Use the render method of that root
		-> root.render(<h1>Hello World</h1>)

- Create main folder (src) to work under it from now on


# Prueba Técnica (Español)

- Facts Random: https://catfact.ninja/fact
- Imagen Random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos de la primera API 
y muestra una imagen de un gato con la primera palabra del hecho recuperado usando la segunda API