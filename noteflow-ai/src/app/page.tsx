import React from "react";
import Landing from "./landing/page";
export default function Home() {
  return (
    <div className="h-full w-full">
      <main className={`h-full flex w-full flex-col`}>
        <Landing />
      </main>
    </div>
  );
}
