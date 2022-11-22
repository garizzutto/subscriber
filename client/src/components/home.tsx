import React from 'react';
import { Link } from 'react-router-dom';

import Logout from './Logout';
import SubscriptionList from './sub-list';
import { Subscription } from '../types';

import './home.css';

function Home({ subscriptions }: { subscriptions?: Array<Subscription> }) {

  const getMonthlyAverageCost = () => {
    return subscriptions?.map((sub) =>
      sub.cycle === 'Annually' ?
        Number(sub.price) / 12
        : Number(sub.price)
    ).reduce((prev, curr) => prev + curr)
  }

  const count = getMonthlyAverageCost();

  return (
    <>
      <img className="logo"
        src="https://static.wixstatic.com/media/3dbed1_1b94ac97e77b405f86a9a15e17f08eeb~mv2.png/v1/fill/w_637,h_167,al_c,lg_1,q_85,enc_auto/3dbed1_1b94ac97e77b405f86a9a15e17f08eeb~mv2.png"
        alt="Subscriber Logo"/>
      {count !== 0 &&
        <footer>
          <div className='header-notice'>
            <h2 className='header-cont-title'>My monthly average subscription expenses:</h2>
            <h2 className='header-cont-price'>${count?.toFixed(2)}</h2>
          </div>
        </footer>
      }
      <div className='body-cont'>
        <Logout />
        <section className='body-header'>
          <h3 className='title'>My Subscriptions</h3>
          <Link to='/add'><button className='add-btn'>Add Subscription</button></Link>
        </section>
        <div className='underline'></div>

        <SubscriptionList subscriptions={subscriptions} />
      </div>
    </>
  )
}

export default Home;
