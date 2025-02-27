import "../App.css"

import Tools from '../components/Tools'
const ProductBox = ({ pic, desc, price }) => {
    return (
        <>
            <div className="ProductBox">
                <div style={{ display: "flex", flexDirection: "column", marginTop: "3px" }}>
                    <img src={pic} />

                </div>
            </div>

            <div className="ProductDetails">
                
                    <p>{desc}</p>
                    <p>{price}</p>
            </div>
        </>
    )
}

export default ProductBox