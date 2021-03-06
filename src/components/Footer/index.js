import React from 'react'
import Link from 'gatsby-link'
import Icon from './../FeatherIcon'

import s from './Footer.module.scss'

class Footer extends React.Component {

  constructor(props) { super(props); }

  get_social_links = () => {
    const social_links = this.props.social_links;

    return social_links.map((social, i) => (
        <li key={i} className={s.social_link_item}>
          <a href={social.url} target="_blank" rel="noopener" className={s.social_link}>
            <Icon
              type={social.icon}
              size={20}
            />

            <span className={s.social_link_descr}>
              Link to my {social.name} profile
            </span>
          </a>
        </li>
      )
    );
  }

  get_wisdom = () => {
    const wisdoms = [
      "How different should legality and morality be?",
      "If the sky's falling, what was holding it up in the first place?",
      "It's only paranoia until it's justified.",
      "A little bit of craziness helps you keep your sanity.",
      "Listen and read, but never watch.",
      "Work with your thoughts, not against them.",
      "Reimagine, don't Recreate.",
      "Always remember the bigger picture.",
      "Question every claim. Including this one.",
      "Grow so much from failures, they become successes.",
      "Live simply, cynically, and not too seriously.",
      "Keep your crazy spark alive.",
      "Live by values, not desires.",
      "You only control yourself.",
      "Avoid others' toxic, pointless games.",
      "Can we truly prove we're not brains in jars?",
      "Those who aren't busy being reborn are busy dying.",
      "All we have is our right to feel lost.",
      "How do we examine our biases while still trusting our judgement?",
      "Confusion equals Morality plus Humanity.",
      "Nobody knows what's next, but everybody does it.",
      "Death is only the end if you assume the story is about you.",
      "Info isn't hidden today, it's drowned in a sea of nonsense.",
      "There's no normal, just the accidental cultural moment we're born into.",
      "Can something be a 'need' if we don't die without it?",
      "A person's main task in life is to give birth to themselves.",
      "Are we just dream figures in another's dream?",
      "Only when we let strangers in, can we find new ways to be ourselves.",
      "A free person owes an explanation only to themselves.",
      "The biggest chains are desires and ideals made to look like our own.",
      "Inside every cynical person is a disappointed idealist.",
      "To be is to be perceived.",
      "The eternal happiness you most wish for is the only thing you can't have.",
      "To live is to suffer. To survive is to find some meaning in the suffering.",
      "So... if you're miserable, you talk to a tree about it?",
      "Death is inevitable, so fearing it is pointless."
    ];

    return wisdoms[Math.floor(Math.random()*wisdoms.length)];
  }

  render() {
    
    const social_links = this.get_social_links(),
          wisdom       = this.get_wisdom();

    return (
      <footer className={s.wrapper}>
        <span className={s.wisdom}>
          {wisdom}
        </span>

        <ul className={s.social_list}>
          {social_links}
        </ul>
      </footer>
    );
  }
}

export default Footer
