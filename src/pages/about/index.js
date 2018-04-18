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
            If I had to choose one thing that's defined my life more than any other, it's writing.
          </p>

          <p>
            One of my main hobbies as a kid was writing fiction. I went to college to study journalism. Halfway through I started writing code instead.
          </p>

          <p>
            As an adult, I'm still writing all the time. I write code to make websites look pretty, run fast, and fit on phones. I write online about the code I've written, how I learned it, and how others could too. I write in my journal each night. I write notes about what other people wrote - code, life, philosophy, even court-released manuals on scam tactics. All the smaller things I can't write in any of the above, I throw into the Internet void as tweets.
          </p>

          <p>
            I do have interests other than writing. Most times I'm reading instead. In the mornings I take boxing classes. Sometimes I take walks or drink hot chocolate. But most of my life is writing, and I love it that way.
          </p>

          <p>
            I love writing, in all its forms, since it gets to the core of being alive. Our lives are defined most by the thoughts and ideas around us - about ourselves, others, work, society, and the reasons we're here. Writing is the best way to distill these to their purest form and share them. To affect major change in the lives of others. Even if it's something silly like <a taget="_blank" rel="noopener" href="https://codepen.io/max1128/pen/xEOLmg">writing code for a bizarre spiral animation.</a>
          </p>
        </div>
      </div>
    )
  }
}

export default AboutIndex
