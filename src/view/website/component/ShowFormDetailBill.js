import React from 'react'
import { formatter } from '../../../controller/BillAPI'

const ShowFormDetailBill = ({ bill }) => {
    return (
        <>

            <>
                <div className='row'>
                    <div className='col-4 py-3 text-center'>
                        {
                            bill.selectPay === 'cod'
                                ? bill.product.map((e, index) => (
                                    index < 1
                                        ? <img key={index} src={e.images} />
                                        : null
                                ))
                                : (
                                    bill.status === -1 && !bill.huydon
                                        ?
                                        <>
                                            <h4 className='py-4'>Vui lòng viết ghi chú:</h4>
                                            <h5 className='text-info'>{bill.id}</h5>
                                            <iframe height='500px' className='col-12' src={`https://nhantien.momo.vn/0346238899/${bill.totalMoney}`}></iframe>
                                        </>
                                        : bill.product.map((e, index) => (
                                            index < 1
                                                ? <img key={index} src={e.images} />
                                                : null
                                        ))
                                )
                        }
                    </div>
                    <div className='col-8'>
                        <div className='row mx-2'>
                            <div className='mb-3'>
                                <label className='fs-5 float-start'>Tên người nhận:</label>
                                <label className='fs-5 float-end'>{bill.fullname}</label>
                            </div>

                            <div className='mb-3'>
                                <label className='fs-5 float-start'>Số điện thoại:</label>
                                <label className='fs-5 float-end'>{bill.phone}</label>
                            </div>
                            <div className='mb-3'>
                                <label className='fs-5 float-start'>Địa chỉ:</label>
                                <label className='fs-5 float-end'>{bill.address}</label>
                            </div>
                            <div className='mb-3'>
                                <label className='fs-5 float-start'>Tổng tiền:</label>
                                <label className='fs-5 float-end'>{formatter.format(bill.sumMoney)}</label>
                            </div>
                            <div className='mb-3'>
                                <label className='fs-5 float-start'>Giảm giá:</label>
                                <label className='fs-5 float-end'>{formatter.format(bill.discount)}</label>
                            </div>
                            <div className='mb-3'>
                                <label className='fs-5 float-start'>Thành tiền:</label>
                                <label className='fs-5 float-end'>{formatter.format(bill.totalMoney)}</label>
                            </div>
                            <div className='mb-3'>
                                <label className='fs-5 float-start'>Phương thức thanh toán:</label>
                                <h5 className='float-end'>{
                                    bill.selectPay === 'cod'
                                        ? 'Thanh toán khi nhận hàng'
                                        : 'Quét mã QRCode'
                                }</h5>
                            </div>
                            <div className='mb-3'>
                                <label className='fs-5 float-start'>Ngày đặt hàng:</label>
                                <label className='fs-5 float-end'>{bill.dateBuy}</label>
                            </div>
                            <div className='mb-3'>
                                <label className='fs-5 float-start'>Trạng thái:</label>
                                <label className='fs-5 float-end'>{
                                    bill.huydon
                                        ? <span className='text-danger'>Đã huỷ đơn</span>
                                        : bill.status === 0
                                            ? <span className='text-danger'>Chờ xác nhận</span>
                                            : bill.status === 1
                                                ? <span className='text-success'>Đã thanh toán</span>
                                                : <span className='text-danger'>Chưa thanh toán</span>
                                }</label>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default ShowFormDetailBill
