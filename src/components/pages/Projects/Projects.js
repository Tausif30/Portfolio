import React from 'react';
import accelerometer from './assets/Accelerometer.png';
import drone from './assets/Drone.png';
import extension from './assets/Extension.png';
import puzzleSolver from './assets/Puzzle_Solver.png';
import rc from './assets/RC.png';
import restaurant from './assets/webpage.png';
import rgb from './assets/RGB.png';
import vectorField from './assets/Vector_Field.png';
import weather from './assets/Weather.jpg';
import kami from './assets/Kami_Translator.png';
import hub from './assets/Hub_Spoke.svg';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <h2 className="ProjectsMe">Projects</h2>
      <section className="projects">
        <article className="project-card">
          <div className="project-card-image">
            <img src={weather} alt="Weather Station Project" />
          </div>
          <div className="project-card-header">
            <h3>AI Weather Forecaster</h3>
          </div>
          <div className="project-card-body-footer">
            <p>
            <a className="journey-link" href="https://github.com/Tausif30/AI_Weather_Forecaster" target="_blank" rel="noreferrer">
              🔗 Github Repo
            </a>
            </p>
            <p>
              My own AI Weather Forecaster built from scratch.
              Used RNN LSTM model to build a Neural Network.
              Trained it with 3 years of data from Tokyo and Dhaka
              to predict weather for the next 24 hours.
              Works with a 90% accuracy rate.
            </p>
          </div>
        </article>
        <article className="project-card">
          <div className="project-card-image">
            <img src={drone} alt="Drone Project" />
          </div>
          <div className="project-card-header">
            <h3>Quadcopter Drone</h3>
          </div>
          <div className="project-card-body-footer">
            <p>
            <a className="journey-link" href="https://github.com/Tausif30/Arduino-Codes/tree/main/Drone" target="_blank" rel="noreferrer">
              🔗 Github Repo
            </a>
            </p>
            <p>
              Custom-built quadcopter with Arduino. Used YMFC-AL software package for flight control and navigation. 
              The drone is capable of basic flight and can be controlled remotely.
            </p>
          </div>
        </article>
        <article className="project-card">
          <div className="project-card-image">
            <img src={vectorField} alt="Vector Field Visualization" />
          </div>
          <div className="project-card-header">
            <h3>Vector Field Visualizer</h3>
          </div>
          <div className="project-card-body-footer">
            <p>
            <a className="journey-link" href="https://github.com/Tausif30/Vector-Fields" target="_blank" rel="noreferrer">
              🔗 Github Repo
            </a>
            </p>
            <p>
              A Python Based Software for visualizing Vector Fields. 
            </p>
          </div>
        </article>
        <article className="project-card">
          <div className="project-card-image">
            <img src={puzzleSolver} alt="Puzzle Solver Project" />
          </div>
          <div className="project-card-header">
            <h3>AI Puzzle Solver</h3>
          </div>
          <div className="project-card-body-footer">
            <p>
            <a className="journey-link" href="https://github.com/Tausif30/Puzzle_Solver" target="_blank" rel="noreferrer">
              🔗 Github Repo
            </a>
            </p>
            <p>
              Made a 8 Puzzle Game. 
              Then used 8 different search algorithms to automatically solve the game.
              Also did a performance analysis of the 8 different methods.
            </p>
          </div>
        </article>
        <article className="project-card">
          <div className="project-card-image">
            <img src={rc} alt="RC Car Project" />
          </div>
          <div className="project-card-header">
            <h3>Remote Controlled Car</h3>
          </div>
          <div className="project-card-body-footer">
            <p>
            <a className="journey-link" href="https://github.com/Tausif30/Arduino-Codes/tree/main/RC_Car" target="_blank" rel="noreferrer">
              🔗 RC Car
            </a>
            <br></br>
            <a className="journey-link" href="https://github.com/Tausif30/Arduino-Codes/tree/main/Gesture_Controlled_Car" target="_blank" rel="noreferrer">
              🔗 Gesture Controlled
            </a>
            </p>
            <p>
            An Arduino Based Remote Controlled Car, controlled via a mobile app using Bluetooth.
            The speed of the car can be controlled from the app as well.
            Built another version where I control the car using Accelerometer making a Gesture Controlled Car.
            Also made a simple Obstacle Avoiding Car using Ultrasonic Sensor.
            </p>
          </div>
        </article>
        <article className="project-card">
          <div className="project-card-image">
            <img src={hub} alt="Hub and Spoke Project" style={{backgroundColor: '#ffffff'}}
            />
          </div>
          <div className="project-card-header">
            <h3>Hub and Spoke Network</h3>
          </div>
          <div className="project-card-body-footer">
            <p>
            <a className="journey-link" href="https://github.com/Tausif30/Hub-Spoke-Network" target="_blank" rel="noreferrer">
              🔗 Github Repo
            </a>
            </p>
            <p>
            This project implements a secure, scalable Hub-and-Spoke network topology in Azure. 
            The design uses a central "Hub" Virtual Network (VNet) to consolidate shared services, 
            while "Spoke" VNets host isolated workloads (Production and Non-Production).
            The entire infrastructure is deployed using Bash scripts.
            </p>
          </div>
        </article>
        <article className="project-card">
          <div className="project-card-image">
            <img src={restaurant} alt="Restaurant Website Project" />
          </div>
          <div className="project-card-header">
            <h3>Restaurant Website Prototype</h3>
          </div>
          <div className="project-card-body-footer">
            <p>
            <a className="journey-link" href="https://capstone-project-alpha-coral.vercel.app/" target="_blank" rel="noreferrer">
              🔗 Website Link
            </a>
            </p>
            <p>
              A Prototype website for a restaurant  built using React.js.
              It features a menu display and reservation booking functionality.
            </p>
          </div>
        </article>
        <article className="project-card">
          <div className="project-card-image">
            <img src={extension} alt="Browser Extension Project" />
          </div>
          <div className="project-card-header">
            <h3>Web Dictionary Extension</h3>
          </div>
          <div className="project-card-body-footer">
            <p>
            <a className="journey-link" href="https://addons.mozilla.org/en-US/firefox/addon/web_dictionary/" target="_blank" rel="noreferrer">
              🔗 Link
            </a>
            </p>
            <p>
              A productivity-focused browser extension. A simple dictionary to look up word definitions.
              Built using Merriam Webster's API. Selecting a word on any webpage can automatically display its definition.
            </p>
          </div>
        </article>
        <article className="project-card">
          <div className="project-card-image">
            <img src={kami} alt="Kami Translator Project" />
          </div>
          <div className="project-card-header">
            <h3>Translator Extension</h3>
          </div>
          <div className="project-card-body-footer">
            <p>
            <a className="journey-link" href="https://chromewebstore.google.com/detail/kami-translator/ifkipfiehmjldnbjgffcljjcoelidfbd" target="_blank" rel="noreferrer">
              🔗 Link
            </a>
            </p>
            <p>
              A productivity-focused browser extension. A simple Translator Extension.
              Capable of translating selected text on any webpage into a different language using Azure Translate API.
              </p>
          </div>
        </article>
        <article className="project-card">
          <div className="project-card-image">
            <img src={accelerometer} alt="Accelerometer Project" />
          </div>
          <div className="project-card-header">
            <h3>Accelerometer Data Logger</h3>
          </div>
          <div className="project-card-body-footer">
            <p>
              A data logging system using accelerometer sensors to track motion. 
              Built with Arduino and an accelerometer.
            </p>
          </div>
        </article>
        <article className="project-card">
          <div className="project-card-image">
            <img src={rgb} alt="RGB LED Project" />
          </div>
          <div className="project-card-header">
            <h3>RGB LED Controller</h3>
          </div>
          <div className="project-card-body-footer">
            <p>
              A simple RGB LED controller using Arduino. 
              The light's color and the intensity can be controlled through a mobile app.
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Projects;