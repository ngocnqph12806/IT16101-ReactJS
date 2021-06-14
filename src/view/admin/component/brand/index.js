import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { openAlert } from '../../../../controller/BillAPI'

const BrandProductAdmin = ({ listBrandProduct, removeBrandProduct, addBrandProduct, editBrandProduct, listProduct }) => {

    const [showForm, setShowForm] = useState()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmitAddBrandProduct = (data) => {
        let newData = { name: data.name }
        addBrandProduct(newData)
    }

    const onClickEditBrandProduct = (brand) => {
        let key = window.prompt('Nhập tên thương hiệu thay thế:', brand.name);
        if (key != null) {
            let pattern = /^(([a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýs -.,]+))$/
            if (key === '') {
                openAlert('Tên thương hiệu không được để trống!')
            } else if (key.match(pattern)) {
                let newData = { id: brand.id, name: key }
                editBrandProduct(newData)
            } else {
                openAlert('Tên thương hiệu không đúng định dạng')
            }
        }
    }

    useEffect(() => {
        let setForm = () => (
            listBrandProduct.map((brand, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{brand.name}</td>
                    <td>
                        {
                            listProduct.filter(e => e.brand === brand.id).length
                        }
                    </td>
                    <td>
                        {
                            listProduct.filter(e => e.brand === brand.id).length > 0
                                ? null
                                : <button onClick={() => removeBrandProduct(brand)} className='btn btn-danger'>Xoá</button>
                        }
                        <button onClick={() => onClickEditBrandProduct(brand)} className='btn btn-info mx-2'>Sửa</button>
                    </td>
                </tr>
            ))
        )
        setShowForm(setForm)
    }, [listBrandProduct, listProduct])

    return (
        <>
            <div className='col-6'>
                <h3 className='card-header'>Danh sách thương hiệu</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Tên thương hiệu</td>
                            <td>Số lượng sản phẩm</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {showForm}
                    </tbody>
                </table>
                <h3 className='card-header'>Thêm thương hiệu</h3>
                <form onSubmit={handleSubmit(onSubmitAddBrandProduct)} className="d-flex py-4">
                    <label className='fs-4 col-3 mx-2'>Nhập tên: </label>
                    <input type="text" className="form-control" placeholder="Tên thương hiệu"
                        aria-label="Tên thương hiệu" aria-describedby="addon-wrapping"
                        {...register('name', {
                            required: "Vui lòng nhập tên thương hiệu",
                            pattern: {
                                value: /^(([a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýs ]+))$/,
                                message: "Tên thương hiệu không được chứa các ký tự đặc biệt"
                            },
                            maxLength: { value: 100, message: "Tên thương hiệu nhỏ hơn 100 ký tự" }
                        })} />
                    {errors.name && openAlert(errors.name.message)}
                    <button className='btn btn-success mx-3'>Thêm</button>
                </form>
            </div>
        </>
    )
}

export default BrandProductAdmin
