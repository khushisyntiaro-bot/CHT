import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { useNavigate } from "react-router";
import Gal1 from "../../assets/Gal1.jpg";
import Gal2 from "../../assets/Gal2.jpg";
import Gal3 from "../../assets/Gal3.jpg";
import Gal4 from "../../assets/Gal4.jpg";
import Gal5 from "../../assets/Gal5.jpg";
import Gal6 from "../../assets/Gal6.jpeg";
import Gal7 from "../../assets/Gal7.jpeg";
import Gal8 from "../../assets/Gal8.jpeg";
import Gal9 from "../../assets/Gal9.jpeg";
import Gal10 from "../../assets/Gal10.jpg";
function Gallery() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = [
    { id: "all", name: "All" },
    { id: "training", name: "Training Sessions" },
    { id: "events", name: "Events & Workshops" },
    { id: "placements", name: "Placements" },
    { id: "facilities", name: "Our Facilities" }
  ];
  const galleryItems = [
    {
      id: 1,
      category: "training",
      title: "CAD Training Session",
      description: "Students learning CATIA V5 in our state-of-the-art lab",
      image: Gal1
    },
    {
      id: 2,
      category: "training",
      title: "German Language Class",
      description: "Interactive German language training session",
      image: Gal2
    },
    {
      id: 3,
      category: "events",
      title: "Career Guidance Workshop",
      description: "Expert panel discussion on overseas opportunities",
      image: Gal3
    },
    {
      id: 4,
      category: "placements",
      title: "Dubai Placement Drive",
      description: "Students receiving offer letters from UAE employers",
      image: Gal4
    },
    {
      id: 5,
      category: "facilities",
      title: "Computer Lab",
      description: "Modern CAD training facility with latest software",
      image: Gal5
    },
    {
      id: 6,
      category: "facilities",
      title: "Classroom Setup",
      description: "Spacious and well-equipped learning environment",
      image: Gal6
    },
    {
      id: 7,
      category: "events",
      title: "Success Celebration",
      description: "Celebrating student achievements and placements",
      image: Gal7
    },
    {
      id: 8,
      category: "training",
      title: "Hands-on Training",
      description: "Practical CAD design session in progress",
      image: Gal8
    },
    {
      id: 9,
      category: "placements",
      title: "Visa Approval Celebration",
      description: "Students celebrating successful visa approvals",
      image: Gal9
    },
    {
      id: 10,
      category: "events",
      title: "Workshop Session",
      description: "Interactive learning and skill development",
      image: Gal10
    }
  ];
  const filteredItems = activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);
  return <div className="bg-white pt-20">
      {
    /* Hero Section */
  }
      <section className="relative bg-gradient-to-r from-primary to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Moments That Matter
            </h1>
            <p className="text-xl text-white/90">
              A glimpse into our training sessions, events, and student success stories
            </p>
          </div>
        </div>
      </section>

      {
    /* Category Filter */
  }
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => <button
    key={category.id}
    onClick={() => setActiveCategory(category.id)}
    className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeCategory === category.id ? "bg-primary text-white shadow-lg" : "bg-accent text-foreground hover:bg-primary/10"}`}
  >
                  {category.name}
                </button>)}
            </div>
          </div>
        </div>
      </section>

      {
    /* Gallery Grid */
  }
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => <div
    key={item.id}
    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
  >
                  <div className="relative h-80 overflow-hidden">
                    <ImageWithFallback
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>

            {filteredItems.length === 0 && <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">No images found in this category</p>
              </div>}
          </div>
        </div>
      </section>
    </div>;
}
export {
  Gallery
};
