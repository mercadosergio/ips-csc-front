export async function getOrders() {
  const response = await fetch("http://localhost:3000/orders");
  const data = await response.json();
  return data;
}

export default async function Orders() {
  const orders = await getOrders();

  return (
    <main>
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-4">Lista de Ordenes</h1>

        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Cliente</th>
              <th className="py-2 px-4 border-b">Fecha de orden</th>
              <th className="py-2 px-4 border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-2 px-4 border-b">{order.id}</td>
                <td className="py-2 px-4 border-b">{order.client.name}</td>
                <td className="py-2 px-4 border-b">{order.createdAt}</td>
                <td className="py-2 px-4 border-b">${order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
