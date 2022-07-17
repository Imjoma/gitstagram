import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </>
  );
}

export default MyApp;
