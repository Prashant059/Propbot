import  MainHero from '../components/MainHero';
import { WhatWeDo } from "../components/WhatWeDo"
import { FeaturedProperties } from "../components/FeaturedProperties"
import { PropertiesForSale } from "../components/PropertiesForSale"
import { Newsletter } from "../components/Newsletter"

function HomePage() {
  return (
    <div className="min-h-screen">
      <MainHero />
      <WhatWeDo />
      <FeaturedProperties />
      <PropertiesForSale />
      <Newsletter />
    </div>
  )
}

export default HomePage
