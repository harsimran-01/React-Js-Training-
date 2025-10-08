function Hero(){
    return(
        <div className="hero container">
            <div className="hero-content">
                <h1>Hi, I am John, Application Developer</h1>
                <p>I am a passionate developer who loves creating modern, user-friendly applications and turning ideas into real digital experiences.</p>
                {/* <button>Download Resume</button> */}
                <a href="/files/resume.pdf" download>
                    <button>Download Resume</button>
                </a>
            </div>
            <div className="hero-img">
                <img src="/images/photo.png" alt="Image" />
            </div>
        </div>
    )
}

export default Hero