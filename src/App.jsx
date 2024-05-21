

import Contact from './components/contact/Contact'
import Layout from './components/layout/Layout'
import Service from './components/service/Service'
import Team from './components/team/Team'
import Work from './components/work/Work'

function App() {


  return (
    <>
      hello world
      <Layout>
        <Work />
        <Service />
        <Team />
        <Contact />
      </Layout>
    </>
  )
}

export default App
