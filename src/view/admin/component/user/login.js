import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'

const Login = ({ onLogin }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    let history = useHistory();

    const onRegister = () => {
        history.push('/register')
    }

    const onForgotPassword = () => {
        history.push('/forgot')
    }

    const onSubmitLogin = (data) => {
        onLogin(data);
    }

    return (
        <>
            <div id='account'>
                <div className="modal fade show" style={{ display: 'block' }} id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1} role='dialog'>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel">Forgot pasword</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit(onSubmitLogin)}>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <label>Email:</label>
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
                                            {errors.email && <div className="alert alert-warning">{errors.email.message}</div>}
                                        </div>
                                        <div className='col-3'>
                                            <label>Mật khẩu:</label>
                                        </div>
                                        <div className='col-9'>
                                            <div className="input-group mb-3">
                                                <input type="password" className="form-control" name='password' placeholder='Mật khẩu'
                                                    {...register('password', {
                                                        required: "Vui lòng nhập mật khẩu",
                                                        minLength: { value: 8, message: "Mật khẩu phải có tối thiểu 8 ký tự." }
                                                    })} />
                                            </div>
                                            {errors.password && <div className="alert alert-warning">{errors.password.message}</div>}
                                        </div>
                                    </div>
                                    <button className="btn btn-success float-end">Login</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button onClick={onRegister} className="btn btn-primary">Register</button>
                                <button onClick={onForgotPassword} className="btn btn-dark mx-2">Forgot Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
