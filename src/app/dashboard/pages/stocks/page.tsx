import Button from "@/components/internal/button/button.component";
import Card from "@/components/internal/card/card.component";
import Link from "next/link";
export default function Stocks() {
  return (
    <section className="container mx-auto px-4">
      <div className="py-4 flex items-center justify-between w-full">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Stocks
        </h2>
        <h4 className="text-xl text-gray-500">2023</h4>
      </div>
      <div className="flex lg:justify-between lg:flex-row flex-col lg:items-end lg:pt-5 lg:pb-2 items-center gap-3 justify-center">
        <div className="lg:text-start text-center">
          <h4>Available total amount of inventory: $1500</h4>
          <h4 className="text-blue-500">Beginning inventory: $1500</h4>
        </div>
        <div className="flex gap-2 mb-2 lg:mb-0">
          <Button className="blue">Create Store</Button>
          <Button className="secondary">Create Shop</Button>
          <Button className="secondary">Create Vehicle</Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-abrandc-light-grey">
            <tr>
              <th className="py-2 text-center">STORE</th>
              <th className="py-2 text-center">SHOP</th>
              <th className="py-2 text-center">VEHICLE</th>
            </tr>
          </thead>
        </table>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          {/* Column for Stock Items */}
          <div className="md:col-span-1 space-y-4">
            <Card
              title="Stock Item A"
              inventory="150 Units"
              assets="$10,000"
              type="stock"
            />
            {/* Add more Stock Cards here */}
          </div>

          {/* Column for Shop Items */}
          <div className="md:col-span-1 space-y-4">
            <Card
              title="Shop Item B"
              inventory="200 Items"
              assets="$20,000"
              type="shop"
            />
            <Card
              title="Shop Item B"
              inventory="200 Items"
              assets="$20,000"
              type="shop"
            />
            <Card
              title="Shop Item B"
              inventory="200 Items"
              assets="$20,000"
              type="shop"
            />
            {/* Add more Shop Cards here */}
          </div>

          {/* Column for Vehicle Items */}
          <div className="md:col-span-1 space-y-4">
            <Card
              title="Vehicle Item C"
              inventory="10 Vehicles"
              assets="$50,000"
              type="vehicle"
            />
            {/* Add more Vehicle Cards here */}
          </div>
        </div>
      </div>
    </section>
  );
}
