import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

type CardProps = {
  title: string;
  inventory: string;
  assets: string;
};

export default function Card({ title, inventory, assets }: CardProps) {
  const cardId = uuidv4();

  return (
    <Link
      href={`/dashboard/pages/stocks/${cardId}`}
      passHref
      className="relative flex flex-col rounded-xl dark:bg-abrandc-dark-grey bg-abrandc-light-grey  shadow-md"
    >
      <div className="flex items-center justify-center pt-4 px-4 text-gray-700 dark:text-white">
        <p className="text-2xl font-semibold leading-normal text-blue-gray-600 ">{title}</p>
      </div>
      <div className="p-4 text-gray-700 dark:text-gray-300">
        <h4 className="text-lg font-medium leading-snug text-blue-gray-900">
          {inventory}
        </h4>
        <p className="text-sm leading-normal text-blue-gray-600 ">Inventory</p>
      </div>
      <div className="border-t border-blue-gray-50 p-4 text-gray-700 dark:text-gray-400">
        <h4 className="text-lg font-medium leading-snug text-blue-gray-900">
          {assets}
        </h4>
        <p className="text-sm leading-normal text-blue-gray-600">Assets</p>
      </div>
    </Link>
  );
}
