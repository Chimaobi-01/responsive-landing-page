import './pricing.scss'

const Pricing = () => {
  return (
    <section className='pricing'>

      <div className="pricing_container">

        <div className="pricing_intro">
          <h3>Plans & Pricing</h3>
          <p>Startup Framework is free forever — you only pay for custom domain hosting or to export your site.</p>
        </div>

        <div className="pricing_cards">

          {
            priceCards.map(card => (
              <article key={card.id} className="card">

                <header>
                  <span>{card.title}</span>
                  <h4>{card.price} <span>$</span></h4>
                </header>
                
                <div className="wrapper">

                  <ul className="offers">
                    {
                      card.offers.map(offer => (
                        <li key={offer.text}>
                          {offer.availability && <img src='/offerscheck.png' alt='available' />}
                          <span style={{
                            opacity: offer.availability? '': 0.7, 
                            fontWeight: offer.availability? 400: 300}}>
                            {offer.text}
                          </span>
                        </li>
                      ))
                    }
                  </ul>

                  <div className="pricing_btn">
                    <button>Get Started</button>
                  </div>

                </div>

              </article>
            ))
          }

        </div>

      </div>


    </section>
  )
}

export default Pricing

const priceCards = [
  {
    id: 1,
    title: "Starter",
    price: 9.99,
    offers: [
      { text: "2 GB of space", availability: true },
      { text: "14 days of backups", availability: true },
      { text: "Social integrations", availability: true },
      { text: "Client billing", availability: true },
      { text: "Remote access", availability: false },
      { text: "Custom domain", availability: false },
      { text: "24 hours support", availability: false },
      { text: "Admin tools", availability: false },
      { text: "Collaboration tools", availability: false },
      { text: "User management", availability: false },
    ]
  },
  {
    id: 2,
    title: "Professional",
    price: 19.99,
    offers: [
      { text: "2 GB of space", availability: true },
      { text: "14 days of backups", availability: true },
      { text: "Social integrations", availability: true },
      { text: "Client billing", availability: true },
      { text: "Remote access", availability: true },
      { text: "Custom domain", availability: true },
      { text: "24 hours support", availability: true },
      { text: "Admin tools", availability: false },
      { text: "Collaboration tools", availability: false },
      { text: "User management", availability: false },
    ]
  },
  {
    id: 3,
    title: "Team",
    price: 49.99,
    offers: [
      { text: "2 GB of space", availability: true },
      { text: "14 days of backups", availability: true },
      { text: "Social integrations", availability: true },
      { text: "Client billing", availability: true },
      { text: "Remote access", availability: true },
      { text: "Custom domain", availability: true },
      { text: "24 hours support", availability: true },
      { text: "Admin tools", availability: true },
      { text: "Collaboration tools", availability: true },
      { text: "User management", availability: true },
    ]
  },
]