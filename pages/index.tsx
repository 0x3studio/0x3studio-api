import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>0x3 Studio API</title>
        <meta name="description" content="An API of web3-related stuff." />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          defer
          data-website-id="a919dbee-fd49-4476-94d9-03ad964ab131"
          src="https://umami.0x3.studio/umami.js"
        ></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>0x3 Studio API</h1>

        <p className={styles.description}>An API of web3-related stuff.</p>

        <h2 className={styles.subtitle}>Current endpoints</h2>

        <ul className={styles.list}>
          <li>
            <div>
              <strong>GET</strong>
              <code>
                <a href="/gas">https://api.0x3.studio/gas</a>
              </code>
            </div>
            <div>
              <p>
                Returns the current recommended low, average and high gas prices
                on the Ethereum network (in Gwei).
              </p>
            </div>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a href="https://0x3.studio">
          <Image
            src="/logo-0x3-studio.svg"
            width="134"
            height="13"
            alt="The beautiful and now famous logo of 0x3 Studio"
          />
        </a>
      </footer>
    </div>
  );
};

export default Home;
