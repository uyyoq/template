import Head from "next/head";
import Navbar from "../components/Navbar/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create New Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Navbar />
        <h1 className="text-4xl font-bold">happy making new project :)</h1>
      </main>

      <footer></footer>
    </div>
  );
}
