export default function WHyBlock(props: {title: string, desc: string, icon: string}) {
    return (
        <div className="why-block">
            <div className={"why-icon " + props.icon}></div>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}