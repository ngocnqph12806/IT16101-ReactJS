import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import DetailsProductWeb from './DetailsProduct'

const ShowProductWeb = ({ listProduct, listTypeProduct, listBrandProduct, listCart, setListCart, listSize, listColor }) => {

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

    const [setForm, setSetForm] = useState();

    const [offset, setOffset] = useState(0);

    const [perPage] = useState(18);

    const [pageCount, setPageCount] = useState(0);

    const [listProductAo, setListProductAo] = useState([...listProduct])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    useEffect(() => {
        setOffset(1);
    }, [listProductAo])

    useEffect(() => {
        setListProductAo(listProduct)
    }, [listProduct])

    useEffect(() => {
        let showInfoProduct = () => (
            listProductAo.slice((offset * perPage) - perPage, offset * perPage).map((product, index) => (
                <div key={index} className='col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-4'>
                    <div className="card">
                        <img src={product.images[0]}
                            className="card-img-top" alt={product.name} />
                        <div className="des-pr">
                            <div className="box-des-pr">
                                <div className="detail clearfix">
                                    <div onClick={() => onClickShowProduct(product, index)} data-id="1446" className="a_xemthem_pr">
                                        <box-icon name='show-alt' ></box-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )
        setPageCount(Math.ceil(listProductAo.length / perPage))
        setSetForm(showInfoProduct)
    }, [offset, listProductAo])

    const onClickShowProduct = (product) => {
        let getModal = document.getElementById('modelShowProduct');
        if (getModal.className === 'modal fade') {
            setClickProduct(product)
            getModal.style.display = 'block';
            getModal.className = 'modal fade show'
        } else {
            getModal.className = 'modal fade'
        }
    }

    const closeModalProductByEsc = (e) => {
        if (e.code === 'Escape') {
            let getModalShowProduct = document.getElementById('modelShowProduct');
            if (getModalShowProduct.className === 'modal fade show') {
                getModalShowProduct.className = 'modal fade';
                getModalShowProduct.style.display = 'none'
                let getLblColor = document.querySelectorAll('.lblColor');
                for (let i = 0; i < getLblColor.length; i++) {
                    if (getLblColor[i].className === 'lblColor active') {
                        getLblColor[i].style.border = '1px solid #ccc'
                        getLblColor[i].style.fontWeight = 'normal'
                        getLblColor[i].className = 'lblColor'
                        break;
                    }
                }

                let getLblSize = document.querySelectorAll('.lblSize');
                for (let j = 0; j < getLblSize.length; j++) {
                    if (getLblSize[j].className === 'lblSize active') {
                        getLblSize[j].style.border = '1px solid #ccc'
                        getLblSize[j].style.color = 'black'
                        getLblSize[j].style.fontWeight = 'normal'
                        getLblSize[j].className = 'lblSize'
                        break;
                    }
                }
            }
        }
    }

    return (
        <div onKeyUp={closeModalProductByEsc}>
            <DetailsProductWeb
                product={clickProduct}
                listCart={listCart}
                setListCart={setListCart}
                listTypeProduct={listTypeProduct}
                listBrandProduct={listBrandProduct}
                listSize={listSize}
                listColor={listColor}
            />
            <div className='py-3'>
                <div className='row'>
                    {setForm}
                </div>
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
            </div>
        </div>
    )
}

export default ShowProductWeb
