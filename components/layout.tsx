import NavigationBar from './navigationbar'
import Footer from './footer'

export default function Layout({children}) {
  return (
    <div className="wrapper">
      <NavigationBar />

      <main className="main-wrapper">
        {children}
      </main>

      <Footer />
    </div>
  )
}