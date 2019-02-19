import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      
        <a href="https://octodex.github.com/">
          <img src="images/gitHubLogo.png" className="logoImg" />
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

    )
  }
}

export default HelloWorld
