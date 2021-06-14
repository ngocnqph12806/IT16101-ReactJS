import React from 'react'

const PageActionProduct = ({ listProduct, setListProduct, listBrandProduct, listTypeProduct }) => {

    const onChangeSortPrice = (e) => {
        let newData = [...listProduct];
        for (let i = 0; i < newData.length; i++) {
            for (let j = 0; j < newData.length; j++) {
                let priceI = Number(newData[i].price);
                let priceJ = Number(newData[j].price);
                if (priceI > priceJ) {
                    let tmp = newData[i];
                    newData[i] = newData[j]
                    newData[j] = tmp;
                }
            }
        }
        if (e.target.value === 'PriceASC') {
            setListProduct([...newData].reverse());
        } else {
            setListProduct(newData);
        }
    }

    const onChangeSortName = (e) => {
        let newData = [...listProduct];
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
        if (e.target.value === 'NameAZ') {
            setListProduct([...newData].reverse());
        } else {
            setListProduct(newData);
        }
    }

    return (
        <div style={{ maxWidth: '300px', position: 'absolute', padding: '2rem' }}>
            <h4 className='card-header'>Sắp xếp sản phẩm</h4>
            <div className='card-body'>
                <select className="form-select mb-3" onChange={onChangeSortPrice}>
                    <option value='PriceASC'>Giá tăng dần</option>
                    <option value='PriceDESC'>Giá giảm dần</option>
                </select>
                <select className="form-select mb-3" onChange={onChangeSortName}>
                    <option value='NameAZ'>Tên từ A-Z</option>
                    <option value='NameZA'>Tên từ Z-A</option>
                </select>
            </div>
            {/* <h4 className='card-header'>Lọc sản phẩm</h4>
            <div className='card-body'> */}
                {/* <span className='cart-title fs-4'>Thương hiệu</span>
                <select className="form-select mb-3" onChange={onChangeFillBrand}>
                    <option value='allbrad'>Tất cả sản phẩm</option>
                    {
                        listBrandProduct.map(brand => (
                            <option value={brand.name}>{brand.name}</option>
                        ))
                    }
                </select>
                <span className='cart-title fs-4'>Loại sản phẩm</span>
                <select className="form-select mb-3" onChange={onChangeFillType}>
                    <option value='alltype'>Tất cả sản phẩm</option>
                    {
                        listTypeProduct.map(type => (
                            <option value={type.name}>{type.name}</option>
                        ))
                    }
                </select> */}
                {/* <span className='cart-title fs-4'>Khoảng giá</span>
                <select className="form-select mb-3" onChange={onChangeFillAboutPrice}>
                    <option value='allprice'>Tất cả sản phẩm</option>
                    <option value='0-1m'>0 - 1 triệu đồng</option>
                    <option value='1-3m'>1 - 3 triệu đồng</option>
                    <option value='3-5m'>3 - 5 triệu đồng</option>
                    <option value='5-10m'>4 - 10 triệu đồng</option>
                    <option value='nho20'>Nhỏ hơn 20 triệu đồng</option>
                    <option value='lon20'>Lớn hơn 20 triệu đồng</option>
                </select>
            </div> */}
        </div>
    )
}

export default PageActionProduct
