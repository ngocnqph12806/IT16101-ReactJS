import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatter } from '../../../../controller/BillAPI'

const ShowProductAdmin = ({ p, listSize, listColor, listBrandProduct, listTypeProduct, index, onClickViewProduct, onRemoveProduct }) => {

    const [priceProduct, setPriceProduct] = useState([{}])

    const [sizeProduct, setSizeProduct] = useState([])

    const [quantityProduct, setQuantityProduct] = useState([])

    const [colorProduct, setColorProduct] = useState([])

    const [nameSize, setNameSize] = useState([])


    useEffect(() => {
        if (p.properties.length > 0) {
            let dataColor = p.properties.map(e => e.idColor)
            let newColor = dataColor.map(e => (
                listColor.filter(c => c.id === e)
            ))
            setColorProduct(newColor)
            let getSizeArr = p.properties.map(e => e.size);
            let getDataSize = []
            let getDataPrice = []
            let getDataQuantity = []
            for (let i = 0; i < getSizeArr.length; i++) {
                for (let j = 0; j < getSizeArr[i].length; j++) {
                    getDataPrice = [...getDataPrice, getSizeArr[i][j].price]
                    getDataSize = [...getDataSize, getSizeArr[i][j].idSize]
                    getDataQuantity = [...getDataQuantity, getSizeArr[i][j].quantity]
                }
            }
            setPriceProduct(getDataPrice)
            setQuantityProduct(getDataQuantity)
            setSizeProduct(getDataSize)
        }
    }, [])

    useEffect(() => {
        let newSize = sizeProduct.map(e => (
            listSize.filter(s => s.id === e)
        ))
        setNameSize(newSize)
    }, [sizeProduct])


    return (
        <>
            <tr key={index}>
                <td>{index + 1}</td>
                <td>
                    {
                        p.images.length > 0
                            ? <img className='card' src={p.images[0]} alt={p.name} width='75px' />
                            : null
                    }

                </td>
                <td>{p.name}</td>
                <td>
                    {
                        listTypeProduct.length > 0
                            ? listTypeProduct.filter(e => e.id === p.type)[0].name
                            : null
                    }
                </td>
                <td>
                    {
                        listBrandProduct.length > 0
                            ? listBrandProduct.filter(e => e.id === p.brand)[0].name
                            : null
                    }
                </td>
                <td>
                    {
                        colorProduct.map(c => (
                            c.map(s => (
                                <label className='lblColor' style={{ color: `${s.value}` }}>{s.value}</label>
                            ))
                        ))
                    }
                </td>
                <td>
                    {
                        nameSize.map(s => (
                            s.map((e, index) => (
                                <label className='lblSize'>{e.value}</label>
                            ))
                        ))
                    }
                </td>
                <td>
                    {
                        formatter.format(Number(Math.min(...priceProduct))) + ' - ' + formatter.format(Number(Math.max(...priceProduct)))
                    }
                </td>
                <td>{
                    quantityProduct.reduce((a, b) => a + b, 0) <= 0
                        ? <span className='text-danger'>Hết hàng</span>
                        : <span className='text-success'>Còn hàng</span>
                }</td>
                <td>
                    <Link to={`/admin/product/edit/${p.id}`}>
                        <button className='btn btn-warning mx-2'>Sửa</button>
                    </Link>
                    <button onClick={() => onRemoveProduct(p)} className='btn btn-danger mx-2'>Xoá</button>
                    <button onClick={() => onClickViewProduct(p)} className='btn btn-info mx-2'>Xem</button>
                </td>
            </tr>
        </>
    )
}

export default ShowProductAdmin
