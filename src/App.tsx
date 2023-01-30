import { useState } from 'react'
import './App.css'
import Login from './components/forms/Login'
import Register from './components/forms/Register'

function App() {

    return (
        <div className="App">
            <Login />
            <Register />
        </div>
    )
}

export default App
