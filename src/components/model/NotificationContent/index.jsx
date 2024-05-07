import { Dialog } from "@headlessui/react";
import { useRef } from "react";
import IconPhone from "../../common/icons/IconPhone";
import IconName from "../../common/icons/IconName";
import IconNote from "../../common/icons/IconNote";
import { useDispatch } from "react-redux";
import { closeClear } from "../../../context/dialogSlice";

export default function NotificationContent() {
  const dispatch = useDispatch();
  const phoneInput = useRef();
  const nameInput = useRef();
  return (
    <>
      <div className="bg-white px-4 pt-5  ">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Thông tin
            </Dialog.Title>
            <div className="mt-2">
              <div className="max-w-sm mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 -left-2 flex items-center ps-3.5 pointer-events-none">
                    <IconName size={7} />
                  </div>
                  <input
                    type="text"
                    id="phone-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5   py-2"
                    placeholder="Ten HD"
                    ref={nameInput}
                  />
                </div>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 start-0 top-0 -left-2 flex items-center ps-3.5 pointer-events-none">
                    <IconPhone size={7} />
                  </div>
                  <input
                    type="text"
                    id="phone-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5   py-2"
                    placeholder="Phone HD"
                    ref={phoneInput}
                  />
                </div>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 start-0 top-0 -left-2 flex items-center ps-3.5 pointer-events-none">
                    <IconNote size={7} />
                  </div>
                  {/* <textarea
                    type="text"
                    id="phone-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5   py-2"
                    placeholder="enter phone"
                    ref={phoneInput}
                  ></textarea> */}
                  <textarea
                    id="message"
                    rows="4"
                    className=" ps-10 block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-xl"
                    placeholder="HD co the nhan thoi gian giao nha"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          // onClick={handleCloseDialog}
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto items-center"
        >
          Order thui
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={() => dispatch(closeClear())}
        >
          Close
        </button>
      </div>
    </>
  );
}
