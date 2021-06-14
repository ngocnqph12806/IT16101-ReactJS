import React, { useEffect, useState } from 'react'
import { formatUser, isAuthenticated } from './controller/Auth'
import BannerAPI from './controller/BannerAPI'
import { BillAPI, readBrowser, saveBrowser } from './controller/BillAPI'
import BrandProductAPI from './controller/BrandProductAPI'
import ProductAPI from './controller/ProductAPI'
import PropertiesAPI from './controller/PropertiesAPI'
import TypeProductAPI from './controller/TypeProductAPI'
import UserAPI from './controller/UserAPI'
import RouterDOM from './Router'

const App = () => {

  const [userLogin, setUserLogin] = useState({
    id: '-1',
    fullname: '',
    email: '',
    password: '',
    role: '',
    birthday: '',
    status: '',
    avatar: '',
    code: 0,
    active: true
  })

  const [listProduct, setListProduct] = useState([])

  const [listUser, setListUser] = useState([])

  const [listBanner, setListBanner] = useState([])

  const [listTypeProduct, setListTypeProduct] = useState([])

  const [listBrandProduct, setListBrandProduct] = useState([])

  const [listCart, setListCart] = useState([])

  const [listBill, setListBill] = useState([{
    id: '',
    product: [
      {
        idProduct: '',
        images: '',
        price: '',
        quantity: '',
        size: ''
      }
    ],
    sumMoney: 0,
    totalMoney: 0,
    discount: 0,
    status: 0,
    huydon: true,
    idUser: '',
    fullname: '',
    phone: '',
    address: '',
    dateBuy: '',
    selectPay: ''
  }])

  const [listColor, setListColor] = useState([
    {
      id: 0,
      value: ''
    }
  ])

  const [listSize, setListSize] = useState([
    {
      id: 0,
      value: ''
    }
  ])

  useEffect(() => {
    let getListCart = () => {
      let newList = readBrowser();
      if (newList !== null && newList !== '') {
        setListCart(newList)
      }
    }

    getListCart();
    let getUserLogin = async () => {
      try {
        let { data } = await formatUser(isAuthenticated());
        if (data.length > 0) {
          setUserLogin(data[0])
        }
      } catch (error) {

      }
    }
    getUserLogin();
    let getProduct = async () => {
      try {
        let { data } = await ProductAPI.getAll();
        setListProduct([...data].reverse())
      } catch (error) {

      }
    }
    getProduct();
    let getUser = async () => {
      try {
        let { data } = await UserAPI.getAll();
        setListUser([...data].reverse())
      } catch (error) {

      }
    }
    getUser();
    let getBanner = async () => {
      try {
        let { data } = await BannerAPI.getAll();
        setListBanner([...data].reverse().slice(0, data.length > 3 ? 3 : data.length))
      } catch (error) {

      }
    }
    getBanner();
    let getTypeProduct = async () => {
      try {
        let { data } = await TypeProductAPI.getAll();
        setListTypeProduct([...data]);
      } catch (error) {

      }
    }
    getTypeProduct();
    let getBrandProduct = async () => {
      try {
        let { data } = await BrandProductAPI.getAll();
        setListBrandProduct([...data])
      } catch (error) {

      }
    }
    getBrandProduct();
    let getBill = async () => {
      try {
        let { data } = await BillAPI.getAll()
        setListBill([...data].reverse())
      } catch (error) {

      }
    }
    getBill();
    let getColor = async () => {
      try {
        let { data } = await PropertiesAPI.getAllColor();
        setListColor(data)
      } catch (error) {

      }
    }
    getColor();
    let getSize = async () => {
      try {
        let { data } = await PropertiesAPI.getAllSize();
        setListSize(data)
      } catch (error) {

      }
    }
    getSize()
  }, [])

  useEffect(() => {
    saveBrowser(listCart)
  }, [listCart])

  return (
    <>
      <RouterDOM
        listProduct={listProduct}
        listUser={listUser}
        setListProduct={setListProduct}
        setListUser={setListUser}
        userLogin={userLogin}
        setUserLogin={setUserLogin}
        listBanner={listBanner}
        setListBanner={setListBanner}
        listBrandProduct={listBrandProduct}
        setListBrandProduct={setListBrandProduct}
        listTypeProduct={listTypeProduct}
        setListTypeProduct={setListTypeProduct}
        listCart={listCart}
        setListCart={setListCart}
        listBill={listBill}
        setListBill={setListBill}
        listSize={listSize}
        setListSize={setListSize}
        listColor={listColor}
        setListColor={setListColor}
      />
    </>
  );
}

export default App
