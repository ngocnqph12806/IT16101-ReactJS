import React from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../../../controller/Auth'

const Sliderbar = () => {

    const onClickLogout = () => {
        logout();
    }

    return (
        <>
            <nav className='slidebar slidebar-expand d-flex flex-column align-item-start bg-dark text-light' id='slidebar'>
                <NavLink to='/' className='navbar-brand text-light mt-5 text-center'>
                    <div className='display-5 font-weght-bold'>
                        PolyMart
                    </div>
                </NavLink>
                <hr />
                <ul className='navbar-nav d-flex flex-column mt-5 w-100'>
                    <li className='slidebar-item w-100'>
                        <NavLink to='/admin' className='slidebar-link text-light'>Home</NavLink>
                    </li>
                    <li className='slidebar-item w-100'>
                        <NavLink to='/admin/product' className='slidebar-link text-light'>Product</NavLink>
                    </li>
                    <li className='slidebar-item w-100'>
                        <NavLink to='/admin/user' className='slidebar-link text-light'>User</NavLink>
                    </li>
                    <li className='slidebar-item w-100'>
                        <NavLink to='/admin/brand-type' className='slidebar-link text-light'>Brand - Type</NavLink>
                    </li>
                    <li className='slidebar-item w-100'>
                        <NavLink to='/admin/properties' className='slidebar-link text-light'>Properties</NavLink>
                    </li>
                    <li className='slidebar-item w-100'>
                        <NavLink to='/admin/bill' className='slidebar-link text-light'>Bills</NavLink>
                    </li>
                    <hr />
                    <li className='slidebar-item w-100'>
                        <a href='/' onClick={onClickLogout} className='slidebar-link text-light'>Logout</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Sliderbar
