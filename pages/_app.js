import React from 'react'
import Head from 'next/head'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper'

import initStore from '../utils/store'

/* debug to log how the store is being used: */
export default withRedux(initStore, {debug:typeof window!=='undefined'&&process.env.NODE_ENV!=='production'})(
	class MyApp extends App {
		static async getInitialProps({Component, ctx}) { return {pageProps:{...(Component.getInitialProps?await Component.getInitialProps(ctx):{})}} } /*<=== Call page-level getInitialProps */

		render = () => {
			const {Component,pageProps,store} = this.props
			return (
			  <Container>
				 <Head>
				  <title>Todo App ver.2.0.1</title>
				 </Head>
				 <Provider store={store}>
				  <Component {...pageProps}/>
				 </Provider>
				</Container>
			)
		}
	}
)
