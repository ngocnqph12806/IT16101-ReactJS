import React, { useEffect, useState } from 'react'
import ShowProductWeb from '../../../view/website/component/ShowProduct'
import PageActionProduct from '../actionProduct';

const PageMlb_fila_puma = (props) => {

    const [listMlbFilaPuma, setListMlbFilaPuma] = useState([])

    let typeProduct = 'MLB FILA PUMA'

    useEffect(() => {
        let newList = props.listProduct.filter(e => e.type === 4)
        setListMlbFilaPuma(newList);
    }, [props.listProduct])

    return (
        <>
            <PageActionProduct
                listProduct={listMlbFilaPuma}
                setListProduct={setListMlbFilaPuma}
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
            />
            <div id='main'>
                <h4 className='card-header'>{typeProduct}</h4>
                <ShowProductWeb listProduct={listMlbFilaPuma} listCart={props.listCart}
                    setListCart={props.setListCart}
                    listTypeProduct={props.listTypeProduct}
                    listBrandProduct={props.listBrandProduct}
                />
            </div>
        </>
    )
}

export default PageMlb_fila_puma
