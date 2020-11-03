import React from 'react'
import './SidebarOption.css'

function SideBarOption({title, Icon}) {
    return (
        <div class='sidebarOption'>
            {Icon && <Icon className='sidebarOption__icon'/> }
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SideBarOption
