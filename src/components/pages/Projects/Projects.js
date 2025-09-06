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
              Custom-built quadcopter with Arduino. 
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
            An Arduino Based Remote Controlled Car, controlled via a mobile app using Bluetooth.
            The speed of the car can be controlled from the app as well.
            Built another version where I control the car using Accelerometer making a Gesture Controlled Car.
            Also made a simple Obstacle Avoiding Car using Ultrasonic Sensor.
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
            <h3>Browser Extension</h3>
          </div>
          <div className="project-card-body-footer">
            <p>
              A productivity-focused browser extension. A simple dictionary to look up word definitions.
              Built using Merriam Webster's API. Selecting a word on any webpage can automatically display its definition.
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