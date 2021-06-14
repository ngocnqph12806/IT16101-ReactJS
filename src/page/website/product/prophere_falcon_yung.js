import React, { useEffect, useState } from 'react'
import ShowProductWeb from '../../../view/website/component/ShowProduct'
import PageActionProduct from '../actionProduct';

const PageProphere_falcon_yung = (props) => {

    const [listProphereFalconYung, setListProphereFalconYung] = useState([])

    let typeProduct = 'PROPHERE - FALCON - YUNG'

    useEffect(() => {
        let newList = props.listProduct.filter(e => e.type === 8)
        setListProphereFalconYung(newList);
    }, [props.listProduct])

    return (
        <>
            <PageActionProduct
                listProduct={listProphereFalconYung}
                setListProduct={setListProphereFalconYung}
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
            />
            <div id='main'>
                <h4 className='card-header'>{typeProduct}</h4>
                <ShowProductWeb
                    listTypeProduct={props.listTypeProduct}
                    listBrandProduct={props.listBrandProduct}
                    listProduct={listProphereFalconYung} listCart={props.listCart}
                    setListCart={props.setListCart}
                    listSize={props.listSize}
                    listColor={props.listColor}
                />
            </div>
        </>
    )
}

export default PageProphere_falcon_yung
