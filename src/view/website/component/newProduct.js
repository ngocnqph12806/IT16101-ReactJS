import React from 'react'
import PageActionProduct from '../../../page/website/actionProduct'
import ShowProductWeb from './ShowProduct'

const NewProductWeb = (props) => {

    return (
        <>
            <PageActionProduct
                listProduct={props.listProduct}
                setListProduct={props.setListProduct}
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
            />
            <div id='main'>
                <h4 className='card-header'>Sản phẩm mới</h4>
                <ShowProductWeb
                                    listTypeProduct={props.listTypeProduct}
                                    listBrandProduct={props.listBrandProduct}
                listProduct={props.listProduct} listCart={props.listCart}
                    setListCart={props.setListCart} />
            </div>
        </>
    )
}

export default NewProductWeb
