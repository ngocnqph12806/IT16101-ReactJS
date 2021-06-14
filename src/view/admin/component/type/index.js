import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { openAlert } from '../../../../controller/BillAPI';

const TypeProductAdmin = ({ listTypeProduct, removeTypeProduct, addTypeProduct, editTypeProduct, listProduct }) => {

    const [showForm, setShowForm] = useState()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmitAddTypeProduct = (data) => {
        data.name = data.name.toUpperCase();
        addTypeProduct(data)
    }

    const onClickEditTypeProduct = (type) => {
        let key = window.prompt('Nhập tên loại sản phẩm thay thế:', type.name);
        if (key != null) {
            let pattern = /^(([a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýs -.,]+))$/
            if (key === '') {
                openAlert('Tên loại không được để trống!')
            } else if (key.match(pattern)) {
                let newData = { id: type.id, name: key }
                editTypeProduct(newData)
            } else {
                openAlert('Tên loại sản phẩm không đúng định dạng')
            }
        }
    }

    useEffect(() => {
        let setForm = () => (
            listTypeProduct.map((type, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{type.name}</td>
                    <td>
                        {
                            listProduct.filter(e => e.type === type.id).length
                        }
                    </td>
                    <td>
                        {
                            listProduct.filter(e => e.type === type.id).length > 0
                                ? null
                                : <button onClick={() => removeTypeProduct(type)} className='btn btn-danger'>Xoá</button>
                        }
                        <button onClick={() => onClickEditTypeProduct(type)} className='btn btn-info mx-2'>Sửa</button>
                    </td>
                </tr>
            ))
        )

        setShowForm(setForm)
    }, [listTypeProduct, listProduct])

    return (
        <>
            <div className='col-6'>
                <h3 className='card-header'>Danh sách loại sản phẩm</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Tên loại</td>
                            <td>Số lượng sản phẩm</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {showForm}
                    </tbody>
                </table>
                <h3 className='card-header'>Thêm loại sản phẩm</h3>
                <form onSubmit={handleSubmit(onSubmitAddTypeProduct)} className="d-flex py-4">
                    <label className='fs-4 col-3 mx-2'>Nhập loại mới: </label>
                    <input type="text" className="form-control" placeholder="Tên loại sản phẩm"
                        aria-label="Tên loại sản phẩm" aria-describedby="addon-wrapping"
                        {...register('name', {
                            required: "Vui lòng nhập tên loại sản phẩm",
                            pattern: {
                                value: /^(([a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýs ]+))$/,
                                message: "Tên loại sản phẩm không được chứa các ký tự đặc biệt"
                            },
                            maxLength: { value: 100, message: "Tên loại sản phẩm nhỏ hơn 100 ký tự" }
                        })} />
                    {errors.name && openAlert(errors.name.message)}
                    <input type="text" className="form-control" placeholder="Link ảnh"
                        aria-label="Link ảnh" aria-describedby="addon-wrapping"
                        {...register('img', {
                            required: "Vui lòng nhập link ảnh",
                            pattern: {
                                value: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
                                message: "Link ảnh không đúng định dạng"
                            }
                        })} />
                    {errors.img && openAlert(errors.img.message)}
                    <button className='btn btn-success mx-3'>Thêm</button>
                </form>
            </div>
        </>
    )
}

export default TypeProductAdmin
