import Me from './assets/Me.jpg'
import './Hero.css';
import pdf from './assets/resume.pdf'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Tausif Ibne Iqbal</h1>
          <p>
            On a journey to becoming a better me and change the world.
          </p>
          <a className="button-primary" href={pdf} download="resume.pdf">
            Download CV
          </a>
        </div>
        <img
          className="hero-image"
          src={Me}
          alt="Me"
        />
      </div>
    </section>
  );
};

export default Hero;
