import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-3 justify-center items-center">
      <Link href="/clients" className="text-blue-500 hover:underline">
        Clients
      </Link>
      <Link href="/orders" className="text-blue-500 hover:underline">
        Orders
      </Link>
    </div>
  );
}
