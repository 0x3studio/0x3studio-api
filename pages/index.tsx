import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>0x3 Studio API</title>
        <meta name="description" content="An API of web3-related stuff." />
        <link rel="icon" href="/favicon.ico" />
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
    </div>
  );
};

export default Home;
