import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router'

const Register = ({ onRegister }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    let history = useHistory();

    const onLogin = () => {
        history.push('/login')
    }

    const onSubmitRegister = (data) => {
        onRegister(data);
    }

    const onForgotPassword = () => {
        history.push('/forgot')
    }

    return (
        <>
            <div id='account'>
                <div className="modal fade show" style={{ display: 'block' }} id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1} role='dialog'>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel">Register</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit(onSubmitRegister)}>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <label>Họ và tên:</label>
                                        </div>
                                        <div className='col-9'>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" name='name' placeholder='Họ và tên'
                                                    {...register('fullname', {
                                                        required: "Vui lòng nhập tên người dùng",
                                                        pattern: {
                                                            value: /^(([a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýs ]+))$/,
                                                            message: "Tên người dùng không được chứa các ký tự đặc biệt"
                                                        },
                                                        maxLength: { value: 50, message: "Tên người dùng nhỏ hơn 50 ký tự" }
                                                    })} />
                                            </div>
                                            {errors.fullname && <div className="alert alert-warning">{errors.fullname.message}</div>}
                                        </div>
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
                                            <label>Số điện thoại:</label>
                                        </div>
                                        <div className='col-9'>
                                            <div className="input-group mb-3">
                                                <input type="number" className="form-control" name='phone' placeholder='Số điện thoại'
                                                    {...register('phone', {
                                                        required: "Vui lòng nhập số điện thoại",
                                                        pattern: {
                                                            value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                                                            message: "Số điện thoại không đúng định dạng"
                                                        }
                                                    })} />
                                            </div>
                                            {errors.phone && <div className="alert alert-warning">{errors.phone.message}</div>}
                                        </div>
                                        <div className='col-3'>
                                            <label>Địa chỉ:</label>
                                        </div>
                                        <div className='col-9'>
                                            <div className="input-group mb-3">
                                                <input type="address" className="form-control" name='address' placeholder='Địa chỉ'
                                                    {...register('address', {
                                                        required: "Vui lòng nhập Địa chỉ"
                                                    })} />
                                            </div>
                                            {errors.address && <div className="alert alert-warning">{errors.address.message}</div>}
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
                                        <div className='col-3'>
                                            <label>Ngày sinh:</label>
                                        </div>
                                        <div className='col-9'>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" name='birthday' placeholder='Ngày sinh dd/mm/yyyy'
                                                    {...register('birthday', {
                                                        required: "Vui lòng nhập ngày sinh",
                                                        pattern: {
                                                            value: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
                                                            message: "Ngày sinh không đúng định dạng dd/mm/yyyy"
                                                        }
                                                    })} />
                                            </div>
                                            {errors.birthday && <div className="alert alert-warning">{errors.birthday.message}</div>}
                                        </div>
                                        <div className='col-3'>
                                            <label>Link Avatar:</label>
                                        </div>
                                        <div className='col-9'>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" name='avartar' placeholder='Link ảnh Avatar'
                                                    {...register("avatar", {
                                                        required: "Vui lòng nhập link ảnh",
                                                        pattern: {
                                                            value: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
                                                            message: "Link ảnh không đúng định dạng"
                                                        }
                                                    })} />
                                            </div>
                                            {errors.avatar && <div className="alert alert-warning">{errors.avatar.message}</div>}
                                        </div>
                                    </div>
                                    <button className="btn btn-primary float-end">Register</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button onClick={onLogin} className="btn btn-success">Login</button>
                                <button onClick={onForgotPassword} className="btn btn-dark mx-2">Forgot Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
