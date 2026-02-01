import contactStyles from './contactblock.module.css'

export default function ContactBlock(props: { title: string; desc: string; icon: string; href?: string }) {
  const content = (
    <div className={contactStyles.contactBlock}>
      <div className={`${contactStyles.contactIcon} ${props.icon}`} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
  if (props.href) {
    return <a href={props.href}>{content}</a>
  }
  return content
}