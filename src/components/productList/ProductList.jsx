import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"
const ProductList = () => {
    return (
        <div id="projects" className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects</h1>
                <p className="pl-desc">
                    Here are some of my study projects...
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
