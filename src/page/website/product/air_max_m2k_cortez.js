import React, { useEffect, useState } from 'react'
import ShowProductWeb from '../../../view/website/component/ShowProduct'
import PageActionProduct from '../actionProduct';

const PageAir_max_m2k_cortez = (props) => {

    const [listAirMaxM2kCortez, setListAirMaxM2kCortez] = useState([])

    let typeProduct = 'AIR MAX - M2K - CORTEZ'

    useEffect(() => {
        let newList = props.listProduct.filter(e => e.type === 5)
        setListAirMaxM2kCortez(newList);
    }, [props.listProduct])

    return (
        <>
            <PageActionProduct
                listProduct={listAirMaxM2kCortez}
                setListProduct={setListAirMaxM2kCortez}
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
            />
            <div id='main'>
                <h4 className='card-header'>{typeProduct}</h4>
                <ShowProductWeb listProduct={listAirMaxM2kCortez} listCart={props.listCart}
                    setListCart={props.setListCart}
                    listTypeProduct={props.listTypeProduct}
                    listBrandProduct={props.listBrandProduct}
                />
            </div>
        </>
    )
}

export default PageAir_max_m2k_cortez
