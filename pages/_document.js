import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ICON */}
        <link rel="icon" type="image/png" href="/icon/favicon.png" />
        {/* FONTS */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="a simple web application that allows users to search and save a github account."
        />
        <meta
          name="keywords"
          content="Instagram, Github, Source Code, Frontend, Developer, Web Application, HTML, CSS, JavaScript, ReactJS, NextJS, Tailwind, Framer-motion, Local Storage, API"
        />
        {/* Open Graph protocol */}
        <meta property="og:title" content="Gitstagram" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gitstagram-io.vercel.app/" />
        <meta
          property="og:description"
          content="a simple web application that allows users to search and save a github account."
        />
      </Head>
      <body className=" dark:bg-gradient-to-br from-dark-blue to-dark-deep-blue">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
