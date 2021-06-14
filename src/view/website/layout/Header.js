import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';
import { logout } from './../../../controller/Auth'

const HeaderWeb = (props) => {

    const [showLogout, setShowLogout] = useState()

    const [showListMenu, setShowListMenu] = useState()

    useEffect(() => {
        if (props.listTypeProduct.length > 0) {
            let setListMenu = () => (
                props.listTypeProduct.map(e => (
                    <li><Link className="dropdown-item" to={`/product/${e.id}`}>{e.name}</Link></li>
                ))
            )
            setShowListMenu(setListMenu)
        }
    }, [props.listTypeProduct])

    useEffect(() => {
        if (props.userLogin.status !== '' && props.userLogin.status !== '0') {
            let show = () => (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to="#" id="navbarDropdown" onMouseLeave={btnAccountOut}
                            onMouseMove={btnAccount} aria-expanded="false">
                            <box-icon name='user-circle' type='solid' ></box-icon> {props.userLogin.fullname}
                        </Link>
                        <ul id='menuAccount' className="dropdown-menu" onMouseLeave={btnAccountOut}
                            onMouseMove={btnAccount}
                            aria-labelledby="navbarDropdown">
                            <li>
                                <Link className="dropdown-item" to={`/bill/user/${props.userLogin.id}`}><box-icon name='list-ol' ></box-icon> Danh sách hoá đơn</Link>
                            </li>
                            <hr />
                            {
                                props.userLogin.role !== '' & props.userLogin.role !== '0'
                                    ? <li>
                                        <Link onClick={onClickLogOut} className="dropdown-item" to="/admin"><box-icon type='solid' name='user'></box-icon> Admin</Link>
                                    </li>
                                        : null
                            }
                            <li>
                                <a onClick={onClickLogOut} className="dropdown-item" href="/"><box-icon name='log-out' ></box-icon> Logout</a>
                            </li>
                        </ul>
                    </li>
                </>
            )
            setShowLogout(show)
        }
    }, [props.userLogin])

    const onClickLogOut = () => {
        logout();
    }

    const btnAccount = () => {
        let getBtnXemThem = document.querySelector('#menuAccount');
        if (getBtnXemThem.className === 'dropdown-menu') {
            getBtnXemThem.className = 'dropdown-menu show'
        }
    }

    const btnAccountOut = () => {
        let getBtnXemThem = document.querySelector('#menuAccount');
        if (getBtnXemThem.className === 'dropdown-menu show') {
            getBtnXemThem.className = 'dropdown-menu'
        }
    }

    const btnXemThem = () => {
        let getBtnXemThem = document.querySelector('#menuXemThem');
        if (getBtnXemThem.className === 'dropdown-menu') {
            getBtnXemThem.className = 'dropdown-menu show'
        }
    }

    const btnXemThemOut = () => {
        let getBtnXemThem = document.querySelector('#menuXemThem');
        if (getBtnXemThem.className === 'dropdown-menu show') {
            getBtnXemThem.className = 'dropdown-menu'
        }
    }

    const btnMenu = () => {
        let getBtnMenu = document.getElementById('navbarSupportedContent');
        if (getBtnMenu.className === 'collapse navbar-collapse') {
            getBtnMenu.className = 'collapse navbar-collapse show';
        } else {
            getBtnMenu.className = 'collapse navbar-collapse'
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src='http://snkrsg.com/upload/hinhanh/logo-3475.png' /></Link>
                    <button onClick={btnMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" onMouseLeave={btnXemThemOut}
                                    onMouseMove={btnXemThem} to="/product" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Xem thêm</Link>
                                <ul id='menuXemThem' className="dropdown-menu" onMouseLeave={btnXemThemOut} onMouseMove={btnXemThem}
                                    aria-labelledby="navbarDropdown">
                                    {showListMenu}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    <box-icon type='solid' name='cart'></box-icon>
                                    Cart
                                </Link>
                            </li>
                            {
                                (props.userLogin.status !== '' && props.userLogin.status !== '0')
                                    ? showLogout
                                    : <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            <box-icon name='log-in-circle' type='solid' ></box-icon> Login
                                        </Link>
                                    </li>
                            }
                        </ul>
                        <Search />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default HeaderWeb
