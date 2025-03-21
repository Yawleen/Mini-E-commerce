import ProductsList from "./components/ProductsList";
import { useSelector } from "react-redux";
import ShoppingCart from "./assets/shopping-cart.svg";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./components/ModalContent";

function App() {
  const cart = useSelector(state => state.cart);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="min-h-screen bg-slate-800 min-w-[320px]">
        <div className="max-w-4xl mx-auto pt-14 px-6 pb-10">
          <button onClick={toggleModal} className="bg-slate-100 flex gap-x-2 px-4 py-2 ml-auto mb-8 rounded shadow-md">
            <img className="w-[18px]" src={ShoppingCart} alt="panier" />

            <span>
              <span className="font-bold">
                {cart.reduce((acc, currVal) => acc + currVal.quantity, 0)}{" "}
              </span>
              <span>
                article(s)
              </span>
            </span>
          </button>
          <ProductsList />
        </div>
      </div>
      {showModal && createPortal(<ModalContent closeModal={closeModal} />, document.body)}
    </>
  );
}

export default App;
