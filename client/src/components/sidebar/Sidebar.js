import React from 'react';
import './Sidebar.css';
import SidebarItems from './SidebarItem';
import NotesIcon from '@material-ui/icons/Notes';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarItems Icon = {<NotesIcon/>} title="My ToDos"/>
            <SidebarItems Icon ={ <StarBorderOutlinedIcon/>} title = "Important"/>
            <SidebarItems Icon ={<CalendarTodayOutlinedIcon/>} title = "Planned"/>
            
        </div>
    )
}

export default Sidebar
