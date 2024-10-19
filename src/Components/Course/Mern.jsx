import { useEffect, useState } from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import Coursestructure from "./Coursestructure";
import { MernStackCourses } from "../../apis/FakeData/Courses/Mern";


export default function Mern() {

  const [mernCourses, setMernCourses] = useState([]);


  useEffect(() => {
    setMernCourses(MernStackCourses);
  }, [])



  return (
    <>
      <Navbar />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Courses
            </h6>
            <h1 className="mb-5">MERN Stack Web Devlopment Cources</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <Coursestructure course={mernCourses} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}