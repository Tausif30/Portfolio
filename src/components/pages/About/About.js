import baklava from './assets/baklava.jpg';
import travel from "./assets/Travel.jpg";
import cs50 from "./assets/cs50.png"
import arduino from "./assets/Arduino.png";
import anime from "./assets/Anime.jpg";
import bdpho from "./assets/Olympiad.jpg";
import science from "./assets/Science.jpg";
import tech from "./assets/Tech.png";
import language from "./assets/Language.jpg";
import karate from "./assets/karate.jpg";
import workout from "./assets/workout.jpg";
import doe from "./assets/dofe.jpg"
import ocw from "./assets/MIT_OCW.jpg"
import './About.css';
const About = () => {
  return (
      <>
      <div className="menu-header">
      <h2>Hobbies</h2>
    </div>
        <section className="hobby">
          <article className="skill-card">
            <div className="skill-card-image">
              <img src={travel} alt="River going through mountains." />
            </div>
            <div className="skill-card-header">
              <h3>Travel</h3>
            </div>
            <div className="skill-card-body-footer">
              <p>
              Love to travel and learn about new cultures, visit new places and learn about the people.
              </p>
            </div>
          </article>
          <article className="skill-card">
            <div className="skill-card-image">
              <img src={anime} alt="86 Anime" />
            </div>
            <div className="skill-card-header">
              <h3>Anime/Movie</h3>
            </div>
            <div className="skill-card-body-footer">
              <p>
                Love to binge watch animes and movies.
                <br></br>
                Like to read Manga, Novels and Japanese Light Novels.
                <br></br>
                Also love to listen music.
              </p>
            </div>
          </article>
          <article className="skill-card">
            <div className="skill-card-image">
              <img src={science} alt="Physics" />
            </div>
            <div className="skill-card-header">
              <h3>Science</h3>
            </div>
            <div className="skill-card-body-footer">
              <p>
                I love to learn new things in the field of science especially Physics.
                Also love to run experiemnts and build stuffs.
              </p>
            </div>
          </article>
          <article className="skill-card">
            <div className="skill-card-image">
              <img src={baklava} alt="Baklava" />
            </div>
            <div className="skill-card-header">
              <h3>Eating & cooking</h3>
            </div>
            <div className="skill-card-body-footer">
              <p>
                A foodie. Love to eat and cook at the same time. When cooking I usually experiemnt all the time
                and try to make my existing dishes better.
              </p>
            </div>
          </article>
          <article className="skill-card">
            <div className="skill-card-image">
              <img src={workout} alt="Workout" />
            </div>
            <div className="skill-card-header">
              <h3>Workout</h3>
            </div>
            <div className="skill-card-body-footer">
              <p>
                Like to workout and maintain a healthy body.
              </p>
            </div>
          </article>
        </section>
        <div className="menu-header">
      <h2>Skills</h2>
    </div>
        <section className="skill">
        <article className="skill-card">
            <div className="skill-card-image">
              <img src={arduino} alt="Arduino" />
            </div>
            <div className="skill-card-header">
              <h3>Robotics</h3>
            </div>
            <div className="skill-card-body-footer">
              <p>
                I often build small electronic projects using devices most commonly with arduino.
                I do by programming the board and assembling the circuits.
                My most singinaficant builds include a quadcopter and gesture-controlled car.
              </p>
            </div>
          </article>
          <article className="skill-card">
            <div className="skill-card-image">
              <img src={tech} alt="Tech" />
            </div>
            <div className="skill-card-header">
              <h3>Tech</h3>
            </div>
            <div className="skill-card-body-footer">
              <p>
                Computer expert. Good with all office tools. Can do photoediting and videoediting.
                Frontend Web Developer.
                Can use SQL and manage databases
                Good in programming. I know python, C#, Javascript.
                I also know how to use Linux and Bash Programming to a certain level.
              </p>
            </div>
          </article>
          <article className="skill-card">
            <div className="skill-card-image">
              <img src={language} alt="Languages" />
            </div>
            <div className="skill-card-header">
              <h3>Lanaguge</h3>
            </div>
            <div className="skill-card-body-footer">
              <p>
                Fluent in English & Bengali.
                <br></br>
                Can speak Hindi & Urdhu.
                <br></br>
                Partially knows Japanese and French.
              </p>
            </div>
        </article>
        <article className="skill-card">
            <div className="skill-card-image">
              <img src={ocw} alt="MIT OCW" />
            </div>
            <div className="skill-card-header">
              <h3>Learning</h3>
            </div>
            <div className="skill-card-body-footer">
              <p>
              Love to learn new things and hone my existing skills through online, reading books and experimentation.
              Passionate about problem solving.
              </p>
            </div>
        </article>
        </section>

        <div className="menu-header">
      <h2>Achievements</h2>
    </div>
    <section className='achievement'>
    <article className="skill-card">
            <div className="skill-card-image">
              <img src={bdpho} alt="Bangladesh Physics Olympiad" />
            </div>
            <div className="skill-card-header">
              <h3>Olympiad</h3>
            </div>
            <div className="skill-card-body-footer">
              <p>
                2019: Ranked Nationally in Bangladesh Physics Olympiad
                 and Regionally Bangladesh Mathematics Olympiad.
                <br></br>
                2020: Ranked 3rd Nationally in English Medium Mathematics Olympiad.
                <br></br>
                2023: Ranked Regionally Bangladesh Physics Olympiad.
              </p>
            </div>
          </article>
          <article className="skill-card">
            <div className="skill-card-image">
              <img src={cs50} alt="Harcard CS50" />
            </div>
            <div className="skill-card-header">
              <h3>CS50</h3>
            </div>
            <div className="skill-card-body-footer">
              <p>
              Completed Harvard CS50, Class of 2024.
              <br></br>
              <a href='https://www.youtube.com/watch?v=HLfPdW0gG5s' target="_blank" rel="noreferrer">Final Project</a>
              </p>
            </div>
          </article>
          <article className="skill-card">
            <div className="skill-card-image">
              <img src={karate} alt="Karate" />
            </div>
            <div className="skill-card-header">
              <h3>Karate</h3>
            </div>
            <div className="skill-card-body-footer">
              <p>
                Brown Belt in Gojo-Ryu Karate.
              </p>
            </div>
          </article>
          <article className="skill-card">
            <div className="skill-card-image">
              <img src={doe} alt="Duke of Edinburgh Awards" />
            </div>
            <div className="skill-card-header">
              <h3>Duke of Edinburgh</h3>
            </div>
            <div className="skill-card-body-footer">
              <p>
              Gold Awardee in the Duke of Edinburgh Program.
              </p>
            </div>
        </article>
    </section>
      </>
  );
};

export default About;
