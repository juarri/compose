import { createLazyFileRoute, Link } from "@tanstack/react-router";

import { CheckerBackground } from "src/components/backgrounds";

import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const tools = [
  {
    name: "Drum Machine",
    link: "/tools/drum-machine",
    image: "/images/thumbnails/drum-machine.png",
  },
];

function Index() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header>
        <div className="grid grid-cols-3 items-center justify-between">
          <div className=""></div>

          <h1 className="text-center text-xl font-bold">Composer</h1>

          <div className=""></div>
        </div>
      </Header>

      <CheckerBackground className="flex flex-col flex-1 relative">
        <div className="container mx-auto py-12">
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {tools.map((instrument) => (
              <li key={instrument.name} className="bg-white p-4 rounded">
                <img
                  src={instrument.image}
                  alt={`${instrument.name} Thumbnail`}
                  className="object-cover rounded"
                />
                <Link
                  to={instrument.link}
                  className="block text-center bg-black text-white p-2 text-lg font-bold"
                >
                  {instrument.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </CheckerBackground>

      <Footer />
    </div>
  );
}
