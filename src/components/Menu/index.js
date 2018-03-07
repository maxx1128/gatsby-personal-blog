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

  get_menu_classes = () => {
    const is_vertical = this.props.vertical,
          vertical_classes = is_vertical ? s.vertical : s.horizontal;

    return `${s.list} ${is_vertical ? s.vertical : s.horizontal}`;
  }

  render() {

    const menu_items = this.make_menu_items(),
          classes = this.get_menu_classes();

    return (
      <div className={s.container}>
        <ul className={classes}>
          {menu_items}
        </ul>
      </div>
    )
  }
}

export default Menu
