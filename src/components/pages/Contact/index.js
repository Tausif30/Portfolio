import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { fetchAPI, submitAPI } from '../../../utils/fakeAPI';
import pages from '../../../utils/pages';
import Contact from './Contact';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes; 
};

const initializeTimes = initialAvailableTimes => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const Contacts = () => {
  const [
    availableTimes, 
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate(pages.get('confirmation').path);
  }; 

  return (
    <div className="bookings">
      <h2>Contact Me</h2>
      <Contact 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    </div>
  );
};

export default Contacts;
