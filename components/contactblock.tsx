import ReactMarkdown from 'react-markdown'

import contactStyles from './contactblock.module.css'

export default function ContactBlock(props: {title: string, desc: string, icon: string, href?: string}) {
  return (
    <a href={props.href}>
      <div className={contactStyles.contactBlock}>
        <div className={`${contactStyles.contactIcon} ${props.icon}`}></div>
        <h3>{props.title}</h3>
        <p><ReactMarkdown>{props.desc}</ReactMarkdown></p>
      </div>
    </a>
  )
}