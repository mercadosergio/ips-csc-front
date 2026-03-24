export default function Orders() {
  const orderList = [
    { id: 1, client: "John Doe", total: 100 },
    { id: 2, client: "Jane Smith", total: 150 },
    { id: 3, client: "Bob Johnson", total: 200 },
  ];

  return (
    <main className="flex justify-center items-center">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-4">Lista de Ordenes</h1>

        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Cliente</th>
              <th className="py-2 px-4 border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order) => (
              <tr key={order.id}>
                <td className="py-2 px-4 border-b">{order.id}</td>
                <td className="py-2 px-4 border-b">{order.client.name}</td>
                <td className="py-2 px-4 border-b">${order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
