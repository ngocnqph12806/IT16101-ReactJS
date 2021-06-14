import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ProductAPI from '../../controller/ProductAPI';
import ShowProductWeb from '../../view/website/component/ShowProduct';

const PageSearchProductWeb = (props) => {

    const [listProductSearch, setListProductSearch] = useState([])

    const [keyword, setKeyword] = useState('')

    const [showHeader, setShowHeader] = useState()

    const [nameKeyword, setnameKeyword] = useState()

    let { typeSearch } = useParams();

    const getSearchProduct = async () => {
        try {
            let newKeyword = window.location.href
            newKeyword = newKeyword.substring(newKeyword.lastIndexOf('/') + 1)
            newKeyword = decodeURIComponent(newKeyword)
            if (newKeyword.includes('=')) {
                newKeyword = newKeyword.split('=')[1]
            }
            if (newKeyword.includes('+')) {
                newKeyword = newKeyword.split('+')[0]
            }
            setKeyword(newKeyword);
            let { data } = await ProductAPI.search(keyword);
            let newData = [];
            if (typeSearch === 'name') {
                newData = data.filter(e => e.name.toUpperCase().includes(keyword.toUpperCase()))
            } else if (typeSearch === 'brand') {
                newData = data.filter(e => e.brand === Number(keyword))
                let newBrand = props.listBrandProduct.filter(e => e.id === Number(keyword))
                if (newBrand.length > 0) {
                    setnameKeyword(newBrand[0].name)
                }
            } else if (typeSearch === 'type') {
                newData = data.filter(e => e.type === Number(keyword))
                let newType = props.listTypeProduct.filter(e => e.id === Number(keyword))
                if (newType.length > 0) {
                    setnameKeyword(newType[0].name)
                }
            } else {
                newData = [...data];
            }
            setListProductSearch(newData)
        } catch (error) {

        }
    }

    useEffect(() => {
        getSearchProduct();
        if (props.listBrandProduct.length > 0 && props.listTypeProduct.length > 0) {
            console.log(typeSearch);
            let setHeader = () => (
                <h4 className='card-header mb-3'>Kết quả tìm kiếm
                    {typeSearch === 'brand'
                        ? ' sản phẩm của thương hiệu "' + nameKeyword + '"'
                        : typeSearch === 'type'
                            ? ' sản phẩm thuộc loại "' + nameKeyword + '"'
                            : typeSearch === 'name'
                                ? ' tên sản phẩm "' + keyword + '"'
                                : null}
                </h4>
            )
            setShowHeader(setHeader)
        }
    }, [keyword, props.listBrandProduct, props.listTypeProduct, typeSearch, nameKeyword])

    return (
        <>
            <div className='container'>
                {showHeader}
                <ShowProductWeb
                    listTypeProduct={props.listTypeProduct}
                    listBrandProduct={props.listBrandProduct}
                    listProduct={listProductSearch} listCart={props.listCart}
                    setListCart={props.setListCart}
                    listSize={props.listSize}
                    listColor={props.listColor}
                />
            </div>
        </>
    )
}

export default PageSearchProductWeb
