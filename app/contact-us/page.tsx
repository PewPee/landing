import type { Metadata } from 'next'

import contactStyles from '../../styles/ContactUs.module.css'
import contactBlockStyles from '../../components/contactblock.module.css'

import ContactBlock from '../../components/contactblock'

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Contact PewPee for press, media inquiries, and business partnerships. Email press@pewpee.com or partnership@pewpee.com.',
  openGraph: {
    title: 'Contact us — PewPee',
    description: 'Contact PewPee for press, media inquiries, and business partnerships.',
    url: 'https://pewpee.com/contact-us',
  },
}

export default function ContactUsPage() {
  return (
    <div className="container">
      <h1>Contact us</h1>
      <div className={contactStyles.section}>
        <ContactBlock
          title="Press & media inquiries"
          desc="Get in touch with us at press@pewpee.com"
          icon={contactBlockStyles.megaphone}
          href="mailto:press@pewpee.com"
        />
        <ContactBlock
          title="Business & partnerships"
          desc="Contact PewPee at partnership@pewpee.com"
          icon={contactBlockStyles.mail}
          href="mailto:partnership@pewpee.com"
        />
      </div>
    </div>
  )
}

