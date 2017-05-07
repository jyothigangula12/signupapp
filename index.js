import React from 'react'
import { render } from 'react-dom'

import App from './SignUpPage'

import {Provider} from 'react-redux' 
import store from './store/index'

import Page from './SignUpForm'

import { Router, Route, hashHistory, browserHistory  } from 'react-router'

store.subscribe(() => {console.log("from getstate",store.getState())})

import {fetchPeopleAsync, addPersonNameAsync, deletePersonAsync} from './store/actions'


// make sure you can remove stuff locally
// make sure you can remove from the db
// do both together

//store.dispatch(addPersonNameAsync({username: "George"}))
store.dispatch(fetchPeopleAsync())
store.dispatch(deletePersonAsync({id : 0}))


// render(
// 	<Provider store = {store}>
//     <div>
// 		<Page/>
// 		<App/>
// 	</div>
// 	</Provider>,
//     document.getElementById('app')
// )

