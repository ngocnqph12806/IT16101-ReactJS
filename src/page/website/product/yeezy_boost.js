import React, { useEffect, useState } from 'react'
import ShowProductWeb from '../../../view/website/component/ShowProduct'
import PageActionProduct from '../actionProduct';

const PageYeezy_boost = (props) => {

    const [listYeezyBoost, setListYeezyBoost] = useState([])

    let typeProduct = 'YEEZY BOOST'

    useEffect(() => {
        let newList = props.listProduct.filter(e => e.type === 1)
        setListYeezyBoost(newList);
    }, [props.listProduct])

    return (
        <>
            <PageActionProduct
                listProduct={listYeezyBoost}
                setListProduct={setListYeezyBoost}
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
            />
            <div id='main'>
                <h4 className='card-header'>{typeProduct}</h4>
                <ShowProductWeb listProduct={listYeezyBoost} listCart={props.listCart} setListCart={props.setListCart}
                    listTypeProduct={props.listTypeProduct}
                    listBrandProduct={props.listBrandProduct}
                    listSize={props.listSize}
                    listColor={props.listColor}
                />
            </div>
        </>
    )
}

export default PageYeezy_boost
