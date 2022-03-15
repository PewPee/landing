import whyStyles from './whyblock.module.css'

export default function WhyBlock(props: {title: string, desc: string, icon: string}) {
  return (
    <div className={whyStyles.whyBlock}>
      <div className={`${whyStyles.whyIcon} ${props.icon}`}></div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
}