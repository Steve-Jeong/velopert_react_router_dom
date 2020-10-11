import React from 'react'

const About = ({match}) => {
  return (
    <div>
      {match.params.username} Introduction
    </div>
  )
}

export default About
