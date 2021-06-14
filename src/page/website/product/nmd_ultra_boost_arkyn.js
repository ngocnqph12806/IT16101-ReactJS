import React, { useEffect, useState } from 'react'
import ShowProductWeb from '../../../view/website/component/ShowProduct'
import PageActionProduct from '../actionProduct';

const PageNmd_ultra_boost_arkyn = (props) => {

    const [listNmdUltraBoostArkyn, setListNmdUltraBoostArkyn] = useState([])

    let typeProduct = 'NMD - ULTRA BOOST - ARKYN'

    useEffect(() => {
        let newList = props.listProduct.filter(e => e.type === 7)
        setListNmdUltraBoostArkyn(newList);
    }, [props.listProduct])

    return (
        <>
            <PageActionProduct
                listProduct={listNmdUltraBoostArkyn}
                setListProduct={setListNmdUltraBoostArkyn}
                listTypeProduct={props.listTypeProduct}
                listBrandProduct={props.listBrandProduct}
            />
            <div id='main'>
                <h4 className='card-header'>{typeProduct}</h4>
                <ShowProductWeb
                    listTypeProduct={props.listTypeProduct}
                    listBrandProduct={props.listBrandProduct}
                    listProduct={listNmdUltraBoostArkyn} listCart={props.listCart}
                    setListCart={props.setListCart}
                    listSize={props.listSize}
                    listColor={props.listColor}
                />
            </div>
        </>
    )
}

export default PageNmd_ultra_boost_arkyn
