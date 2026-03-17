import { ArrowRight, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router";
function Hero() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate("/contact");
    setTimeout(() => {
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };
  return <section id="home" className="relative pt-20 min-h-[90vh] flex items-center">
      {
    /* Background Image */
  }
      <div className="absolute inset-0 z-0">
        <img
    src="https://images.unsplash.com/photo-1609466032539-214fbc49d8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1vZGVybnxlbnwxfHx8fDE3NzMzMTE1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    alt="Dubai skyline"
    className="w-full h-full object-cover"
  />
        {
    /* Dark Overlay */
  }
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
      </div>

      {
    /* Content */
  }
      <div className="container mx-auto px-4 relative z-10 py-20 h-full">
        <div className="flex flex-col items-center justify-between min-h-[70vh]">
          {
    /* Top Content - Centered */
  }
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            {
    /* Badge */
  }
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-sm text-white">You Dream It - We Make It</span>
            </div>
            
            {
    /* Subheadline */
  }
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6">
              Unlock Your Career Potential in Dubai & Beyond
            </h2>
            
            {
    /* Description */
  }
            <p className="text-base md:text-lg text-white/80 max-w-3xl mb-6">
              At Career Hub Technology, we empower you with globally-recognized skills training, career guidance, and overseas opportunities - from IELTS and foreign languages to visa processing and international placements.
            </p>
          </div>
          
          {
    /* Tagline - Bottom */
  }
          <div className="mb-6">
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-serif text-center -mt-4 italic">
              Skills That Matter. Careers That Grow.<br />Futures That Go Global.
            </p>
          </div>
          
          {
    /* CTA Buttons - Bottom */
  }
          <div className="flex flex-col sm:flex-row gap-4">
            <button
    onClick={scrollToContact}
    className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-green-600 active:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-bold"
  >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <button
    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border border-white/30 flex items-center justify-center gap-2 font-bold"
  >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>;
}
export {
  Hero
};
