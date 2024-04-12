import { createLazyFileRoute, Link } from "@tanstack/react-router";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Rythm from "src/components/instruments/rythm";

export const Route = createLazyFileRoute("/rythm/")({
  component: Component,
});

function Component() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="relative border-b-2 border-gray-200">
        <div
          className="absolute inset-0 z-0 animate-bg-pan"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fafafa' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: 12,
          }}
        />

        <div className="container mx-auto px-4 py-4 relative">
          <div className="grid grid-cols-3 items-center justify-between">
            <Link to="/" aria-label="Go Home" className="w-fit">
              <ArrowUturnLeftIcon className="size-5" />
            </Link>

            <h1 className="text-center text-xl font-bold">Rythm</h1>

            <div className=""></div>
          </div>
        </div>
      </header>
      <div className="flex flex-col flex-1">
        <Rythm />
      </div>
    </div>
  );
}
