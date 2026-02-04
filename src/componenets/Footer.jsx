import React from 'react'
import "./style/Footer.css"
import "./style/nav.css"
const Footer = () => {
  const footerMenu =[
    { label: "contact us", path: "/contact" },
    { label: "affiliates", path: "/affiliates" },
    { label: "help", path: "/help" },
    { label: "follow us", path: "/follow" }
  ]

  return (
    <footer>
        <ul  className='nav-list'>
            {footerMenu.map((nav, i) => (
                <li key = {i}>
                    <span className='la'>
                        {nav.label}
                    </span>
                </li>
            ))}
        </ul>
    </footer>
  )
}

export default Footer