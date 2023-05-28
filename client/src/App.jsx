import React from 'react'

import {BrowserRouter, Link, Route, Routes, createBrowserRouter} from 'react-router-dom';
import {logo} from './assets';

import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
            <Link to="/">
                <img src={logo} alt="logo" srcset="" className='w-28 object-contain' />
            </Link>

            <Link 
                className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'
                to="/create-post"
            >
                Create   
            </Link>
        </header>
    </BrowserRouter>
  )
}

export default App