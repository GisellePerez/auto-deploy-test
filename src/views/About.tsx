import React, { FunctionComponent } from 'react'

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return ( 
    <section>
      <h2>About</h2>
      <p>A very simple About page</p>
    </section>
  );
}

export default About;