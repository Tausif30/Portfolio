import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Confirm.css'
const Confirm = () => {
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" style={{color: "#4D403A",}} />
      <h2>I have received your mail.</h2>
      <p className='confirmation'>I will contact you soon.</p>
    </div>
  );
};

export default Confirm;
