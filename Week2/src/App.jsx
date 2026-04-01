import './styles/App.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="content-wrap">
        <About />
      </main>
    </>
  )
}

export default App
