import {
  Ban,
  Cloud,
  Download,
  FileText,
  Library,
  Music2,
  Podcast,
  Radio,
  Shield,
  Star,
  Users,
} from 'lucide-react'
import Image from 'next/image'

import homeStyles from '../styles/Home.module.css'

import FAQ from '../components/faq'
import { FAQPageJsonLd, SoftwareApplicationJsonLd } from '../components/json-ld'
import WhyBlock from '../components/whyblock'
import { faqData } from '../lib/faq-data'

const APP_STORE_URL = 'https://apps.apple.com/us/app/pewpee-music-player-offline/id1483338834'

const whyData = [
  { title: 'Zero ads', desc: "Yeah, we don't have any ads. Listen without interruptions.", icon: <Ban size={32} /> },
  { title: 'Privacy', desc: "We don't provide your data to third-party services. We only store what PewPee needs.", icon: <Shield size={32} /> },
  { title: 'Offline', desc: 'Download songs and listen in background mode without internet.', icon: <Download size={32} /> },
  { title: 'Millions of songs', desc: 'Huge catalogue including 150M+ songs. New releases, top charts, genres.', icon: <Music2 size={32} /> },
  { title: 'Podcasts', desc: 'Listen to podcasts and episodes. Subscribe, download, and play in the background.', icon: <Podcast size={32} /> },
  { title: 'Radio', desc: 'Live radio stations and streams. Discover new music and shows from around the world.', icon: <Radio size={32} /> },
  { title: 'Lyrics', desc: 'See lyrics of your favourite tracks right in the player or from the context menu.', icon: <FileText size={32} /> },
  { title: 'Import your music', desc: 'With subscription: import MP3, FLAC, WAV from device or Google Drive, Dropbox.', icon: <Cloud size={32} /> },
  { title: 'Playlists & library', desc: 'Create playlists, add albums and artists to your library, sort and organise.', icon: <Library size={32} /> },
  { title: 'Feed & friends', desc: 'Follow friends and share activity. Discover new songs and tastes together.', icon: <Users size={32} /> },
  { title: 'Request music', desc: "Can't find a track? Request it — we add new songs every day.", icon: <Music2 size={32} /> },
]

export default function HomePage() {
  return (
    <div className="container main">
      <section className={homeStyles.contentSection}>
        <div className={homeStyles.mainTitle}>
          <h1>Play, stream & discover songs.</h1>
          <p className={homeStyles.heroTagline}>Powerful. Free. Zero ads.</p>
          {/* <p className={homeStyles.heroIntro}>
            PewPee is a music streaming app for iPhone and iPad. Stream millions of tracks, download for offline listening, and enjoy lyrics—all without ads.
          </p> */}
          <div className={homeStyles.mainButtonsContainer}>
            <a className={homeStyles.borderedButton + ' ' + homeStyles.iosAppStore} href={APP_STORE_URL} rel="noopener noreferrer" target="_blank">
              Download for iPhone / iPad
            </a>
          </div>
          <div className={homeStyles.socialProof}>
            <div className={homeStyles.socialProofItem}>
              <span className={homeStyles.socialProofStars} aria-hidden>
                <Star size={18} fill="currentColor" strokeWidth={1.5} />
              </span>
              <span className={homeStyles.socialProofRating}>4.5</span>
            </div>
            <span className={homeStyles.socialProofDivider} aria-hidden />
            <div className={homeStyles.socialProofItem}>
              <span className={homeStyles.socialProofMeta}>500,000+</span>
              <span className={homeStyles.socialProofLabel}>downloads</span>
            </div>
          </div>
        </div>
        <div className={homeStyles.iphoneMainImage}>
          <Image src="/img/pewpee-ios-main.png" alt="PewPee music player on iPhone" width={1000} height={776} className={homeStyles.heroImageSeo} fetchPriority="high" />
        </div>
      </section>

      <section className={homeStyles.contentSection}>
        <h2 className={homeStyles.cardsSectionTitle}>Everything you need</h2>
        <div className={homeStyles.whyBlockContainer}>
          {whyData.map((item) => (
            <WhyBlock key={item.title} title={item.title} desc={item.desc} icon={item.icon} />
          ))}
        </div>
      </section>

      <section className={homeStyles.contentSection}>
        <h2>Don&apos;t wait, try now!</h2>
        <a className={homeStyles.borderedButton + ' ' + homeStyles.iosAppStore} href={APP_STORE_URL} rel="noopener noreferrer" target="_blank">
          Download on the App Store
        </a>
        <div className={homeStyles.iphonesDemoContainer}>
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={homeStyles.iphoneDemo} />
          ))}
        </div>
      </section>

      <FAQ />
      <SoftwareApplicationJsonLd />
      <FAQPageJsonLd faqData={faqData} />
    </div>
  )
}

