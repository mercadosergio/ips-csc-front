export default function Header() {
  return (
    <header className="text-white p-4 flex items-center justify-between">
      <img
        alt="Logo"
        src="https://i.ytimg.com/vi/GdcbKO8D7CQ/maxresdefault.jpg"
        width={300}
      ></img>
      <h1 className="text-xl font-bold">My Application</h1>
    </header>
  );
}
