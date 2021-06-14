import React from 'react'
import { Link } from 'react-router-dom'

const HomeAdmin = () => {
    return (
        <>
            <div className='row'>
                <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Product</div>
                    <div className="card-body">
                        <h5 className="card-title"><Link to='/admin/product'>Quản lý sản phẩm</Link></h5>
                        <p className="card-text">Tất cả user đăng nhập đều có thể truy cập menu này.</p>
                    </div>
                </div>
                <div className="card text-white bg-danger mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Account</div>
                    <div className="card-body">
                        <h5 className="card-title"><Link to='/admin/user'>Quản lý nhân viên</Link></h5>
                        <p className="card-text">Chỉ có Admin hoăc người được cấp quyền mới có thể truy cập menu này.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAdmin
