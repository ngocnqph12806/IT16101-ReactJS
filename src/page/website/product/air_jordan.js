import React, { useEffect, useState } from 'react'
import ShowProductWeb from '../../../view/website/component/ShowProduct'
import PageActionProduct from '../actionProduct';

const PageAir_jordan = (props) => {

    const [listAirJordan, setListAirJordan] = useState([])

    let typeProduct = 'AIR JORDAN'

    useEffect(() => {
        let newList = props.listProduct.filter(e => e.type === 9)
        setListAirJordan(newList);
    }, [props.listProduct])

    return (
        <>
            <PageActionProduct
                listProduct={listAirJordan}
                setListProduct={setListAirJordan}
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
            />
            <div id='main'>
                <h4 className='card-header'>{typeProduct}</h4>
                <ShowProductWeb
                    listProduct={listAirJordan}
                    listCart={props.listCart}
                    setListCart={props.setListCart}
                    listTypeProduct={props.listTypeProduct}
                    listBrandProduct={props.listBrandProduct}
                />
            </div>
        </>
    )
}

export default PageAir_jordan
