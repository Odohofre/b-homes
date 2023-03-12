import serviceImage from '../assets/services-images.png'
import SectionHead from './SectionHead'
import SectionSubhead from './SectionSubhead'


export default function Services() {
  return (
    <section className='flex'>
      <img src={serviceImage} />
      <div>
        <SectionHead  heading="our services" />
        <SectionSubhead content="Comfort is our Top Priority for you" />
        <p className="text-dark-50">
          We are always ready to help by providing the best service for you. We
          believe a good place to live can make your life better.
        </p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  )
};
