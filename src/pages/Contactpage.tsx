import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHero from '../components/Contactpage/ContactHero'
import ContactMethods from '../components/Contactpage/ContactMethods'
import SocialLinks from '../components/Contactpage/SocialLinks'
import ContactCTA from '../components/Contactpage/ContactCTA'

function Contactpage() {

  return (
    <div className="dark min-h-screen w-screen overflow-x-hidden bg-primary relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-secondary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/5 rounded-lg rotate-45 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-secondary/10 rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-secondary/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 border border-secondary/10 rounded-lg rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-secondary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-secondary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      
      {/* Main Contact Section */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-20 pb-16 relative z-10">
        <ContactHero />
        <ContactMethods />
      </section>

      <SocialLinks />
      <ContactCTA />
      <Footer />
    </div>
  )
}

export default Contactpage