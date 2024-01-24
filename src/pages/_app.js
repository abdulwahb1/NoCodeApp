import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="bg-purple">
      <section className="flex flex-col w-full max-w-[1400px] m-auto">
        <Component {...pageProps} />
      </section>
    </main>
  );
}
