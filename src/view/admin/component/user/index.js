import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useForm } from 'react-hook-form';
import ShowUser from './showUser';
import UserAPI from '../../../../controller/UserAPI';
import { openAlert } from '../../../../controller/BillAPI';

const UserAdmin = ({ listUser, onBlockUser }) => {

    const { register, handleSubmit } = useForm();

    const [setForm, setSetForm] = useState();

    const [pageCount, setPageCount] = useState(0);

    const [offset, setOffset] = useState(0);

    const [perPage] = useState(10);

    const [listUserAo, setListUserAo] = useState([...listUser])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    useEffect(() => {
        setOffset(1);
    }, [])

    useEffect(() => {
        setListUserAo(listUser)
    }, [listUser])

    useEffect(() => {
        let getProduct = () => (
            listUserAo.slice((offset * perPage) - perPage, offset * perPage).map((user, index) => (
                <ShowUser key={index} user={user} index={index} onBlockUser={onBlockUser} />
            )
            )
        )
        setPageCount(Math.ceil(listUserAo.length / perPage))
        setSetForm(getProduct)
    }, [offset, listUserAo])

    const onSearch = async (search) => {
        let { data } = await UserAPI.search(search.keyword);
        let newData = data.filter(e => e.fullname.toUpperCase().includes(search.keyword.toUpperCase()))
        if (newData.length > 0) {
            setOffset(1)
            setListUserAo(newData);
        } else {
            openAlert('Không tìm thấy nhân viên nào có tên muốn tìm')
        }
    }

    return (
        <>
            <div className='card-title'>
                <div className='row'>
                    <div className='col-8'>
                    </div>
                    <div className='col-4'>
                        <form method='GET' onSubmit={handleSubmit(onSearch)} className="d-flex">
                            <input className="form-control me-2" name='keyword' type="search" placeholder="Search" aria-label="Search"
                                {...register('keyword')} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='card-header'>
                <h5>Danh sách nhân viên</h5>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Full name</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td>Birthday</td>
                        <td>Status</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {setForm}
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </>
    )
}

export default UserAdmin
