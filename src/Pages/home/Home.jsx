import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img' />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I,m Lalit Singh.</span> Web Developer
          </h1>

          <p className='home__description'>
            To Work With an Organization Where Can Learn New Skills And Increase My Abilities For
            The Organizational Goals as Well as Myself
          </p>

          <Link to={'/about'} className='button'>
            More About Me <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className='color__block'></div>

    </section>
  )
}

export default Home
