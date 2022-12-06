import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <a href="https://nextjs.org/">Next.js</a>
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          <a href="https://fakerjs.dev/"> Faker.js tutorial</a>
        </p>
      </section>

        <section className={utilStyles.headingMd}>
        <p>
          <a href="https://github.com/quangtuyen1993/mockup.git"> Source code</a>
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          <a href="https://mockup-pizza-legato.vercel.app"> Domain</a>
        </p>
      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
