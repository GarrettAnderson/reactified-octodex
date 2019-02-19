import React, { Component } from 'react'

import OctocatImage from '../images/octocat1.png'
import Octocat2Image from '../images/octocat2.jpg'
import OctocatIcon from '../images/octocatIcon1.jpeg'
import OctocatIcon2 from '../images/octocatIcon2.jpeg'

class Octocat extends Component {
  render() {
    return (
      <section>
        <ul className="octocatContentList">
          <li>
            <figure>
              <a href="https://octodex.github.com/filmtocats" className="octocatMainImg">
                <img src={OctocatImage} className="octocatMainImg2" alt="octocat-img" />
              </a>
              <figcaption>
                <p>#146</p>
                <p>
                  the <a href="https://octodex.github.com/filmtocats">Filmtocats</a> by{' '}
                  <a href="https://github.com/heyhayhay">
                    <img src={OctocatIcon} className="creditIcon" alt="artist-credit-icon" />
                  </a>
                </p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <a href="https://octodex.github.com/sentrytocat">
                <img src={Octocat2Image} className="octocatMainImg" alt="octocat-img" />
              </a>
              <figcaption>
                <p className="octocatImgNumber">#145</p>
                <p className="creditText">
                  the <a href="https://octodex.github.com/sentrytocat">Sentrytocat</a> by{' '}
                  <a href="https://github.com/cameronmcefee">
                    <img src={OctocatIcon2} className="creditIcon" alt="artist-credit-icon" />
                  </a>
                </p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
    )
  }
}

export default Octocat
