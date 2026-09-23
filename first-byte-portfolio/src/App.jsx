import './App.css'

// Start here: replace these example details with your own.
const siteInfo = {
  name: 'Capybara WiCSE',
  role: 'Computer science student',
  intro: 'I am learning how to build useful things with code, one small project at a time.',
  location: 'Based in Gainesville, FL',
  email: 'capybara@ufl.edu',
  about: 'I enjoy solving puzzles, learning new tools, and working with people who are curious. This website is a place to share what I am learning and making.',
  skills: ['JavaScript', 'Python', 'React', 'HTML & CSS', 'Git & GitHub'],
  projects: [
    { title: 'Calculator', description: 'A simple calculator.', tag: 'Python project' },
    { title: 'Your swamphacks project...', description: 'Coming Soon.', tag: 'TBD' },
  ],
  links: {
    github: 'https://github.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-username',
  },
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Go to the top of the page">
          {siteInfo.name.split(' ')[0]}<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href={`mailto:${siteInfo.email}`} className="nav-contact">Say hello <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">{siteInfo.role}</p>
            <h1>Hi, I’m {siteInfo.name.split(' ')[0]}.</h1>
            <p className="intro">{siteInfo.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">See my work <span aria-hidden="true">↓</span></a>
              <a className="text-link" href={`mailto:${siteInfo.email}`}>Get in touch <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="portrait" aria-label={`Profile illustration for ${siteInfo.name}`}>
            <div className="portrait-sun"></div>
            <div className="portrait-initials">{siteInfo.name.split(' ').map((name) => name[0]).join('')}</div>
            <p>{siteInfo.location}</p>
          </div>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-label">01 / About me</div>
          <div className="about-content">
            <h2>Curious by default.</h2>
            <p>{siteInfo.about}</p>
            <div className="skill-list" aria-label="Skills">
              {siteInfo.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section className="content-section projects-section" id="projects">
          <div className="section-label">02 / Selected work</div>
          <div className="projects-content">
            <h2>Things I’m making.</h2>
            <div className="project-list">
              {siteInfo.projects.map((project, index) => (
                <article className="project" key={project.title}>
                  <div className="project-number">0{index + 1}</div>
                  <div>
                    <p className="project-tag">{project.tag}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <p className="eyebrow">Have a question?</p>
          <a className="footer-email" href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
        </div>
        <div className="footer-links">
          <a href={siteInfo.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={siteInfo.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <p className="footer-note">Built with React + CSS</p>
      </footer>
    </div>
  )
}

export default App
