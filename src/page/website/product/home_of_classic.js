import React, { useEffect, useState } from 'react'
import ShowProductWeb from '../../../view/website/component/ShowProduct'
import PageActionProduct from '../actionProduct';

const PageHome_of_classic = (props) => {

    const [listHomeOfClassic, setListHomeOfClassic] = useState([])

    let typeProduct = 'HOME OF CLASSIC'

    useEffect(() => {
        let newList = props.listProduct.filter(e => e.type === 3)
        setListHomeOfClassic(newList);
    }, [props.listProduct])

    return (
        <>
            <PageActionProduct
                listProduct={listHomeOfClassic}
                setListProduct={setListHomeOfClassic}
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
            />
            <div id='main'>
                <h4 className='card-header'>{typeProduct}</h4>
                <ShowProductWeb listProduct={listHomeOfClassic}
                    listCart={props.listCart}
                    setListCart={props.setListCart}
                    listTypeProduct={props.listTypeProduct}
                    listBrandProduct={props.listBrandProduct}
                />
            </div>
        </>
    )
}

export default PageHome_of_classic
