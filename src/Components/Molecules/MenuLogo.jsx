import React from 'react'
import { Link } from 'react-router-dom'

const MenuLogo = () => (
    <div id="logo">
        <Link to="/" className="flex items-center py-5 px-3 font-bold text-yellow-500 hover:text-yellow-600">
            <svg className="h-6 w-6 mr-1 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
            <span>Lion Dev</span>
        </Link>
    </div>
)

export default MenuLogo