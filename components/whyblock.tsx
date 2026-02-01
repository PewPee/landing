import whyStyles from './whyblock.module.css'

type WhyBlockProps = {
  title: string
  desc: string
  icon: React.ReactNode | string
}

export default function WhyBlock({ title, desc, icon }: WhyBlockProps) {
  const isReactIcon = typeof icon !== 'string'
  return (
    <div className={whyStyles.whyBlock}>
      <div className={whyStyles.whyIcon + (isReactIcon ? '' : ' ' + icon)}>
        {isReactIcon ? icon : null}
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}