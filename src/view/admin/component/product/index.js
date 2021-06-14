import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import ProductAPI from '../../../../controller/ProductAPI';
import ShowProductAdmin from './showProduct';
import ReactPaginate from 'react-paginate';
import DetailsProductWeb from '../../../website/component/DetailsProduct';
import { openAlert } from '../../../../controller/BillAPI';

const ProductPage = ({ listProduct, listSize, listColor, onRemoveProduct, listTypeProduct, listBrandProduct, setListCart, listCart }) => {

    const { register, handleSubmit } = useForm();

    const [setForm, setSetForm] = useState();

    const [offset, setOffset] = useState(0);

    const [perPage] = useState(5);

    const [pageCount, setPageCount] = useState(0);

    const [listProductAo, setListProductAo] = useState([...listProduct])

    const [clickProduct, setClickProduct] = useState({
        id: "",
        name: "",
        type: 1,
        brand: 1,
        images: [],
        properties: [
            {
                idColor: '',
                size: []
            }
        ]
    })

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    useEffect(() => {
        setOffset(1);
    }, [])

    useEffect(() => {
        setListProductAo(listProduct)
    }, [listProduct])

    useEffect(() => {
        let showInfoProduct = () => (
            listProductAo.slice((offset * perPage) - perPage, offset * perPage).map((p, index) => (
                <ShowProductAdmin
                    key={index}
                    listBrandProduct={listBrandProduct}
                    listTypeProduct={listTypeProduct}
                    p={p}
                    index={index}
                    onClickViewProduct={onClickViewProduct}
                    onRemoveProduct={onRemoveProduct}
                    listSize={listSize}
                    listColor={listColor}
                />
            )
            )
        )
        setPageCount(Math.ceil(listProductAo.length / perPage))
        setSetForm(showInfoProduct)
    }, [offset, listProductAo])

    const onClickViewProduct = (product) => {
        let getModal = document.getElementById('modelShowProduct');
        let getIdBtnBuyProduct = document.getElementById('btnBuyProduct');
        if (getIdBtnBuyProduct !== null) {
            getIdBtnBuyProduct.remove();
        }
        if (getModal.className === 'modal fade') {
            getModal.style.display = 'block';
            getModal.className = 'modal fade show'
            setClickProduct(product);
        } else {
            getModal.className = 'modal fade'
        }
    }

    const onSearch = async (search) => {
        let { data } = await ProductAPI.search(search.keyword);
        let newData = data.filter(e => e.name.toUpperCase().includes(search.keyword.toUpperCase()))
        if (newData.length > 0) {
            setOffset(1)
            setListProductAo(newData);
        } else {
            openAlert('Không tìm thấy sản phẩm nào có tên muốn tìm')
        }
    }

    const onChangeTypeProduct = (e) => {
        if (e.target.value.toUpperCase() === 'ALL') {
            setOffset(1)
            setListProductAo(listProduct);
        } else {
            let newListSortByType = listProduct.filter(p => p.type === Number(e.target.value))
            setOffset(1)
            setListProductAo(newListSortByType);
        }
    }

    const onChangeBrandProduct = (e) => {
        if (e.target.value.toUpperCase() === 'ALL') {
            setOffset(1)
            setListProductAo(listProduct);
        } else {
            let newListSortByBrand = listProduct.filter(p => p.brand === Number(e.target.value))
            setOffset(1)
            setListProductAo(newListSortByBrand);
        }
    }

    const onClickSortStatus = (e) => {
        if (e.target.className === 'btn') {
            let newListProduct = listProduct.filter(p => p.quantity !== '0');
            e.target.className = 'btn active'
            setOffset(1)
            setListProductAo(newListProduct);
        } else {
            let newListProduct = listProduct.filter(p => p.quantity === '0');
            e.target.className = 'btn'
            setOffset(1)
            setListProductAo(newListProduct);
        }
    }

    const onClickSortName = (e) => {
        let newData = [...listProductAo];
        for (let i = 0; i < newData.length; i++) {
            for (let j = 0; j < newData.length; j++) {
                let nameI = newData[i].name;
                let nameJ = newData[j].name;
                if (nameI > nameJ) {
                    let tmp = newData[i];
                    newData[i] = newData[j]
                    newData[j] = tmp;
                }
            }
        }
        if (e.target.className === 'btn active') {
            setOffset(1)
            setListProductAo([...newData].reverse());
            e.target.className = 'btn'
        } else {
            setOffset(1)
            setListProductAo(newData);
            e.target.className = 'btn active'
        }
    }

    return (
        <>
            <DetailsProductWeb
                product={clickProduct}
                listCart={listCart}
                setListCart={setListCart}
                listTypeProduct={listTypeProduct}
                listBrandProduct={listBrandProduct}
                listSize={listSize}
                listColor={listColor}
            />
            <div className='card-title'>
                <div className='row'>
                    <div className='col-8'>
                        <Link to='/admin/product/add' className='btn btn-success float-start'>Thêm sản phẩm</Link>
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
                <h5 className='float-start'>Danh sách sản phẩm</h5>
                <div className='float-end mx-4'>
                    <label className='fs-5'>Lọc theo loại: </label>
                    <select onChange={onChangeTypeProduct} className='fs-6'>
                        <option value="all">Tất cả sản phẩm</option>
                        {
                            listTypeProduct.map((typeProduct, index) => (
                                <option key={index} value={typeProduct.id}>{typeProduct.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='float-end mx-4'>
                    <label className='fs-5'>Thương hiệu: </label>
                    <select onChange={onChangeBrandProduct} className="fs-6">
                        <option value="all">Tất cả thương hiệu</option>
                        {
                            listBrandProduct.map((branProduct, index) => (
                                <option key={index} value={branProduct.id}>{branProduct.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <td><button className='btn' disabled>#</button></td>
                        <td><button className='btn' disabled>Photo</button></td>
                        <td><button className='btn' disabled>Name</button></td>
                        <td><button className='btn' disabled>Type</button></td>
                        <td><button className='btn' disabled>Brand</button></td>
                        <td><button className='btn' disabled>Color</button></td>
                        <td><button className='btn' disabled>Size</button></td>
                        <td><button className='btn' disabled>Price</button></td>
                        <td><button className='btn' disabled>Status</button></td>
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

export default ProductPage
