import React, { Component } from 'react'
import OctocatFigure from '../components/OctocatFigure'
import OctocatImage from '../images/octocat1.png'
import Octocat2Image from '../images/octocat2.jpg'
import OctocatIcon from '../images/octocatIcon1.jpeg'
import OctocatIcon2 from '../images/octocatIcon2.jpeg'

const octocats = [
  {
    id: 1,
    url: 'https://octodex.github.com/filmtocats',
    figNum: 146,
    name: 'Filmtocats',
    image: OctocatImage,
    icon: OctocatIcon
  },
  {
    id: 2,
    url: 'https://octodex.github.com/sentrytocat',
    figNum: 145,
    name: 'Sentrytocat',
    image: Octocat2Image,
    icon: OctocatIcon2
  }
]

class Octocat extends Component {
  render() {
    return (
      <main>
        {octocats.map((octocat) => {
          console.log(octocat)
          return (
            <OctocatFigure
              name={octocat.name}
              key={octocat.id}
              url={octocat.url}
              image={octocat.image}
              icon={octocat.icon}
            />
          )
        })}
      </main>
    )
  }
}

export default Octocat
