// ******** IMPORTS ********
// Tours IMG
import img1 from './images/tour-1.jpeg'
import img2 from './images/tour-2.jpeg'
import img3 from './images/tour-3.jpeg'
import img4 from './images/tour-4.jpeg'

// ******** ARRAYS DATAS ********

const pageLinks = [
  { href: '#home', text: 'home' },
  { href: '#about', text: 'about' },
  { href: '#services', text: 'services' },
  { href: '#tours', text: 'tours' },
].map((link, index) => {
  link.id = index + 1
  return link
})

const socialLinks = [
  { href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
].map((link, index) => {
  link.id = index + 1
  return link
})

const services = [
  {
    icon: 'wallet',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    icon: 'tree',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    icon: 'socks',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
].map((service, index) => {
  service.id = index + 1
  return service
})

const toursList = [
  {
    img: img1,
    date: 'august 26th, 2020',
    title: 'tibet adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    days: 6,
    price: '2100',
  },
  {
    img: img2,
    date: 'october 1th, 2020',
    title: 'best of java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'indonesia',
    days: 11,
    price: '1400',
  },
  {
    img: img3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'hong kong',
    days: 8,
    price: '5000',
  },
  {
    img: img4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'kenya',
    days: 20,
    price: '3300',
  },
].map((tour, index) => {
  tour.id = index + 1
  return tour
})

// ******** NAVBAR / FOOTER LINKS ********
// Links Compponent
const Link = ({ href, text, itemClass }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  )
}
export const LinksList = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        return <Link {...link} key={link.id} itemClass={itemClass} />
      })}
    </ul>
  )
}

// ******** NAVBAR / FOOTER SOCIAL LINKS ********
// Socials Component
const Social = ({ href, icon, itemClass }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  )
}

export const SocialList = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((social) => {
        return <Social {...social} key={social.id} itemClass={itemClass} />
      })}
    </ul>
  )
}

// ******** TITLES ********
export const Title = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subtitle}</span>
      </h2>
    </div>
  )
}

// ******** SERVICES ********
const Service = ({ icon, title, text }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={`fas fa-${icon} fa-fw`}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  )
}

export const ServicesList = () => {
  return (
    <div className="section-center services-center">
      {services.map((service) => {
        return <Service {...service} key={service.id} />
      })}
    </div>
  )
}

// ******** TOURS ********
const Tour = ({ img, date, title, text, location, days, price }) => {
  const d = days > 1 ? ' days' : ' day'
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
          <p>
            {days}
            {d}
          </p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  )
}

export const ToursList = () => {
  return (
    <div className="section-center featured-center">
      {toursList.map((tour) => {
        return <Tour {...tour} key={tour.id} />
      })}
    </div>
  )
}
