import { GrDeliver } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import Button from "@/components/internal/button/button.component";
import { CiDeliveryTruck } from "react-icons/ci";

export default function Stocks() {
  return (
    <section className="">
      <div className=" py-1 flex  items-center justify-between  w-full">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Stocks
        </h2>
        <h4 className="text-xl text-gray-500">2023</h4>
      </div>
      <div className="flex lg:justify-between lg:flex-row flex-col lg:items-end lg:pt-5 lg:pb-2  items-center gap-3 justify-center">
        <div className="lg:text-start text-center">
          <h4>Available total amount of inventory: $1500</h4>
          <h4 className="text-blue-500">Beginning inventory: $1500</h4>
        </div>
        <div className="flex gap-2 mb-2 lg:mb-0">
          <Button className="blue">Create Store</Button>
          <Button className="secondary">Create Shope</Button>
          <Button className="secondary">Create Vehicle</Button>
        </div>
      </div>
      <div className="">
        <table className="table-fixed w-full divide-y divide-gray-200">
          <thead className="bg-abrandc-light-grey">
            <tr>
              <th className="py-2">STORE</th>
              <th className="py-2">SHOP</th>
              <th className="py-2">VEHICLE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center py-3">
                <div className="flex lg:flex-row border-2 rounded p-2 hover:drop-shadow flex-col">
                  <div className="m-auto lg:w-2/6">
                    <div className="flex justify-center">
                      <IoStorefrontOutline size={50} />
                    </div>
                    <p className="text-xs text-center font-bold">Ahmad Store</p>
                  </div>
                  <div className="w-4/6 items-center flex flex-col justify-center m-auto">
                    <h1>Inventory: 123445</h1>
                    <h1>Assets: 43242</h1>
                  </div>
                </div>
              </td>
              <td className="text-center py-3">
                <div className="flex lg:flex-row border-2 rounded p-2 hover:drop-shadow flex-col">
                  <div className="m-auto lg:w-2/6">
                    <div className="flex justify-center">
                      <MdOutlineShoppingCart size={50} />
                    </div>
                    <p className="text-xs font-bold">SHOP</p>
                  </div>
                  <div className="w-4/6 items-center flex flex-col justify-center m-auto">
                    <h1>Inventory: 123445</h1>
                    <h1>Assets: 43242</h1>
                  </div>
                </div>
              </td>
              <td className="text-center py-3">
                <div className="flex lg:flex-row border-2 rounded p-2 hover:drop-shadow flex-col">
                  <div className="m-auto lg:w-2/6">
                    <div className="flex justify-center">
                      <CiDeliveryTruck size={50} />
                    </div>
                    <p className="text-xs font-bold">VEHICLE</p>
                  </div>
                  <div className="w-4/6 items-center flex flex-col justify-center m-auto">
                    <h1>Inventory: 123445</h1>
                    <h1>Assets: 43242</h1>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-center py-3">
                <div className="flex lg:flex-row border-2 rounded p-2 hover:drop-shadow flex-col">
                  <div className="m-auto lg:w-2/6">
                    <div className="flex justify-center">
                      <IoStorefrontOutline size={50} />
                    </div>
                    <p className="text-xs text-center font-bold">
                      yousef Store
                    </p>
                  </div>
                  <div className="w-4/6 items-center flex flex-col justify-center m-auto">
                    <h1>Inventory: 123445</h1>
                    <h1>Assets: 43242</h1>
                  </div>
                </div>
              </td>
              <td className="text-center py-3">
                <div className="flex lg:flex-row border-2 rounded p-2 hover:drop-shadow flex-col">
                  <div className="m-auto lg:w-2/6">
                    <div className="flex justify-center">
                      <MdOutlineShoppingCart size={50} />
                    </div>
                    <p className="text-xs font-bold">SHOP</p>
                  </div>
                  <div className="w-4/6 items-center flex flex-col justify-center m-auto">
                    <h1>Inventory: 123445</h1>
                    <h1>Assets: 43242</h1>
                  </div>
                </div>
              </td>
              <td className="text-center py-3">
                <div className="flex lg:flex-row border-2 rounded p-2 hover:drop-shadow flex-col">
                  <div className="m-auto lg:w-2/6">
                    <div className="flex justify-center">
                      <CiDeliveryTruck size={50} />
                    </div>
                    <p className="text-xs font-bold">VEHICLE</p>
                  </div>
                  <div className="w-4/6 items-center flex flex-col justify-center m-auto">
                    <h1>Inventory: 123445</h1>
                    <h1>Assets: 43242</h1>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
