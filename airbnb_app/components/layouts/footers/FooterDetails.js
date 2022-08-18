import React from 'react'
import style from '../../../styles/footer.module.scss';

function FooterDetails() {
  return (
      <div className="row">
        <div className="col-md-3">
          <ul className={style.fUl}>
            <li id={style.header}>Support</li>
            <li>Help Center</li>
            <li>AirCover</li>  
            <li>Safety Information</li>
            <li>Supporting people with disabilities</li>
            <li>Cancellation options</li>
            <li>Our COVID-19 Response</li>
            <li>Report a neighbourhood concern</li>
          </ul>
        </div>
  
        <div className="col-md-3">
          <ul className={style.fUl}>
            <li id={style.header}>Community</li>
            <li>Airbnb.org: disaster relief housing</li>
            <li>Support Afghan refugees</li>
            <li>Combating discrimination</li>
          </ul>
        </div>
  
        <div className="col-md-3">
          <ul className={style.fUl}>
            <li id={style.header}>Hosting</li>
            <li>Try hosting</li>
            <li>AirCover for Hosts</li>
            <li>Explore hosting resources</li>
            <li>Visit our community forum</li>
            <li>How to host responsibly</li>
          </ul>
        </div>
        
        <div className="col-md-3">
          <ul className={style.fUl}>
            <li id={style.header}>Airbnb</li>
            <li>Newsroom</li>
            <li>Learn about new features</li>
            <li>Letter from our founders</li>
            <li>Carees</li>
            <li>Investors</li>
            <li>Gift cards</li>
          </ul>
        </div>
         
      </div>
  )
}

export default FooterDetails