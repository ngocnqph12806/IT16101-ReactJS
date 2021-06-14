import ProductPage from './../../../view/admin/component/product'
import React from 'react'
import ProductAPI from './../../../controller/ProductAPI';

const PageProductAdmin = (props) => {

    const onRemove = async (product) => {
        let flagRemove = window.confirm('Đồng ý xoá sản phẩm ' + product.name + '?');
        if (flagRemove) {
            try {
                await ProductAPI.remove(product.id);
                let newList = props.listProduct.filter(e => e.id !== product.id);
                props.setListProduct(newList);
            } catch (error) {

            }
        }
    }

    return (
        <>
            <ProductPage
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
                listProduct={props.listProduct}
                onRemoveProduct={onRemove}
                listSize={props.listSize}
                listColor={props.listColor}
                listCart={props.listCart}
                setListCart={props.setListCart}
            />
        </>
    )
}

export default PageProductAdmin
