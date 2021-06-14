import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { openAlert } from '../../../../controller/BillAPI'
import emailjs from 'emailjs-com'
import UserAPI from '../../../../controller/UserAPI';

const ForgotPasswordAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    let history = useHistory();

    const onRegister = () => {
        history.push('/register')
    }

    const onSubmitSendEmailForgot = async (email) => {
        let { data } = await UserAPI.getByEmail(email.email);
        if (data.length > 0) {
            let sending = {
                to_name: `${data[0].fullname}`,
                from_name: 'Lấy lại mật khẩu tài khoản PolyMart',
                message: `<a href="http://localhost:3000/forgot/${data[0].id}$${data[0].code}">Reset password now</a>`,
                nguoi_nhan: `${data[0].email}`,
                reply_to: `ngocnqph12306@fpt.edu.vn`

            }
            emailjs.send('service_r9g212j', 'template_257cfl6', sending, 'user_gReQDEB3O4gmLJrvDmNR7')
                .then((result) => {
                    openAlert('Đã gửi email lấy lại mật khẩu')
                    history.push('/login')
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            openAlert('Email không tồn tại')
        }
    }

    const onSubmitLogin = () => {
        history.push('/login')
    }

    return (
        <>
            <div id='account'>
                <div className="modal fade show" style={{ display: 'block' }} id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1} role='dialog'>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel">Login</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit(onSubmitSendEmailForgot)}>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <label>Email đăng ký:</label>
                                        </div>
                                        <div className='col-9'>
                                            <div className="input-group mb-3">
                                                <input type="email" className="form-control" name='email' placeholder='Email'
                                                    {...register('email', {
                                                        required: "Vui lòng nhập Email",
                                                        maxLength: { value: 100, message: "Email không quá 100 ký tự" },
                                                        pattern: {
                                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                            message: "Email không đúng định dạng"
                                                        }
                                                    })} />
                                            </div>
                                            {errors.email && openAlert(errors.email.message)}
                                        </div>
                                    </div>
                                    <button className="btn btn-dark float-end">Send</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button onClick={onRegister} className="btn btn-primary">Register</button>
                                <button onClick={onSubmitLogin} className="btn btn-success mx-2">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPasswordAdmin
