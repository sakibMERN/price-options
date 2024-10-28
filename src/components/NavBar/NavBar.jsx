import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link/Link';

const NavBar = props => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/players", name: "Players" },
        { id: 4, path: "/teams", name: "Teams" },
        { id: 5, path: "/contact", name: "Contact" }
      ];
      
      
      

  return (
    <nav>
        <ul className='md:flex md:gap-5 justify-end'>
            {
                routes.map(route => <Link key={routes.id} route={route}></Link>)
            }
        </ul>
    </nav>
  )
}

NavBar.propTypes = {}

export default NavBar