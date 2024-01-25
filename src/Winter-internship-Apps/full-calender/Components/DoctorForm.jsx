
import React, { useState } from 'react';

const DoctorForm = ({ onDrSubmit }) => {
  const [drId, setDrId] = useState('');
  const [drName, setDrName] = useState('');

  const handleDrSubmit = () => {
    onDrSubmit(drId, drName);
    setDrId('');
    setDrName('');
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="drId">Enter Doctor Id:</label>
          <input type="text" id="drId" placeholder="Doctor Id" className="form-control" value={drId} onChange={(e) => setDrId(e.target.value)} />
          <label htmlFor="drName">Enter Doctor Name:</label>
          <input type="text" id="drName" placeholder="Doctor Name" className="form-control" value={drName} onChange={(e) => setDrName(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={handleDrSubmit} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default DoctorForm;
