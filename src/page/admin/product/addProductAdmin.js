import React from 'react'
import { useHistory } from 'react-router';
import { openAlert } from './../../../controller/BillAPI';
import ProductAPI from './../../../controller/ProductAPI';
import AddProduct from './../../../view/admin/component/product/add'

const PageAddProductAdmin = (props) => {

    let history = useHistory();

    const onAdd = async (product) => {
        let flagAdd = window.confirm('Xác nhận thêm sản phẩm ' + product.name + '?');
        if (true) {
            try {
                await ProductAPI.add(product);
                props.setListProduct([...props.listProduct, product]);
                openAlert('Thêm thành công');
                history.push('/admin/product')
            } catch (error) {

            }
        }
    }

    return (
        <>
            <AddProduct
                onAddProduct={onAdd}
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
                listColor={props.listColor}
                listSize={props.listSize}
            />
        </>
    )
}

export default PageAddProductAdmin
