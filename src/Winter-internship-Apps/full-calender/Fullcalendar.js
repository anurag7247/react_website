// App.js
import React, { useState } from 'react';
import Calendar from './Components/Calendar';
import DoctorForm from './Components/DoctorForm';
import PatientForm from './Components/PatientForm';

const FullCalendar = () => {
  const [resources, setResources] = useState([]);
  const [events, setEvents] = useState([]);
  const [drArray, setDrArray] = useState([]);

  const handleDrSubmit = (drId, drName) => {
    setDrArray((prevDrArray) => [...prevDrArray, drId]);

    const drobj = {
      id: drId,
      title: drName,
    };

    setResources((prevResources) => [...prevResources, drobj]);
  };

  const handlePatientSubmit = (pName, STime, ETime, Eprob, Edoc) => {
    const pObj = {
      title: pName,
      start: STime,
      end: ETime,
      description: Eprob,
      resourceId: Edoc,
    };

    setEvents((prevEvents) => [...prevEvents, pObj]);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <Calendar resources={resources} events={events} />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <DoctorForm onDrSubmit={handleDrSubmit} />
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <PatientForm onPatientSubmit={handlePatientSubmit} drArray={drArray} />
        </div>
      </div>
    </div>
  );
};

export default FullCalendar;
