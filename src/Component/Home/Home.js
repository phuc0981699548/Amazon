import React from 'react'
import GoToTop from '../GoToTop/GoToTop'
import Header from '../Header/Header'
import Product from '../Product/Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <Header />
            <img 
                className="home-image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="home-img"
            />
            <div className="home-row">
                <Product
                    id="1"
                    title="Iphone 13 Pro Max"
                    price={1242.21}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SL1500_.jpg"
                />
                <Product
                    id="2"
                    title="Playstation 5"
                    price={1424.99}
                    rating={5}
                    image="https://cf.shopee.vn/file/7fca86c160a6149dd75cdd4ccdc6156a"
                />

            </div>

            <div className="home-row">
                <Product
                    id="3"
                    title="Ipad Pro 2020 11inch 128GB WI-FI"
                    price={2722.22}
                    rating={5}
                    image="https://cdn.tgdd.vn/Products/Images/522/238645/ipad-pro-m1-129-inch-wifi-sliver-600x600.jpg"
                />
                <Product
                    id="4"
                    title="Apple Watch Series 7"
                    price={927.23}
                    rating={5}
                    image="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/19/637361526446089879_Apple%C2%A0Watch%20SE%20GPS%C2%A044mm%20den%201.png"
                />
                 <Product
                    id="5"
                    title="Macbook Pro M1 2021"
                    price={1223.99}
                    rating={5}
                    image="https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-16-2021-1.jpg"
                />

            </div>
            <div className="home-row">
                <Product
                    id="6"
                    title="Samsung LC49HG90DMEXXV 49 inch/WQHD/VA/144Hz"
                    price={842.21}
                    rating={5}
                    image="https://anphat.com.vn/media/product/23772_lc49hg90dmnxza_gallery1_0607.jpg"
                />
            

            </div>
            <GoToTop />

        </div>
    )
}

export default Home
