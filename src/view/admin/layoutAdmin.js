import React, {useEffect} from 'react'
import Sliderbar from './layout/Sliderbar'
import FooterAdmin from './layout/Footer'
import { useHistory } from 'react-router'
import { openAlert } from '../../controller/BillAPI'

const RouterAdmin = (props) => {

    let history = useHistory();

    const dropMenu = (e) => {
        let slideBar = document.querySelector('.slidebar');
        let idMain = document.getElementById('main');
        if (e.target.className === 'btn-menu active') {
            e.target.className = "btn-menu"
            e.target.style.cssText = "margin-left: 290px"
            idMain.style.cssText = "margin-left: 300px"
            slideBar.style.cssText = 'margin-left: 0px'
        }
        else {
            slideBar.style.cssText = 'margin-left: -280px'
            e.target.style.cssText = "margin-left: 0px"
            e.target.className = "btn-menu active"
            idMain.style.cssText = "margin-left: 10px"
        }
    }

    useEffect(() => {
        let chuyenHuongLogin = () => {
            if (props.userLogin.id === '-1' && props.userLogin.status === '') {
                history.push('/login')
            } else if (props.userLogin.status === '0') {
                openAlert('Tài khoản của bạn đã bị khoá')
                history.push('/login')
            }
        }
        chuyenHuongLogin()
    }, [props.userLogin])

    return (
        <>
            <Sliderbar />
            <box-icon style={{ marginLeft: '290px' }} onClick={dropMenu} className='btn-menu' name='menu' ></box-icon>
            <div id='main' className='d-flex flex-column' >
                {props.children}
                <FooterAdmin />
            </div>
        </>
    )
}

export default RouterAdmin
