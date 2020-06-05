
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'

function App() {
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => console.log({ user }))
      .catch(error => console.log({ error }))
  })
  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  )
}


//export default withAuthenticator(App, { includeGreetings: true })
export default App