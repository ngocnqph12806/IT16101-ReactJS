import React from 'react'
import { useHistory } from 'react-router';
import { openAlert } from './../../../controller/BillAPI';
import ProductAPI from './../../../controller/ProductAPI';
import EditProduct from './../../../view/admin/component/product/edit'

const PageEditProductAdmin = (props) => {

    let history = useHistory();

    const onEdit = async (product) => {
        let flagEdit = window.confirm('Xác nhận sửa thông tin sản phẩm ' + product.name + '?');
        if (flagEdit) {
            try {
                await ProductAPI.edit(product);
                let newList = props.listProduct.map(e => e.id === product.id ? product : e)
                props.setListProduct(newList);
                openAlert('Sửa thành công');
                history.push('/admin/product')
            } catch (error) {

            }
        }
    }

    return (
        <>
            <EditProduct
                onEditProduct={onEdit}
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
                listSize={props.listSize}
                listColor={props.listColor}
            />
        </>
    )
}

export default PageEditProductAdmin
