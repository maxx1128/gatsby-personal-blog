import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import s from './about.module.scss'

class AboutIndex extends React.Component {
  render() {
    return (
      <div className={s.wrapper}>

        <div className={s.title}>
          <h1 className={s.header}>
            About Me
          </h1>

          <h5 className={s.subheader}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h5>
        </div>

        <div className={s.content}>
            <p>Hello, you’ve reached the About Page of Max Antonucci. I’m likely not here right now, so please read the following major info about myself and leave a issue or pull request after the footer.</p>

            <h3 id="im-a-coder">I’m a Coder</h3>

            <p>Some backstory: I originally studied journalism in college, but halfway through I started front-end programming and got gradually immersed in it. I wound up doing more coding than writing during my studies, until it was all I wanted to focus on (and getting paid for). Two days after graduation, I was working full-time as a developer.</p>

            <p>My biggest focus now is still front-end development, for several reasons: combining logic and creativity, making cool-looking components, always learning more, and the confused looks of people watching me work. I focus most on:</p>

            <ul>
              <li>The big three: HTML, CSS and Javascript.</li>
              <li>Preprocessors such as Nunjucks, Liquid, Pug, and Sass.</li>
              <li>Ember is my current JavaScript framework of choice, for both its focus on proven conventions and I use it heavily in my current job.</li>
              <li>I’ve got a special love of Sass architecture. So far my favorite system combines ITCSS, BEM, and mapping global variables. However, I’m becoming a fast fan of Atomic CSS.</li>
              <li>Webpack and Gulp.js to automate builds, optimizations, added functions, testing, and balancing my checkbook. They do it all.</li>
              <li>Jekyll for static-site generation. You’d be amazed how often it works better than WordPress.</li>
              <li>Front-end Architecture and Atomic Design for organized, scalable code. I’m a big fan of <a href="http://patternlab.io/">PatternLab.io</a> for this.</li>
              <li>Basic UI and UX design.</li>
            </ul>

            <p>In some of my free time I’m building my JavaScript fundamentals with Node, Express, and React.</p>

            <h3 id="im-a-writer">I’m a Writer</h3>

            <p>While coding is what ultimately stuck with me, I still enjoyed studying journalism. I wrote for the Daily Orange and did technical-focused features for The NewsHouse, as well as some data and visual reporting. My main thing was features on tough topics like religion and gun control, since I enjoy exploring hard topics most people like to avoid. As you can imagine, this helped my writing but not my social life. I later wrote opinion columns on traveling abroad and politics.</p>

            <p>Today my writing is sadly limited to my blog, though I’d like to write serious articles again someday.</p>

            <h3 id="im-a-freethinker">I’m a Freethinker</h3>

            <p>My most prized possessions actually <strong>aren’t</strong> my laptop, my laptop backups, or my laptop stickers. It’s my ability to think and imagine freely. They’re unique traits among humans that are important to embrace. Otherwise we risk losing our very humanity.</p>

            <p>Don’t be surprised if a good chunk of what I write, or especially tweet, has a philosophical edge. Asking unexpected questions and questioning unexpected things are ultimately our best weapons as people. Do we truly have free will? Is human nature innately positive or negative? How much can we trust our memories and perceptions? Can we tell when others are unconsciously manipulating our thoughts and decisions? Perhaps most importantly, what’s a moral way to live life?</p>

            <p>If the sky is falling, what was holding it up in the first place? Is it falling because of something we did or something we need to figure out? Is it a warning, an apocalypse, or the start of a horrible B movie?</p>

            <p>These, and more, are the thoughts that keep me up at night. I’ll send a press release about them all later.</p>

            <h4 id="random-facts-about-me-you-may-enjoy">Random Facts About Me You May Enjoy</h4>

            <ol>
              <li><strong>I enjoy boxing in the mornings.</strong> It’s better to get all that aggression out before any meetings. Punching bags don’t have any chances to poison my lunch in the late morning after hitting them in the chest.</li>
              <li><strong>I’m obsessed with the Phoenix Wright Franchise.</strong> Formal clothes aside, what’s not to love about people who generate pure awesome from a mix of logic, murders, magic lie-detecting superpowers, inane legal systems, and yelling? Nothing.</li>
              <li><strong>I’m an active “Maker”.</strong> New Haven has MakeHaven, a “maker space” with lots of tools for making crafts for fun and profit. My current favorites are the sewing machines and the laser cutters. They also have button machines, but I’ve already made dozens with my own.</li>
            </ol>

            <h3 id="a-summary-of-me">A Summary of Me</h3>

            <p>As you can tell from the above (because I know you didn’t skip to the end) I am a nerd with a budding coding career, offbeat sense of humor, a love of being intellectual, and requisite love of wine. But I like what I do and what I think about, despite knowing I’ll <em>always</em> have more to do in both. If anything, the fact that I need to keep learning is why I enjoy coding.</p>

            <p>Also I don’t drink coffee. Seems unimportant, but I assumed there’s a law about coffee jokes in these things.</p>

            <p>All done! You may now half-heartedly chuckle and navigate to another page here or elsewhere on the web.</p>
        </div>
      </div>
    )
  }
}

export default AboutIndex
