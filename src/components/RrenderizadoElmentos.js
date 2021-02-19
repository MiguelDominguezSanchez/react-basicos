import React, { Component } from 'react'
import data from '../helpers/data.json'

function ElementoLista(props) {
	return (
		<li>
			<a href={props.el.web} target='_blank' rel='noreferrer'>
				{props.el.name}
			</a>
		</li>
	)
}

export default class RenderizadoElementos extends Component {
	constructor(props) {
		super(props)
		this.state = {
			seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
		}
	}

	render() {
		console.log(data)
		return (
			<div>
				<h2>Renderizado de Elmentos</h2>
				<h3>Estaciones del año</h3>
				<ol>
					{this.state.seasons.map((el, index) => (
						<li key={index}>{el}</li>
					))}
				</ol>
				<h3>Frameworks Frontend Javascript</h3>
				<ul>
					{data.frameworks.map(el => (
						<ElementoLista key={el.id} el={el} />
					))}
				</ul>
			</div>
		)
	}
}
