import React from 'react'
import { Link } from 'react-router-dom'

const MenuSecondary = () => (
    <div id="secondary_nav" className="hidden md:flex items-center space-x-1">
        <Link className="py-5 px-3" to='/login'>Login</Link>
        <Link className="py-2 px-3 bg-green-600 hover:bg-green-400 text-white hover:text-green-700 rounded transition duration-300" to='/signup'>Signup</Link>
    </div>
)

export default MenuSecondary