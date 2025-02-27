import "../App.css"

import Tools from '../components/Tools'
import ProductBox from "./ProductBox"
import Products from "../Data/Products"
const MainPage = () => {
    return (
        <>
            <div className="MainPage">

                <i style={{color:"white", position:"absolute", marginTop:"140px", fontSize:"40px", marginLeft:"280px"}}>Serving Anime, Movies, Figurines and Cards for 10 years!</i>
                    <img src="./left.png" className="arrow" />
                   
                    <div className="ProductBoxContainer">
                        {Products.map((p, key) => {
                            return (
                                <div key={key}>
                                    <ProductBox pic={p.image} desc={p.desc} price={p.price} />
                                </div>
                            )

                        })}
                    </div>


                

                <img src="./right.png" className="arroe" />
            </div>
        </>
    )
}

export default MainPage