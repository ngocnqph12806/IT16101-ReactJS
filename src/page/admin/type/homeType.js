import React from 'react'
import { openAlert } from '../../../controller/BillAPI'
import BrandProductAPI from '../../../controller/BrandProductAPI'
import TypeProductAPI from '../../../controller/TypeProductAPI'
import BrandProductAdmin from '../../../view/admin/component/brand'
import TypeProductAdmin from '../../../view/admin/component/type'

const PageHomeTypeAndBrand = (props) => {

    const addTypeProduct = async (type) => {
        try {
            let { data } = await TypeProductAPI.add(type);
            props.setListTypeProduct([...props.listTypeProduct, data])
            openAlert('Thêm loại sản phẩm thành công')
        } catch (error) {
            openAlert('Thêm loại sản phẩm thất bại')
        }
    }

    const editTypeProduct = async (type) => {
        try {
            await TypeProductAPI.edit(type);
            let newList = props.listTypeProduct.map(e => e.id === type.id ? type : e)
            props.setListTypeProduct(newList)
            openAlert('Sửa loại sản phẩm thành công')
        } catch (error) {
            openAlert('Sửa loại sản phẩm thất bại')
        }
    }

    const removeTypeProduct = async (type) => {
        let flag = window.confirm('Đồng ý xoá loại sản phẩm ' + type.name + '?')
        if (flag) {
            try {
                await TypeProductAPI.remove(type)
                let newListType = props.listTypeProduct.filter(e => e.id != type.id)
                props.setListTypeProduct(newListType)
            } catch (error) {
                openAlert('Xoá loại sản phẩm thất bại')
            }
        }
    }

    const addBrandProduct = async (brand) => {
        try {
            let { data } = await BrandProductAPI.add(brand);
            props.setListBrandProduct([...props.listBrandProduct, data])
            openAlert('Thêm thương hiệu thành công')
        } catch (error) {
            openAlert('Thêm thương hiệu thất bại')
        }
    }

    const editBrandProduct = async (brand) => {
        try {
            await BrandProductAPI.edit(brand);
            let newList = props.listBrandProduct.map(e => e.id === brand.id ? brand : e)
            props.setListBrandProduct(newList)
            openAlert('Sửa thương hiệu thành công')
        } catch (error) {
            openAlert('Sửa thương hiệu thất bại')
        }
    }

    const removeBrandProduct = async (brand) => {
        let flag = window.confirm('Đồng ý xoá loại sản phẩm ' + brand.name + '?')
        if (flag) {
            try {
                await BrandProductAPI.remove(brand)
                let newListBrand = props.listBrandProduct.filter(e => e.id != brand.id)
                props.setListBrandProduct(newListBrand)
            } catch (error) {
                openAlert('Xoá loại sản phẩm thất bại')
            }
        }
    }

    return (
        <>
            <div className='row'>
                <TypeProductAdmin
                    listTypeProduct={props.listTypeProduct}
                    listProduct={props.listProduct}
                    removeTypeProduct={removeTypeProduct}
                    addTypeProduct={addTypeProduct}
                    editTypeProduct={editTypeProduct}
                />
                <BrandProductAdmin
                    listBrandProduct={props.listBrandProduct}
                    listProduct={props.listProduct}
                    removeBrandProduct={removeBrandProduct}
                    addBrandProduct={addBrandProduct}
                    editBrandProduct={editBrandProduct}
                />
            </div>
        </>
    )
}

export default PageHomeTypeAndBrand
