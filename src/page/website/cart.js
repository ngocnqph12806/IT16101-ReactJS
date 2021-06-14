import React from 'react'
import CartProductWeb from '../../view/website/component/cartProduct'

const PageCartProduct = (props) => {
    return (
        <>
            <div className='container'>
                <h4 className='card-header mb-3'>Giỏ hàng</h4>
                <CartProductWeb userLogin={props.userLogin} listCart={props.listCart} setListCart={props.setListCart} />
            </div>
        </>
    )
}

export default PageCartProduct
