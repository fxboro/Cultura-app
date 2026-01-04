import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { seedDatabase } from "./lib/seed";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-grow">
        <button onClick={seedDatabase} className="m-4 p-2 bg-green-500 text-white rounded">Seed Database</button>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
