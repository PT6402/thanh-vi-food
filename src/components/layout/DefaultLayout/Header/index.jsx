import { Link } from "react-router-dom";
import IconCart from "../../../common/icons/IconCart";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../../../context/dialogSlice";
import { changeCollection } from "../../../../context/collectionSlice";
export default function Header() {
  const collection = useSelector((state) => state.collection);
  const dispatch = useDispatch();
  const handleOpenCart = () => {
    dispatch(openCart());
  };
  const dialog = useSelector((state) => state.dialog.cart);
  const handleChangeCollection = (title) => {
    if (
      (collection.isEat && title == "EAT") ||
      (!collection.isEat && title == "DRINK")
    ) {
      return "bg-indigo-500 text-white focus:outline-none";
    } else {
      return "bg-gray-100 hover:bg-gray-300";
    }
  };
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex p-2 flex-col  items-center ">
        <Link
          className="flex title-font font-medium justify-start text-gray-900 item-center w-full"
          to={"/"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl flex justify-center items-center">
            Thanh Vi Food
          </span>
        </Link>
        <div className="flex justify-between flex-1 items-center w-full mt-2 ">
          <nav className="flex  items-center text-base  justify-center rounded-lg overflow-hidden border-2 border-indigo-200 p-1">
            <div className="flex  rounded overflow-hidden ">
              <button
                className={
                  "py-2 px-5 duration-150 " + handleChangeCollection("EAT")
                }
                onClick={() => dispatch(changeCollection())}
              >
                <p className={`min-w-10 font-bold`}>Eat</p>
              </button>
              <button
                className={
                  "py-2 px-5  duration-150 " + handleChangeCollection("DRINK")
                }
                onClick={() => dispatch(changeCollection())}
              >
                <p className={`min-w-10 font-bold`}>Drink</p>
              </button>
            </div>
          </nav>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 mr-2">
            <button
              className="inline-flex items-left bg-gray-100 border-0 py-3 px-3 focus:outline-none hover:bg-gray-200 rounded-lg text-base  relative"
              onClick={handleOpenCart}
            >
              {dialog.listItem.length > 0 && (
                <div className="absolute w-full h-full -top-3 -right-3 flex justify-end items-start ">
                  <div className="  border p-1 px-3 rounded-full scale-90 bg-red-400 text-white font-bold">
                    {dialog.listItem.length}
                  </div>
                </div>
              )}
              <IconCart size={40} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
