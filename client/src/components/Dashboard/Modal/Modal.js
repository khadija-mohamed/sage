import {useState} from "react";
import './Modal.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
 
function Sagemodal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="container">
        <Button className="nextButton" onClick={handleShow}>
          Add Calendar
        </Button>
        <Modal show={show} onHide={handleClose} >
          <Modal.Header>
            <Modal.Title>To access bookings follow the link below</Modal.Title>
          </Modal.Header>
          <Modal.Body><p><a href="https://calendar.google.com/calendar/u/0?cid=ODNmNGk2Y2Q4MDdkODJlaW9rMnE1NmJ1M2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"><p>Click here to add Sage Calendar</p></a></p></Modal.Body>
          <Modal.Footer>
            <Button className="button" onClick={handleClose}>
              Done!
            </Button>
          </Modal.Footer>
        </Modal>
 
      </div>
    );
  }
 
export default Sagemodal;