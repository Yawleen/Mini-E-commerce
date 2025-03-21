import { useSelector, useDispatch } from "react-redux";
import { getProductsList } from "../features/products";
import { addToCart } from "../features/cart";

export default function ProductsList() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleOnClick = (item) => dispatch(addToCart(item));


    if (!products.items) {
        dispatch(getProductsList());
    }

    return (
        <>
            <h1 className="text-slate-100 text-2xl mb-6">Nos produits</h1>
            <ul className="grid min-[500px]:grid-cols-2 md:grid-cols-3 gap-4">
                {products.items && products.items.map(product => <li key={product.id} className="flex flex-col p-4 bg-slate-200 rounded">
                    <img className="mb-4" src={`/site-portfolio/projets/projets-react/Mini-E-commerce/images/${product.img}.png`} alt={product.title} />
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-slate-700 text-lg">{product.title}</p>
                        <p className="text-slate-900 font-bold">{product.price}$</p>
                    </div>
                    <button onClick={() => handleOnClick(product)} className={`${product.picked ? "bg-green-700" : "bg-slate-600"} w-full text-slate-100 px-2 inline-flex items-center justify-center rounded p-2 mt-auto mr-2 pointer`}>
                        {product.picked ? "Article ajouté au panier" : "Ajouter au panier"}
                    </button>
                </li>)}
            </ul>
        </>
    )
}