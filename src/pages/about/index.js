import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import s_page from './../../layouts/page.module.scss'

import Head from './../../components/Head'
import Title from './../../components/Title'

class AboutIndex extends React.Component {
  render() {
    
    const title = "Who I Am",
          tagline = "The story of my life, give or take a few years";

    return (
      <div>
        <Head
          title={title}
          url_path={this.props.location.pathname}
          tagline={tagline}
        />

        <Title
          title={title}
          tagline={tagline}
        />

        <div className={s_page.content}>
          <p>
            There's lots of things about myself I could write about here. But if I had to choose one that's defined my life the most, it's <strong>writing</strong>.
          </p>

          <p>
            One of my main hobbies as a kid was writing fiction. I went to college to study journalism. Halfway through I started writing code instead.
          </p>

          <p>
            As an adult, I'm still writing all the time. I write front-end code to make websites look pretty, run fast, and fit on phones. I write online about the code I've written, how I learned it, and how others could too. I write in my journal each night. I write notes about what other people wrote - code, life, philosophy, even court-released manuals on scam tactics. A dream of mine is to write a styled, interactive novel online. All the smaller things I can't fit into those, I throw into the Internet void as tweets.
          </p>

          <p>
            I do have interests other than writing. Most times I'm reading books and manga instead. In the mornings I take boxing classes. Sometimes I take walks or drink hot chocolate. Maybe play video games on the weekend. <strong>But most of my life is writing, and I love it that way.</strong>
          </p>

          <p>
            I love writing, in all its forms, since it gets to the core of being alive. Our lives are defined most by the thoughts and ideas around us - about ourselves, others, work, society, and the reasons we're here. Writing is the best way to distill these to their purest form and share them. To affect major change in the lives of others. Even if it's something silly like <a taget="_blank" rel="noopener" href="https://codepen.io/max1128/pen/xEOLmg">writing code for a bizarre spiral animation.</a>
          </p>

          <p>
            Not the best example, but you get the idea.
          </p>

          <p>
            In the future I hope to keep writing as much as possible. Writing code, blog posts, notes, maybe even fiction. I don't use Twitter as much, but I'll write more tweets too. The only things I don't want to write are restraining orders, online comments, or erotic fanfiction. Those aside, <strong>I'll be writing until I write my will.</strong>
          </p>
        </div>
      </div>
    )
  }
}

export default AboutIndex
