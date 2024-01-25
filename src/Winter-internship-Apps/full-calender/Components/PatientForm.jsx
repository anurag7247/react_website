// PatientForm.js
import React, { useState } from 'react';

const PatientForm = ({ onPatientSubmit, drArray }) => {
  const [pName, setPName] = useState('');
  const [STime, setSTime] = useState('');
  const [ETime, setETime] = useState('');
  const [Eprob, setEprob] = useState('');
  const [Edoc, setEdoc] = useState('');

  const handlePatientSubmit = () => {
    onPatientSubmit(pName, STime, ETime, Eprob, Edoc);
    setPName('');
    setSTime('');
    setETime('');
    setEprob('');
    setEdoc('');
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="pName">Enter Patient Name:</label>
          <input type="text" id="pName" placeholder="Patient Name" className="form-control" value={pName} onChange={(e) => setPName(e.target.value)} />
          <label htmlFor="STime">Enter Starting Time:</label>
          <input type="datetime-local" id="STime" className="form-control" value={STime} onChange={(e) => setSTime(e.target.value)} />
          <label htmlFor="ETime">Enter Ending Time:</label>
          <input type="datetime-local" id="ETime" className="form-control" value={ETime} onChange={(e) => setETime(e.target.value)} />
          <label htmlFor="Eprob">Enter Your Problem:</label>
          <input type="text" id="Eprob" className="form-control" value={Eprob} onChange={(e) => setEprob(e.target.value)} />

          <div className="dropdown mt-3">
            <label htmlFor="Edoc">Select Doctor:</label>
            <input type="text" list="dmenu" id="Edoc" placeholder="Select Doctor" className="form-control" value={Edoc} onChange={(e) => setEdoc(e.target.value)} />
            <datalist id="dmenu">
              {drArray.map((e) => (
                <option key={e}>{e}</option>
              ))}
            </datalist>
          </div>
        </div>
        <button className="btn btn-primary" onClick={handlePatientSubmit} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PatientForm;
