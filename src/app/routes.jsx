import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Founder } from "./pages/Founder";
import { OurStory } from "./pages/OurStory";
import { WhyUs } from "./pages/WhyUs";
import { Teams } from "./pages/Teams";
import { Testimonials } from "./pages/Testimonials";
import { Gallery } from "./pages/Gallery";
import { Services } from "./pages/Services";
import { PassportServices } from "./pages/PassportServices";
import { ForeignLanguages } from "./pages/ForeignLanguages";
import { Courses } from "./pages/Courses";
import { Franchise } from "./pages/Franchise";
import { JobPlacements } from "./pages/JobPlacements";
import { Contact } from "./pages/Contact";
import { OverseasEducation } from "./pages/OverseasEducation";
import { VisaProcessing } from "./pages/VisaProcessing";
import { CareerCounseling } from "./pages/CareerCounseling";
import { BusinessSetupMainZone } from "./pages/BusinessSetupMainZone";
import { BusinessSetupFreeZone } from "./pages/BusinessSetupFreeZone";
import { GermanLanguage } from "./pages/GermanLanguage";
import { JapaneseLanguage } from "./pages/JapaneseLanguage";
import { IeltsTraining } from "./pages/IeltsTraining";
import { AutocadTraining } from "./pages/AutocadTraining";
import { CatiaTraining } from "./pages/CatiaTraining";
import { CreoTraining } from "./pages/CreoTraining";
import { SolidworksTraining } from "./pages/SolidworksTraining";
import { UnigraphicsTraining } from "./pages/UnigraphicsTraining";
import { PlasticProductDesign } from "./pages/PlasticProductDesign";
import { BiwWeldingFixture } from "./pages/BiwWeldingFixture";
import { NxCadTraining } from "./pages/NxCadTraining";
import { AutocadElectrical } from "./pages/AutocadElectrical";
import { EplanTraining } from "./pages/EplanTraining";
import { CivilAutocadTraining } from "./pages/CivilAutocadTraining";
import { EtabsTraining } from "./pages/EtabsTraining";
import { BimCivilArchTraining } from "./pages/BimCivilArchTraining";
import { ExcelTraining } from "./pages/ExcelTraining";
import { RevitMepTraining } from "./pages/RevitMepTraining";
import { EstimationCostingTraining } from "./pages/EstimationCostingTraining";
import { StaadProTraining } from "./pages/StaadProTraining";
import { RevitArchitectureTraining } from "./pages/RevitArchitectureTraining";
import { GoogleSketchUpTraining } from "./pages/GoogleSketchUpTraining";
import { VrayTraining } from "./pages/VrayTraining";
import { ArchAutoCADTraining } from "./pages/ArchAutoCADTraining";
import { ArchVrayTraining } from "./pages/ArchVrayTraining";
import { ArchSketchUpTraining } from "./pages/ArchSketchUpTraining";
import { ArchLumionTraining } from "./pages/ArchLumionTraining";
import { Arch3dsMaxTraining } from "./pages/Arch3dsMaxTraining";
import { ArchPhotoshopTraining } from "./pages/ArchPhotoshopTraining";
import { Careers } from "./pages/Careers";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { applySeo } from "./seo";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    applySeo(pathname);
  }, [pathname]);
  return null;
}
function Layout({ children }) {
  return <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>;
}
function NotFound() {
  return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
      </div>
    </div>;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/founder",
    element: <Layout><Founder /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/our-story",
    element: <Layout><OurStory /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/why-us",
    element: <Layout><WhyUs /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/teams",
    element: <Layout><Teams /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/testimonials",
    element: <Layout><Testimonials /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/gallery",
    element: <Layout><Gallery /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/services",
    element: <Layout><Services /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/passport-services",
    element: <Layout><PassportServices /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/foreign-languages",
    element: <Layout><ForeignLanguages /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/courses",
    element: <Layout><Courses /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/franchise",
    element: <Layout><Franchise /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/job-placements",
    element: <Layout><JobPlacements /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/overseas-education",
    element: <Layout><OverseasEducation /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/visa-processing",
    element: <Layout><VisaProcessing /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/career-counseling",
    element: <Layout><CareerCounseling /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/business-setup-main-zone",
    element: <Layout><BusinessSetupMainZone /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/business-setup-free-zone",
    element: <Layout><BusinessSetupFreeZone /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/german-language",
    element: <Layout><GermanLanguage /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/japanese-language",
    element: <Layout><JapaneseLanguage /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/ielts-training",
    element: <Layout><IeltsTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/autocad-training",
    element: <Layout><AutocadTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/catia-training",
    element: <Layout><CatiaTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/creo-training",
    element: <Layout><CreoTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/solidworks-training",
    element: <Layout><SolidworksTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/unigraphics-training",
    element: <Layout><UnigraphicsTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/plastic-product-design",
    element: <Layout><PlasticProductDesign /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/biw-welding-fixture",
    element: <Layout><BiwWeldingFixture /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/nx-cad-training",
    element: <Layout><NxCadTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/autocad-electrical",
    element: <Layout><AutocadElectrical /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/eplan-training",
    element: <Layout><EplanTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/civil-autocad-training",
    element: <Layout><CivilAutocadTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/etabs-training",
    element: <Layout><EtabsTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/bim-civil-arch-training",
    element: <Layout><BimCivilArchTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/excel-training",
    element: <Layout><ExcelTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/revit-mep-training",
    element: <Layout><RevitMepTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/estimation-costing-training",
    element: <Layout><EstimationCostingTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/staad-pro-training",
    element: <Layout><StaadProTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/revit-architecture-training",
    element: <Layout><RevitArchitectureTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/google-sketchup-training",
    element: <Layout><GoogleSketchUpTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/vray-training",
    element: <Layout><VrayTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/arch-autocad-training",
    element: <Layout><ArchAutoCADTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/arch-vray-training",
    element: <Layout><ArchVrayTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/arch-sketchup-training",
    element: <Layout><ArchSketchUpTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/arch-lumion-training",
    element: <Layout><ArchLumionTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/arch-3dsmax-training",
    element: <Layout><Arch3dsMaxTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/arch-photoshop-training",
    element: <Layout><ArchPhotoshopTraining /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "/careers",
    element: <Layout><Careers /></Layout>,
    errorElement: <Layout><NotFound /></Layout>
  },
  {
    path: "*",
    element: <Layout><NotFound /></Layout>
  }
]);
export {
  router
};
