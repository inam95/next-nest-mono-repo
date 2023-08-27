"use client";

import { useEffect, useState } from "react";
import { trpc } from "./trpc";

export default function ClientSide() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    trpc.hello.query({ name: "Messi" }).then((response) => {
      setGreeting(response);
    });
  }, []);
  return (
    <div>
      <h1>From Client Side {greeting}</h1>
    </div>
  );
}
