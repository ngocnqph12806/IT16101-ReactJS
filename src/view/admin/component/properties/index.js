import React, { useEffect, useState } from 'react'
import { openAlert } from '../../../../controller/BillAPI';

const PropertiesAdmin = ({ listColor, listSize, onAddColor, onEditColor, onAddSize, onEditSize }) => {

    const [showColor, setShowColor] = useState()

    useEffect(() => {
        let setColor = () => (
            listColor.map(e => (
                <label onDoubleClick={() => onClickEditColor(e)} className='lblColor mx-1 mb-1' style={{ backgroundColor: `${e.value}` }}>{e.value}</label>
            ))
        )
        setShowColor(setColor)
    }, [listColor])

    const onClickAddColor = () => {
        let getInputColor = document.getElementById('addColor');
        if (getInputColor.value !== null) {
            if (getInputColor.value === '') {
                openAlert('Vui lòng nhập mã màu')
            } else {
                let color = getInputColor.value;
                let checkColor = listColor.filter(e => e.value === color);
                if (checkColor.length > 0) {
                    openAlert('Mã màu đã tồn tại')
                } else {
                    onAddColor(color)
                }
                // if (color.substring(0, 1) !== '#') {
                //     openAlert('Mã màu phải có ký tự # ở đầu')
                // } else {
                //     let checkColor = listColor.filter(e => e.value === color);
                //     if (checkColor.length > 0) {
                //         openAlert('Mã màu đã tồn tại')
                //     } else {
                //         onAddColor(color)
                //     }
                // }
            }
        }
    }

    const onClickEditColor = (color) => {
        let getNewColor = window.prompt('Nhập mã màu mới:', color.value);
        if (getNewColor !== null) {
            if (getNewColor === '') {
                openAlert('Vui lòng nhập mã màu')
            } else {
                if (getNewColor !== color.value) {
                    let checkColor = listColor.filter(e => e.value === getNewColor);
                    if (checkColor.length > 0) {
                        openAlert('Mã màu đã tồn tại')
                    } else {
                        color.value = getNewColor
                        onEditColor(color)
                    }
                }
                // if (getNewColor.substring(0, 1) !== '#') {
                //     openAlert('Mã màu phải có ký tự # ở đầu')
                // } else {
                //     if (getNewColor !== color.value) {
                //         let checkColor = listColor.filter(e => e.value === getNewColor);
                //         if (checkColor.length > 0) {
                //             openAlert('Mã màu đã tồn tại')
                //         } else {
                //             color.value = getNewColor
                //             onEditColor(color)
                //         }
                //     }
                // }
            }
        }
    }

    const [showSize, setShowSize] = useState()

    useEffect(() => {
        let setSize = () => (
            listSize.map(e => (
                <label onDoubleClick={() => onClickEditSize(e)} className='lblSize mx-1 mb-1'>{e.value}</label>
            ))
        )
        setShowSize(setSize)
    }, [listSize])

    const onClickEditSize = (size) => {
        let getNewSize = window.prompt('Nhập size mới:', size.value);
        if (getNewSize !== null) {
            if (getNewSize === '') {
                openAlert('Vui lòng nhập size')
            } else {
                if (getNewSize.length > 3) {
                    openAlert('Size tối đa 3 ký tự')
                } else {
                    if (getNewSize !== size.value) {
                        let checkSize = listSize.filter(e => e.value === getNewSize);
                        if (checkSize.length > 0) {
                            openAlert('Size đã tồn tại')
                        } else {
                            size.value = getNewSize
                            onEditSize(size)
                        }
                    }
                }
            }
        }
    }

    const onClickAddSize = () => {
        let getInputSize = document.getElementById('addSize');
        if (getInputSize.value !== null) {
            if (getInputSize.value === '') {
                openAlert('Vui lòng nhập size')
            } else {
                let size = getInputSize.value
                if (size.length > 3) {
                    openAlert('Size tối đa 3 ký tự')
                } else {
                    let checkSize = listSize.filter(e => e.value === size);
                    if (checkSize.length > 0) {
                        openAlert('Size đã tồn tại')
                    } else {
                        onAddSize(size)
                    }
                }
            }
        }
    }

    return (
        <>
            <div className='row'>
                <div className='col-6'>
                    <h3 className='card-header mb-4'>Màu hiện có</h3>
                    <div className='container'>
                        {showColor}
                    </div>
                    <h3 className='card-header mb-2'>Thêm màu mới</h3>
                    <div className='d-flex'>
                        <span className='fs-4 mx-2'>Nhập mã màu:</span>
                        <input type='name' name='color' id='addColor' placeholder='Nhập mã màu #fffff' />
                        <button onClick={onClickAddColor} className='btn btn-success mx-3'>Thêm</button>
                    </div>
                </div>
                <div className='col-6'>
                    <h3 className='card-header mb-4'>Size hiện có</h3>
                    <div className='container'>
                        {showSize}
                    </div>
                    <h3 className='card-header mb-2'>Thêm size mới</h3>
                    <div className='d-flex'>
                        <span className='fs-4 mx-2'>Nhập mã size:</span>
                        <input type='name' name='size' id='addSize' placeholder='Nhập mã size' />
                        <button onClick={onClickAddSize} className='btn btn-success mx-3'>Thêm</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertiesAdmin
