import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import Popup from "reactjs-popup";
import Search from "./Search";

function Header() {
  const history = useHistory();
  const [showSearch, setshowSearch] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    history.push("/search");
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo-500x181.png"
          alt=""
        />
      </Link>
      <div className="header__center">
        <Popup
          trigger={<button variant="outlined">Search Locations</button>}
          position="bottom center"
          arrow={false}
        >
          <span>
            <div className="search-menu">
              <div className="search-item">
                <input
                  type="text"
                  placeholder="Locations"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
                {showSearch && <Search />}

                <Button
                  variant="outlined"
                  onClick={() => setshowSearch(!showSearch)}
                >
                  {showSearch ? "hide" : "Check Dates"}
                </Button>

                <input min={0} defaultValue={2} type="number" />

                <div className="search-btn">
                  <Button variant="outlined" onClick={handleSubmit}>
                    search
                  </Button>
                </div>
              </div>
            </div>
          </span>
        </Popup>
        <SearchIcon className="icon" />
      </div>
      <div className="header__right">
        <div className="header__host">
          <Button onClick={() => history.push("/becomehost")}>
            Become a Host
          </Button>
        </div>
        <div className="header__lang">
          <Popup
            trigger={
              <Button variant="outlined">
                <LanguageIcon />
                <ExpandMoreIcon />
              </Button>
            }
            position="bottom center"
            arrow={false}
          >
            <span>
              <div className="lang">
                <Button variant="outlined">Language</Button>
                <Button variant="outlined">Currency</Button>
              </div>
            </span>
          </Popup>
        </div>
        <div className="header__login">
          <Popup
            trigger={
              <Button variant="outlined">
                <MenuIcon />
                <AccountCircleIcon className="acc" />
              </Button>
            }
            position="bottom center"
            arrow={false}
          >
            <span>
              <div className="lang">
                <Button variant="outlined">Login</Button>
                <Button variant="outlined">Sign Up</Button>
              </div>
            </span>
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default Header;
