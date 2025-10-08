/* function App() {

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-3 d-flex align-items-center" href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              alt="Nike Logo"
              width="40"
              height="40"
              className="me-2"
            />
            Nike
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active px-3" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#">Location</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#">Contact</a>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success me-3" type="submit">Search</button>
              <button className="btn btn-outline-success ms-2" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="card mt-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://images.squarespace-cdn.com/content/v1/5ed6e10fb011a123217ba702/1727139534806-K219WNSVFLFTG6QOO2I3/unsplash-image-164_6wVEHfI.jpg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">Your Feet <br />Deserves the <br />Best</h1>
              <p className="card-text">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default App */
import './App.css'
import Hero from './components/Hero'
import Navigation from './components/Navigation'

function App(){
  return(
    <div>
      <Navigation/>
      <Hero/>
    </div>
  )
}
export default App