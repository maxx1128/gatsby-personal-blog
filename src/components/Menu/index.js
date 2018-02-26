import React from 'react'
import Link from 'gatsby-link'
import s from './Menu.module.scss'

class Menu extends React.Component {

  make_menu_items = () => {
    const menu_items = this.props.data;

    return menu_items.map((menu, i) => (
        <li key={i} className={s.list_item}>
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
        <ul className={s.list}>
          {menu_items}
        </ul>
      </div>
    )
  }
}

export default Menu
