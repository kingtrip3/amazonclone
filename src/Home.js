import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
            <div className="home_row">
                <Product 
                id="12321351"
                title="The Lean Startup" 
                price={29.99} 
                image= "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating= {5}  
                />
                <Product
                id="49538094"
                title="Kendwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and  Whisk, 5 Litre Glass Bowl"
                price={239.00}
                image="https://i5.walmartimages.ca/images/Enlarge/001/5_2/999999-050946000015_2.jpg"
                rating={4}
                 />
            </div>

            <div className="home_row">
                <Product 
                    id="32534253345"
                    title="Fitbit Charge 4 - Fitness Tracker"
                    price={199.99}
                    rating={3}
                    image="https://www.fitbit.com/global/content/dam/fitbit/global/pdp/charge-4/device-360/black/prod0.png"
                />
                <Product 
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={99.98}
                    rating={3}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product 
                    id="32543553345"
                    title="New Apple iPad Pro (12.9 inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={1299.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>

            <div className="home_row">
                <Product 
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved Gaming Monitor"
                    price={1699.99}
                    rating={3}
                    image="https://multimedia.bbycastatic.ca/multimedia/products/500x500/136/13607/13607591.jpg"
                />
            </div>
          </div>
        </div>
    )
}

export default Home