import './showcase.scss'

const Showcase = () => {
  return (
    <section className='showcase'>

        <div className="shccontainer">

          <header>
            <h4>Last works</h4>
            <span>View all Works</span>
          </header>

          <div className="shcgrid">
            {
              works.map(item => (
                <div className="item" key={item.id}>
                  <img src={item.img} alt="" />

                  <div className="itemtext">
                    <span> {item.category} </span>
                    <span> {item.title} </span>
                  </div>
                </div>
              ))
            }
          </div>

        </div>

    </section>
  )
}

export default Showcase

const works = [
  {
    id:1,
    img:"/work1.png",
    category:"UI kit",
    title:"Mozart Project"
  },
  {
    id:2,
    img:"/work2.png",
    category:"Framework",
    title:"Startup Framework 2.0"
  },
  {
    id:3,
    img:"/work3.png",
    category:"Pictures",
    title:"Air Forces"
  },
  {
    id:4,
    img:"/work4.png",
    category:"Photos",
    title:"From the Sky"
  },
]