import { Link } from 'react-router-dom'
import React from 'react'

const ColectionWeb = ({ listTypeProduct }) => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        listTypeProduct.map(e => (
                            <div className='col-xs-6 col-sm-6 col-md-4 col-lg-4 mb-4'>
                                <Link to={`/product/${e.id}`}>
                                    <div className="card">
                                        <img src={e.img}
                                            className="card-img-top" alt={e.name} />
                                        <div className='des_items_cat transition'>
                                            <h3>{e.name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ColectionWeb
