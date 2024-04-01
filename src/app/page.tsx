import Image from "next/image";
import Header from '../app/components/header'
import Empowering from "./components/empowering";
import Mainlanding from "./components/mainlanding";
import Ads from "./components/ads";
import Theory from "./components/theory";
import Features from "./components/features";
import Works from "./components/works";
import Imageline from "./components/imageline";
import Backers from "./components/backers";
import FAQ from "./components/faq";
import Advisor from "./components/advisor";
import Team from "./components/team";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div>
     <div >
      <div className="">
        <Header />
      </div>

      <div className="">
        <Empowering />
      </div>
      

      <div>
        <Mainlanding/>
      </div>

      <div className="p-4">
        <Ads />
      </div>

      <div className="">
        <Theory />
      </div>

      <div>
        <Features />
      </div>

      <div>
        <Works />
      </div>

      <div>
        <Imageline />
      </div>

      <div>
        <Backers />
      </div>
      
      <div>
        <FAQ/>
      </div>

      <div>
        <Advisor />
      </div>

      <div>
        <Team />
      </div>

      <div>
        <Footer />
      </div>
     </div> 
    </div>
  );
}
