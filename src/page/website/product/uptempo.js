import React, { useEffect, useState } from 'react'
import ShowProductWeb from '../../../view/website/component/ShowProduct'
import PageActionProduct from '../actionProduct';

const PageUptempo = (props) => {

    const [listUptempo, setListUptempo] = useState([])

    let typeProduct = 'UPTEMPO'

    useEffect(() => {
        let newList = props.listProduct.filter(e => e.type === 6)
        setListUptempo(newList);
    }, [props.listProduct])

    return (
        <>
            <PageActionProduct
                listProduct={listUptempo}
                setListProduct={setListUptempo}
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
            />
            <div id='main'>
                <h4 className='card-header'>{typeProduct}</h4>
                <ShowProductWeb listProduct={listUptempo} listCart={props.listCart}
                    listTypeProduct={props.listTypeProduct}
                    listBrandProduct={props.listBrandProduct}
                    setListCart={props.setListCart}
                    listSize={props.listSize}
                    listColor={props.listColor}
                />
            </div>
        </>
    )
}

export default PageUptempo
