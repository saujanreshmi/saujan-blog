import Head from 'next/head'
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Saujan - Personal Blog</title>
        <meta name="description" content="Built by @saujanreshmi with ❤️" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="https://avatars.githubusercontent.com/u/18434969?s=40&v=4"/>
      </Head>
        <Layout>
            <h1>Design home page here</h1>
        </Layout>
    </>
  )
}
