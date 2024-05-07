import { useEffect, useState } from "react";
import products from "./Data";
import ItemProduct from "./ItemProduct";
import { useSelector } from "react-redux";

export default function HomePage() {
  const collection = useSelector((state) => state.collection);
  const [collectionItem, setCollectionItem] = useState([]);
  const handleChange = () => {
    if (collection.isEat) {
      const listItem = products.filter(({ type }) => type == "EAT");
      setCollectionItem(listItem);
    } else {
      const listItem = products.filter(({ type }) => type == "DRINK");
      setCollectionItem(listItem);
    }
  };
  useEffect(() => {
    handleChange();
  }, [collection.isEat]);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {collectionItem.map((product) => (
            <ItemProduct key={product.id} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
