import React, { Component } from 'react'
import OctocatImage from '../images/octocat1.png'
import Octocat2Image from '../images/octocat2.jpg'
import OctocatIcon from '../images/octocatIcon1.jpeg'
import OctocatIcon2 from '../images/octocatIcon2.jpeg'

class OctocatFigure extends Component {
  render() {
    return (
      <section>
        <ul className="octocatContentList">
          <li>
            <figure>
              <a href={this.props.url} className="octocatMainImg">
                <img src={this.props.image} className="octocatMainImg2" alt="octocat-img" />
              </a>
              <figcaption>
                <p>{this.props.number}</p>
                <p>
                  the <a href="https://octodex.github.com/filmtocats">{this.props.name}</a> by{' '}
                  <a href="https://github.com/heyhayhay">
                    <img src={this.props.icon} className="creditIcon" alt="artist-credit-icon" />
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

export default OctocatFigure
