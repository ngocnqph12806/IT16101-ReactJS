import PropertiesAdmin from '../../../view/admin/component/properties'
import React from 'react'
import PropertiesAPI from '../../../controller/PropertiesAPI'
import { openAlert } from '../../../controller/BillAPI'

const PagePropertiesAdmin = (props) => {

    const onAddColor = async (color) => {
        try {
            let newColor = { value: color }
            let { data } = await PropertiesAPI.addColor(newColor);
            props.setListColor([...props.listColor, data])
            openAlert('Thêm màu mới thành công')
        } catch (error) {
            openAlert('Thêm màu mới thất bại')
        }
    }

    const onEditColor = async (color) => {
        try {
            await PropertiesAPI.editColor(color);
            let newListColor = props.listColor.map(e => e.id === color.id ? color : e)
            props.setListColor(newListColor)
            openAlert('Sửa mã màu thành công')
        } catch (error) {
            openAlert('Sửa mã màu thất bại')
        }
    }

    const onAddSize = async (size) => {
        try {
            let newSize = { value: size }
            let { data } = await PropertiesAPI.addSize(newSize)
            props.setListSize([...props.listSize, data])
            openAlert('Thêm size mới thành công')
        } catch (error) {
            openAlert('Thêm size mới thất bại')
        }
    }

    const onEditSize = async (size) => {
        try {
            await PropertiesAPI.editSize(size);
            let newListSize = props.listSize.map(e => e.id === size.id ? size : e)
            props.setListSize(newListSize)
            openAlert('Sửa size thành công')
        } catch (error) {
            openAlert('Sửa size thất bại')
        }
    }

    return (
        <>
            <PropertiesAdmin
                listSize={props.listSize}
                listColor={props.listColor}
                onAddColor={onAddColor}
                onEditColor={onEditColor}
                onAddSize={onAddSize}
                onEditSize={onEditSize}
            />
        </>
    )
}

export default PagePropertiesAdmin
