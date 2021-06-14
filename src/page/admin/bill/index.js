import React, { useEffect, useState } from 'react'
import { BillAPI, formatter, openAlert, openAlertVoucher } from '../../../controller/BillAPI'

const PageBillAdmin = (props) => {

    const [showForm, setShowForm] = useState()

    useEffect(() => {
        let setForm = () => (
            props.listBill.map((e, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{e.idUser}</td>
                    <td>{e.fullname}</td>
                    <td>{e.phone}</td>
                    <td>{e.address}</td>
                    <td>{e.note}</td>
                    <td>{formatter.format(e.sumMoney)}</td>
                    <td>{formatter.format(e.discount)}</td>
                    <td>{formatter.format(e.totalMoney)}</td>
                    <td>
                        {
                            e.selectPay === 'cod'
                                ? 'Ship COD'
                                : 'Quét mã QRCode'
                        }
                    </td>
                    <td>{e.dateBuy}</td>
                    <td>
                        {
                            e.huydon
                                ? <span className='fs-4 text-danger'>Đã huỷ đơn</span>
                                : e.status === 0
                                    ? <button onClick={() => onClickXacNhanBill(e)} className='btn btn-success'>Xác nhận</button>
                                    : e.status === 1
                                        ? <span className='fs-4 text-success'>Đã thanh toán</span>
                                        : <button onClick={() => onClickThanhToanBill(e)} className='btn btn-success'>Thanh toán</button>
                        }
                        {
                            e.huydon || e.status === 1
                                ? null
                                : <button onClick={() => onClickHuyBill(e)} className='btn btn-danger mx-2'>Huỷ đơn</button>
                        }
                    </td>
                </tr>
            ))
        )
        setShowForm(setForm);
    }, [props.listBill])

    const onClickHuyBill = async (bill) => {
        let flag = window.confirm('Xác nhận huỷ đơn hàng?')
        if (flag) {
            try {
                bill.huydon = true
                await BillAPI.edit(bill)
                let newList = props.listBill.map(e => e.id === bill.id ? bill : e)
                props.setListBill(newList)
                openAlert('Huỷ đơn thành công')
            } catch (error) {
                openAlert('Huỷ đơn thất bại')
            }
        }
    }

    const onClickXacNhanBill = async (bill) => {
        let flag = window.confirm('Xác nhận đơn hàng?')
        if (flag) {
            try {
                bill.status = -1
                await BillAPI.edit(bill)
                let newList = props.listBill.map(e => e.id === bill.id ? bill : e)
                props.setListBill(newList)
                openAlert('Đơn hàng đã được xác nhận')
            } catch (error) {
                openAlert('Xác nhận đơn hàng thất bại')
            }
        }
    }

    const onClickThanhToanBill = async (bill) => {
        let flag = window.confirm('Xác nhận thanh toán đơn hàng?')
        if (flag) {
            try {
                bill.status = 1
                await BillAPI.edit(bill)
                let newList = props.listBill.map(e => e.id === bill.id ? bill : e)
                props.setListBill(newList)
                openAlert('Đơn hàng đã được thanh toán')
            } catch (error) {
                openAlert('Đơn hàng thanh toán thất bại')
            }
        }
    }

    const onClickAddVoucher = async () => {
        let getInputMoneyVoucher = document.getElementById('addVoucher')
        if (getInputMoneyVoucher.value === null || getInputMoneyVoucher.value === '') {
            openAlert('Vui lòng nhập số tiền muồn giảm')
        } else {
            let flag = window.confirm('Xác nhận thêm voucher?')
            if (flag) {
                try {
                    let newVoucher = {
                        discount: Number(getInputMoneyVoucher.value)
                    }
                    let { data } = await BillAPI.addVoucher(newVoucher);
                    openAlertVoucher('Thêm voucher thành công ' + data.id)
                } catch (error) {
                    openAlert('Thêm voucher thất bại')
                }
            }
        }
    }

    return (
        <>
            <div className='d-flex'>
                <h3 className='card-header col-9'>Danh sách hoá đơn</h3>
                <input id='addVoucher' className="form-control me-2" name='voucher' type="number" placeholder="Số tiền giảm" />
                <button onClick={onClickAddVoucher} className='btn btn-success'>Thêm voucher</button>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>ID</td>
                        <td>Họ và tên</td>
                        <td>Số điện thoại</td>
                        <td>Địa chỉ</td>
                        <td>Ghi chú</td>
                        <td>Tổng tiền</td>
                        <td>Giảm giá</td>
                        <td>Thành tiền</td>
                        <td>Phương thức</td>
                        <td>Ngày tạo</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {showForm}
                </tbody>
            </table>
        </>
    )
}

export default PageBillAdmin
