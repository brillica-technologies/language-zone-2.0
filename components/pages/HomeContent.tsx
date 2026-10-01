"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useRouter } from "next/navigation";
import { show_query_form } from "@/lib/legacy";

type Course = "German" | "Spanish" | "IELTS";

export default function HomeContent() {
  const router = useRouter();
  const [activeCourse, setActiveCourse] = useState<Course>("German");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  // hero "Find a Course" button: go to the chosen course page, then reset the select
  const findCourse = () => {
    if (selectedCourse) {
      router.push(`/courses/${selectedCourse}`);
      setSelectedCourse("");
    }
  };

  return (
    <>
      {/* index.css of the original imports Poppins, only the home page loads it */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
        precedence="default"
      />
      <section className="hero-section">
        <div className="hero-section-part1">
          <div className="hero-section-desc">
            <div className="hero-section-desc-box">
              <h1 className="hero-section-desc__title">Language Zone</h1>
              <p className="hero-section-desc__info">
                Easy Language
                <br /> Learning !
              </p>
            </div>
            <div className="hero-section-desc__actions">
              <div className="banner-form">
                <Select
                  name="course"
                  items={[
                    { value: "german", label: "German" },
                    { value: "ielts", label: "IELTS" },
                    { value: "spanish", label: "Spanish" },
                  ]}
                  value={selectedCourse || null}
                  onValueChange={(value) => setSelectedCourse(value ?? "")}
                >
                  <SelectTrigger className="hero-select-trigger">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent
                    className="hero-select-content"
                    alignItemWithTrigger={false}
                  >
                    <SelectItem className="hero-select-item" value="german">
                      German
                    </SelectItem>
                    <SelectItem className="hero-select-item" value="ielts">
                      IELTS
                    </SelectItem>
                    <SelectItem className="hero-select-item" value="spanish">
                      Spanish
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Button unstyled id="find-course-button" onClick={findCourse}>
                  Find a Course
                </Button>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/Hero.jpeg" alt="hero-image" />
          </div>
        </div>
        <div className="hero-section-part2">
          <span>Our Courses are Mapped to : &nbsp;&nbsp;</span>
          <div className="home-image-container">
            <img
              src="/images/GOETHE-logo.png"
              alt="GOETHE-logo"
              style={{ width: "30%", height: "96%" }}
            />{" "}
            <span className="icon-separator">|</span>{" "}
            <img
              src="/images/DELE-logo.png"
              alt="DELE-logo"
              style={{ width: "20%", height: "80%" }}
            />{" "}
            <span className="icon-separator">|</span>{" "}
            <img
              src="/images/IELTS-flag.png"
              alt="IELTS-logo"
              style={{ width: "30%" }}
            />
          </div>
        </div>
      </section>
      <section className="our-courses-section">
        <div className="our-courses__heading">
          <h1>Our Courses</h1>
        </div>
        <video autoPlay loop muted id="course-video" key={activeCourse}>
          <source
            src={`/images/${activeCourse.toLowerCase()}_flag.mp4`}
            type="video/mp4"
          />{" "}
          Your browser does not support the video tag.
        </video>
        <div className="our-courses__tabs-block">
          <div className="our-courses__tab">
            <Button
              unstyled
              className={`tab-link${activeCourse === "German" ? " active" : ""}`}
              onClick={() => setActiveCourse("German")}
              id="defaultOpenCourse"
            >
              <img src="/images/german-flag.png" alt="german-flag" />{" "}
              <span>German</span>
            </Button>
            <Button
              unstyled
              className={`tab-link${activeCourse === "Spanish" ? " active" : ""}`}
              onClick={() => setActiveCourse("Spanish")}
            >
              <img src="/images/spanish-flag.png" alt="spanish-flag" />{" "}
              <span>Spanish</span>
            </Button>
            <Button
              unstyled
              className={`tab-link${activeCourse === "IELTS" ? " active" : ""}`}
              onClick={() => setActiveCourse("IELTS")}
            >
              <img src="/images/IELTS-flag.png" alt="IELTS-flag" />{" "}
              <span>IELTS</span>
            </Button>
          </div>
          <div
            className="tab-content"
            id="German"
            style={{ display: activeCourse === "German" ? "block" : "none" }}
          >
            <p>
              Start your training with our transformative German language course
              in Dehradun. We provide comprehensive Language Training in
              Dehradun, ensuring proficiency and cultural understanding. This
              specialized course prepares you for the Goethe Certification,
              offering internationally recognized credentials. With dedicated
              instructors and immersive experiences, our German language
              training caters to all skill levels, providing a dynamic path to
              linguistic mastery. Join LanguageZone for a personalized and
              impactful German language course, unlocking a world of
              opportunities.
            </p>
          </div>
          <div
            className="tab-content"
            id="Spanish"
            style={{ display: activeCourse === "Spanish" ? "block" : "none" }}
          >
            <p>
              Start your language journey with our immersive Spanish language
              training in Dehradun. Providing extensive language training, we
              guarantee proficiency and cultural understanding. This specialized
              course led to the internationally recognized Diplomas de Español
              como Lengua Extranjera - DELE certification. With dedicated
              trainers and captivating experiences, our Spanish language
              training caters to different proficiency levels, providing a
              dynamic path to linguistic mastery.
            </p>
          </div>
          <div
            className="tab-content"
            id="IELTS"
            style={{ display: activeCourse === "IELTS" ? "block" : "none" }}
          >
            <p>
              We offer specialized training to help you achieve success in the
              IELTS exam our expert-led IELTS Training in Dehradun. This
              specialized training guides you toward achieving the coveted IELTS
              certification. Our comprehensive IELTS preparation course is
              designed to equip you with the skills and strategies needed to
              excel in all four sections of the test: Reading, Writing,
              Listening, and Speaking. Led by experienced instructors
              well-versed in the nuances of the IELTS exam. Whether you're
              aiming for academic or general training, our tailored programs
              cater to diverse needs and proficiency levels. Join us not to just
              prepare for IELTS but to confidently navigate each section,
              ensuring you're well-prepared for success in this globally
              recognized English language proficiency test. Elevate your IELTS
              scores and unlock doors to a world of academic and professional
              opportunities with LanguageZone expert IELTS training.
            </p>
          </div>
        </div>
      </section>
      <section className="about_us_section_main_div">
        <div className="industry_first_div">
          <h2 className="about_us_section_heading">
            <span className="span1">About</span>{" "}
            <span className="span2">Us</span>
          </h2>
          <p className="about_us_section_text">
            Welcome to LanguageZone, the leading provider of language courses in
            Dehradun. At LanguageZone, our primary focus is to deliver
            exceptional language training by offering customized Foreign
            Language Courses In Dehradun to meet the specific requirements of
            the individuals. Our team of certified trainers specializes in
            Goethe, DELF, DELE, IELTS, and JLPT certifications, and is committed
            to guiding you throughout your language-learning journey. we excel
            in providing comprehensive German language training, preparing you
            for the prestigious Goethe Certification.
          </p>
          <details>
            <summary
              className="about_us_section_text"
              style={
                readMoreOpen
                  ? { position: "absolute", bottom: "-10%" }
                  : { position: "static" }
              }
              onClick={() => setReadMoreOpen(!readMoreOpen)}
            >
              {readMoreOpen ? "Show Less" : "Read More"}
            </summary>
            <span className="about-content about_us_section_text">
              If you have a passion for French, our French language training
              course will pave the way for your success in obtaining the Diplôme
              d'Études en Langue Française - DELF Certification. Additionally,
              our Spanish language training will equip you with the necessary
              skills to achieve the Diplomas de Español como Lengua Extranjera -
              DELE Certification. For those aiming to attain fluency in English,
              our IELTS certification preparation program is designed to help
              you master the language. Furthermore, our specialized JLPT courses
              will ensure your proficiency in the Japanese language.
              LanguageZone is not just a language school, it is your gateway to
              a world of Verbal fluency excellence. Join us today and Start your
              Foreign Language Training In Dehradun that transcends boundaries,
              opening doors to new opportunities.
            </span>
          </details>
        </div>
        <div className="industry_second_div">
          <img
            className="img_industry"
            src="/images/small_logo.png"
            alt="our logo"
          />
        </div>
      </section>
      <section>
        <div className="career-service__heading">
          <h2>Why Choose Us</h2>
        </div>
        <div className="Career_service_container">
          <div className="career_services">
            <div
              className="career_services_content"
              style={{ background: "#e8f4ff" }}
            >
              <div className="img_career_service">
                <img className="img" src="/images/trainer.png" alt="" />
              </div>
              <div className="career_services_sec">
                <h3 className="career_heading_title">Expert Instructors</h3>
                <p className="career_description">
                  Quality instructors drive our success. We choose experienced,
                  passionate language experts dedicated to creating a supportive
                  learning environment. Trust us to help you reach your language
                  goals and unlock new opportunities.
                </p>
              </div>
            </div>
          </div>
          <div className="career_services" style={{ justifyContent: "end" }}>
            <div
              className="career_services_content"
              style={{ background: "#ffe1f8" }}
            >
              <div className="img_career_service">
                <img className="img" src="/images/book.png" alt="" />
              </div>
              <div className="career_services_sec">
                <h3 className="career_heading_title">
                  Flexible Learning Options
                </h3>
                <p className="career_description">
                  We offer flexible language training programs to suit your busy
                  schedule. Our flexible Language Training fits any schedule.
                  Choose online or offline classes, evenings, or personalized
                  sessions. Achieve your language goals at your pace, unlocking
                  new opportunities.
                </p>
              </div>
            </div>
          </div>
          <div className="career_services">
            <div
              className="career_services_content"
              style={{ background: "#dfffdf" }}
            >
              <div className="img_career_service">
                <img className="img" src="/images/communication.png" alt="" />
              </div>
              <div className="career_services_sec">
                <h3 className="career_heading_title">Communicative Approach</h3>
                <p className="career_description">
                  Experience language learning with our Communicative Approach.
                  Our instructors create an environment for active engagement in
                  conversations and practical exercises. Choose our Language
                  Courses for real-world language skills that go beyond
                  structure and vocabulary.
                </p>
              </div>
            </div>
          </div>
          <div className="career_services" style={{ justifyContent: "end" }}>
            <div
              className="career_services_content"
              style={{ background: "#ffe6b6" }}
            >
              <div className="img_career_service">
                <img className="img" src="/images/offer.png" alt="" />
              </div>
              <div className="career_services_sec">
                <h3 className="career_heading_title">Affordable Prices</h3>
                <p className="career_description">
                  Quality education should be affordable. Choose our language
                  programs for expert instruction, engaging content, and a
                  supportive learning environment—all within your budget. Learn
                  a language without compromising quality or affordability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-section-part1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 457 314"
            fill="none"
          >
            <path d="M0 0H237.5L457 314H221.5L0 0Z" fill="#8E2978" />
          </svg>
          <div className="contact-section-part1__desc">
            <h2>Don’t know what Course to choose ?</h2>
            <p>Enter your mobile number &amp; our experts will help you !</p>
          </div>
        </div>
        <div className="contact-section-part2">
          <div className="home-contact-form">
            <Input
              unstyled
              type="text"
              name="User name"
              placeholder="Your Name"
              autoComplete="off"
              id="HomeUserName"
              maxLength={20}
            />{" "}
            <Input
              unstyled
              type="text"
              name="contactNo"
              placeholder="Your Mobile Number"
              id="HomeUserNumber"
              autoComplete="off"
              maxLength={10}
            />
            <Button
              unstyled
              className="desktop-btn"
              onClick={(event) => {
                show_query_form(event.currentTarget as HTMLElement);
              }}
            >
              Send Request
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="28"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M223.87,114l-168-95.89A16,16,0,0,0,32.93,37.32l31,90.47a.42.42,0,0,0,0,.1.3.3,0,0,0,0,.1l-31,90.67A16,16,0,0,0,48,240a16.14,16.14,0,0,0,7.92-2.1l167.91-96.05a16,16,0,0,0,.05-27.89ZM48,224l0-.09L78.14,136H136a8,8,0,0,0,0-16H78.22L48.06,32.12,48,32l168,95.83Z" />
              </svg>
            </Button>
            <Button
              unstyled
              className="mobile-btn"
              onClick={(event) => {
                show_query_form(event.currentTarget as HTMLElement);
              }}
            >
              Send Request
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="28"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M223.87,114l-168-95.89A16,16,0,0,0,32.93,37.32l31,90.47a.42.42,0,0,0,0,.1.3.3,0,0,0,0,.1l-31,90.67A16,16,0,0,0,48,240a16.14,16.14,0,0,0,7.92-2.1l167.91-96.05a16,16,0,0,0,.05-27.89ZM48,224l0-.09L78.14,136H136a8,8,0,0,0,0-16H78.22L48.06,32.12,48,32l168,95.83Z" />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
