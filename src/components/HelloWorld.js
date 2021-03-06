import React, { Component } from 'react'

import gitLogo from '../images/gitHubLogo.png'

class HelloWorld extends Component {
  render() {
    return (
      <header className="navHeader">
        <a href="https://octodex.github.com/">
          <img src={gitLogo} className="logoImg" alt="site-logo" />
        </a>
        <nav className="navBar">
          <ul className="navBarList">
            <li>
              <a href="http://feeds.feedburner.com/Octocats">RSS</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq.html">FAQ</a>
            </li>
            <li>
              <a href="https://github.com/">Back to GitHub</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default HelloWorld
