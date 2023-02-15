import Head from 'next/head'
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Saujan - Personal Blog</title>
        <meta name="description" content="Built by Saujan Thapa with ❤" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
            <h1>Testing</h1>
        </Layout>
    </>
  )
}
