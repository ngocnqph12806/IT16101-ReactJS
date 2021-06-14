import React, { useEffect, useState } from 'react'
import { BillAPI, formatter, openAlert } from '../../../controller/BillAPI'
import { useHistory, useParams } from 'react-router'
import NewProductWeb from './newProduct'
import ShowFormDetailBill from './ShowFormDetailBill'

const DetailBill = (props) => {

    const [showForm, setShowForm] = useState()

    const [bill, setBill] = useState({
        id: '',
        product: [
            {
                idProduct: '',
                price: '0',
                images: '',
                quatity: '0',
                size: ''
            }
        ],
        sumMoney: 0,
        totalMoney: 0,
        discount: 0,
        status: 0,
        huydon: false,
        idUser: '',
        fullname: '',
        phone: '',
        address: '',
        dateBuy: '',
        selectPay: ''
    })

    let history = useHistory();

    let { id } = useParams();

    useEffect(() => {
        let getBill = async () => {
            try {
                let { data } = await BillAPI.getById(id);
                setBill(data)
            } catch (error) {
                openAlert('Không tìm thấy hoá đơn')
                history.push('/');
            }
        }
        getBill();
    }, [])

    useEffect(() => {
        if (props.userLogin.id === bill.idUser) {
            document.getElementById('showBill').style.display = 'block'
            setShowForm(<ShowFormDetailBill bill={bill} />)
        } else {
            document.getElementById('showBill').style.display = 'none'
        }
    }, [props.userLogin, bill])

    return (
        <>
            <div className='container' id='showBill'>
                <h3 className='card-header py-3'>Thông tin hoá đơn</h3>
                {showForm}
            </div>
            <NewProductWeb {...props} />
        </>
    )
}

export default DetailBill
