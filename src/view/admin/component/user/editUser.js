import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import UserAPI from '../../../../controller/UserAPI';

const EditUser = ({ onEditUser }) => {

    const [user, setUser] = useState({})

    const { handleSubmit, register, formState: { errors }, reset } = useForm();

    let { id } = useParams();

    useEffect(() => {
        let getOneUser = async () => {
            try {
                let { data } = await UserAPI.getById(id);
                reset(data)
                setUser(data);
            } catch (error) {

            }
        }
        getOneUser();
    }, [])

    const onSubmitEdit = (data) => {
        onEditUser({ id: id, password: user.password, role: user.role, status: user.status, ...data });
    }

    return (
        <>
            <div className='card-title'>
                <Link to='/admin/user' className='btn btn-info float-start'>Quay lại</Link>
            </div>
            <div className='card-header'>Sửa thông tin người dùng</div>
            <form onSubmit={handleSubmit(onSubmitEdit)} className='container' >
                <div className='py-4 row'>
                    <label className='py-2 col-md-6 col-lg-4'>Tên người dùng</label>
                    <div className="py-2 col-8">
                        <input type="text" defaultValue={user.fullname} className="form-control" placeholder="Tên người dùng"
                            aria-label="Tên người dùng" aria-describedby="addon-wrapping"
                            {...register('fullname', {
                                required: "Vui lòng nhập tên người dùng",
                                pattern: {
                                    value: /^(([a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýs ]+))$/,
                                    message: "Tên người dùng không được chứa các ký tự đặc biệt"
                                },
                                maxLength: { value: 50, message: "Tên người dùng nhỏ hơn 50 ký tự" }
                            })} />
                        {errors.fullname && <div className="alert alert-warning">{errors.fullname.message}</div>}
                    </div>
                    <label className='py-2 col-md-6 col-lg-4'>Chức vụ</label>
                    <div className="py-2 col-8">
                        <select className="form-select" aria-label="Default select example"
                            {...register('role')}>
                            <option value='0' selected>Người dùng</option>
                            <option value='1'>Admin</option>
                        </select>
                    </div>
                    <label className='py-2 col-md-6 col-lg-4'>Email</label>
                    <div className="py-2 col-8">
                        <input type="email" defaultValue={user.email} className="form-control" placeholder="Email"
                            aria-label="Email" aria-describedby="addon-wrapping"
                            {...register('email', {
                                required: "Vui lòng nhập Email",
                                maxLength: { value: 100, message: "Email không quá 100 ký tự" },
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Email không đúng định dạng"
                                }
                            })}
                        />
                        {errors.email && <div className="alert alert-warning">{errors.email.message}</div>}
                    </div>
                    <label className='py-2 col-md-6 col-lg-4'>Ngày sinh</label>
                    <div className="py-2 col-8">
                        <input type="text" defaultValue={user.birthday} className="form-control" placeholder="Ngày sinh"
                            aria-label="Ngày sinh" aria-describedby="addon-wrapping"
                            {...register('birthday', {
                                required: "Vui lòng nhập ngày sinh",
                                pattern: {
                                    value: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
                                    message: "Ngày sinh không đúng định dạng dd/mm/yyyy"
                                }
                            })} />
                        {errors.birthday && <div className="alert alert-warning">{errors.birthday.message}</div>}
                    </div>
                    <label className='py-2 col-md-6 col-lg-4'>Link ảnh Avatar</label>
                    <div className="py-2 col-8">
                        <input type="text" defaultValue={user.avatar} className="form-control" placeholder="Link ảnh"
                            aria-label="Link ảnh" aria-describedby="addon-wrapping"
                            {...register("avatar", {
                                required: "Vui lòng nhập link ảnh",
                                pattern: {
                                    value: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
                                    message: "Link ảnh không đúng định dạng"
                                }
                            })} />
                        {errors.avatar && <div className="alert alert-warning">{errors.avatar.message}</div>}
                    </div>
                </div>
                <button type='submit' className='btn btn-success float-end'>Lưu lại</button>
            </form>
        </>
    )
}

export default EditUser
