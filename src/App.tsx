import React from 'react';
import './style/App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import WHyBlock from './components/WhyBlock';

function App() {
  return (
    <div className="wrapper">
      <NavigationBar />

      <main className="main-wrapper">
        <div className="main">
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
            <div className="iphone-main-image"></div>
          </div>

          <div className="content-section">
            <h2>Why PewPee?</h2>
            <div className="why-block-container">
              <WHyBlock title="Zero ads" desc="We all tired of annoying ads. So we don’t have them." icon="eyes" />
              <WHyBlock title="Privacy" desc="We don’t provide data to third parties." icon="lock" />
              <WHyBlock title="Offline" desc="Download music and listen it without internet." icon="download" />
              <WHyBlock title="Simple" desc="It’s so simple and intuitive to use PewPee." icon="circle" />
              <WHyBlock title="Powerful" desc="Try our features that will impove your music listening." icon="stars" />
              <WHyBlock title="Import" desc="Import music from a device or cloud services." icon="cloud" />
            </div>
          </div>

          <div className="content-section">
            <h2>Don’t wait, try now!</h2>
            <a className="bordered-button ios-app-store" href="">Download for iPhone / iPad</a>
            <div className="iphones-demo-container">
              <div className="iphone-demo"></div>
              <div className="iphone-demo"></div>
              <div className="iphone-demo"></div>
              <div className="iphone-demo"></div>
              <div className="iphone-demo"></div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
