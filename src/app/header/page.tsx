import Navbar from '../header/navbar';

export default function Header() {
  return (
    <header className="shadow-md bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold p-4">UCB Pharmacy</h1>
        <Navbar />
      </div>
    </header>
  );
}
