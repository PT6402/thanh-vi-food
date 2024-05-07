import { Outlet } from "react-router-dom";
import Header from "./Header";
import DialogComponet from "../../common/DialogComponent";
import CartComponent from "../../common/DialogCartComponent";

export default function DefautlLayout() {
  return (
    <>
      <DialogComponet />
      <CartComponent />
      <div className=" dark:bg-boxdark-2 dark:text-bodydark">
        <div className=" flex h-screen overflow-hidden">
          <div className="relative flex flex-col flex-1">
            <Header />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ">
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
                  <Outlet />
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
