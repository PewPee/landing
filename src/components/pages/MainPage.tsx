import WhyBlock from '../WhyBlock';

export default function Main() {
  const whyData: {title: string, desc: string, icon: string}[] = [
    { title: "Zero ads", desc: "We all tired of annoying ads. So we don’t have them.", icon: "eyes" },
    { title: "Privacy", desc: "We don’t provide data to third parties.", icon: "lock" },
    { title: "Offline", desc: "Download music and listen it without internet.", icon: "download" },
    { title: "Simple", desc: "It’s so simple and intuitive to use PewPee.", icon: "circle" },
    { title: "Powerful", desc: "Try our features that will impove your music listening.", icon: "stars" },
    { title: "Import", desc: "Import music from a device or cloud services.", icon: "cloud" }
  ]

  return (
    <div className="container main">
      <div className="content-section">
        <div className="main-title">
          <div>
            <h3>Powerful.</h3>
            <h3>Free.</h3>
            <h3>Zero ads.</h3>
          </div>
          <div className="main-buttons-container">
            <a className="bordered-button" href="">Download</a>
            <a className="bordered-button" href="">Web</a>
          </div>
        </div>
        <div className="iphone-main-image" />
      </div>

      <div className="content-section">
        <h2>Why PewPee?</h2>
        <div className="why-block-container">
          {whyData.map(data =>
            <WhyBlock title={data.title} desc={data.desc} icon={data.icon} />
          )}
        </div>
      </div>

      <div className="content-section">
        <h2>Don’t wait, try now!</h2>
        <a className="bordered-button ios-app-store" href="">Download for iPhone / iPad</a>
        <div className="iphones-demo-container">
            {[...Array(5)].map(_ =>
              <div className="iphone-demo" />
            )}
        </div>
      </div>
    </div>
  )
}