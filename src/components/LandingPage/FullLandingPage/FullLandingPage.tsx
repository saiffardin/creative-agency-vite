import Companies from "../Companies/Companies";
import NavSection from "../NavSection/NavSection";
import Services from "../Services/Services";
import TopBanner from "../TopBanner/TopBanner";
import "./FullLandingPage.css";

const FullLandingPage = () => {
  return (
    <main id="landing-page-div">
      <div className="top-section">
        <NavSection />
        <TopBanner />
      </div>

      <Companies />

      <Services />
      {/* 
        <WorkCarousel></WorkCarousel>
        <ClientReview></ClientReview>
        <Footer></Footer> 
      */}
    </main>
  );
};

export default FullLandingPage;