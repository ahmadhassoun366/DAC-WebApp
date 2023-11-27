import Button from "@/components/internal/button/button.component";
import Card from "@/components/internal/card/card.component";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";

export default function Stocks() {
  return (
    <section className=" ">
      <div className="py-4 flex items-center justify-between w-full border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Stocks
        </h2>
        <h4 className="text-xl text-gray-500">2023</h4>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3 p-5">
        <div className="text-center lg:text-left">
          <h4 className="text-lg font-medium">
            Available total amount of inventory: $1500
          </h4>
          <h4 className="text-lg text-blue-500 font-medium">
            Beginning inventory: $1500
          </h4>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
            Create Store
          </Button>
          <Button className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600">
            Create Shop
          </Button>
          <Button className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">
            Create Vehicle
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <section className="min-w-full divide-y divide-gray-200">
          <div className="flex justify-between p-4">
            {/* Icon Cards */}
            {[
              { title: "STORES", color: "blue" },
              { title: "SHOPS", color: "pink" },
              { title: "VEHICLES", color: "green" },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center flex-1 flex flex-col items-center justify-center`}
              >
                <div
                  className={`rounded-xl overflow-hidden bg-gradient-to-tr from-${item.color}-600 to-${item.color}-400 shadow-${item.color}-500/40 text-white shadow-lg grid place-items-center  h-16 w-16`}
                >
                  <IoStorefrontOutline size={40} />
                </div>
                <h1 className="text-xl font-semibold mt-2">{item.title}</h1>
                {/* down arrow */}
                <div className="flex justify-center items-center mt-2">
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500 mx-1"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {/* Columns for Items */}
          {["stock", "shop", "vehicle"].map((type, index) => (
            <div key={index} className="space-y-4">
              {[1, 2, 3].map((num) => (
                <Card
                  key={num}
                  title={`${type} Item ${String.fromCharCode(65 + num - 1)}`}
                  inventory={`${num * 50} Units`}
                  assets={`$${10 * num},000`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
