import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ConfirmedBookings.css'
const ConfirmedBooking = () => {
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x"/>
      <h2>I have received your mail.</h2>
      <p className='confirmation'>I will contact you soon.</p>
    </div>
  );
};

export default ConfirmedBooking;
