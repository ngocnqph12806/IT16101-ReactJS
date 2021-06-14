import React from 'react'
import UserAPI from './../../../controller/UserAPI'
import Register from './../../../view/admin/component/user/register'
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from 'react-router'
import { openAlert } from './../../../controller/BillAPI'
import emailjs from 'emailjs-com'

const PageRegister = () => {

    let history = useHistory();

    const onRegister = async (user) => {
        try {
            let { data } = await UserAPI.getByEmail(user.email);
            if (data.length === 0) {
                let id = uuidv4();
                let code = Math.floor(Math.random() * 1000000)
                let sending = {
                    to_name: `${user.fullname}`,
                    from_name: 'Chúc mừng bạn đã đăng ký thành công tài khoản trên PolyMart',
                    message: `Mã kích hoạt tài khoản: ${code}`,
                    nguoi_nhan: `${user.email}`,
                    reply_to: `ngocnqph12306@fpt.edu.vn`
                }
                let newUser = { id: id, ...user, role: "0", status: "1", code: code, active: false }
                emailjs.send('service_r9g212j', 'template_257cfl6', sending, 'user_gReQDEB3O4gmLJrvDmNR7')
                    .then(async (result) => {
                        openAlert('Mã kích hoạt đã gửi tới email đăng ký');
                        let getCode = window.prompt('Nhập mã kích hoạt đã gửi tới địa chỉ email:');
                        if (getCode !== null) {
                            if (Number(getCode) === code) {
                                openAlert('Kích hoạt thành công')
                                newUser.active = true;
                                newUser.code = Math.random() * 1000000000000000000000 * Math.random()
                            } else {
                                openAlert('Mã kích hoạt không chính xác');
                            }
                        }
                        await UserAPI.register(newUser);
                        history.push('/login')
                    }, (error) => {
                        openAlert('Đăng ký thất bại')
                    });
            } else {
                openAlert('Email đã đăng ký')
            }
        } catch (error) {

        }
    }

    return (
        <>
            <Register onRegister={onRegister} />
        </>
    )
}

export default PageRegister
