import React from 'react'
import "./style/Aside.css"

const Aside = () => {
  const asideMenu =  [
    { label: "links 1", path: "#" },
    { label: "links 2", path: "#" },
    { label: "links 3", path: "#" },
    { label: "links 4", path: "#" },
    { label: "links 5", path: "#" },
    { label: "links 6", path: "#" }
  ]

  return (
    <aside>
          <ul className='container'>
            {asideMenu.map((nav, i) => (
                <li key = {i}>
                    <span className='la'>
                        {nav.label}
                    </span>
                </li>
            ))}
        </ul>
    </aside>
  )
}

export default Aside