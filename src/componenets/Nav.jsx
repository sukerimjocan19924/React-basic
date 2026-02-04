import React from 'react'
import "./style/Nav.css"

const Nav = () => {
    const navList= [
    { label: "page 2", path: "/page2" },
    { label: "page 3", path: "/page3" },
    { label: "page 4", path: "/page4" },
    { label: "page 5", path: "/page5" },
    { label: "page 6", path: "/page6" }
  ]

  return (
    <nav>
        <ul  className='nav-list'>
            {navList.map((nav, i) => (
                <li key = {i}>
                    <span className='la'>
                        {nav.label}
                    </span>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Nav