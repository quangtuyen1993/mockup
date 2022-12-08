import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
export default function Home() {
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
          <a href='  https://mockup-git-main-pizza-legato.vercel.app/api'>
          https://mockup-git-main-pizza-legato.vercel.app/api
          </a>
        </p>
      </section>

    </Layout>
  )
}
