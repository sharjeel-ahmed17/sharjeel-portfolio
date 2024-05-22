

import Contact from './components/contact/Contact'
import Hero from './components/hero/Hero'
import Layout from './components/layout/Layout'
import Service from './components/service/Service'
import Team from './components/team/Team'
import Work from './components/work/Work'

function App() {


  return (
    <>

      <Layout>
        <Hero />
        <Work />
        <Service />
        <Team />
        <Contact />

      </Layout>
    </>
  )
}

export default App
