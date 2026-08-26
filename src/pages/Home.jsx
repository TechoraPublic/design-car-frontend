import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/Home/Hero'
import HomeServices from "../components/Home/HomeServices";
import AutomotiveDevelopment from '../components/Home/AutomotiveDevelopment';
import ProductDesignSection from '../components/Home/ProductDesignSection';
import WhyDesignCurve from '../components/Home/WhyDesignCurve';
import ClientTestimonials from '../components/Home/ClientTestimonials';
import Footer from '../components/layout/footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeServices />
      <AutomotiveDevelopment />
      <ProductDesignSection />
      <WhyDesignCurve />
      <ClientTestimonials />
    </div>
  )
}

export default Home
