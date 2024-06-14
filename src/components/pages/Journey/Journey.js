import ut from './assets/ut.png'
import bit from './assets/bit.jpg'
import utokyo from './assets/utokyo.jpg'
import './Journey.css';
const Journey = () => {
  return (
      <>
      <div className="menu-header">
      <h2><u>Academics</u></h2>
    </div>
        <section className="academics">
          <article className="Journey-card">
            <div className="Journey-card-image">
              <img src={bit} alt="BIT" />
            </div>
            <div className="Journey-card-header">
              <h3>Bangladesh International Tutorial</h3>
            </div>
            <div className="Journey-card-body-footer">
              <p>
              <a className="journey-link" href="https://www.facebook.com/bitschoolofficialpage" target="_blank" rel="noreferrer">Facebook</a>
                <br></br>
                <a className="journey-link" href="https://www.instagram.com/bit_b23/" target="_blank" rel="noreferrer">My Yearbook</a>
                <br></br>
                Timeline: 2009-2023
                <br></br>
                Study Level: Highschool Graduate (Valedictorian)
              </p>
            </div>
          </article>
          <article className="Journey-card">
            <div className="Journey-card-image">
              <img src={utokyo} alt="UTokyo" />
            </div>
            <div className="Journey-card-header">
              <h3>University of Tokyo</h3>
            </div>
            <div className="Journey-card-body-footer">
              <p>
              <a className="journey-link" href="https://www.u-tokyo.ac.jp/en/" target="_blank" rel="noreferrer">Website</a>
              <br></br>
              <a className="journey-link" href="https://peak.c.u-tokyo.ac.jp/courses/es/index.html" target="_blank" rel="noreferrer">My Program</a>
              <br></br>
                Timeline: 2024-Present
                <br></br>
                Course: Environmental Science
                <br></br>
                Study Level: Undergraduate (MEXT Scholar)
              </p>
            </div>
          </article>
        </section>
        <div className="menu-header">
      <h2><u>Professional</u></h2>
    </div>
        <section className="professional">
        <article className="Journey-card">
            <div className="Journey-card-image">
              <img src={ut} alt="UT" />
            </div>
            <div className="Journey-card-header">
              <h3>Uttara Tutorials - Teaching Assisstant</h3>
            </div>
            <div className="Journey-card-body-footer">
              <p>
              Timeline: 03/2024 - Present
              <br></br>
              Role: Make Questions for students and work as invigilator.
              </p>
            </div>
          </article>
        </section>
      </>
  );
};

export default Journey;
