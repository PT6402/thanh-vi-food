import { Dialog } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  closeClear,
  removeCartItem,
} from "../../../context/dialogSlice";
import { useState } from "react";
export default function DetailProductContent() {
  const dialog = useSelector((state) => state.dialog);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(() => {
    const listItem = [...dialog.cart.listItem];
    if (listItem.length == 0) {
      return 0;
    } else {
      const idItem = dialog.data.id;
      const item = listItem.find(({ id }) => id == idItem);
      if (item) {
        return item?.quantity;
      } else {
        return 0;
      }
    }
  });
  const handleDecrement = () => {
    if (quantity == 0) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    const data = {
      id: dialog.data.id,
      name: dialog.data.name,
      quantity,
      price: dialog.data.price,
      imageSrc: dialog.data.imageSrc,
    };
    dispatch(addCartItem(data));
    dispatch(closeClear());
  };
  const handleCloseDialog = () => {
    dispatch(removeCartItem({ id: dialog.data.id }));
    dispatch(closeClear());
  };
  return (
    <>
      <div className="bg-white px-4 pt-5  ">
        <div className="w-full">
          <div className="mt-3 text-center  sm:mt-0 sm:text-left">
            <Dialog.Title
              as="h1"
              className="text-2xl font-semibold leading-6 text-gray-900"
            >
              {dialog?.title}
            </Dialog.Title>
            <div className="mt-2 overflow-auto max-h-96 w-full">
              <div className="max-w-sm mx-auto">
                <section className="text-gray-600 body-font w-full">
                  <div className=" mx-auto flex px-5   flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full  w-5/6 mb-10 md:mb-0">
                      <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={dialog.data.imageSrc}
                      />
                    </div>
                    <div className="lg:flex-grow  flex flex-col  items-center text-center">
                      <p className="mb-8 leading-relaxed">
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                        description topping product description topping product
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <div className="flex justify-center sm:justify-end   items-center w-full">
          {/* <label
            htmlFor="quantity-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label> */}
          <div className="relative flex items-center max-w-[8rem]  ">
            <button
              onClick={handleDecrement}
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              className="bg-indigo-500  hover:hover:bg-indigo-600 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="quantity-input"
              className="bg-indigo-500 border-x-0 border-gray-300 h-11 text-center text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 focus:border-transparent  focus:ring-0"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              onClick={handleIncrement}
              type="button"
              id="increment-button"
              className="bg-indigo-500  hover:hover:bg-indigo-600 border  rounded-e-lg p-3 h-11 focus:ring-transparent focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {quantity ? (
          <button
            onClick={handleAddToCart}
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500  sm:w-auto items-center mt-1 text-nowrap"
          >
            Add to cart
          </button>
        ) : (
          <button
            type="button"
            className="mt-1 inline-flex w-full justify-center self-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto text-nowrap"
            onClick={handleCloseDialog}
          >
            Close
          </button>
        )}
      </div>
    </>
  );
}
