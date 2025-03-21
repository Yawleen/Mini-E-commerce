import { useSelector, useDispatch } from "react-redux"
import { modifyQuantity, removeFromCart } from "../features/cart";

export default function ModalContent({ closeModal }) {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const maxQuantity = 100;

    const displaySelectOptions = () => {
        const options = [];

        for (let i = 1; i <= maxQuantity; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }

        return options;
    };

    const handleOnSelect = (e, itemID) => dispatch(modifyQuantity({ id: itemID, quantity: Number(e.target.value) }));

    const handleOnClick = (id) => {
        dispatch(removeFromCart({ id }))
    }

    return (
        <div
            onClick={closeModal}
            className="fixed inset-0 bg-slate-800/75 flex items-center justify-center px-5 min-w-[320px]"
        >
            <div onClick={(e) => e.stopPropagation()} className="bg-slate-200 text-slate-900 max-w-[600px] w-full p-2 rounded mb-[10vh]">
                <button onClick={closeModal} className="flex justify-center items-center ml-auto mb-2 bg-red-600 w-[20px] h-[20px] rounded pointer">
                    <span className="text-slate-100 font-bold text-[10px]">
                        X
                    </span>
                </button>

                <div className="px-4 pb-4">
                    {cart.length > 0 ? (
                        <ul className="flex flex-col gap-3 mb-4">
                            {cart.map(item => <li key={item.id} className="flex flex-wrap gap-4 justify-between items-center">
                                <div className="flex items-center gap-x-2">
                                    <img className="w-[80px] rounded" src={`/site-portfolio/projets/projets-react/Mini-E-commerce/images/${item.img}.png`} alt={item.title} />
                                    <p className="shrink-0 font-semibold w-[130px]">{item.title}</p>
                                </div>
                                <div className="flex gap-2">
                                    <select onChange={(e) => handleOnSelect(e, item.id)} className="rounded">
                                        {displaySelectOptions()}
                                    </select>
                                    <button onClick={() => handleOnClick(item.id)} className="bg-slate-900 text-slate-100 text-sm px-2 py-3 rounded pointer">
                                        Retirer du panier
                                    </button>
                                </div>
                            </li>)}
                        </ul>
                    ) : <p className="text-center font-semibold">Aucun article n'a été ajouté dans le panier.</p>}

                    {cart.length > 0 && <p>Total : <span className="font-bold">{cart.reduce((acc, currVal) => acc + (currVal.price * currVal.quantity), 0).toFixed(2)}$</span></p>}
                </div>
            </div>
        </div>
    )
}