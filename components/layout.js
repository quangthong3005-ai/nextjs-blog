import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';

const siteTitle = 'Audio Plugin Notes';
const name = 'quangthong3005-ai';

export { siteTitle };

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Notes on building audio effect plugins: DSP, compressors, EQ and testing in a DAW."
        />
        <meta property="og:title" content={siteTitle} />
      </Head>

      {/* Header: bigger on the home page, smaller link on other pages */}
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={styles.heroTitle}>{siteTitle}</h1>
            <p className={styles.byline}>by {name}</p>
          </>
        ) : (
          <h2 className={styles.headerTitle}>
            <Link href="/">{siteTitle}</Link>
          </h2>
        )}
      </header>

      {/* Main content passed in from each page */}
      <main>{children}</main>

      {/* Back link only on non-home pages */}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">&larr; Back to home</Link>
        </div>
      )}
    </div>
  );
}
