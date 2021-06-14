import React from 'react'
import Banner from './layout/Banner'
import ColectionWeb from './component/collection';
import ShowProductWeb from './component/ShowProduct';

const HomeWeb = (props) => {

    return (
        <>
            <Banner listBanner={props.listBanner} />
            <h1 className='card-header text-center bg-light mb-3'>Sản phẩm mới</h1>
            <ShowProductWeb listProduct={props.listProduct} listCart={props.listCart}
                setListCart={props.setListCart}
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
                listSize={props.listSize}
                listColor={props.listColor}
            />
            <h1 className='card-header text-center bg-light mb-3'>COLLECTION</h1>
            <ColectionWeb listTypeProduct={props.listTypeProduct} />
        </>
    )
}

export default HomeWeb
