import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom'
import { openAlert } from '../../../../controller/BillAPI';
import UserAPI from '../../../../controller/UserAPI';

const ResetPassword = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [getUser, setGetUser] = useState({})

    let { id, code } = useParams();

    let history = useHistory()

    useEffect(async () => {
        try {
            let { data } = await UserAPI.getById(id);
            if (data.id === id && data.code === Number(code)) {
                setGetUser({ ...data })
            } else {
                history.push('/login')
            }
        } catch (error) {

        }
    }, [id])

    const onSubmitResetPassword = async (data) => {
        if (data.newpassword === data.confirmnewpassword) {
            getUser.password = data.newpassword;
            getUser.code = Math.random() * 1000000000000000000000 * Math.random()
            try {
                await UserAPI.edit(getUser);
                openAlert('Reset password thành công');
            } catch (error) {
                openAlert('Reset password thất bại');
            }
            history.push('/login')
        } else {
            openAlert('Mật khẩu không khớp')
        }
    }

    return (
        <>
            <div id='account'>
                <div id='resetpassword'>
                    <div className="modal fade show" style={{ display: 'block' }} id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1} role='dialog'>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalToggleLabel">Reset pasword</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit(onSubmitResetPassword)}>
                                        <div className='row'>
                                            <div className='col-3'>
                                                <label>Mật khẩu mới:</label>
                                            </div>
                                            <div className='col-9'>
                                                <div className="input-group mb-3">
                                                    <input type="password" className="form-control" name='newpassword' placeholder='Mật khẩu mới'
                                                        {...register('newpassword', {
                                                            required: "Vui lòng nhập mật khẩu",
                                                            minLength: { value: 8, message: "Mật khẩu phải có tối thiểu 8 ký tự." }
                                                        })} />
                                                </div>
                                                {errors.newpassword && openAlert(errors.newpassword.message)}
                                            </div>
                                            <div className='col-3'>
                                                <label>Xác nhận mật khẩu mới:</label>
                                            </div>
                                            <div className='col-9'>
                                                <div className="input-group mb-3">
                                                    <input type="password" className="form-control" name='confirmnewpassword' placeholder='Xác nhận mật khẩu mới'
                                                        {...register('confirmnewpassword', {
                                                            required: "Vui lòng nhập mật khẩu",
                                                            minLength: { value: 8, message: "Mật khẩu phải có tối thiểu 8 ký tự." }
                                                        })} />
                                                </div>
                                                {errors.confirmnewpassword && openAlert(errors.confirmnewpassword.message)}
                                            </div>
                                        </div>
                                        <button className="btn btn-success float-end">Change</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword
