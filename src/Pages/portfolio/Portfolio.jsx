import React from 'react'
import { portfolio } from '../../data'
import PortfolioItem from '../../components/PortfolioItem'
import './Portfolio.css';
import { BrowserRouter, Link } from 'react-router-dom';




const Portfolio = () => {
  return (
    <div>
      <section className='portfolio section'>
        <h2 className='section__title'>My <span>Portfolio</span></h2>

        <div className='portfolio__container container grid'>
          {portfolio.map((item) => {
            return <PortfolioItem key={item.id} {...item} 
            />
          })}
           
           
           

        </div>
      </section>

    </div>
  )
}

export default Portfolio
