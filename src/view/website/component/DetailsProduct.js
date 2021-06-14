import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid'
import { formatter, openAlert } from '../../../controller/BillAPI';
import { Link } from 'react-router-dom'

const DetailsProductWeb = ({ setListCart, listTypeProduct, listBrandProduct, listCart, product, listSize, listColor }) => {

    let history = useHistory();

    const [showForm, setShowForm] = useState()

    const [properties, setProperties] = useState([])

    const [priceProduct, setPriceProduct] = useState([{}])

    const [sizeProduct, setSizeProduct] = useState([])

    const [quantityProduct, setQuantityProduct] = useState([])

    const [colorProduct, setColorProduct] = useState([])

    const [propertiesFake, setPropertiesFake] = useState()

    useEffect(() => {
        if (product.id !== '') {
            let dataProperties = product.properties.map(e => e)
            setProperties(dataProperties)
            console.log(product);
            let dataColor = dataProperties.map(e => e.idColor)
            let newColor = dataColor.map(e => (
                listColor.filter(c => c.id === e)
            ))
            let newNameColor = []
            for (let i = 0; i < newColor.length; i++) {
                for (let j = 0; j < newColor[i].length; j++) {
                    newNameColor = [...newNameColor, newColor[i][j]]
                }
            }
            setColorProduct(newNameColor)
            let dataSize = dataProperties.map(e => (
                e.size.map(p => p)
            ))
            let getDataSize = []
            let getDataPrice = []
            let getDataQuantity = []
            for (let i = 0; i < dataSize.length; i++) {
                for (let j = 0; j < dataSize[i].length; j++) {
                    getDataPrice = [...getDataPrice, dataSize[i][j].price]
                    getDataSize = [...getDataSize, dataSize[i][j].idSize]
                    getDataQuantity = [...getDataQuantity, dataSize[i][j].quantity]
                }
            }
            setPriceProduct(getDataPrice)
            setQuantityProduct(getDataQuantity)
            let newSize = getDataSize.map(e => (
                listSize.filter(s => s.id === e)
            ))
            let newNameSize = []
            for (let i = 0; i < newSize.length; i++) {
                for (let j = 0; j < newSize[i].length; j++) {
                    newNameSize = [...newNameSize, newSize[i][j]]
                }
            }
            setSizeProduct(newNameSize)
        }
    }, [product])

    useEffect(() => {
        if (listTypeProduct.length > 0 && listBrandProduct.length > 0 && product.type !== '' && product.brand !== '') {
            let setForm = () => (
                <>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='card card-body mb-3'>
                                <img id='imagesBig' src={product.images[0]} alt={product.name} />
                            </div>
                        </div>
                        <div className='row'>
                            {
                                product.images.map((image, index) => (
                                    <div key={index} className='col-3 mb-3'>
                                        <div className='card'>
                                            <img onClick={setImages} src={image} alt={product.name} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <h3 className='py-2 text-dark'>{product.name}</h3>
                        <h4 id='showPrice' className='text-danger'>{formatter.format(Number(Math.min(...priceProduct))) + ' - ' + formatter.format(Number(Math.max(...priceProduct)))}</h4>
                        <hr />
                        <span className='fs-5 text-dark'>Màu sắc: </span>
                        {
                            colorProduct.map((c, index) => (
                                <>
                                    <label onClick={() => onClickColor(index)} key={index} className='lblColor' style={{ color: `${c.value}` }} htmlFor={`size ${c.id}`}>{c.value}</label>
                                </>
                            ))
                        }
                        <hr />
                        <span className='fs-5 text-dark'>Size: </span>
                        {
                            sizeProduct.map((stt, index) => (
                                <label onClick={() => onClickSize(index, stt.id)} value={stt.id} className='lblSize' htmlFor={`${index}`}>{stt.value}</label>
                            )
                            )
                        }
                        <hr />
                        <span id='showQuantity' className='fs-5 text-dark'>Số lượng:
                            {
                                quantityProduct.reduce((a, b) => a + b, 0)
                            }
                        </span>

                        <hr />
                        <div id='btnBuyProduct'>
                            <button onClick={() => onClickAddCart(product)} className='btn btn-warning'>Thêm
                                vào giỏ hàng
                            </button>
                            <button onClick={() => onClickBuy(product)} className='mx-4 btn btn-success'>Mua
                                ngay
                            </button>
                        </div>
                        <hr />
                        <h4 className='text-dark'>Details:</h4>
                        <p className='mb-2'>
                            <box-icon type='solid' name='purchase-tag'></box-icon>
                            Thương hiệu: <Link to={`/search/brand/${product.brand}`}
                                className='fs-5 text-info'>{listBrandProduct.filter(e => e.id === product.brand)[0].name}</Link>
                        </p>
                        <p className='mb-2'>
                            <box-icon name='package' type='solid'></box-icon>
                            Loại sản phẩm: <Link to={`/search/type/${product.type}`}
                                className='fs-5 text-info'>{listTypeProduct.filter(e => e.id === product.type)[0].name}</Link>
                        </p>
                    </div>
                </>
            )
            setShowForm(setForm)
        }
    }, [sizeProduct, quantityProduct, priceProduct, product])

    const onClickColor = (index) => {
        let newProperties = properties[index];
        setPropertiesFake(newProperties);
        let getSize = newProperties.size.map(e => e.idSize).map(s => (
            listSize.filter(e => e.id === s)
        ))
        let newNameSize = []
        for (let i = 0; i < getSize.length; i++) {
            for (let j = 0; j < getSize[i].length; j++) {
                newNameSize = [...newNameSize, getSize[i][j]]
            }
        }
        setSizeProduct(newNameSize)

        let getLblColor = document.querySelectorAll('.lblColor');
        for (let i = 0; i < getLblColor.length; i++) {
            if (i === index) {
                getLblColor[i].style.border = '1px solid red'
                getLblColor[i].style.fontWeight = 'bold'
                getLblColor[i].className = 'lblColor active'
                let getLblSize = document.querySelectorAll('.lblSize');
                for (let j = 0; j < getLblSize.length; j++) {
                    if (getLblSize[j].className === 'lblSize active') {
                        getLblSize[j].style.border = '1px solid #ccc'
                        getLblSize[j].style.color = 'black'
                        getLblSize[j].style.fontWeight = 'normal'
                        getLblSize[j].className = 'lblSize'
                        break;
                    }
                }
            } else {
                getLblColor[i].style.border = '1px solid #ccc'
                getLblColor[i].style.fontWeight = 'normal'
                getLblColor[i].className = 'lblColor'
            }
        }

        // let getNameColor = listColor.filter(e => e.id === Number(newProperties.idColor));
        // setColorProduct(getNameColor)
    }

    const closeModalProduct = () => {
        let getModalShowProduct = document.getElementById('modelShowProduct');
        if (getModalShowProduct.className === 'modal fade show') {
            getModalShowProduct.className = 'modal fade';
            getModalShowProduct.style.display = 'none'

            let getLblColor = document.querySelectorAll('.lblColor');
            for (let i = 0; i < getLblColor.length; i++) {
                if (getLblColor[i].className === 'lblColor active') {
                    getLblColor[i].style.border = '1px solid #ccc'
                    getLblColor[i].style.fontWeight = 'normal'
                    getLblColor[i].className = 'lblColor'
                    break;
                }
            }

            let getLblSize = document.querySelectorAll('.lblSize');
            for (let j = 0; j < getLblSize.length; j++) {
                if (getLblSize[j].className === 'lblSize active') {
                    getLblSize[j].style.border = '1px solid #ccc'
                    getLblSize[j].style.color = 'black'
                    getLblSize[j].style.fontWeight = 'normal'
                    getLblSize[j].className = 'lblSize'
                    break;
                }
            }
        }
    }

    const setImages = (e) => {
        let getimagesBig = document.getElementById('imagesBig');
        getimagesBig.src = e.target.src
    }

    const onClickSize = (i, id) => {
        let getLblColor = document.querySelector('.lblColor.active');
        if (getLblColor !== null) {
            let getLblSize = document.querySelectorAll('.lblSize');
            let price = propertiesFake.size.filter(e => e.idSize === id)
            document.getElementById('showPrice').innerHTML = formatter.format(Number(price[0].price))
            document.getElementById('showQuantity').innerHTML = 'Số lượng: ' + price[0].quantity
            for (let j = 0; j < getLblSize.length; j++) {
                if (j === i) {
                    getLblSize[j].style.border = '1px solid red'
                    getLblSize[j].style.color = 'green'
                    getLblSize[j].style.fontWeight = 'bold'
                    getLblSize[j].className = 'lblSize active'
                } else {
                    getLblSize[j].style.border = '1px solid #ccc'
                    getLblSize[j].style.color = 'black'
                    getLblSize[j].style.fontWeight = 'normal'
                    getLblSize[j].className = 'lblSize'
                }
            }
        } else {
            // let lblColor = document.querySelectorAll('.lblColor');
            // if (lblColor.length > 0) {
            //     onClickColor(0)
            //     onClickSize(i)
            // }
            openAlert('Vui lòng chọn màu sắc trước')
        }
    }

    const onClickAddCart = (getProduct) => {
        let getLblSize = document.querySelectorAll('.lblSize');
        let conutSize = -1;
        for (let j = 0; j < getLblSize.length; j++) {
            if (getLblSize[j].className === 'lblSize active') {
                conutSize = j;
                break;
            }
        }
        if (conutSize === -1) {
            openAlert('Vui lòng chọn 1 size!')
        } else {
            let getCheckSize = document.querySelectorAll('.lblSize');
            for (let i = 0; i < getCheckSize.length; i++) {
                if (getCheckSize[i].className === 'lblSize active') {
                    let price = propertiesFake.size.filter((e, index) => i === index).map(e => e.price)[0];
                    let id = uuidv4();
                    let newData = {
                        id: id,
                        idProduct: getProduct.id,
                        name: getProduct.name,
                        images: getProduct.images[0],
                        price: price,
                        size: getLblSize[conutSize].innerHTML,
                        quantity: '1',
                    };
                    console.log(newData);
                    setListCart([...listCart, newData]);
                    openAlert('Đã thêm vào giỏ hàng');
                    break
                }
            }
        }
    }

    const onClickBuy = (getProduct) => {
        let getLblSize = document.querySelectorAll('.lblSize');
        let conutSize = -1;
        for (let j = 0; j < getLblSize.length; j++) {
            if (getLblSize[j].className === 'lblSize active') {
                conutSize = j;
                break;
            }
        }
        if (conutSize === -1) {
            openAlert('Vui lòng chọn 1 size!')
        } else {
            let getCheckSize = document.querySelectorAll('.lblSize');
            for (let i = 0; i < getCheckSize.length; i++) {
                if (getCheckSize[i].className === 'lblSize active') {
                    let price = propertiesFake.size.filter((e, index) => i === index).map(e => e.price)[0];
                    let id = uuidv4();
                    let newData = {
                        id: id,
                        idProduct: getProduct.id,
                        name: getProduct.name,
                        images: getProduct.images[0],
                        price: price,
                        size: getLblSize[conutSize].innerHTML,
                        quantity: '1',
                    };
                    console.log(newData);
                    setListCart([...listCart, newData]);
                    openAlert('Đã thêm vào giỏ hàng');
                    break
                }
            }
            history.push('/cart')
        }
    }

    return (
        <>
            <div className="modal fade" id="modelShowProduct" aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary">
                            <button onClick={closeModalProduct} type="button" className="btn-close"
                                data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className='container'>
                            <div className='row'>
                                {showForm}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsProductWeb
