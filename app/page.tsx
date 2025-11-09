// app/page.tsx
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { Hero } from './components/hero/Hero'
import { OtherProjects } from './components/projects/OtherProjects'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'

export default function Home() {
  return (
    // Thêm class transition-colors để chuyển màu nền mượt mà
    <div className="text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <section id="hero" className="container mx-auto min-h-screen flex items-center px-6">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-32 md:py-24 px-6">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 dark:bg-gray-800 py-32 md:py-24 px-6">
        <div className="container mx-auto">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-32 md:py-24 px-6">
        <Projects />
      </section>

      {/* Other Projects Section */}
      <section id="other-projects" className="container mx-auto py-32 md:py-24 pt-10 px-6">
        <OtherProjects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-900 text-white dark:bg-gray-950 py-32 md:py-24 px-6">
        <div className="container mx-auto">
          <Contact />
        </div>
      </section>
    </div>
  )
}