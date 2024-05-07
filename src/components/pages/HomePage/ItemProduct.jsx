import { useDispatch, useSelector } from "react-redux";
import { openWithContentFull } from "../../../context/dialogSlice";
import DetailProductContent from "../../model/DetailProductContent";

/* eslint-disable react/prop-types */
export default function ItemProduct({ item }) {
  const dialog = useSelector((state) => state.dialog.cart);
  const dispatch = useDispatch();
  const handleShowDetail = () => {
    const data = {
      data: {
        id: item.id,
        name: item.name,
        price: item.price,
        imageSrc: item.imageSrc,
      },
      content: DetailProductContent,
      title: (
        <div className="flex justify-between px-10">
          <p>{item.name}</p>
          <p>{item.price}k</p>
        </div>
      ),
    };
    dispatch(openWithContentFull(data));
  };
  const handleCheckItem = () => {
    const listItem = dialog.listItem;
    const checkItem = listItem.find(({ id }) => id == item.id);
    if (checkItem) {
      return "border-indigo-500";
    } else {
      return "border-gray-300";
    }
  };
  return (
    <div
      className={`cursor-pointer border-2  p-3 rounded-xl ${handleCheckItem()}`}
    >
      <div className="group" onClick={handleShowDetail}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={item.imageSrc}
            alt={item.imageAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="mt-4 text-xl text-gray-700">{item.name}</p>
          <p className="mt-4 text-lg font-medium text-gray-900">
            {item.price}k
          </p>
        </div>
      </div>
    </div>
  );
}
