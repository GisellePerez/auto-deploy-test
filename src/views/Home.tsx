import React, { FunctionComponent } from 'react'

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return ( 
    <section>
      <h2>Home</h2>
      <p>A very simple home page</p>
    </section>
  );
}

export default Home;