import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ShowProductWeb from '../../../view/website/component/ShowProduct';
import PageActionProduct from '../actionProduct';

const PageAllProduct = (props) => {

    const [listAirForce1, setListAirForce1] = useState([]);

    const [getType, setGetType] = useState({ id: '', name: '' })

    const [showHeader, setShowHeader] = useState()

    let { id } = useParams()

    useEffect(() => {
        if (getType.length > 0) {
            let setHeader = () => (
                <h4 className='card-header'>{getType[0].name}</h4>
            )
            setShowHeader(setHeader)
        }
    }, [getType])

    useEffect(() => {
        let typeProduct = props.listTypeProduct.filter(e => e.id === Number(id))
        setGetType(typeProduct)
        let newList = props.listProduct.filter(e => e.type === Number(id))
        setListAirForce1(newList);
    }, [props.listTypeProduct, props.listProduct, id])

    return (
        <>
            <PageActionProduct
                listProduct={listAirForce1}
                setListProduct={setListAirForce1}
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
            />
            <div id='main'>
                {showHeader}
                <ShowProductWeb listProduct={listAirForce1} listCart={props.listCart} setListCart={props.setListCart}
                    listTypeProduct={props.listTypeProduct}
                    listBrandProduct={props.listBrandProduct}
                    listSize={props.listSize}
                    listColor={props.listColor}
                />
            </div>
        </>
    )
}

export default PageAllProduct
