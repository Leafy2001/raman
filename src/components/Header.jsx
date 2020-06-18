import React from "react";
import "../styles.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import { orange, green } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import TimerIcon from "@material-ui/icons/Timer";
import RoomIcon from "@material-ui/icons/Room";
import TitleIcon from "@material-ui/icons/Title";
import dp from './images/dp.jpg'

function Header() {
  return (
    <div>
      <div className="nav-bar">
        <ul>
          <li>
            <FiberManualRecordIcon
              className="greendot"
              fontSize="large"
              style={{ color: green[500] }}
            />
            <a className="logo-nav" href="#Logo">
              {" "}
              <h2>Logo</h2>
            </a>
          </li>
          <li>
            <a className="dash-nav" href="#Dashboard">
              <h2>Dashboard</h2>
            </a>
          </li>
          <li>
            <a className="dash-exp" href="#FindExperts">
              <h2>Find Experts</h2>
            </a>
          </li>
          <li>
            <a className="dash-exp" href="#Discussion">
              <h2>Discussion</h2>
            </a>
          </li>
          <li>
            <NotificationsIcon
              className="icon"
              fontSize="large"
              style={{ color: orange[800] }}
            />
          </li>
          <li>
            <ChatIcon
              className="icon"
              fontSize="large"
              style={{ color: orange[800] }}
            />
          </li>
          <li>
            <img class="nav-img icon" src={dp} alt="dp" />
          </li>
          <li>
            <div className="drop" class="dropdown">
              <button class="dropbtn">∨</button>
              <div class="dropdown-content">
                <a href="#Link1">Link 1</a>
                <a href="#Link2">Link 2</a>
                <a href="#Link3">Link 3</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="side">
          <h2>Filters</h2>
          <h3 className="top-name">EXPERTISE</h3>
          <div>
            <div class="wrap">
              <div class="search">
                <input type="text" class="searchTerm" />
                <button type="submit" class="searchButton">
                  <i class="fa fa-search" />
                </button>
              </div>
            </div>
          </div>

          <div className="blocks">
            <p className="text-block">
              Strategy{" "}
              <IconButton aria-label="delete">
                <CloseIcon fontSize="small" style={{ color: orange[4500] }} />
              </IconButton>
            </p>
          </div>
          <h3 className="top-name">FOCUS AREA</h3>
          <div>
            <div class="wrap">
              <div class="search">
                <input type="text" class="searchTerm" />
                <button type="submit" class="searchButton">
                  <i class="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
          <div className="blocks">
            <p className="text-block">
              Focus Area{" "}
              <IconButton aria-label="delete">
                <CloseIcon fontSize="small" style={{ color: orange[4500] }} />
              </IconButton>
            </p>
          </div>
          <div className="blocks">
            <p className="text-block">
              Focus Area{" "}
              <IconButton aria-label="delete">
                <CloseIcon fontSize="small" style={{ color: orange[4500] }} />
              </IconButton>
            </p>
          </div>
          <h3 className="top-name">RATINGS</h3>
          <div>
            <div class="w3-container">
              <table class="w3-table">
                <tr>
                  <td>
                    {" "}
                    <input type="checkbox" />
                    <label><span role = "img" aria-label="f"> ⭐ ⭐ ⭐ ⭐ ⭐ </span></label>
                    <br />
                  </td>
                  <td>
                    <input type="checkbox" />
                    <label><span role = "img" aria-label="f"> ⭐ ⭐ ⭐ ⭐ </span></label>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input type="checkbox" />
                    <label><span role = "img" aria-label="f"> ⭐ ⭐ ⭐ </span></label>
                    <br />
                  </td>
                  <td>
                    {" "}
                    <input type="checkbox" />
                    <label><span role = "img" aria-label="f"> ⭐ ⭐</span> </label>
                    <br />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <h3 className="top-name">PRICE</h3>
          <div>
            <input type="checkbox" />
            <label> Free</label>
            <br />
            <input type="checkbox" />
            <label> Less than $25</label>
            <br />
            <input type="checkbox" />
            <label> $25 - $50</label>
            <br />
            <input type="checkbox" />
            <label> More than $100</label>
            <br />
          </div>
        </div>
        <div class="main">
          <h2>Featured Experts</h2>
          <Button
            variant="contained"
            style={{ color: orange[50], backgroundColor: orange[500] }}
            className="best-match"
            size="small"
            endIcon={<ExpandMoreIcon>BestMatch</ExpandMoreIcon>}
          >
            Best Match
          </Button>

          <div>
            1.
            <img className="expert-image" src={dp} alt="dp" />
            <div className="expert-intro">
              <h3>David melvik </h3>
              <h4>Founder@The Millennials & CEO @ABC </h4>
              <div className="new-Profile">
                {" "}
                <p>View Profile</p>{" "}
              </div>
              <FavoriteBorderIcon
                fontSize="large"
                className="heart"
                style={{ color: orange[800] }}
              />

              <hr />
            </div>
          </div>
          <br />
          <h4>Price:FREE</h4>
          <h4 className="expert-text">
            {" "}
            <TimerIcon fontSize="small" /> 02 Free Sessions Available{" "}
            <RoomIcon fontSize="small" /> Tampa,USA{" "}
            <TitleIcon fontSize="small" /> Greek,English,French
          </h4>
          <p><span role = "img" aria-label="f">⭐</span> 4.9(120)</p>
          <p className="lorenepsum">
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
          <div className="blocks-2">
            <p className="text-block-2">Marketing </p>
          </div>
          <div className="blocks-2">
            <p className="text-block-2">SEO </p>
          </div>
          <div className="blocks-2">
            <p className="text-block-2">Content Marketing </p>
          </div>
          <div className="blocks-2">
            <p className="text-block-2">MarketingAutomation </p>
          </div>

          <div>
            2.
            <img className="expert-image" src={dp} alt="dp" />
            <div className="expert-intro">
              <h3>David melvik </h3>
              <h4>Founder@The Millennials & CEO @ABC </h4>
              <div className="new-Profile">
                {" "}
                <p>View Profile</p>{" "}
              </div>
              <FavoriteBorderIcon
                fontSize="large"
                className="heart"
                style={{ color: orange[800] }}
              />

              <hr />
            </div>
          </div>
          <br />
          <h4>Price:FREE</h4>
          <h4 className="expert-text">
            {" "}
            <TimerIcon fontSize="small" /> 02 Free Sessions Available{" "}
            <RoomIcon fontSize="small" /> Tampa,USA{" "}
            <TitleIcon fontSize="small" /> Greek,English,French
          </h4>
          <p><span role = "img" aria-label="f">⭐</span> 4.9(120)</p>
          <p className="lorenepsum">
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
          <div className="blocks-2">
            <p className="text-block-2">Marketing </p>
          </div>
          <div className="blocks-2">
            <p className="text-block-2">SEO </p>
          </div>
          <div className="blocks-2">
            <p className="text-block-2">Content Marketing </p>
          </div>
          <div className="blocks-2">
            <p className="text-block-2">MarketingAutomation </p>
          </div>

          <div>
            3.
            <img className="expert-image" src={dp} alt="dp" />
            <div className="expert-intro">
              <h3>David melvik </h3>
              <h4>Founder@The Millennials & CEO @ABC </h4>
              <div className="new-Profile">
                {" "}
                <p>View Profile</p>{" "}
              </div>
              <FavoriteBorderIcon
                fontSize="large"
                className="heart"
                style={{ color: orange[800] }}
              />

              <hr />
            </div>
          </div>
          <br />
          <h4>Price:FREE</h4>
          <h4 className="expert-text">
            {" "}
            <TimerIcon fontSize="small" /> 02 Free Sessions Available{" "}
            <RoomIcon fontSize="small" /> Tampa,USA{" "}
            <TitleIcon fontSize="small" /> Greek,English,French
          </h4>
          <p><span role = "img" aria-label="f">⭐</span> 4.9(120)</p>
          <p className="lorenepsum">
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
          <div className="blocks-2">
            <p className="text-block-2">Marketing </p>
          </div>
          <div className="blocks-2">
            <p className="text-block-2">SEO </p>
          </div>
          <div className="blocks-2">
            <p className="text-block-2">Content Marketing </p>
          </div>
          <div className="blocks-2">
            <p className="text-block-2">MarketingAutomation </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
