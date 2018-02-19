import React from 'react'
import Link from 'gatsby-link'

class Menu extends React.Component {

  make_menu_items = () => {
    const menu_items = this.props.data;

    return menu_items.map((menu, i) => (
        <li key={i}>
          <Link to={menu.link}>
            {menu.name}
          </Link>
        </li>
      )
    );
  }

  render() {

    const menu_items = this.make_menu_items()

    return (
      <div>
        <ul>
          {menu_items}
        </ul>
      </div>
    )
  }
}

export default Menu
