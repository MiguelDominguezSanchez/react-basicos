import React from 'react'
import logo from './logo.svg'
import Componente from './components/Componente'
import './App.css'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<section>
					<img src={logo} className='App-logo' alt='logo' />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'
					>
						Learn React
					</a>
				</section>
				<section>
					<Componente msg='hola soy un componente funcional expresado desde desde una prop' />
					<Propiedades
						cadena='Esto es una cadena de texto'
						numero={19}
						booleano={false}
						arreglo={[1, 2, 3]}
						objeto={{ nombre: 'Jon', correo: 'jonmircha@gmail.com' }}
						funcion={num => num * num}
						elementoReact={<i>Esto es un Elemento React</i>}
						componenteReact={
							<Componente msg='soy un componente pasado como prop' />
						}
					/>

					<hr />
					<Estado />
					<hr />
					<RenderizadoCondicional />
				</section>
			</header>
		</div>
	)
}

export default App
