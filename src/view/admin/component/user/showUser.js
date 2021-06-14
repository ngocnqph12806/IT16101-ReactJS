import React from 'react'
import { Link } from 'react-router-dom'

const ShowUser = ({ user, index, onBlockUser }) => {
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.fullname}</td>
            <td>{user.email}</td>
            <td>{user.role === '1' ? 'Admin' : 'Người dùng'}</td>
            <td>{user.birthday}</td>
            <td>{
                user.status === '0'
                    ? <span className='text-danger'>Bị khoá</span>
                    : <span className='text-success'>Hoạt động</span>
            }</td>
            <td>
                <Link to={`/admin/user/edit/${user.id}`}>
                    <button className='btn btn-warning'>Sửa</button>
                </Link>
                {
                    user.status === '0'
                        ? <button onClick={() => onBlockUser(user)} className='btn btn-success'>Mở khoás</button>
                        : <button onClick={() => onBlockUser(user)} className='btn btn-danger'>Khoá</button>
                }
            </td>
        </tr>
    )
}

export default ShowUser
