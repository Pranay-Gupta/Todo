import React, { useState } from "react";
import "./Navabar.css";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import Avatar from "@material-ui/core/Avatar";
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
function Navabar() {
  const [search, setSearch] = useState('');
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h3>TO-DO</h3>
      </div>
      <div className="navbar__search">
        <SearchIcon className="navbar__search__icon"/>
        <input type="text" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search..." />
      </div>

      <div className="navbar__right">
        <IconButton>
        <SettingsIcon className="navbar__right__icon"/>
        </IconButton>
        <IconButton>
        <HelpOutlineOutlinedIcon className="navbar__right__icon"/>
        </IconButton>
        <Avatar className="navbar__right__avatar"/>
      </div>
    </div>
  );
}

export default Navabar;
