import Head from 'next/head'

import contactStyles from '../styles/ContactUs.module.css'
import contactBlockStyles from '../components/contactblock.module.css'

import Layout from '../components/layout'
import ContactBlock from '../components/contactblock'

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>Contact us</title>
        <meta name="robots" content="all" />
        <meta name="keywords" content="PewPee, tracks, music, listen, popular, free, online, songs, player" />
        <meta name="description" content="PewPee is a music streaming service that allows listen to new popular songs 2022 for free online without downloading and you can try to listen to latest albums of artists on our free music player" />
        
        <meta property="og:site_name" content="PewPee" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PewPee – music streaming service" />
        <meta property="og:description" content="Powerful. Free. Zero ads." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PewPeeMusic" />
        <meta name="twitter:creator" content="@PewPeeMusic" />

        <meta name="telegram:channel" content="@pewpee_music" />
        
        <meta property="og:url" content="https://pewpee.com/en/" />
        <meta property="og:image" content="/common-icon.png" />
        <meta property="og:image:type" content="image/png" />

        <link rel="canonical" href="https://pewpee.com/" />
        <link rel="icon" type="images/svg+xml" href="/website-icon.svg?1" />
        <link rel="alternate icon" type="image/x-icon" href="/favicon.ico?1" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <div className="container">
        <h1>Contact us</h1>
        <div className={contactStyles.section}>
          <ContactBlock title="Press & media inquiries" desc="Get in touch with us at [press@pewpee.com](mailto:press@pewpee.com)" icon={contactBlockStyles.megaphone} href="mailto:press@pewpee.com" />
          <ContactBlock title="Business & partnerships" desc="Contact PewPee at [partnership@pewpee.com](mailto:partnership@pewpee.com)" icon={contactBlockStyles.mail}  href="mailto:partnership@pewpee.com" />
        </div>
      </div>
    </Layout>
  )
}