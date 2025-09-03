import React, { useState } from 'react';
import food from './assets/Food.jpg';
import travel from './assets/Okutama.jpg';
import arduino from './assets/Arduino.png';
import anime from './assets/Anime.jpg';
import bdpho from './assets/Olympiad.jpg';
import science from './assets/Science.jpg';
import tech from './assets/Tech.png';
import language from './assets/Language.jpg';
import karate from './assets/karate.jpg';
import workout from './assets/workout.jpg';
import doe from './assets/dofe.jpg';
import ocw from './assets/MIT_OCW.jpg';
import './About.css';

const About = () => {
  const [view, setView] = useState('All');

  return (
    <>
      <h2 className="AboutMe">About Me</h2>
      <div className="buttons">
        <button 
          className={view === 'All' ? 'active' : ''} 
          onClick={() => setView('All')}
        >
          All
        </button>
        <button 
          className={view === 'Hobbies' ? 'active' : ''} 
          onClick={() => setView('Hobbies')}
        >
          Hobbies
        </button>
        <button 
          className={view === 'Skills' ? 'active' : ''} 
          onClick={() => setView('Skills')}
        >
          Skills
        </button>
        <button 
          className={view === 'Achievements' ? 'active' : ''} 
          onClick={() => setView('Achievements')}
        >
          Achievements
        </button>
      </div>
      <div className="skill-header">
      </div>
      {(view === 'All' || view === 'Hobbies') && (
        <>
          <div className="skill-header">
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
                  I love to travel and learn about new cultures, visit new places and learn about the people.
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
                  <br />
                  Like to read Manga, Novels and Japanese Light Novels.
                  <br />
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
                  Also love to run experiments and build stuffs.
                </p>
              </div>
            </article>
            <article className="skill-card">
              <div className="skill-card-image">
                <img src={food} alt="food" />
              </div>
              <div className="skill-card-header">
                <h3>Foodie</h3>
              </div>
              <div className="skill-card-body-footer">
                <p>
                 I love to cook and eat new tasty foods.
                 I can cook South Asian, Italian and bit of Japanese Cuisines.
                 I love to experiment and make new dishes.
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
                  I like to do gym and maintain a healthy body.
                </p>
              </div>
            </article>
          </section>
        </>
      )}
      {(view === 'All' || view === 'Skills') && (
        <>
          <div className="skill-header">
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
                  I have a hobby of building small electronic projects using electronic boards most commonly with arduino.
                  My most significant builds include a quadcopter and gesture-controlled car.
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
                  I can use all Microsoft Office tools and also a self-taught
                  photoeditor and videoeditor. I can use Python, C#, SQL, JavaScript,
                  and a bit of Machine Learning. I can use RStudio, MATLAB Simulink, and
                  Linux (Bash).
                </p>
              </div>
            </article>
            <article className="skill-card">
              <div className="skill-card-image">
                <img src={language} alt="Languages" />
              </div>
              <div className="skill-card-header">
                <h3>Language</h3>
              </div>
              <div className="skill-card-body-footer">
                <p>
                  Fluent in English & Bengali.
                  <br />
                  Can speak Hindi & Urdu.
                  <br />
                  Conversational Level Japanese.
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
                  I love to learn new things and hone my existing skills through online courses, reading books, and experimentation.
                  I am passionate about problem solving.
                </p>
              </div>
            </article>
          </section>
        </>
      )}
      {(view === 'All' || view === 'Achievements') && (
        <>
          <div className="skill-header">
            <h2>Achievements</h2>
          </div>
          <section className="achievement">
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
                  and Regionally in Bangladesh Mathematics Olympiad.
                  <br />
                  2020: Ranked 3rd Nationally in English Medium Mathematics Olympiad.
                  <br />
                  2023: Ranked Regionally in Bangladesh Physics Olympiad.
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
                  Brown Belt (1st Kyu) in Gojo-Ryu Karate.
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
      )}
    </>
  );
};

export default About;
