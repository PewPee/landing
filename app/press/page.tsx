import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'

import docStyles from '../../styles/Docs.module.css'

export const metadata: Metadata = {
  title: 'Press',
  description: 'PewPee press info: music streaming app, downloads, media contacts, and logos for journalists and partners.',
  openGraph: {
    title: 'Press — PewPee',
    description: 'PewPee press info: music streaming app, media contacts, and logos.',
    url: 'https://pewpee.com/press',
  },
}

const markdown = `
**PewPee** is a music streaming service with over 200 000 downloads in the App Store. The iOS app is in
top charts of several countries.

**Daniel Taiakin** is the founder, owner and CEO of PewPee.

***

### Press contacts

For media requests, please contact

***

### PewPee logos

If you need PewPee logos, take [these](https://cdn.pewpee.com/asas). Feel free to use them for article
illustrations, graphs, etc. Just make sure people understand you're not representing Telegram officially.

`

export default function PressPage() {
  return (
    <div className="main">
      <div className={`container ${docStyles.devPageContentWrap}`} style={{ maxWidth: '600px' }}>
        <h1>PewPee Press Info</h1>
        <div className={docStyles.devPageContent}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

