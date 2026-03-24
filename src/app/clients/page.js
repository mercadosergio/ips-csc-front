export async function getClients() {
  const response = await fetch("http://localhost:3000/clients");
  const data = await response.json();
  return data;
}

export default async function Orders() {
  const clients = await getClients();

  return (
    <main>
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-4">Lista de Clientes</h1>

        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Documento</th>
              <th className="py-2 px-4 border-b">Nombre Completo</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.document}</td>
                <td className="py-2 px-4 border-b">{item.fullName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
