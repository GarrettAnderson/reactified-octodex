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
    image: '../images/octocat1.png',
    icon: '../images/octocatIcon1.jpeg'
  }
  // ,
  // {
  //   id: 2,
  //   url: 'https://octodex.github.com/sentrytocat',
  //   figNum: 145,
  //   name: 'Sentrytocat',
  //   image: OctocatImage2,
  //   icon: OctocatIcon2
  // }
]
// {octocats.map((octocat) => {
//    console.log(this.props)
//  }
// <Octocat name='filmtocat' number='146'/>
// in the HTML can now use this.props in the Octocat component ==> this.props.name; this.props.number

// {octocats.map(octocat => {
//   return (
//     <Octocat key={Octocat.id} url={Octocat.url} /> // this allows us to use this.props.key/ .url to dynamically pass in data
//   )
// })}

class Octocat extends Component {
  render() {
    return (
      <main>
        {octocats.map((octocat) => {
          return (
            <OctocatFigure
              name={octocat.name}
              key={octocat.id}
              url={octocat.url}
              icon={octocat.icon}
              image={octocat.image}
            />
          )
        })}
      </main>
    )
  }
}

export default Octocat
