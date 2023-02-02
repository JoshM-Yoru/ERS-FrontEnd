import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/forms/Login'
import Register from './components/forms/Register'

function App() {

    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
