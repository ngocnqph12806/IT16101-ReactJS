import React from 'react'
import UserAPI from './../../../controller/UserAPI';
import UserAdmin from './../../../view/admin/component/user'

const PageUseAdmin = (props) => {

    const onBlock = async (user) => {
        let flagRemove = window.confirm('Đồng ý ' + (user.status === '1' ? 'khoá' : 'mở khoá') + ' người dùng ' + user.fullname + '?');
        if (flagRemove) {
            let newUser = {
                id: user.id,
                fullname: user.fullname,
                email: user.email,
                password: user.password,
                role: user.role,
                birthday: user.birthday,
                status: user.status === '1' ? '0' : '1',
                avater: user.avater
            }
            try {
                await UserAPI.edit(newUser);
                let newList = props.listUser.map(e => e.id === user.id ? newUser : e);
                props.setListUser(newList);
            } catch (error) {

            }
        }
    }

    return (
        <>
            <UserAdmin listUser={props.listUser} onBlockUser={onBlock} />
        </>
    )
}

export default PageUseAdmin
