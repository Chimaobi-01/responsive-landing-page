
import './styles/App.scss'
import Contact from './components/contact/Contact'
import Content from './components/content/Content'
import Features from './components/features/Features'
import Form from './components/form/Form'
import Getstarted from './components/getstarted/Getstarted'
import Landingpage from './components/landingpage/Landingpage'
import Pricing from './components/pricing/Pricing'
import Showcase from './components/showcase/Showcase'
import Team from './components/team/Team'
import Testimonial from './components/testimonial/Testimonial'
import Footer from './components/footer/Footer'

function App() {

  return (
  <div className='main'>
    <Landingpage />
    <Content />
    <Features />
    <Form />
    <Testimonial />
    <Getstarted />
    <Showcase />
    <Team />
    <Contact />
    <Pricing />
    <Footer />
  </div>
  )
}

export default App
