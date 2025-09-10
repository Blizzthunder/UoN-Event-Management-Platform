import React, { useEffect } from "react";
//import Navbar from "../components/navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import EventForm from "../components/eventform";

const EventManagementPage = () => {
  return (
    <div>
      <div className="EventManagementPage">
        <h1>Uonder</h1>
        <p>
          You next Event Starts Here!
        </p>
        <br />
        <br />
        <br />

        <div className="events">
          <p>
            {" "}
            Event Creator
          </p>
        </div>

        <EventForm />
      </div>
    </div>
  );
};

export default EventManagementPage;
