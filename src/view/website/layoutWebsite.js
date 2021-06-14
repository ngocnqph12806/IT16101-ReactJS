import React from 'react'
import FooterWeb from './layout/Footer'
import HeaderWeb from './layout/Header'

const LayoutWebsite = (props) => {
    return (
        <>
            <HeaderWeb {...props} />
            {props.children}
            <FooterWeb />
        </>
    )
}

export default LayoutWebsite
