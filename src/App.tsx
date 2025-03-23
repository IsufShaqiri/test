import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="bg-yellow-600 w-24 h-6 flex justify-end items-center">
        App
      </div>
    </>
  );
}
