import React from 'react'

const FooterWeb = () => {
    return (
        <>
            <div className='bg-dark'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className="card text-white bg-dark mb-3 py-3 mx-3" style={{maxWidth: '18rem'}}>
                                <div className="card-body">
                                    <h4 className="card-title">THÔNG TIN LIÊN HỆ</h4>
                                    <hr/>
                                    <p className="card-text">
                                        <box-icon name='location-plus' type='solid' color='#ffffff'></box-icon>
                                        42 Hồ Bá Kiện Phường 15, Quận 10, TP.Hồ Chí Minh<br/>
                                        <box-icon name='phone' type='solid' color='#ffffff'></box-icon>
                                        0901375677<br/>
                                        <box-icon name='mail-send' color='#ffffff'></box-icon>
                                        saigonsneakerstore@gmail.com<br/>
                                        <box-icon name='rss' color='#ffffff'></box-icon>
                                        www.sneakersaigon.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className="card text-white bg-dark mb-3 py-3 mx-3" style={{maxWidth: '18rem'}}>
                                <div className="card-body">
                                    <h4 className="card-title">GIỜ LÀM VIỆC</h4>
                                    <hr/>
                                    <p className="card-text">
                                        <box-icon name='time' type='solid' color='#ffffff'></box-icon>
                                        Giờ làm việc của chúng tôi<br/>
                                        10:00 - 21:00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className="card text-white bg-dark mb-3 py-3 mx-3" style={{maxWidth: '18rem'}}>
                                <div className="card-body">
                                    <h4 className="card-title">ĐĂNG KÝ NHẬN TIN</h4>
                                    <hr/>
                                    <p className="card-text">
                                        Hãy nhanh tay đăng ký nhận tin để nhận thông tin khuyến mãi và thông tin mới
                                        nhất<br/><br/>
                                        <input type='text' name='email' placeholder='Email của bạn'/>
                                        <button className='btn btn-info'>Gửi</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterWeb
