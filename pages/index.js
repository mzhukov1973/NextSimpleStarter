import 'isomorphic-fetch'
import React from 'react'
import {connect} from 'react-redux'

import Fork from '../components/Fork'
import Todo from '../components/Todo'

const Index = ({stars}) => (<><Fork stars={stars}/><Todo/></>) /*<=== Port in to using useState hooks, if you need state */

Index.getInitialProps = async({store}) => {
	const res  = await fetch('https://api.github.com/repos/ooade/NextSimpleStarter')
	const json = await res.json()
	return {stars:json.stargazers_count}
} /*<=== Adding a default/initialState can be done as follows: store.dispatch({ type: 'ADD_TODO', text: 'It works!' }); */

export default connect()(Index)
