import React from 'react'
import './SidebarItem.css'
function SidebarItems({Icon,title}) {
    return (
        <div className="sidebarItem">
            <div className="sidebarItems__icon">
            {Icon}
            </div>
            <div className="sidebarItems__title">
            <p>{title}</p>
            </div>
            
        </div>
    )
}

export default SidebarItems
