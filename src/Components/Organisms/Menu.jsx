import React, { useState } from 'react'
import MobileMenuIcon from '../Atoms/MobileMenuIcon'
import MenuLogo from '../Molecules/MenuLogo'
import MenuPrimary from '../Molecules/MenuPrimary'
import MenuSecondary from '../Molecules/MenuSecondary'
import MobileNav from '../Molecules/MobileNav'


const Menu = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        /* Nav goes here */
        <nav className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <MenuLogo />

                        <MenuPrimary />
                    </div>

                    <MenuSecondary />

                    <div id="mobile" className="md:hidden flex items-center" onClick={handleClick}>
                        <MobileMenuIcon />
                    </div>
                </div>
            </div>

            <div id="mobile-menu" className={ click ? "md:hidden" : " hidden md:hidden" }>
                <MobileNav />
            </div>
        </nav>
    )
}

export default Menu