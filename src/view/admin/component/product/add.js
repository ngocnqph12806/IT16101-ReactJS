import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { openAlert } from '../../../../controller/BillAPI';

const AddProduct = ({ onAddProduct, listBrandProduct, listTypeProduct, listSize, listColor }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [addSize, setAddSize] = useState([...Array(4).keys()]);

    const [addLink, setAddLink] = useState([...Array(0).keys()])

    const [addColor, setAddColor] = useState([...Array(1).keys()])

    const onAddSize = () => {
        if (addSize.length < 4) {
            let size = addSize.length + 1;
            setAddSize([...Array(size).keys()])
        } else {
            openAlert('Chỉ được phép thêm tối đa 4 size.')
        }
    }

    const onAddLink = () => {
        if (addLink.length < 3) {
            let size = addLink.length + 1;
            setAddLink([...Array(size).keys()])
        } else {
            openAlert('Chỉ được phép thêm tối đa 3 link ảnh.')
        }
    }

    const onClickAddColor = () => {
        if (addColor.length < 5) {
            let sttColor = addColor.length + 1;
            setAddColor([...Array(sttColor).keys()])
        } else {
            openAlert('Chỉ được phép thêm tối đa 5 màu.')
        }
    }

    const onChange = () => {
        let getTheSubmit = document.getElementById('editProduct');
        if (getTheSubmit.innerHTML === 'Lưu lại') {
            let getAddColor = document.getElementById('addColor')
            let getAddLink = document.getElementById('addLink')
            getAddColor.remove()
            getAddLink.remove()
            getTheSubmit.innerHTML = 'Xác nhận';
        }
    }

    const onSubmitAdd = (data) => {
        let getTheSubmit = document.getElementById('editProduct');
        if (getTheSubmit.innerHTML === 'Xác nhận') {
            let newImg = [data.img];
            for (let i = 0; i < addLink.length; i++) {
                if (i === 0 && data.img0 !== '') {
                    newImg = [...newImg, data.img0]
                }
                if (i === 1 && data.img1 !== '') {
                    newImg = [...newImg, data.img1]
                }
                if (i === 2 && data.img2 !== '') {
                    newImg = [...newImg, data.img2]
                }
                if (i === 3 && data.img3 !== '') {
                    newImg = [...newImg, data.img3]
                }
            }
            let newColor = [];
            for (let i = 0; i < addColor.length; i++) {
                if (i === 0) {
                    let newSize = [];
                    for (let j = 0; j < addSize.length; j++) {
                        if (j === 0) {
                            if (data.price00 !== '' && data.quantity00 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size00),
                                    price: Number(data.price00),
                                    quantity: Number(data.quantity00)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 1) {
                            if (data.price01 !== '' && data.quantity01 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size01),
                                    price: Number(data.price01),
                                    quantity: Number(data.quantity01)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 2) {
                            if (data.price02 !== '' && data.quantity02 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size02),
                                    price: Number(data.price02),
                                    quantity: Number(data.quantity02)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 3) {
                            if (data.price03 !== '' && data.quantity03 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size03),
                                    price: Number(data.price03),
                                    quantity: Number(data.quantity03)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                    }
                    if (newSize.length > 0) {
                        let newDataColor = {
                            idColor: Number(data.color0),
                            size: newSize
                        }
                        newColor = [...newColor, newDataColor]
                    }
                }
                if (i === 1) {
                    let newSize = [];
                    for (let j = 0; j < addSize.length; j++) {
                        if (j === 0) {
                            if (data.price10 !== '' && data.quantity10 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size10),
                                    price: Number(data.price10),
                                    quantity: Number(data.quantity10)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 1) {
                            if (data.price11 !== '' && data.quantity11 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size11),
                                    price: Number(data.price11),
                                    quantity: Number(data.quantity11)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 2) {
                            if (data.price12 !== '' && data.quantity12 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size12),
                                    price: Number(data.price12),
                                    quantity: Number(data.quantity12)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 3) {
                            if (data.price13 !== '' && data.quantity13 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size13),
                                    price: Number(data.price13),
                                    quantity: Number(data.quantity13)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                    }
                    if (newSize.length > 0) {
                        let newDataColor = {
                            idColor: Number(data.color1),
                            size: newSize
                        }
                        newColor = [...newColor, newDataColor]
                    }
                }
                if (i === 2) {
                    let newSize = [];
                    for (let j = 0; j < addSize.length; j++) {
                        if (j === 0) {
                            if (data.price20 !== '' && data.quantity20 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size20),
                                    price: Number(data.price20),
                                    quantity: Number(data.quantity20)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 1) {
                            if (data.price21 !== '' && data.quantity21 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size21),
                                    price: Number(data.price21),
                                    quantity: Number(data.quantity21)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 2) {
                            if (data.price22 !== '' && data.quantity22 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size22),
                                    price: Number(data.price22),
                                    quantity: Number(data.quantity22)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 3) {
                            if (data.price23 !== '' && data.quantity23 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size23),
                                    price: Number(data.price23),
                                    quantity: Number(data.quantity23)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                    }
                    if (newSize.length > 0) {
                        let newDataColor = {
                            idColor: Number(data.color2),
                            size: newSize
                        }
                        newColor = [...newColor, newDataColor]
                    }
                }
                if (i === 3) {
                    let newSize = [];
                    for (let j = 0; j < addSize.length; j++) {
                        if (j === 0) {
                            if (data.price30 !== '' && data.quantity30 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size30),
                                    price: Number(data.price30),
                                    quantity: Number(data.quantity30)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 1) {
                            if (data.price31 !== '' && data.quantity31 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size31),
                                    price: Number(data.price31),
                                    quantity: Number(data.quantity31)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 2) {
                            if (data.price32 !== '' && data.quantity32 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size32),
                                    price: Number(data.price32),
                                    quantity: Number(data.quantity32)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 3) {
                            if (data.price33 !== '' && data.quantity33 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size33),
                                    price: Number(data.price33),
                                    quantity: Number(data.quantity33)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                    }
                    if (newSize.length > 0) {
                        let newDataColor = {
                            idColor: Number(data.color3),
                            size: newSize
                        }
                        newColor = [...newColor, newDataColor]
                    }
                }
                if (i === 4) {
                    let newSize = [];
                    for (let j = 0; j < addSize.length; j++) {
                        if (j === 0) {
                            if (data.price40 !== '' && data.quantity40 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size40),
                                    price: Number(data.price40),
                                    quantity: Number(data.quantity40)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 1) {
                            if (data.price41 !== '' && data.quantity41 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size41),
                                    price: Number(data.price41),
                                    quantity: Number(data.quantity41)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 2) {
                            if (data.price42 !== '' && data.quantity42 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size42),
                                    price: Number(data.price42),
                                    quantity: Number(data.quantity42)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 3) {
                            if (data.price43 !== '' && data.quantity43 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size43),
                                    price: Number(data.price43),
                                    quantity: Number(data.quantity43)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                    }
                    if (newSize.length > 0) {
                        let newDataColor = {
                            idColor: Number(data.color4),
                            size: newSize
                        }
                        newColor = [...newColor, newDataColor]
                    }
                }
            }
            let id = uuidv4();
            let newProduct = {
                id: id,
                name: data.name,
                type: Number(data.type),
                brand: Number(data.brand),
                images: newImg,
                properties: newColor
            }
            onAddProduct(newProduct);
        }
    }

    return (
        <>
            <div className='card-title'>
                <Link to='/admin/product' className='btn btn-info float-start'>Quay lại</Link>
            </div>
            <div className='card-header'>Thêm sản phẩm</div>
            <form onSubmit={handleSubmit(onSubmitAdd)} >
                <div className='py-4 row'>
                    <label className='py-2 col-md-6 col-lg-4'>Tên sản phẩm</label>
                    <div className="py-2 col-8">
                        <input type="text" className="form-control" placeholder="Tên sản phẩm"
                            aria-label="Tên sản phẩm" aria-describedby="addon-wrapping"
                            {...register('name', {
                                required: "Vui lòng nhập tên sản phẩm",
                                pattern: {
                                    value: /^(([a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýs ]+))$/,
                                    message: "Tên sản phẩm không được chứa các ký tự đặc biệt"
                                },
                                maxLength: { value: 100, message: "Tên sản phẩm nhỏ hơn 100 ký tự" },
                                minLength: { value: 10, message: "Tên sản phẩm tối thiểu 10 ký tự" }
                            })} />
                        {errors.name && <div className="alert alert-warning">{errors.name.message}</div>}
                    </div>
                    <label className='py-2 col-md-6 col-lg-4'>Loại sản phẩm</label>
                    <div className="py-2 col-8">
                        <select className="form-select" aria-label="Default select example"
                            {...register('type')}>
                            {
                                listTypeProduct.map((typeProduct, index) => (
                                    <option key={index} value={typeProduct.id}>{typeProduct.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <label className='py-2 col-md-6 col-lg-4'>Thương hiệu</label>
                    <div className="py-2 col-8">
                        <select className="form-select" aria-label="Default select example"
                            {...register('brand')}>
                            {
                                listBrandProduct.map((brand, index) => (
                                    <option key={index} value={brand.id}>{brand.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <label className='py-2 col-2'>Link ảnh</label>
                    <div className='col-2'>
                        <button onClick={onAddLink} id='addLink' className='float-end btn btn-secondary'>Add Link</button>
                    </div>
                    <div className="py-2 col-8">
                        <input type="text" className="form-control" placeholder="Link ảnh"
                            aria-label="Link ảnh" aria-describedby="addon-wrapping"
                            {...register("img", {
                                required: "Vui lòng nhập link ảnh",
                                pattern: {
                                    value: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
                                    message: "Link ảnh không đúng định dạng"
                                }
                            })} />
                        {
                            addLink.map((l, index) => (
                                <input type="text" className="form-control" placeholder={`Link ảnh ${l + 1}`}
                                    aria-label={`Link ảnh ${l + 1}`} aria-describedby="addon-wrapping"
                                    {...register(`img${l}`)} />
                            ))
                        }
                        {errors.img && <div className="alert alert-warning">{errors.img.message}</div>}
                    </div>
                    <label className='py-2 col-2'>Thuộc tính</label>
                    <div className='col-2'>
                        <button onClick={onClickAddColor} id='addColor' className='btn btn-secondary'>Add color</button>
                    </div>
                    <div className="py-2 col-8">
                        <div className='row'>
                            {
                                addColor.map(stt => (
                                    <>
                                        <h6 className='card-title mt-3 text-info'>Màu sản phẩm {stt + 1}</h6>
                                        <div className='col-12'>
                                            <select className="form-select" aria-label="Default select example"
                                                {...register(`color${stt}`)}>
                                                {
                                                    listColor.map((color, index) => (
                                                        <option key={index} style={{ color: color.value }} value={color.id}>{color.value}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        {/* add size */}
                                        {
                                            addSize.map((s, index) => (
                                                <>
                                                    <div className='col-2'>
                                                        <select className="form-select" aria-label="Default select example"
                                                            {...register(`size${stt}${s}`)}>
                                                            {
                                                                listSize.map((size, index) => (
                                                                    <option key={index} value={size.id}>{size.value}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className='col-2'>
                                                        <input type="number" min='1' max='10000' className="form-control" placeholder={`Số lượng ${index + 1}`} Ư
                                                            aria-label="Số lượng" aria-describedby="addon-wrapping"
                                                            {...register(`quantity${stt}${s}`)} />
                                                    </div>
                                                    <div className='col-2'>
                                                        <input type="number" min='1000' className="form-control" placeholder={`Giá sản phẩm ${index + 1}`} Ư
                                                            aria-label="Giá sản phẩm" aria-describedby="addon-wrapping"
                                                            {...register(`price${stt}${s}`)} />
                                                    </div>
                                                </>
                                            ))
                                        }
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <button id='editProduct' onClick={onChange} type='submit' className='btn btn-success float-end'>Lưu lại</button>
            </form>
        </>
    )
}

export default AddProduct
