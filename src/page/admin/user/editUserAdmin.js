import React from 'react'
import { useHistory } from 'react-router';
import { openAlert } from './../../../controller/BillAPI';
import UserAPI from './../../../controller/UserAPI';
import EditUser from './../../../view/admin/component/user/editUser'

const PageEditUserAdmin = (props) => {

    let history = useHistory();

    const onEdit = async (user) => {
        let flatEdit = window.confirm('Đồng ý sửa thông tin người dùng ' + user.fullname + '?');
        if (flatEdit) {
            try {
                await UserAPI.edit(user);
                let newList = props.listUser.map(e => e.id === user.id ? user : e);
                props.setListUser(newList);
                openAlert('Sửa thành công')
                history.push('/admin/user')
            } catch (error) {

            }
        }
    }

    return (
        <>
            <EditUser onEditUser={onEdit} />
        </>
    )
}

export default PageEditUserAdmin
