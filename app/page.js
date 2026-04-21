import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import Templates from '@/components/landing/Templates'
import Footer from '@/components/landing/Footer'

export default function Home() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#050508' }}>
      <Navbar />
      <main style={{ width: '100%' }}>
        <Hero />
        <Features />
        <Templates />
      </main>
      <Footer />
    </div>
  )
}
