import'./App.css'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Work from './components/Work'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App(){
  return(
    <div>
      <Navigation/>
      <Hero/>
      <Work/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default App
