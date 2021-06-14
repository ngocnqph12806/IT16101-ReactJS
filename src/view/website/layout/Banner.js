import React, { useEffect, useState } from 'react'

const Banner = ({ listBanner }) => {

    const [clickBanner, setClickBanner] = useState(0)

    setTimeout(() => {
        setClickBanner(clickBanner === (listBanner.length - 1) ? 0 : clickBanner + 1)
    }, 2000);

    const onClickBanner = (index) => {
        setClickBanner(index)
    }

    return (
        <>
            <div id="carouselExampleCaptions" className="container-fluid carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {
                        listBanner.map((banner, index) => (
                            index === clickBanner
                                ? (
                                    <button key={index} type="button" data-bs-target="#carouselExampleCaptions" onClick={() => onClickBanner(index)}
                                        data-bs-slide-to={index} className="active" aria-current="true" aria-label={`Slide ${index + 1}`} />
                                )
                                : (
                                    <button key={index} type="button" data-bs-target="#carouselExampleCaptions" onClick={() => onClickBanner(index)}
                                        data-bs-slide-to={index} aria-current="true" aria-label={`Slide ${index + 1}`} />
                                )
                        ))
                    }
                </div>
                <div className="carousel-inner">
                    {
                        listBanner.map((banner, index) => (
                            index === clickBanner
                                ? (
                                    <div key={index} className="carousel-item active">
                                        <img src={banner.images} className="d-block w-100" alt={`Banner ${index + 1}`} />
                                    </div>
                                )
                                : (
                                    <div key={index} className="carousel-item">
                                        <img src={banner.images} className="d-block w-100" alt={`Banner ${index + 1}`} />
                                    </div>
                                )
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Banner
