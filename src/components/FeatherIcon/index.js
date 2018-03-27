import React from 'react';
import * as Icon from 'react-feather'
import s from './FeatherIcon.module.scss'

class FeatherIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  get_icon = () => {
    const icon_type = this.props.type
    const size = this.props.size || 24

    if (icon_type === "edit-3") { return (<Icon.Edit3 size={size}/>) }
    else if (icon_type === "cast") { return (<Icon.Cast size={size}/>) } 
    else if (icon_type === "link") { return (<Icon.Link size={size}/>) } 
    else if (icon_type === "codepen") { return (<Icon.Codepen size={size}/>) } 
    else if (icon_type === "image") { return (<Icon.Image size={size}/>) } 
    else if (icon_type === "video") { return (<Icon.Video size={size}/>) } 
    else if (icon_type === "at-sign") { return (<Icon.AtSign size={size}/>) } 
    else if (icon_type === "twitter") { return (<Icon.Twitter size={size}/>) } 
    else if (icon_type === "github") { return (<Icon.Github size={size}/>) } 
    else if (icon_type === "linkedin") { return (<Icon.Linkedin size={size}/>) } 
    else { return (<Icon.Edit3 size={size}/>) }
  }

  render() {
    const icon = this.get_icon();
    const classes = this.props.classes ? `${s.container} ${this.props.classes}` : `${s.container}`

    return (
      <div className={classes}>
        {icon}
      </div>
    )
  }
}

export default FeatherIcon
