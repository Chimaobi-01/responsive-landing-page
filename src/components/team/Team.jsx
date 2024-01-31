import './team.scss'
import { FaTwitter, FaDribbble, FaFacebookSquare, FaInstagram, FaMedium, FaSkype, FaGit } from "react-icons/fa";


const Team = () => {
  return (
    <section className='team'>

      <div className="tcontainer">

        <header className="team_header">

          <h4>Startup Crew</h4>

          <p>
            The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.
          </p>

        </header>

        <div className="team_grid">

          {
            team.map(member => (
              <div className="member" key={member.id}>

                <img src={member.img} alt={member.name} />

                <div className="bio">
                  <span className="name">{member.name}</span>
                  <span className="position">{member.position}</span>
                </div>

                <div className="social">
                  {member.social.twitter && <FaTwitter />}
                  {member.social.facebook && <FaFacebookSquare />}
                  {member.social.dribble && <FaDribbble />}
                  {member.social.instagram && <FaInstagram />}
                  {member.social.skype && <FaSkype />}
                  {member.social.medium && <FaMedium />}
                  {member.social.git && <FaGit />}
                </div>
                
              </div>
            ))
          }
        </div>

      </div>

    </section>
  )
}

export default Team

const team = [
  {
    id: 1,
    img: "/team1.svg",
    name: "Leah Salomon",
    position: "UI Designer",
    social:{
      twitter:true,
      facebook:true,
      dribble:true,
      instagram:true,
      skype:false,
      medium:false,
      git:false
    }
    

  },
  {
    id: 2,
    img: "/team2.svg",
    name: "Colin Timmons",
    position: "UX Designer",
    social:{
      twitter:true,
      facebook:false,
      dribble:true,
      instagram:false,
      skype:false,
      medium:false,
      git:false

    }

  },
  {
    id: 3,
    img: "/team3.svg",
    name: "Miguel Osborne",
    position: "Front-end Developer",
    social:{
      twitter:false,
      facebook:false,
      dribble:false,
      instagram:false,
      skype:true,
      medium:true,
      git:true

    }
  },
  {
    id: 4,
    img: "/team4.svg",
    name: "Taylor Simon",
    position: "Product Manager",
    social:{
      twitter:true,
      facebook:false,
      dribble:false,
      instagram:true,
      skype:false,
      medium:false,
      git:false
    }
  },
  {
    id: 5,
    img: "/team5.svg",
    name: "Steven MacAlister",
    position: "Copyrighter",
    social:{
      twitter:true,
      facebook:false,
      dribble:false,
      instagram:false,
      skype:false,
      medium:false,
      git:false
    }
  },
]