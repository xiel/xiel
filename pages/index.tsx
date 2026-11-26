import ClientsPartners from '../components/Home/ClientPartners/ClientsPartners'
import IntroSection from '../components/Home/IntroSection'
import OpenSourceProjects from '../components/Home/Projects/OpenSourceProjects'
import StageHero from '../components/Home/Stage/StageHero'
import Technologies from '../components/Home/Technologies/Technologies'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

export default function Index() {
  return (
    <Layout headerFixed>
      <SEO />
      <StageHero />
      <IntroSection />
      <Technologies />
      <OpenSourceProjects />
      <ClientsPartners />
    </Layout>
  )
}
