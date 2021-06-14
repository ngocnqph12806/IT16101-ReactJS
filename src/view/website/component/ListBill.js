import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { BillAPI, formatter, openAlert } from '../../../controller/BillAPI'
import ShowProductWeb from './ShowProduct'

const ListBillByUser = (props) => {
    const [showForm, setShowForm] = useState()

    const [bill, setBill] = useState([{
        id: '',
        product: [
            {
                idProduct: '',
                price: '0',
                quatity: '0',
                size: ''
            }
        ],
        sumMoney: 0,
        totalMoney: 0,
        discount: 0,
        status: '0',
        idUser: '',
        fullname: '',
        phone: '',
        address: '',
        dateBuy: '',
        selectPay: ''
    }])

    let history = useHistory();

    let { id } = useParams();

    useEffect(() => {
        let getBill = async () => {
            try {
                let { data } = await BillAPI.getByIdUser(id);
                setBill([...data].reverse())
            } catch (error) {
                openAlert('Không tìm thấy hoá đơn')
                history.push('/');
            }
        }
        getBill();
    }, [])

    useEffect(() => {
        if (props.userLogin.id === id) {
            document.getElementById('showListBill').style.display = 'block'
            document.getElementById('showNewProductInListBill').style.display = 'none'
        } else {
            document.getElementById('showListBill').style.display = 'none'
            document.getElementById('showNewProductInListBill').style.display = 'block'
        }
    }, [props.userLogin])

    useEffect(() => {
        let setForm = () => (
            <>
                {
                    bill.map((detailBill, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{detailBill.fullname}</td>
                            <td>{detailBill.phone}</td>
                            <td>{detailBill.address}</td>
                            <td>{formatter.format(detailBill.sumMoney)}</td>
                            <td>{formatter.format(detailBill.discount)}</td>
                            <td>{formatter.format(detailBill.totalMoney)}</td>
                            <td>
                                {
                                    detailBill.selectPay === 'cod'
                                        ? 'Thanh toán khi nhận hàng'
                                        : 'Quét mã QRCode'
                                }
                            </td>
                            <td>{detailBill.dateBuy}</td>
                            <td>
                                <Link to={`/bill/${detailBill.id}`}><button className='btn btn-info mx-2'>Xem chi tiết</button></Link>
                                {
                                    detailBill.huydon
                                        ? <span className='fs-5 text-danger'>Đã huỷ đơn</span>
                                        : detailBill.status === 0
                                            ? <span className='fs-5 text-danger'>Chờ xác nhận</span>
                                            : detailBill.status === 1
                                                ? <span className='fs-5 text-success'>Đã thanh toán</span>
                                                : <button className='btn btn-danger'>Thanh toán ngay</button>
                                }
                            </td>
                        </tr>
                    ))
                }
            </>
        )
        setShowForm(setForm)
    }, [bill])

    return (
        <>
            <div className='container' id='showListBill'>
                <h3 className='card-header py-3'>Danh sách hoá đơn mua hàng</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Tên khách hàng</td>
                            <td>Số điện thoại</td>
                            <td>Địa chỉ</td>
                            <td>Tổng tiền</td>
                            <td>Giảm giá</td>
                            <td>Thành tiền</td>
                            <td>Phương thức thanh toán</td>
                            <td>Ngày mua</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {showForm}
                    </tbody>
                </table>
            </div>
            <div id='showNewProductInListBill'>
                <h4 className='card-header'>Sản phẩm mới</h4>
                <ShowProductWeb listProduct={props.listProduct} listCart={props.listCart}
                    setListCart={props.setListCart}
                    listTypeProduct={props.listTypeProduct}
                    listBrandProduct={props.listBrandProduct}
                    listSize={props.listSize}
                    listColor={props.listColor}
                    listSize={props.listSize}
                    listColor={props.listColor}
                    />
            </div>
        </>
    )
}

export default ListBillByUser
