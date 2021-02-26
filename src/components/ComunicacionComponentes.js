import React, { Component, Fragment } from 'react'

export default class Padre extends Component {
	state = {
		contador: 0,
	}

	incrementarContador = e => {
		this.setState({
			contador: this.state.contador + 1,
		})
	}

	render() {
		return (
			<Fragment>
				<h2>Comunicación entre Componentes</h2>
				<p>
					Contador <b>{this.state.contador}</b>
				</p>
				<Hijo
					incrementarContador={this.incrementarContador}
					mensaje='mensaje para el hijo 1'
				/>
				<Hijo
					incrementarContador={this.incrementarContador}
					mensaje='mensaje para el hijo 2'
				/>
			</Fragment>
		)
	}
}

function Hijo(props) {
	return (
		<Fragment>
			<h3>{props.mensaje}</h3>
			<button onClick={props.incrementarContador}>+</button>
		</Fragment>
	)
}
