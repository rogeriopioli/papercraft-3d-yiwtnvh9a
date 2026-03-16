import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative bg-background selection:bg-primary/20">
      <Header />
      <main className="flex-1 flex flex-col relative z-10 animate-fade-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
