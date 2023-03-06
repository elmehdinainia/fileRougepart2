//read data frome stor and despatch actions

import { useDispatch, useSelector } from "react-redux";
import { selectCart, setItemQuantity, deleteItems } from "../../../store/slices/cart.sclice";
const imagePath = 'http://localhost:5500/images'
const Shoppingcart = () => {

  const cart = useSelector(selectCart)
  const dispatch = useDispatch()

  return (
    <div className="bg-gray-100 absolute z-50">
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="bg-white w-3/4 px-10 py-10">
            <div className="flex justify-between">
              <h1 className="font-semibold text-2xl">SHOPPING CART</h1>
              <h2 className="font-semibold text-2xl">{cart.length} items</h2>
            </div>
            <div className="flex justify-between mt-4 ">
              <h3 className="font-semibold text-gray-500 text-xs  text-left w-3/6">Meale Details</h3>
              <h3 className="font-semibold text-gray-500 text-xs  text-left w-2/6">Qantity</h3>
              <h3 className="font-semibold text-gray-500 text-xs  text-left w-1/6">Total</h3>
            </div>

            {cart.length === 0 ?
              <h1>No product in cart</h1>
              : cart.map(item => (<div key={item._id} className="flex justify-between hover:bg-gray-100 -mx-8 px-6 py-5 -mx-8 px-6 py-5">
                <div className="flex  w-3/6 ">
                  <div className="w-20">
                    <img class="h-24" src={imagePath + "/" + item.images[0]} alt="humberg" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-bold text-gray-500 text-sm">{item.name}</span>
                    <span className="font-semibold text-gray-600 text-xs ">{item.description}</span>
                  </div>
                </div>
                <div className="flex justify-start w-2/6 ">
                  <svg
                    onClick={() => {
                      dispatch(
                        setItemQuantity({ _id: item._id, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity })
                      )
                    }}
                    className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input className="mx-2 border text-center w-8 " type="text" value={item.quantity} readOnly min={0} />
                  <svg
                    onClick={() => {
                      dispatch(
                        setItemQuantity({ _id: item._id, quantity: item.quantity + 1 })
                      )
                    }}
                    className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <div className="flex justify-between items-center w-1/6">
                  <span> {item.price * item.quantity}$</span>
                  <img onClick={() => dispatch(deleteItems({ _id: item._id }))} className="w-6" src="../../../public/assets/delete-cart .png" />
                </div>
              </div>))}
            <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
              Continue Shopping
            </a>
          </div>
          <div className="flex flex-col justify-between my-4 mx-6  ">
            <h1>SUMMARY</h1>
            <div>
              <span>Meals : {cart.reduce((accumulator, object) => {
                return accumulator + object.quantity;
              }, 0)}</span>
            </div>
            <div>
              <span>Total : {cart.reduce((accumulator, object) => { return accumulator + object.price * object.quantity; }, 0)} $</span>
            </div>
            <div className="flex flex-col ">
              <label className="font-semibold mb-3">Shipping</label>
              <select>
                <option>en delevry</option>
                <option>by strip</option>
              </select>
            </div>
            <div >
              <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full ">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shoppingcart;