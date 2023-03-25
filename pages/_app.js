import NavBar from "@/components/NavBar";

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>Hello</span>
      <style jsx>{`
        a {
          color: white;
        }
      `}</style>
    </>
  );
}
