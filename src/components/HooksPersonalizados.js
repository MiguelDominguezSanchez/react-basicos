import React, { Fragment } from 'react'
import { useFetch } from '../hooks/useFetch'

export default function HooksPersonalizados() {
	let url = 'https://pokeapi.co/api/v2/pokemons/'
	url = 'https://jsonplaceholder.typicode.com/users'
	// console.log(useFetch())

	let { data, isPending, error } = useFetch(url)

	return (
		<Fragment>
			<h2>Hooks Personalizados</h2>
			<h3>{JSON.stringify(isPending)}</h3>
			<h3>
				<mark>{JSON.stringify(error)}</mark>
			</h3>
			<h3>
				<pre style={{ whiteSpace: 'pre-wrap' }}>
					<code>{JSON.stringify(data)}</code>
				</pre>
			</h3>
		</Fragment>
	)
}
