import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCart,
  deCrementCartItem,
  inCrementCartItem,
  openWithContentFull,
  removeCartItem,
} from "../../../context/dialogSlice";
import cartEmpty from "../../../assets/images/cart-empty.png";
import NotificationContent from "../../model/NotificationContent";
export default function DialogCartComponent() {
  const dialog = useSelector((state) => state.dialog);
  const [quantity, setQuantity] = useState();
  const dispatch = useDispatch();
  const handleCloseCart = () => {
    dispatch(closeCart());
  };
  const handleDeCrementCart = (id) => {
    return dispatch(
      deCrementCartItem({
        id,
      })
    );
  };
  const handleInCrementCart = (id) => {
    return dispatch(
      inCrementCartItem({
        id,
      })
    );
  };
  const handleSubtotal = () => {
    const listItem = [...dialog.cart.listItem];
    return listItem.reduce(
      (accumulator, currentValue) =>
        currentValue.quantity * currentValue.price + accumulator,
      0
    );
  };
  const handleSubmit = () => {
    dispatch(closeCart());
    const setup = {
      content: NotificationContent,
      data: null,
    };
    dispatch(openWithContentFull(setup));
  };
  return (
    <Transition.Root show={dialog.cart?.isOpen} as={Fragment}>
      <Dialog className="relative z-10" onClose={() => null}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-hidden bg-white shadow-xl scale-95 rounded-xl">
                    <div className="flex flex-1 overflow-y-auto px-4 pt-6 sm:px-6 flex-col">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-2xl font-medium text-gray-900">
                          Order
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={handleCloseCart}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      {dialog.cart.listItem.length > 0 && (
                        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {dialog.cart.listItem.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          {/* <a href={product.href}> */}
                                          {product.name}
                                          {/* </a> */}
                                        </h3>
                                        <p className="ml-4">{product.price}k</p>
                                      </div>
                                      <div className="mt-1 text-sm text-gray-500">
                                        <div className="flex justify-start items-center">
                                          <div className="relative flex items-center max-w-[6rem]  ">
                                            <button
                                              onClick={() =>
                                                handleDeCrementCart(product.id)
                                              }
                                              type="button"
                                              id="decrement-button"
                                              data-input-counter-decrement="quantity-input"
                                              className="bg-indigo-500  hover:hover:bg-indigo-600 border border-gray-300 rounded-s-lg p-2 h-9 focus:ring-gray-100 focus:ring-2 focus:outline-none "
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
                                              className="bg-indigo-500 border-x-0 border-gray-300 h-9 text-center text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 focus:border-transparent  focus:ring-0"
                                              value={
                                                quantity || product.quantity
                                              }
                                              onChange={(e) =>
                                                setQuantity(e.target.value)
                                              }
                                              // defaultValue={product.quantity}
                                            />
                                            <button
                                              onClick={() =>
                                                handleInCrementCart(product.id)
                                              }
                                              type="button"
                                              id="increment-button"
                                              className="bg-indigo-500  hover:hover:bg-indigo-600 border  rounded-e-lg p-2 h-9 focus:ring-transparent focus:ring-2 focus:outline-none"
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
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-start sm:justify-end text-sm">
                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium px-5 rounded-lg py-2 bg-red-500 text-white hover:bg-red-600"
                                          onClick={() =>
                                            dispatch(
                                              removeCartItem({ id: product.id })
                                            )
                                          }
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      {dialog.cart.listItem.length == 0 && (
                        <>
                          <img src={cartEmpty} />
                        </>
                      )}
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{handleSubtotal()}k</p>
                      </div>

                      <div className="mt-6">
                        <button
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 disabled:bg-gray-400"
                          disabled={dialog.cart.listItem.length == 0}
                          onClick={handleSubmit}
                        >
                          Order for Thanh vi
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
