import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"
const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire.</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde placeat similique aliquid hic perferendis, maxime, laboriosam ullam nisi voluptates ea sint corrupti tempora reiciendis, illum neque sit nemo error soluta?
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}

            </div>
        </div>
    )
}

export default ProductList
