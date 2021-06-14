import React, { useEffect, useState } from 'react'
import ShowProductWeb from '../../../view/website/component/ShowProduct';
import PageActionProduct from '../actionProduct';

const PageAir_force_1 = (props) => {

    const [listAirForce1, setListAirForce1] = useState([]);

    let typeProduct = 'AIR FORCE 1'

    useEffect(() => {
        let newList = props.listProduct.filter(e => e.type === 2)
        setListAirForce1(newList);
    }, [props.listProduct])

    return (
        <>
            <PageActionProduct
                listProduct={listAirForce1}
                setListProduct={setListAirForce1}
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
            />
            <div id='main'>
                <h4 className='card-header'>{typeProduct}</h4>
                <ShowProductWeb listProduct={listAirForce1} listCart={props.listCart} setListCart={props.setListCart}
                    listTypeProduct={props.listTypeProduct}
                    listBrandProduct={props.listBrandProduct}
                />
            </div>
        </>
    )
}

export default PageAir_force_1
