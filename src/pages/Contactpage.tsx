import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contactpage() {

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      username: '@RajnishXCode',
      description: 'Check out my code repositories',
      link: 'https://github.com/RajnishXCode',
      color: ''
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      username: '@RajnishXCode',
      description: 'Professional networking',
      link: 'https://www.linkedin.com/in/RajnishXCode/',
      color: ''
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      username: '@RajnishXCode',
      description: 'Follow for tech updates',
      link: 'https://twitter.com/RajnishXCode',
      color: ''
    }
  ]

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
        <div className="text-center relative mb-16">
          <div className="inline-block relative mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary">Connect</span>
            </h1>
            {/* Decorative elements around title */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-secondary/30 rounded-tl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-secondary/30 rounded-br-lg"></div>
          </div>
          
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8 rounded-full"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8 rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Ready to start your next project? I'm here to help bring your ideas to life. Choose your preferred way to reach out and let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* WhatsApp - Primary */}
          <a
            href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-500/30 hover:border-green-400 p-8 text-center backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="bg-green-500/20 rounded-full p-6 mx-auto mb-6 w-20 h-20 flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300 group-hover:scale-110">
                <FaWhatsapp className="text-3xl text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                WhatsApp
              </h3>
              <p className="text-green-400 font-semibold mb-3 text-lg">Instant Response</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Get quick replies for urgent projects or general inquiries. Perfect for real-time discussions.
              </p>
              <div className="inline-flex items-center text-green-400 font-semibold group-hover:text-white transition-colors duration-300">
                <span>Message Now</span>
                <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </a>

          {/* Email - Professional */}
          <a
            href="mailto:contact.rajnishtripathi@gmail.com?subject=Project%20Inquiry&body=Hi%20Rajnish,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0A"
            className="group bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-500/30 hover:border-blue-400 p-8 text-center backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="bg-blue-500/20 rounded-full p-6 mx-auto mb-6 w-20 h-20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                <FaEnvelope className="text-3xl text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                Email
              </h3>
              <p className="text-blue-400 font-semibold mb-3 text-lg">Professional</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Perfect for detailed project discussions, proposals, and formal business communications.
              </p>
              <div className="inline-flex items-center text-blue-400 font-semibold group-hover:text-white transition-colors duration-300">
                <span>Send Email</span>
                <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </a>

          {/* Schedule Call */}
          <a
            href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20schedule%20a%20call%20to%20discuss%20my%20project%20requirements%20in%20detail"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-purple-500/30 hover:border-purple-400 p-8 text-center backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="bg-purple-500/20 rounded-full p-6 mx-auto mb-6 w-20 h-20 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300 group-hover:scale-110">
                <FaPhone className="text-3xl text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                Schedule Call
              </h3>
              <p className="text-purple-400 font-semibold mb-3 text-lg">Let's Talk</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Prefer voice discussion? Let's schedule a call to dive deep into your project requirements and goals.
              </p>
              <div className="inline-flex items-center text-purple-400 font-semibold group-hover:text-white transition-colors duration-300">
                <span>Book Call</span>
                <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </a>
        </div>

        {/* Quick Response Promise */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-white mb-3">
              ⚡ Quick Response Guarantee
            </h4>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-secondary font-semibold">WhatsApp:</span> Usually within 1-2 hours • 
              <span className="text-secondary font-semibold"> Email:</span> Within 24 hours • 
              <span className="text-secondary font-semibold"> Calls:</span> Scheduled within 48 hours
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Follow Me <span className="text-secondary">Online</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Stay updated with my latest projects and tech insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-white/20 dark:border-white/20 hover:border-secondary p-6 text-center backdrop-blur-xl ${social.color}`}
            >
              <div className="mb-4">
                <social.icon className="text-4xl text-white mx-auto mb-4 transition-colors duration-300" />
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                  {social.name}
                </h3>
                <p className="text-secondary font-semibold mb-2">{social.username}</p>
                <p className="text-gray-400 text-sm">{social.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 border-2 border-white/20 dark:border-white/20 backdrop-blur-xl">
          <div className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start <span className="text-secondary">Working Together?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to take on new challenges and collaborate on innovative projects. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/919999999999?text=Hi%20Rajnish,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-secondary/80 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaWhatsapp />
                Start a Project
              </a>
              <a
                href="/RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaEnvelope />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contactpage