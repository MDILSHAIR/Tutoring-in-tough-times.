import React, { useState } from 'react';

const MyRadioForm = () => {
  // State to store selected radio option
  const [selectedOption, setSelectedOption] = useState('');

  // Handler function to update state on radio option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handler function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the selected option, e.g., submit to a server or perform an action
    console.log('Selected option:', selectedOption);
  };

  return (
    <form onSubmit={handleSubmit}>

      {/* Radio buttons */}
     <div className='check-buttons'>
      <li className="row col-md-4">
      <label>
      <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
      <p className='amount'>$10,000</p>
     <p className="amount-content">Brooklyn pillar sponsor for a month</p>
      </label>
    </li>
     
    <li className="row col-md-4">
      <label>
      <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
      <p className='amount'>$3,600</p>
     <p className="amount-content">Sponsor a child for a year</p>
      </label>
    </li>
    <li className="row col-md-4">
      <label>
      <input
          type="radio"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
      <p className='amount'>$1,800</p>
      <p className="amount-content">Sponsor a child for a half year</p>
      </label>
    </li>
    
    <div className='right-radio'>

    <li className="row col-md-4">
      <label>
      <input
          type="radio"
          value="option4"
          checked={selectedOption === 'option4'}
          onChange={handleOptionChange}
        />
      <p className='amount'>$5,000</p>
     <p className="amount-content">Lakewood pillar sponsor for a month</p>
      </label>
    </li>
     
    <li className="row col-md-4">
      <label>
      <input
          type="radio"
          value="option5"
          checked={selectedOption === 'option5'}
          onChange={handleOptionChange}
        />
      <p className='amount'>$2,500</p>
     <p className="amount-content">Sponsor a child for the school year</p>
      </label>
    </li>
    <li className="row col-md-4">
      <label>
      <input
          type="radio"
          value="option6"
          checked={selectedOption === 'option6'}
          onChange={handleOptionChange}
        />
      <p className='other-amount col-md-6'>Other Amount</p>
      </label>
    </li>
    </div>
    <div className="donate-btn-3"><button type="button" class="btn btn-primary donate-btn3 col-md-6">Donate</button></div>
    </div>
    </form>
  );
};

export default MyRadioForm;
