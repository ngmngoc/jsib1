import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
  } from "@fortawesome/free-solid-svg-icons";
import './header.css';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faBed,faCalendarDays,faCar,faPerson,faPlane,faTaxi)


const Header = () => {
    return (
      <div className="head">
        <div className={"headerContainer"}>
          <div className="headerList">
            <div className="headerListItems active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItems">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItems">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItems">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItems">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
          <h1 className="heading">A lifetime of discounts? It's Genius.</h1>
          <p className="marketing">
            Get rewarded for your travels - unlock instant savings of 10% or more
            with a free Lamabooking account
          </p>
          <button className="headerSignin">Sign in / Register</button>
          <div className="headerSearching">
            <div className="headerSearchingItems">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchingInput"
              />
            </div>
            <div className="headerSearchingItems">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span className="headerSearchingText">10/02/2022 to 10/02/2022</span>
            </div>
            <div className="headerSearchingItems">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span className="headerSearchingText">1 adult 0 children 1 room</span>
            </div>
            <div className="headerSearchingItems">
              <button className="headerSignin">Search</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;