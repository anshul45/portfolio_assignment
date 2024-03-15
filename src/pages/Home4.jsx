import data from '../Data.json';
import About from '../components/About/About';
import Iconbox from '../components/Iconbox/Iconbox';
import Skill from '../components/Skill/Skill';
import Resume from '../components/Resume/ResumeSection';
import BlogSection from '../components/Blog/BlogSection';
import ReviewSection from '../components/Review/ReviewSection';
import Contact from "../components/Contact/Contact";
import PortfolioSection from '../components/Protfolio/PortfolioSection';
import Hero4 from '../components/Hero/Hero4';


const Home4 = ({fetchedData}) => {
  const { heroData, aboutData, serviceData, skillData, portfolioData, blogData, resumeData, reviewData, contactData, socialData, socialData2 } = data;
  return (
    <>
      <Hero4 data={heroData.homeFourHero} socialData={socialData2} fetchedData={fetchedData} />
      <About data={aboutData} fetchedData={fetchedData.about} data-aos="fade-right" />
      <Iconbox data={fetchedData?.services} data-aos="fade-right" />
      <Skill data={skillData} fetchedData={fetchedData?.skills} data-aos="fade-right" />
      <Resume data={resumeData} />
      <PortfolioSection data={fetchedData?.projects}  data-aos="fade-right" />
      <ReviewSection data={reviewData} fetchedData={fetchedData?.testimonials}  data-aos="fade-right" />
      <BlogSection data={blogData} data-aos="fade-right" />
      <Contact data={contactData} socialData={socialData} fetchedData={fetchedData} data-aos="fade-right" />
    </ >
  )
}

export default Home4;