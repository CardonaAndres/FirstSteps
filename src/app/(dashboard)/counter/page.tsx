import { Metadata } from "next";
import { CardCounter } from "./components/CardCounter";

export const metadata: Metadata = {
  title: "Mi Contador",
  description: "Un simple contador",
};

export default function CounterPage() {

  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CardCounter />

    </main>
  );
}