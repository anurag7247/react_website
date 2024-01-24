import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ sNews, updatesNews, nDate, updatenDate, onSubmit }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const submitClose = () => {
    onSubmit();
    handleClose();
  };

  return (
    <>
      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="inputField1">Search News:</label>
          <input
            type="text"
            className="form-control"
            name="inputField1"
            value={sNews}
            onChange={(e) => {
              updatesNews(e.target.value);
            }}
          />
          <br />
          <label htmlFor="inputField1">Select Date:</label>
          <input
            type="date"
            className="form-control"
            name="inputField1"
            value={nDate}
            onChange={(e) => {
              updatenDate(e.target.value);
            }}
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button type="button" className="btn btn-primary" onClick={submitClose}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SearchBar;
