import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import { openAlert } from './../../../controller/BillAPI';
import UserAPI from './../../../controller/UserAPI';
import Login from './../../../view/admin/component/user/login'
import { authenticate, formatUser, isAuthenticated, jwtDecode } from '../../../controller/Auth';

const PageLogin = (props) => {

    let history = useHistory();

    const onLogin = async (user) => {
        try {
            let { data: { accessToken } } = await UserAPI.login(user);
            let { data } = await formatUser(accessToken);
            if (data.length > 0) {
                if (!data[0].active) {
                    let getCode = window.prompt('Nhập mã kích hoạt tài khoản');
                    if (getCode !== null) {
                        if (Number(getCode) === data[0].code) {
                            try {
                                data[0].active = true;
                                data[0].code = Math.random() * 1000000000000000000000 * Math.random()
                                data[0].password = user.password;
                                await UserAPI.edit(data[0]);
                                props.setUserLogin(data[0]);
                                authenticate(accessToken);
                                openAlert('Kích hoạt thành công')
                            } catch (error) {
                                openAlert('Kích hoạt thất bại')
                            }
                        }
                        else {
                            openAlert('Mã kích hoạt không chính xác')
                        }
                    }
                } else if (data[0].active && data[0].email !== '' && data[0].password !== '') {
                    props.setUserLogin(data[0])
                    authenticate(accessToken);
                }
            }
        } catch (error) {
            openAlert('Email hoặc mật khẩu không chính xác!');
        }
    }

    useEffect(() => {
        let chuyenHuongLogin = async () => {
            if (!props.userLogin.active) {
                let getCode = window.prompt('Nhập mã kích hoạt tài khoản');
                if (getCode !== null) {
                    if (Number(getCode) === props.userLogin.code) {
                        try {
                            let { data } = await UserAPI.getById(props.userLogin.id);
                            data.active = true;
                            data.code = Math.random() * 1000000000000000000000 * Math.random()
                            await UserAPI.edit(data);
                            props.setUserLogin(data);
                            openAlert('Kích hoạt thành công')
                        } catch (error) {
                            openAlert('Kích hoạt thất bại')
                        }
                    }
                    else {
                        openAlert('Mã kích hoạt không chính xác')
                    }
                }
            } else if (props.userLogin.status !== '0' && props.userLogin.status !== '') {
                if (props.userLogin.code !== 0) {
                    // props.userLogin.code = Math.random() * 1000000000000000000000 * Math.random()
                    try {
                        // await UserAPI.edit(props.userLogin);
                        if (props.userLogin.role === '0') {
                            history.push('/')
                        } else if (props.userLogin.role !== '0') {
                            history.push('/admin')
                        }
                    } catch (error) {

                    }
                }
            } else if (props.userLogin.id !== '-1' && props.userLogin.status === '0') {
                openAlert('Tài khoản của bạn đã bị khoá')
            }
        }
        chuyenHuongLogin()
    }, [props.userLogin])

    return (
        <>
            <Login onLogin={onLogin} />
        </>
    )
}

export default PageLogin
