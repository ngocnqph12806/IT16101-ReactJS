import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { formatter, openAlert, BillAPI, removeBrowser } from '../../../controller/BillAPI';
import { useForm } from 'react-hook-form';

const CartProductWeb = ({ userLogin, listCart, setListCart }) => {

    const { reset } = useForm()

    const [setTable, setSetTable] = useState()

    const [discount, setDiscount] = useState(0)

    const [showFormInfo, setShowFormInfo] = useState()

    const [sumMoney, setSumMoney] = useState([0])

    let history = useHistory();

    useEffect(() => {
        reset(userLogin)
        let showInfo = () => (
            <>
                <form>
                    <div className='row mx-2'>
                        <div className='col-5'>
                            <h5 className='mb-3'>Tên người nhận<span className='text-danger'>*</span></h5>
                        </div>
                        <div className='col-7'>
                            <input id='inputName' defaultValue={userLogin.fullname} className='form-control mb-2' type="text" aria-label="Tên người nhận" name='name' />
                        </div>
                        <div className='col-5'>
                            <h5 className='mb-3'>Số điện thoại<span className='text-danger'>*</span></h5>
                        </div>
                        <div className='col-7'>
                            <input id='inputPhone' defaultValue={userLogin.phone} className='form-control mb-2' type="text" aria-label="Số điện thoại" name='phone' />
                        </div>
                        <div className='col-5'>
                            <h5 className='mb-3'>Địa chỉ<span className='text-danger'>*</span></h5>
                        </div>
                        <div className='col-7'>
                            <input id='inputAddress' defaultValue={userLogin.address} className='form-control mb-2' type="text" aria-label="Địa chỉ" name='address' />
                        </div>
                        <div className='col-5'>
                            <h5 className='mb-3'>Ghi chú</h5>
                        </div>
                        <div className='col-7'>
                            <textarea id='inputNote' className="form-control mb-2" aria-label="With textarea" defaultValue={""} />
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <h5>(<span className='text-danger'>*</span>): Thông tin bắt buộc</h5>
                    </div>
                </form>
            </>
        )
        setShowFormInfo(showInfo)
    }, [userLogin])

    useEffect(() => {
        let showTable = () => (
            listCart.map((cart, index) => (
                <tr key={index}>
                    <td><button onClick={() => onRemoveCart(cart.id)} className='btn btn-danger'>Xoá</button></td>
                    <td><img src={cart.images} alt={cart.name} width='50px' /></td>
                    <td>{cart.name}</td>
                    <td className='price'>{cart.price}</td>
                    <td>{cart.size}</td>
                    <td>
                        <input min='1' className='changeQuantity' onChange={() => onChangeQuantity(index)}
                            defaultValue={cart.quantity} style={{ width: '75px' }} type='number' name='quantity' />
                    </td>
                    <td className="changeTotal">{Number(cart.price) * Number(cart.quantity)}</td>
                </tr>
            ))
        )
        setSetTable(showTable)
        let newSumoney = listCart.map(e => Number(e.price) * Number(e.quantity))
        setSumMoney(newSumoney);
    }, [listCart, discount])

    useEffect(() => {
        document.getElementById('sumMoney').innerHTML = formatter.format(sumMoney.reduce((a, b) => a + b, 0))
        document.getElementById('totalMoney').innerHTML = formatter.format(sumMoney.reduce((a, b) => a + b, 0) - discount)
    }, [sumMoney])

    const onChangeQuantity = (stt) => {
        let getPrice = document.querySelectorAll('.price');
        let getQuantity = document.querySelectorAll('.changeQuantity');
        let getTotal = document.querySelectorAll('.changeTotal');
        if (getQuantity[stt].value < 1) {
            getQuantity[stt].value = '1'
        }
        getTotal[stt].innerHTML = Number(getQuantity[stt].value) * Number(getPrice[stt].innerHTML)
        let newList = listCart.map((cart, index) => stt === index
            ? {
                id: cart.id,
                idProduct: cart.idProduct,
                name: cart.name,
                price: cart.price,
                size: cart.size,
                images: cart.images,
                quantity: getQuantity[stt].value
            } : cart
        )
        setListCart(newList)
    }

    const onRemoveCart = (id) => {
        let flag = window.confirm('Xác nhận xoá')
        if (flag) {
            let newList = listCart.filter(e => e.id !== id);
            setListCart(newList);
            openAlert('Xoá thành công')
        }
    }

    const onClickVoucher = async () => {
        let getInputVoucher = document.getElementById('inputVoucher');
        if (getInputVoucher.value === '') {
            openAlert("Chưa nhập voucher");
        } else {
            try {
                let { data } = await BillAPI.getVoucher(getInputVoucher.value);
                setDiscount(data.discount)
                openAlert("Đã kích hoạt voucher");
            } catch (error) {
                openAlert("Voucher không hoạt động");
            }
        }
    }

    const onChangeVoucher = async (e) => {
        if (e.target.value === '') {
            setDiscount(0)
        } else {
            try {
                await BillAPI.getVoucher(e.target.value);
            } catch (error) {
                setDiscount(0)
            }
        }
    }

    const onClickSuccessfully = () => {
        if (listCart.length === 0) {
            openAlert('Chưa có sản phẩm trong giỏ hàng')
        } else {
            if (userLogin.status === '0' || userLogin.status === '') {
                history.push('/login');
            } else {
                let getName = document.getElementById('inputName');
                let getPhone = document.getElementById('inputPhone');
                let getAddress = document.getElementById('inputAddress');
                let getNote = document.getElementById('inputNote');
                if (getName.value === '' || getName.value === null) {
                    openAlert('Chưa nhập tên người nhận')
                } else if (getPhone.value === '' || getPhone.value === null) {
                    openAlert('Chưa nhập số điện thoại')
                } else if (getAddress.value === '' || getAddress.value === null) {
                    openAlert('Chưa nhập địa chỉ người nhận')
                } else {
                    saveBill(getName.value, getPhone.value, getAddress.value, getNote.value)
                }
            }
        }
    }

    const saveBill = async (getName, getPhone, getAddress, getNote) => {
        let selectPay = document.getElementById('selectPay').value;
        let newCart = listCart.map(cart => 1 === 1 ?
            {
                idProduct: cart.idProduct,
                // name: cart.name,
                images: cart.images,
                price: cart.price,
                quantity: cart.quantity,
                size: cart.size
            }
            : cart
        )
        let newBill = {
            // id: id,
            product: newCart,
            sumMoney: sumMoney.reduce((a, b) => a + b, 0),
            totalMoney: sumMoney.reduce((a, b) => a + b, 0) - discount,
            discount: discount,
            status: 0,
            huydon: false,
            idUser: userLogin.id,
            fullname: getName,
            phone: getPhone,
            address: getAddress,
            dateBuy: new Date(),
            selectPay: selectPay,
            note: getNote
        }
        try {
            let { data } = await BillAPI.save(newBill);
            openAlert('Lưu hoá đơn thành công')
            history.push(`/bill/${data.id}`)
            setListCart([])
            removeBrowser();
        } catch (error) {
            openAlert('Lưu hoá đơn thất bại')
        }
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Ảnh</td>
                        <td>Tên sản phẩm</td>
                        <td>Giá</td>
                        <td>Size</td>
                        <td>Số lượng</td>
                        <td>Tổng</td>
                    </tr>
                </thead>
                <tbody>
                    {setTable}
                </tbody>
            </table>
            <div className='row'>
                <div className='col-7'>
                    <h3 className='card-header mb-4'>Thông tin thanh toán:</h3>
                    {showFormInfo}
                </div>
                <div className='col-5'>
                    <h3 className='card-header'>CART TOTALS:</h3>
                    <div className='card card-body mb-4 mx-2' style={{ border: '0px' }}>
                        <div className='mb-2 py-2'>
                            <span className="fs-5 float-start">Tổng tiền</span>
                            <span id='sumMoney' className="fs-5 float-end">
                            </span>
                        </div>
                        <div className='mb-2'>
                            <span className="fs-5 float-start">Mã giảm giá</span>
                            <span onClick={onClickVoucher} className='btn btn-success float-end'>Xác nhận</span>
                            <input onChange={onChangeVoucher} id='inputVoucher' type="text" aria-label="Giảm giá" name='giamGia'
                                className="float-end mx-2" />
                        </div>
                        <div className='mb-4'>
                            <span className="fs-5 float-start">Thành tiền</span>
                            <span id='totalMoney' className="fs-5 float-end text-danger"></span>
                        </div>
                        <div className='mb-4'>
                            <span className="fs-5 float-start">Phương thức thanh toán</span>
                            <select id='selectPay' className='fs-5 float-end'>
                                <option value='cod'>Thanh toán khi nhận hàng</option>
                                <option value='qrcode'>Quét mã QRCode thanh toán</option>
                            </select>
                        </div>
                        <div className='mb-2'>
                            <button onClick={onClickSuccessfully} className='btn btn-success float-end'>Thanh toán</button>
                            <Link to='/product'><button className='mx-4 btn btn-dark float-end'>Mua thêm</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProductWeb
