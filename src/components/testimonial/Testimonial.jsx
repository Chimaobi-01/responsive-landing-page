import './testimonial.scss'

const Testimonial = () => {



  return (
    <section className='testimonial'>

      <div className="tmcontainer">

        <h4>Our Happy Clients</h4>

        <div className="tmgrid">

          {
            testimonies.map(client => (
              <div key={client.id} className="tmcard">
                <img src={client.img} alt="" />
                <div className='cardtext'>
                  <p>
                    {client.words}
                  </p>
                  <span>{client.name}</span>
                </div>
              </div>
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default Testimonial


const testimonies = [
  {
    img: "/client1.jpg",
    words: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
    name: "Rayhan Curran",
    id:1
  },
  {
    img: "/client2.jpg",
    words: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
    name:"Gene Whitfield",
    id:2
  },
  {
    img: "/client3.jpg",
    words: "The most important part of the Startup Framework is the samples",
    name: "Kayley Frame",
    id:3
  },
  {
    img: "/client4.jpg",
    words: "I’ve built my website with Startup just in one day, and it was ready-to-go. ",
    name: "Allan Kim",
    id:4
  },
]