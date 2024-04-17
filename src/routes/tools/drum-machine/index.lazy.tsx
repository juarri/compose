import { createLazyFileRoute, Link } from "@tanstack/react-router";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Rythm from "src/components/instruments/rythm";
import Header from "src/components/layout/Header";

export const Route = createLazyFileRoute("/tools/drum-machine/")({
  component: Component,
});

function Component() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header>
        <div className="grid grid-cols-3 items-center justify-between">
          <Link to="/" aria-label="Go Home" className="w-fit">
            <ArrowUturnLeftIcon className="size-5" />
          </Link>

          <h1 className="text-center text-xl font-bold">Drum Machine</h1>

          <div className=""></div>
        </div>
      </Header>

      <div className="flex flex-col flex-1">
        <Rythm />
      </div>
    </div>
  );
}
