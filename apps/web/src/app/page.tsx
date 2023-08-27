import ClientSide from "./ClientSide";
import { trpc } from "./trpc";

export default async function Home() {
  const response = await trpc.hello.query({});
  return (
    <main>
      <h1>Mono Repo for the first time</h1>
      <h2>{response}</h2>
      <ClientSide />
    </main>
  );
}
