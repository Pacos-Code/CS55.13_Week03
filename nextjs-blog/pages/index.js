
// Import Next.js Head component for managing document head elements (title, meta tags, etc.)
import Head from 'next/head';
// Import the Layout component and siteTitle constant from the layout component
import Layout, { siteTitle } from '../components/layout';
// Import CSS module styles for utility classes
import utilStyles from '../styles/utils.module.css';

// Define the Home component that will be rendered on the home page
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingXl}>
        <p>Hello, I'm Francisco. I am a Full Stack Web Dev student.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}