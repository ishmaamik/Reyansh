import "../App.css"

import Tools from '../components/Tools'
import ProductBox from "./ProductBox"
import Products from "../Data/Products"
const MainPage = () => {
    return (
        <>
            <div className="MainPage">
                <div>
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
                </div>
            </div>
        </>
    )
}

export default MainPage