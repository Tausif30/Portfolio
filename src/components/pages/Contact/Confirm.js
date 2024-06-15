import check from "./check-circle.svg"
import './Confirm.css'
const Confirm = () => {
  return (
    <div className="container confirmed-booking">
      <img src={check} alt='check'></img>
      <h2>I have received your mail.</h2>
      <p className='confirmation'>I will contact you soon.</p>
    </div>
  );
};

export default Confirm;
