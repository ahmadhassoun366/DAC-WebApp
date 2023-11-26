import { GrDeliver } from "react-icons/gr";
import { RiStore3Fill } from "react-icons/ri";
import { MdStorefront } from "react-icons/md";

export default function Stocks() {
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-100 px-5 py-1">
        <h2 className="text-2xl font-bold">Stocks</h2>
        <h4>2023</h4>
      </div>
      <div className="flex lg:justify-between lg:flex-row flex-col lg:items-end lg:pt-5 lg:pb-2 lg:px-5 items-center gap-3 justify-center">
        <div className="lg:text-start text-center">
          <h4>Available total amount of inventory: $1500</h4>
          <h4 className="text-blue-500">Beginning inventory: $1500</h4>
        </div>
        <div className="flex gap-2 mb-2 lg:mb-0">
          <button className="bg-red-500 rounded p-1 font-medium">Create Store</button>
          <button className="bg-blue-500 rounded p-1 font-medium">Create Shope</button>
          <button className="bg-green-500 rounded p-1 font-medium">Create Vehicle</button>
        </div>
      </div>
      <div className="px-5">
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
              <td className="text-center p-3">
                <div className="flex lg:flex-row border-2 rounded p-2 hover:drop-shadow flex-col">
                  <div className="m-auto w-2/6">
                    <div className="flex justify-center"><RiStore3Fill size={50} /></div>
                    <p className="text-xs text-center font-bold">Ahmad Store</p>
                  </div>
                  <div className="w-4/6 items-center flex flex-col justify-center m-auto">
                    <h1>Inventory: 123445</h1>
                    <h1>Assets: 43242</h1>
                  </div>
                </div>
              </td>
              <td className="text-center p-3">
                <div className="flex lg:flex-row border-2 rounded p-2 hover:drop-shadow flex-col">
                  <div className="m-auto w-2/6">
                    <div className="flex justify-center"><MdStorefront size={50} /></div>
                    <p className="text-xs font-bold">SHOP</p>
                  </div>
                  <div className="w-4/6 items-center flex flex-col justify-center m-auto">
                    <h1>Inventory: 123445</h1>
                    <h1>Assets: 43242</h1>
                  </div>
                </div>
              </td>
              <td className="text-center p-3">
                <div className="flex lg:flex-row border-2 rounded p-2 hover:drop-shadow flex-col">
                  <div className="m-auto w-2/6">
                    <div className="flex justify-center"><GrDeliver size={50} /></div>
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
              <td className="text-center p-3">
                <div className="flex lg:flex-row border-2 rounded p-2 hover:drop-shadow flex-col">
                  <div className="m-auto w-2/6">
                    <div className="flex justify-center"><RiStore3Fill size={50} /></div>
                    <p className="text-xs text-center font-bold">yousef Store</p>
                  </div>
                  <div className="w-4/6 items-center flex flex-col justify-center m-auto">
                    <h1>Inventory: 123445</h1>
                    <h1>Assets: 43242</h1>
                  </div>
                </div>
              </td>
              <td className="text-center p-3">
                <div className="flex lg:flex-row border-2 rounded p-2 hover:drop-shadow flex-col">
                  <div className="m-auto w-2/6">
                    <div className="flex justify-center"><MdStorefront size={50} /></div>
                    <p className="text-xs font-bold">SHOP</p>
                  </div>
                  <div className="w-4/6 items-center flex flex-col justify-center m-auto">
                    <h1>Inventory: 123445</h1>
                    <h1>Assets: 43242</h1>
                  </div>
                </div>
              </td>
              <td className="text-center p-3">
                <div className="flex lg:flex-row border-2 rounded p-2 hover:drop-shadow flex-col">
                  <div className="m-auto w-2/6">
                    <div className="flex justify-center"><GrDeliver size={50} /></div>
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
    </div>

  );
}
