import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdminLayout from './view/admin/layoutAdmin'
import LayoutWebsite from './view/website/layoutWebsite'
import NotFound from './404'
import PageHomeAdmin from './page/admin/user/homeAdmin'
import PageProductAdmin from './page/admin/product/productAdmin'
import PageEditProductAdmin from './page/admin/product/editProductAdmin'
import PageAddProductAdmin from './page/admin/product/addProductAdmin'
import PageUseAdmin from './page/admin/user/useAdmin'
import PageEditUserAdmin from './page/admin/user/editUserAdmin'
import PageLogin from './page/admin/user/login'
import PageRegister from './page/admin/user/register'
import PageHomeWeb from './page/website/homeWeb'
import PageYeezy_boost from './page/website/product/yeezy_boost'
import PageAir_force_1 from './page/website/product/air_force_1'
import PageHome_of_classic from './page/website/product/home_of_classic'
import PageMlb_fila_puma from './page/website/product/mlb_fila_puma'
import PageAir_max_m2k_cortez from './page/website/product/air_max_m2k_cortez'
import PageUptempo from './page/website/product/uptempo'
import PageNmd_ultra_boost_arkyn from './page/website/product/nmd_ultra_boost_arkyn'
import PageProphere_falcon_yung from './page/website/product/prophere_falcon_yung'
import PageAir_jordan from './page/website/product/air_jordan'
import PageSearchProductWeb from './page/website/searchProductWeb'
import PageCartProduct from './page/website/cart'
import PageHomeTypeAndBrand from './page/admin/type/homeType'
import NewProductWeb from './view/website/component/newProduct'
import DetailBill from './view/website/component/DetailBill'
import ListBillByUser from './view/website/component/ListBill'
import PageBillAdmin from './page/admin/bill'
import PageAllProduct from './page/website/product/AllProduct'
import ForgotPasswordAdmin from './view/admin/component/user/forgot'
import ResetPassword from './view/admin/component/user/resetPassword'
import PagePropertiesAdmin from './page/admin/properties'



const RouterDOM = (props) => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login'>
                        <PageLogin {...props} />
                    </Route>
                    <Route exact path='/register'>
                        <PageRegister />
                    </Route>
                    <Route exact path='/forgot'>
                        <ForgotPasswordAdmin />
                    </Route>
                    <Route exact path='/forgot/:id$:code'>
                        <ResetPassword />
                    </Route>
                    <Route path='/admin*'>
                        <AdminLayout {...props}>
                            <Switch>
                                <Route exact path='/admin'>
                                    <PageHomeAdmin {...props} />
                                </Route>
                                <Route exact path='/admin/product'>
                                    <PageProductAdmin  {...props} />
                                </Route>
                                <Route exact path='/admin/product/edit/:id'>
                                    <PageEditProductAdmin {...props} />
                                </Route>
                                <Route exact path='/admin/product/add'>
                                    <PageAddProductAdmin  {...props} />
                                </Route>
                                <Route exact path='/admin/brand-type'>
                                    <PageHomeTypeAndBrand  {...props} />
                                </Route>
                                <Route exact path='/admin/user'>
                                    <PageUseAdmin {...props} />
                                </Route>
                                <Route exact path='/admin/user/edit/:id'>
                                    <PageEditUserAdmin  {...props} />
                                </Route>
                                <Route exact path='/admin/bill'>
                                    <PageBillAdmin {...props} />
                                </Route>
                                <Route exact path='/admin/properties'>
                                    <PagePropertiesAdmin {...props} />
                                </Route>
                                <Route path='/admin*'>
                                    <NotFound />
                                </Route>
                            </Switch>
                        </AdminLayout>
                    </Route>
                    <Route path='/*'>
                        <LayoutWebsite {...props}>
                            <Switch>
                                <Route exact path='/product/:id'>
                                    <PageAllProduct {...props} />
                                </Route>
                                {/* <Route exact path='/yeezy-boost'>
                                    <PageYeezy_boost {...props} />
                                </Route>
                                <Route exact path='/air-force-1'>
                                    <PageAir_force_1 {...props} />
                                </Route>
                                <Route exact path='/home-of-classic'>
                                    <PageHome_of_classic {...props} />
                                </Route>
                                <Route exact path='/mlb-fila-puma'>
                                    <PageMlb_fila_puma {...props} />
                                </Route>
                                <Route exact path='/air-max-m2k-cortez'>
                                    <PageAir_max_m2k_cortez  {...props} />
                                </Route>
                                <Route exact path='/uptempo'>
                                    <PageUptempo  {...props} />
                                </Route>
                                <Route exact path='/nmd-ultra-boost-arkyn'>
                                    <PageNmd_ultra_boost_arkyn  {...props} />
                                </Route>
                                <Route exact path='/prophere-falcon-yung'>
                                    <PageProphere_falcon_yung  {...props} />
                                </Route>
                                <Route exact path='/air-jordan'>
                                    <PageAir_jordan  {...props} />
                                </Route> */}
                                <Route exact path='/search/:typeSearch/*'>
                                    <PageSearchProductWeb {...props} />
                                </Route>
                                <Route exact path='/cart'>
                                    <PageCartProduct {...props} />
                                </Route>
                                <Route exact path='/product'>
                                    <NewProductWeb  {...props} />
                                </Route>
                                <Route exact path='/bill/:id'>
                                    <DetailBill {...props} />
                                </Route>
                                <Route exact path='/bill/user/:id'>
                                    <ListBillByUser {...props} />
                                </Route>
                                <Route exact path='/'>
                                    <PageHomeWeb  {...props} />
                                </Route>
                                <Route path='*'>
                                    <NotFound />
                                </Route>
                            </Switch>
                        </LayoutWebsite>
                    </Route>
                </Switch>
            </BrowserRouter>
            <div className="alertBox" id="alertBox">
                <box-icon type='solid' name='check-circle'></box-icon>
                <span className='fs-2'>Thêm giỏ hàng thành công!</span>
            </div>
            <div className="confirmBox" id="confirmBox">
                <h3 className='py-3'>Thêm giỏ hàng thành công!</h3>
                <button id='confirmBoxOk' className='btn btn-success mx-2 mb-3'>Ok</button>
                <button id='confirmBoxCancel' className='btn btn-danger mb-3'>Cancel</button>
            </div>
        </>
    )
}

export default RouterDOM
