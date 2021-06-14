import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom'
import { openAlert } from '../../../../controller/BillAPI';
import ProductAPI from '../../../../controller/ProductAPI';

const EditProduct = ({ onEditProduct, listBrandProduct, listTypeProduct, listColor, listSize }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [addSize, setAddSize] = useState([...Array(0).keys()]);

    const [addLink, setAddLink] = useState([...Array(0).keys()])

    const [addColor, setAddColor] = useState([...Array(1).keys()])

    const [product, setProduct] = useState({
        id: "",
        name: "",
        type: 1,
        brand: 1,
        images: [],
        properties: [
            {
                idColor: '',
                size: []
            }
        ]
    })

    let { id } = useParams();

    useEffect(() => {
        let getOneProduct = async () => {
            let { data } = await ProductAPI.getById(id);
            reset(data)
            setProduct(data);
        }
        getOneProduct();
    }, [])

    useEffect(() => {
        setAddColor([...Array(product.properties.length).keys()])
        let getSize = product.properties.map(e => (
            e.size.map(s => s)
        ))
        setAddSize([...Array(getSize.length).keys()])
    }, [product])

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


    const onChange = () => {
        let getTheSubmit = document.getElementById('editProduct');
        if (getTheSubmit.innerHTML === 'Lưu lại') {
            let getAddLink = document.getElementById('addLink');
            getAddLink.remove();
            getTheSubmit.innerHTML = 'Xác nhận';
        }
    }

    const onSubmitEdit = (data) => {
        console.log(data);
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
                            if (data.price00 != null && data.price00 !== 'undefined' && data.price00 !== '' && data.quantity00 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size00),
                                    price: Number(data.price00),
                                    quantity: Number(data.quantity00)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 1) {
                            if (data.price01 != null && data.price01 !== 'undefined' && data.price01 !== '' && data.quantity01 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size01),
                                    price: Number(data.price01),
                                    quantity: Number(data.quantity01)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 2) {
                            if (data.price02 != null && data.price02 !== 'undefined' && data.price02 !== '' && data.quantity02 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size02),
                                    price: Number(data.price02),
                                    quantity: Number(data.quantity02)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 3) {
                            if (data.price03 != null && data.price03 !== 'undefined' && data.price03 !== '' && data.quantity03 !== '') {
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
                            if (data.price10 != null && data.price10 !== 'undefined' && data.price10 !== '' && data.quantity10 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size10),
                                    price: Number(data.price10),
                                    quantity: Number(data.quantity10)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 1) {
                            if (data.price11 != null && data.price11 !== 'undefined' && data.price11 !== '' && data.quantity11 !== '') {
                                console.log('à');
                                let newDataSize = {
                                    idSize: Number(data.size11),
                                    price: Number(data.price11),
                                    quantity: Number(data.quantity11)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 2) {
                            if (data.price12 != null && data.price12 !== 'undefined' && data.price12 !== '' && data.quantity12 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size12),
                                    price: Number(data.price12),
                                    quantity: Number(data.quantity12)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 3) {
                            if (data.price13 != null && data.price13 !== 'undefined' && data.price13 !== '' && data.quantity13 !== '') {
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
                            if (data.price20 != null && data.price20 !== 'undefined' && data.price20 !== '' && data.quantity20 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size20),
                                    price: Number(data.price20),
                                    quantity: Number(data.quantity20)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 1) {
                            if (data.price21 != null && data.price21 !== 'undefined' && data.price21 !== '' && data.quantity21 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size21),
                                    price: Number(data.price21),
                                    quantity: Number(data.quantity21)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 2) {
                            if (data.price22 != null && data.price22 !== 'undefined' && data.price22 !== '' && data.quantity22 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size22),
                                    price: Number(data.price22),
                                    quantity: Number(data.quantity22)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 3) {
                            if (data.price23 != null && data.price23 !== 'undefined' && data.price23 !== '' && data.quantity23 !== '') {
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
                            if (data.price30 != null && data.price30 !== 'undefined' && data.price30 !== '' && data.quantity30 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size30),
                                    price: Number(data.price30),
                                    quantity: Number(data.quantity30)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 1) {
                            if (data.price31 != null && data.price31 !== 'undefined' && data.price31 !== '' && data.quantity31 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size31),
                                    price: Number(data.price31),
                                    quantity: Number(data.quantity31)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 2) {
                            if (data.price32 != null && data.price32 !== 'undefined' && data.price32 !== '' && data.quantity32 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size32),
                                    price: Number(data.price32),
                                    quantity: Number(data.quantity32)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 3) {
                            if (data.price33 != null && data.price33 !== 'undefined' && data.price33 !== '' && data.quantity33 !== '') {
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
                            if (data.price40 != null && data.price40 !== 'undefined' && data.price40 !== '' && data.quantity40 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size40),
                                    price: Number(data.price40),
                                    quantity: Number(data.quantity40)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 1) {
                            if (data.price41 != null && data.price41 !== 'undefined' && data.price41 !== '' && data.quantity41 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size41),
                                    price: Number(data.price41),
                                    quantity: Number(data.quantity41)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 2) {
                            if (data.price42 != null && data.price42 !== 'undefined' && data.price42 !== '' && data.quantity42 !== '') {
                                let newDataSize = {
                                    idSize: Number(data.size42),
                                    price: Number(data.price42),
                                    quantity: Number(data.quantity42)
                                }
                                newSize = [...newSize, newDataSize]
                            }
                        }
                        if (j === 3) {
                            if (data.price43 != null && data.price43 !== 'undefined' && data.price43 !== '' && data.quantity43 !== '') {
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
            let newProduct = {
                id: id,
                name: data.name,
                type: Number(data.type),
                brand: Number(data.brand),
                images: newImg,
                properties: newColor
            }
            console.log(newProduct);
            onEditProduct(newProduct);
        }
    }

    return (
        <>
            <div className='card-title'>
                <Link to='/admin/product' className='btn btn-info float-start'>Quay lại</Link>
            </div>
            <div className='card-header'>Sửa sản phẩm</div>
            <form onSubmit={handleSubmit(onSubmitEdit)} className='container' >
                <div className='py-4 row'>
                    <label className='py-2 col-md-6 col-lg-4'>Tên sản phẩm</label>
                    <div className="py-2 col-8">
                        <input type="text" defaultValue={product.name} className="form-control" placeholder="Tên sản phẩm"
                            aria-label="Tên sản phẩm" aria-describedby="addon-wrapping"
                            {...register('name', {
                                required: "Vui lòng nhập tên sản phẩm",
                                pattern: {
                                    value: /^(([a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýs ]+))$/,
                                    message: "Tên sản phẩm không được chứa các ký tự đặc biệt"
                                },
                                maxLength: { value: 100, message: "Tên sản phẩm nhỏ hơn 100 ký tự" }
                            })} />
                        {errors.name && <div className="alert alert-warning">{errors.name.message}</div>}
                    </div>
                    <label className='py-2 col-md-6 col-lg-4'>Loại sản phẩm</label>
                    <div className="py-2 col-8">
                        <select className="form-select" aria-label="Default select example"
                            {...register('type')}>
                            {
                                listTypeProduct.map((typeProduct, index) => (
                                    typeProduct.name === product.type
                                        ? <option key={index} value={typeProduct.id}
                                            selected>{typeProduct.name}</option>
                                        : <option key={index} value={typeProduct.id}>{typeProduct.name}</option>
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
                                    brand.name === product.brand
                                        ? <option key={index} value={brand.id} selected>{brand.name}</option>
                                        : <option key={index} value={brand.id}>{brand.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <label className='py-2 col-2'>Link ảnh</label>
                    <div className='py-2 col-2'>
                        <button onClick={onAddLink} id='addLink' className='float-end btn btn-secondary'>Add Link</button>
                    </div>
                    <div className="py-2 col-8">
                        <div className='row'>
                            <div className='col-12'>
                                <input type="text" className="form-control" placeholder="Link ảnh"
                                    aria-label="Link ảnh" aria-describedby="addon-wrapping"
                                    {...register("img", {
                                        required: "Vui lòng nhập link ảnh",
                                        pattern: {
                                            value: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
                                            message: "Link ảnh không đúng định dạng"
                                        }
                                    })} />
                            </div>
                            {
                                addLink.map((l, index) => (
                                    <div key={index} className='col-12'>
                                        <input type="text" className="form-control" placeholder={`Link ảnh ${l + 1}`}
                                            aria-label={`Link ảnh ${l + 1}`} aria-describedby="addon-wrapping"
                                            {...register(`img${l}`)} />
                                    </div>
                                ))
                            }
                        </div>
                        {errors.img && <div className="alert alert-warning">{errors.img.message}</div>}
                    </div>
                    <label className='py-2 col-4'>Thuộc tính</label>
                    <div className="py-2 col-8">
                        <div className='row'>
                            {
                                product.properties.map((e, index) => (
                                    <>
                                        <h6 key={index} className='card-title mt-3 text-info'>Màu sản phẩm {index + 1}</h6>
                                        <div className='col-12'>
                                            <select className="form-select" aria-label="Default select example"
                                                {...register(`color${index}`)}>
                                                {
                                                    listColor.map((color, i) => (
                                                        color.id === e.idColor
                                                            ? <option style={{ color: color.value }} value={color.id} selected>{color.value}</option>
                                                            : <option style={{ color: color.value }} value={color.id}>{color.value}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        {/* add size */}
                                        {
                                            e.size.map((s, i) => (
                                                <>
                                                    <div className='col-2'>
                                                        <select className="form-select" aria-label="Default select example"
                                                            {...register(`size${index}${i}`)}>
                                                            {
                                                                listSize.map((size) => (
                                                                    size.id === s.idSize
                                                                        ? <option value={size.id} selected>{size.value}</option>
                                                                        : <option value={size.id}>{size.value}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className='col-2'>
                                                        <input type="number" defaultValue={s.quantity} min='1' max='10000' className="form-control" placeholder={`Số lượng ${index + 1}`} Ư
                                                            aria-label="Số lượng" aria-describedby="addon-wrapping"
                                                            {...register(`quantity${index}${i}`)} />
                                                    </div>
                                                    <div className='col-2'>
                                                        <input type="number" defaultValue={s.price} min='1000' className="form-control" placeholder={`Giá sản phẩm ${index + 1}`} Ư
                                                            aria-label="Giá sản phẩm" aria-describedby="addon-wrapping"
                                                            {...register(`price${index}${i}`)} />
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
            <div className='card-header'>Thông tin:</div>
            <form className='container'>
                <div className='row'>
                    <label className='py-2 col-md-6 col-lg-4'>Link ảnh cũ</label>
                    <div className="py-2 col-8">
                        <div className='row'>
                            {
                                product.images.map((i, index) => (
                                    <div key={index} className='col-10'>
                                        <input type="text" defaultValue={i} className="form-control"
                                            placeholder="Link ảnh"
                                            aria-label="Link ảnh" aria-describedby="addon-wrapping" disabled />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default EditProduct
