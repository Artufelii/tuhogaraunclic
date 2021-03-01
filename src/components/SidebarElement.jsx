import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const SidebarElement = ({ title, state, setState, desplegarMenu, submenu }) => {
  return(
    <li className="sidebar__menu">
      <div className={ state ? 'sidebar__menu--title sidebar__menu--rotate' : 'sidebar__menu--title '} 
        onClick={() => desplegarMenu(state, setState)}>
        { title } 
        <FontAwesomeIcon 
          icon={faCaretDown} 
        />
      </div>
      <div>
        <ul>
          { submenu.map((x, i)=> <li key={i} className={state ? 'sidebar__menu--item': 'sidebar__menu--item-hidden'}> {x} </li> )}
        </ul>
      </div>
    </li>
  )
}

export default SidebarElement
