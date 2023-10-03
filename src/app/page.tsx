import React from "react";

import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <main>
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-6xl">Hello world!</h1>
        </div>
      </main>
    </div>
  );
}
