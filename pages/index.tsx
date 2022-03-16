// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import homeStyles from '../styles/Home.module.css'
import whyStyles from '../components/whyblock.module.css'

import Layout from '../components/layout'
import WhyBlock from '../components/whyblock'



export default function Home() {
  const whyData: {title: string, desc: string, icon: string}[] = [
    { title: "Zero ads", desc: "We all tired of annoying ads. So we don’t have them.", icon: whyStyles.eyes },
    { title: "Privacy", desc: "We don’t provide data to third parties.", icon: whyStyles.lock },
    { title: "Offline", desc: "Download music and listen it without internet.", icon: whyStyles.download },
    { title: "Simple", desc: "It’s so simple and intuitive to use PewPee.", icon: whyStyles.circle },
    { title: "Powerful", desc: "Try our features that will impove your music listening.", icon: whyStyles.stars },
    { title: "Import", desc: "Import music from a device or cloud services.", icon: whyStyles.cloud }
  ]

  return (
    <Layout>
      <Head>
        <title>PewPee – Music streaming service</title>
        <meta name="robots" content="all" />
        <meta name="keywords" content="PewPee, tracks, music, listen, popular, free, online, songs, player, music app" />
        <meta name="description" content="PewPee is a music streaming service that allows listen to new popular songs 2022 for free online without downloading and you can try to listen to latest albums of artists on our free music player" />
        
        <meta property="og:site_name" content="PewPee" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Listen to music on PewPee for free" />
        <meta property="og:description" content="PewPee — music streaming service that allows you to listen to music for free." />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pewpee_music" />
        <meta name="twitter:creator" content="@pewpee_music" />

        <meta property="og:url" content="https://pewpee.com/" />
        <meta property="og:image" content="https://pewpee.com/visualization/icons/common-icon.png" />
        <meta property="og:image:type" content="image/png" />

        {/* <link rel="alternate" hreflang="x-default" href="https://pewpee.com/en/" />
        <link rel="alternate" hreflang="ru" href="https://pewpee.com/ru/" /> */}

        <link rel="canonical" href="https://pewpee.com/" />
        <link rel="icon" type="images/svg+xml" href="/visualization/icons/website_icon.svg?1" />
        <link rel="alternate icon" type="images/png" href="/visualization/icons/favicon.png?1" />
        <link rel="apple-touch-icon" href="/visualization/icons/icon-logo.png" />
        
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="container main">
        <div className={homeStyles.contentSection}>
          <div className={homeStyles.mainTitle}>
            <div>
              <h3>Powerful.</h3>
              <h3>Free.</h3>
              <h3>Zero ads.</h3>
            </div>
            <div className={homeStyles.mainButtonsContainer}>
              <a className={homeStyles.borderedButton} href="">Download</a>
              <a className={homeStyles.borderedButton} href="">Web</a>
            </div>
          </div>
          <div className={homeStyles.iphoneMainImage} />
        </div>

        <div className={homeStyles.contentSection}>
          <h2>Why PewPee?</h2>
          <div className={homeStyles.whyBlockContainer}>
            {whyData.map(data =>
              <WhyBlock key="" title={data.title} desc={data.desc} icon={data.icon} />
            )}
          </div>
        </div>

        <div className={homeStyles.contentSection}>
          <h2>Don’t wait, try now!</h2>
          <a className={homeStyles.borderedButton+" "+homeStyles.iosAppStore} href="">Download for iPhone / iPad</a>
          <div className={homeStyles.iphonesDemoContainer}>
              {[...Array(5)].map(_ =>
                <div key="" className={homeStyles.iphoneDemo} />
              )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
