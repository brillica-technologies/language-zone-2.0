"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CertificateDialog from "@/components/CertificateDialog";
import FaqToggleIcon from "@/components/FaqToggleIcon";
import { openDialog } from "@/lib/dialogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { faq } from "@/lib/faq/german";
import { show_pop_up_form, submit_home_query } from "@/lib/legacy";

export default function GermanContent() {
  return (
    <>
      <section className="banner-section">
        <div className="banner-section__part1">
          <div className="course-affilation__logo">
            <p>Our Course is mapped to :</p>
            <img src="/images/GOETHE-logo.png" alt="goethe-logo" />
          </div>
          <div className="course-title">
            <h1>German Language Training In Dehradun</h1>
          </div>
          <div className="course-desc">
            <p>
              The German language, spoken by more than 130 million individuals
              globally, is both charming and interesting. German is the official
              language in Germany, Austria, Switzerland, Liechtenstein,
              Luxembourg, as well as certain regions of Belgium and Italy. The
              demand for German language proficiency is continuously growing
              across different sectors globally. If you are looking for a German
              language course in Dehradun, Language Zone provides the best
              German Language Training In Dehradun. Our extensive program has
              been carefully crafted to offer a well-organized and immersive
              learning journey. Whether you are a beginner seeking to grasp the
              basics or an experienced learner aiming to enhance your language
              proficiency, our skilled instructors are committed to customizing
              lessons to cater to your requirements.
            </p>
          </div>
          <div className="course-milestone">
            <span className="course-milestone-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
                fill="none"
              >
                <circle
                  cx="26"
                  cy="26"
                  r="26"
                  fill="url(#paint0_linear_231_48)"
                />
                <path
                  d="M17.2791 23.2455H33.7928L25.5359 18.1484L17.2791 23.2455Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.8199 23.2441V29.6154"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.6309 23.2441V29.6154"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.4417 23.2441V29.6154"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.2526 23.2441V29.6154"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.9143 29.6172H33.1578"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.6443 32.1641H34.4283"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_231_48"
                    x1="26"
                    y1="0"
                    x2="26"
                    y2="52"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#239249" />{" "}
                    <stop offset="1" stopColor="#4EDA75" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="course-milestone-item__desc">
                10K+ Students completed the course
              </span>
            </span>{" "}
            <span className="course-milestone-item">
              <span className="svg_placement_bg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 6V13.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.08105 20.2504C5.83149 19.0994 6.85722 18.1538 8.06534 17.4993C9.27345 16.8447 10.6258 16.502 11.9998 16.502C13.3738 16.502 14.7262 16.8447 15.9343 17.4993C17.1424 18.1538 18.1681 19.0994 18.9186 20.2504"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 6L12 9L3 6L12 3L21 6Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.8719 7.70703C16.5599 8.45832 17.0144 9.39355 17.1801 10.3987C17.3458 11.4038 17.2155 12.4355 16.805 13.3678C16.3946 14.3002 15.7218 15.093 14.8686 15.6496C14.0154 16.2062 13.0187 16.5026 12 16.5026C10.9813 16.5026 9.9846 16.2062 9.13141 15.6496C8.27822 15.093 7.6054 14.3002 7.19497 13.3678C6.78453 12.4355 6.65422 11.4038 6.81991 10.3987C6.98561 9.39355 7.44015 8.45832 8.12813 7.70703"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{" "}
              <span className="course-milestone-item__desc">
                Expert Trainers
              </span>
            </span>
          </div>
        </div>
        <div className="banner-section__part2">
          <div className="form_enquiry_course">
            <form action="" className="form_course">
              <h2 className="form_enquiry_caption_course">Apply To Enroll</h2>
              <div className="Input_field_enquiry_course">
                <Label unstyled htmlFor="name" className="label_course">
                  Name*
                </Label>
                <Input
                  unstyled
                  type="text"
                  required
                  name="name"
                  className="input_course"
                  id="username"
                  placeholder="Please enter your name"
                />
              </div>
              <div className="Input_field_enquiry_course">
                <Label unstyled htmlFor="name" className="label_course">
                  Phone No*
                </Label>
                <Input
                  unstyled
                  type="text"
                  required
                  name="name"
                  className="input_course"
                  placeholder="Phone No."
                  id="usernumber"
                />
              </div>
              <div className="Input_field_enquiry_course">
                <Label unstyled htmlFor="quiry" className="label_course">
                  Query*
                </Label>
                <Input
                  unstyled
                  className="input_course"
                  placeholder="Enter your query"
                  id="userquery"
                />
              </div>
              <div
                className="Input_field_enquiry_course"
                onClick={(event) => {
                  submit_home_query(event);
                }}
              >
                <Button unstyled className="btn_course">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <main className="about-us-main-section">
        <div className="about-course-heading">
          <h2>About Course</h2>
        </div>
        <div className="about-course-desc">
          <p className="course-desc__info">
            Our German language training in Dehradun is designed for all
            proficiency levels learners. In our German Language course in
            Dehradun, you will learn about all German language levels like level
            A1, level A2, level B1, level B2, level C1, level C2.. With Our
            German Language classes in Dehradun, you can expect engaging
            lessons, practical exercises, and a supportive learning environment.
            Our German Language Training in Dehradun is designed to equip you
            with the knowledge and skills you need to excel in this dynamic
            field.
          </p>
          <h2 className="course-desc__title">
            Benefits of doing German Language Training In Dehradun From Language
            Zone
          </h2>
          <p className="course-desc__info">
            Opting for German language training at Language Zone in Dehradun
            provides a multitude of advantages for individuals eager to learn.
            Language Zone dedication to interactive teaching techniques, such as
            engaging in group discussions and implementing role-playing
            exercises, elevates the educational journey and facilitates improved
            language retention. Our German Language course in Dehradun is
            designed to equip you with the necessary skills to obtain the Goethe
            Certification, a globally acknowledged qualification. Here are some
            of the key benefits of doing German Language training in Dehradun
            from Language Zone-
          </p>
          <h3 className="course-desc__info">
            1. <strong>Experienced and Qualified Instructors :</strong> Our
            German Language Training in Dehradun boasts a team of proficient and
            certified German language trainers who possess extensive experience
            and a strong desire to impart knowledge and assist students in
            accomplishing their language learning objectives.
          </h3>
          <h3 className="course-desc__info">
            2. <strong>Certification :</strong> Upon finishing the German
            Language course in Dehradun from Language Zone you will receive a
            certification of completion. This specialized course prepares you
            for the Goethe Certification, offering internationally recognized
            credentials, that can prove advantageous in demonstrating one's
            proficiency in the German language for academic or professional
            objectives.
          </h3>
          <h3 className="course-desc__info">
            3. <strong>Flexible Learning Options :</strong> You can learn German
            Language online and offline with our Flexible Learning Options.
            Select the type of class that best fits your needs and enhances your
            educational achievements, whether it be online, blended, or
            in-person.
          </h3>
          <h3 className="course-desc__info">
            4. <strong>Interactive and Engaging Learning Environment :</strong>{" "}
            Our German language classes in Dehradun are crafted to provide an
            interactive and engaging learning environment. Our German Language
            Training in Dehradun emphasizes practical application and hands-on
            learning, ensuring that students not only acquire the language but
            also develop the necessary confidence and skills to use it
            effectively in real-life scenarios.
          </h3>
          <h3 className="course-desc__info">
            5. <strong>Career Guidance and Placement Assistance :</strong> Our
            team of career advisors is here to support you throughout your
            German Language training in Dehradun. They will help you to get
            ready for crafting effective resumes, and provide comprehensive
            knowledge of the German Language.
          </h3>
        </div>
      </main>
      <section className="course-curriculam-section">
        <div className="course_curriculam_container">
          <div className="course_curriculam_heading">
            <h2>Training Program Levels</h2>
          </div>
          <div className="inner_course_curriculam_container">
            <Accordion unstyled className="accordion">
              <AccordionItem unstyled value={0} className="accordion_item">
                <AccordionTrigger unstyled className="accordion_title">
                  <h4 className="accordion_heading">
                    <span>1.</span> <span>Level A1</span>
                  </h4>
                  <span className="svg_box_input">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 12.0313L16 22.0424L6 12.0312"
                        stroke="#363636"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </AccordionTrigger>
                <AccordionContent unstyled className="content_accordion">
                  <p className="content_description">
                    According to the Common European Framework of Reference for
                    Languages (CEFR), the A1 level is the initial stage of
                    German proficiency. It is the starting point for learners to
                    acquire fundamental skills in the German language.
                    Possessing A1 level German skills in our German Language
                    training in Dehradun enables you to:
                  </p>
                  <ul className="content_description">
                    <li>
                      Possess the ability to employ ordinary, commonplace
                      expressions and uncomplicated sentences that pertain to
                      fulfilling concrete needs.
                    </li>
                    <li>
                      Introduce yourself and others, inquire about personal
                      details such as residence, acquaintances, and possessions,
                      and offer responses to similar inquiries.
                    </li>
                    <li>
                      Communicate simply if the person you're speaking to speaks
                      slowly and clearly and is willing to help.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem unstyled value={1} className="accordion_item">
                <AccordionTrigger unstyled className="accordion_title">
                  <h4 className="accordion_heading">
                    <span>2.</span> <span>Level A2</span>
                  </h4>
                  <span className="svg_box_input">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 12.0313L16 22.0424L6 12.0312"
                        stroke="#363636"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </AccordionTrigger>
                <AccordionContent unstyled className="content_accordion">
                  <p className="content_description">
                    The A2 level of German proficiency, as defined by the Common
                    European Framework of Reference for Languages (CEFR),
                    represents the second stage of language competency. In Our
                    German Language Classes In Dehradun, learners possess a
                  </p>
                  <ul className="content_description">
                    <li>
                      Fundamental understanding of the language and can
                      effectively navigate everyday situations.
                    </li>
                    <li>
                      With A2-level German skills, individuals can understand
                      sentences and commonly used expressions about topics of
                      immediate relevance, such as basic personal and family
                      information, shopping, local geography, and employment.
                    </li>
                    <li>
                      Additionally, individuals can describe various aspects of
                      their background, immediate environment, and matters about
                      immediate needs using simple language.
                    </li>
                  </ul>
                  <p />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem unstyled value={2} className="accordion_item">
                <AccordionTrigger unstyled className="accordion_title">
                  <h4 className="accordion_heading">
                    <span>3.</span> <span>Level B1</span>
                  </h4>
                  <span className="svg_box_input">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 12.0313L16 22.0424L6 12.0312"
                        stroke="#363636"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </AccordionTrigger>
                <AccordionContent unstyled className="content_accordion">
                  <p className="content_description">
                    Level B1 German proficiency, which is the third level of
                    German language proficiency according to the Common European
                    Framework of Reference for Languages (CEFR), is considered
                    an intermediate level. At this level, learners can
                    effectively communicate in everyday situations and have a
                    comprehensive understanding of the language. With our German
                    Language training in Dehradun, you will have the opportunity
                    to learn the following:
                  </p>
                  <ul className="content_description">
                    <li>
                      Learners can understand the main points of clear, standard
                      input on familiar matters encountered in various contexts
                      such as work, school, and leisure activities.
                    </li>
                    <li>
                      You can handle most situations that may arise while
                      traveling in a German-speaking area.
                    </li>
                    <li>
                      Learners can produce simple connected text on familiar
                      topics and areas of personal interest.
                    </li>
                    <li>
                      You can describe experiences, events, dreams, hopes, and
                      ambitions, and provide brief reasons and explanations for
                      your opinions and plans.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem unstyled value={3} className="accordion_item">
                <AccordionTrigger unstyled className="accordion_title">
                  <h4 className="accordion_heading">
                    <span>4.</span> <span>Level B2</span>
                  </h4>
                  <span className="svg_box_input">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 12.0313L16 22.0424L6 12.0312"
                        stroke="#363636"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </AccordionTrigger>
                <AccordionContent unstyled className="content_accordion">
                  <p className="content_description">
                    The B2 level of German proficiency, as defined by the Common
                    European Framework of Reference for Languages (CEFR),
                    represents an intermediate upper level. At this stage,
                    learners exhibit a more extensive comprehension of the
                    language and are capable of effectively communicating in
                    diverse situations. Learn B2-level German skills in our
                    German Language course in Dehradun. At this level, learners
                    possess
                  </p>
                  <ul className="content_description">
                    <li>
                      The main concepts of complex texts, both concrete and
                      abstract, include technical discussions within your area
                      of expertise.
                    </li>
                    <li>
                      Engage in spontaneous and fluent conversations, enabling
                      regular interactions with native speakers without any
                      difficulty for either party.
                    </li>
                    <li>
                      Produce coherent and detailed written texts on a wide
                      range of subjects, while also presenting viewpoints on
                      current issues and discussing the advantages and
                      disadvantages of various options.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem unstyled value={4} className="accordion_item">
                <AccordionTrigger unstyled className="accordion_title">
                  <h4 className="accordion_heading">
                    <span>5.</span> <span>Level C1</span>
                  </h4>
                  <span className="svg_box_input">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 12.0313L16 22.0424L6 12.0312"
                        stroke="#363636"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </AccordionTrigger>
                <AccordionContent unstyled className="content_accordion">
                  <p className="content_description">
                    The CEFR categorizes Level C1 as an advanced stage of
                    language proficiency. It serves as a tool to evaluate and
                    describe an individual's reading, writing, speaking, and
                    listening abilities. Learn C1-level German skills in our
                    German Language training in Dehradun.
                  </p>
                  <ul className="content_description">
                    <li>
                      In the case of German, attaining a C1 level implies that
                      one can understand a broad range of complex texts and
                      gather indirect meanings.
                    </li>
                    <li>
                      One can communicate more effectively if the person they're
                      speaking to speaks slowly and clearly, and is willing to
                      help express thoughts fluently and effortlessly. This
                      involves utilizing language in a versatile and efficient
                      manner for social, academic, and professional purposes.
                    </li>
                    <li>
                      One can produce well-structured and detailed texts on
                      complex topics, demonstrating a controlled use of
                      organizational patterns, connectors, and cohesive devices.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem unstyled value={5} className="accordion_item">
                <AccordionTrigger unstyled className="accordion_title">
                  <h4 className="accordion_heading">
                    <span>6.</span> <span>Level C2</span>
                  </h4>
                  <span className="svg_box_input">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 12.0313L16 22.0424L6 12.0312"
                        stroke="#363636"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </AccordionTrigger>
                <AccordionContent unstyled className="content_accordion">
                  <p className="content_description">
                    Within the Common European Framework of Reference for
                    Languages (CEFR), Level C2 represents the utmost level of
                    German proficiency. This level signifies a state of mastery
                    or near-native fluency in the language. Learn C2-level
                    German skills in our German Language classes in Dehradun.
                  </p>
                  <ul className="content_description">
                    <li>
                      Possesses the ability to effortlessly comprehend nearly
                      all written and spoken content.
                    </li>
                    <li>
                      Capable of summarizing information from diverse sources,
                      effectively logically presenting the reasons and
                      explanations.
                    </li>
                    <li>
                      Demonstrates spontaneous expression with exceptional
                      fluency and accuracy, effectively conveying subtle aspects
                      of meaning even in complex subjects.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="course_curriculum_btns">
            <div
              className="btn_download_curriculum"
              onClick={() => {
                show_pop_up_form("download_curriculam", "c");
              }}
            >
              <svg
                className="svg_download"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.0625 10.3125L12 14.25L15.9375 10.3125"
                  stroke="#363636"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 3.75V14.25"
                  stroke="#363636"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25"
                  stroke="#363636"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Button unstyled className="course_btn_">
                Download Course Curriculum
              </Button>
            </div>
            <div
              className="btn_enroll_course"
              onClick={() => {
                show_pop_up_form("pop_up_form");
              }}
            >
              <Button unstyled className="btn_enroll">
                Enroll Now
              </Button>
              <svg
                width="15"
                height="15"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 14.6255L12.375 9.00049L6.75 3.37549"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="border_bottom" />
        </div>
        <div className="program-highlights-section">
          <div className="program-highlights-heading">
            <h2>Program Highlights</h2>
          </div>
          <div className="program-highlights-card">
            <div className="program-highlights-card-item">
              <div className="program-highlights-card-item__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56 54"
                  fill="none"
                >
                  <path
                    d="M48.2437 21.3094C47.4367 20.4867 46.6085 19.6219 46.29 18.8836C45.9714 18.1453 45.9927 17.0484 45.9714 15.9305C45.9502 13.8844 45.9077 11.543 44.2725 9.91875C42.6374 8.29453 40.2802 8.25234 38.2202 8.23125C37.0947 8.21016 35.948 8.18906 35.2472 7.91484C34.5464 7.64062 33.6332 6.77578 32.805 5.97422C31.3397 4.58203 29.6621 3 27.4535 3C25.245 3 23.5673 4.58203 22.102 5.97422C21.2738 6.77578 20.4031 7.59844 19.6599 7.91484C18.9166 8.23125 17.8123 8.21016 16.6868 8.23125C14.6269 8.25234 12.2697 8.29453 10.6345 9.91875C8.99934 11.543 8.95686 13.8844 8.93563 15.9305C8.91439 17.0484 8.89316 18.1875 8.61709 18.8836C8.34102 19.5797 7.47033 20.4867 6.66336 21.3094C5.26178 22.7648 3.66907 24.4312 3.66907 26.625C3.66907 28.8188 5.26178 30.4852 6.66336 31.9406C7.47033 32.7633 8.29854 33.6281 8.61709 34.3664C8.93563 35.1047 8.91439 36.2016 8.93563 37.3195C8.95686 39.3656 8.99934 41.707 10.6345 43.3312C12.2697 44.9555 14.6269 44.9977 16.6868 45.0187C17.8123 45.0398 18.9591 45.0609 19.6599 45.3352C20.3607 45.6094 21.2738 46.4742 22.102 47.2758C23.5673 48.668 25.245 50.25 27.4535 50.25C29.6621 50.25 31.3397 48.668 32.805 47.2758C33.6332 46.4742 34.5039 45.6516 35.2472 45.3352C35.9905 45.0187 37.0947 45.0398 38.2202 45.0187C40.2802 44.9977 42.6374 44.9555 44.2725 43.3312C45.9077 41.707 45.9502 39.3656 45.9714 37.3195C45.9927 36.2016 46.0139 35.0625 46.29 34.3664C46.566 33.6703 47.4367 32.7633 48.2437 31.9406C49.6453 30.4852 51.238 28.8188 51.238 26.625C51.238 24.4312 49.6453 22.7648 48.2437 21.3094ZM37.9654 22.7859L25.521 34.5984C25.1993 34.899 24.7735 35.0652 24.3318 35.0625C23.8966 35.0641 23.4778 34.8977 23.1638 34.5984L16.9416 28.6922C16.7691 28.5426 16.6287 28.36 16.529 28.1551C16.4293 27.9503 16.3724 27.7276 16.3615 27.5004C16.3507 27.2731 16.3863 27.0461 16.466 26.8328C16.5458 26.6196 16.6682 26.4245 16.8258 26.2595C16.9834 26.0944 17.1729 25.9627 17.3831 25.8722C17.5932 25.7818 17.8196 25.7345 18.0487 25.7331C18.2777 25.7318 18.5046 25.7765 18.7158 25.8645C18.927 25.9525 19.1181 26.0821 19.2776 26.2453L24.3318 31.0336L35.6294 20.3391C35.9598 20.0528 36.3887 19.9044 36.8266 19.925C37.2645 19.9456 37.6774 20.1335 37.9791 20.4495C38.2807 20.7654 38.4477 21.185 38.4452 21.6204C38.4426 22.0559 38.2707 22.4735 37.9654 22.7859Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="program-highlights-card-item__desc">
                <h2>Certified &amp; Industry Experienced Trainers</h2>
                <p>
                  At Language Zone, we take pride in offering German Language
                  Training in Dehradun through our certified and
                  industry-experienced trainers. Our educators possess a vast
                  amount of knowledge and practical insights, enriching your
                  learning journey with top-quality education and valuable
                  language skills.
                </p>
              </div>
            </div>
            <div className="program-highlights-card-item">
              <div className="program-highlights-card-item__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56 54"
                  fill="none"
                >
                  <path
                    d="M49.1353 42.1875H47.4364V8.4375C47.4364 7.98995 47.2574 7.56073 46.9388 7.24426C46.6202 6.92779 46.188 6.75 45.7375 6.75H33.8452C33.3947 6.75 32.9625 6.92779 32.6439 7.24426C32.3253 7.56073 32.1464 7.98995 32.1464 8.4375V16.875H21.953C21.5024 16.875 21.0703 17.0528 20.7517 17.3693C20.4331 17.6857 20.2541 18.1149 20.2541 18.5625V27H10.0608C9.61021 27 9.17809 27.1778 8.85949 27.4943C8.54088 27.8107 8.36189 28.2399 8.36189 28.6875V42.1875H6.663C6.21243 42.1875 5.78031 42.3653 5.4617 42.6818C5.1431 42.9982 4.96411 43.4274 4.96411 43.875C4.96411 44.3226 5.1431 44.7518 5.4617 45.0682C5.78031 45.3847 6.21243 45.5625 6.663 45.5625H49.1353C49.5858 45.5625 50.0179 45.3847 50.3366 45.0682C50.6552 44.7518 50.8341 44.3226 50.8341 43.875C50.8341 43.4274 50.6552 42.9982 50.3366 42.6818C50.0179 42.3653 49.5858 42.1875 49.1353 42.1875ZM23.6519 20.25H32.1464V42.1875H23.6519V20.25ZM11.7597 30.375H20.2541V42.1875H11.7597V30.375Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="program-highlights-card-item__desc">
                <h2>Beginner To Expert-Level Training</h2>
                <p>
                  we offer comprehensive German language course in Dehradun,
                  ranging from beginners to expert levels. Our structured
                  curriculum is designed to take you from foundational language
                  skills to advanced proficiency.
                </p>
              </div>
            </div>
            <div className="program-highlights-card-item">
              <div className="program-highlights-card-item__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56 54"
                  fill="none"
                >
                  <path
                    d="M45.1113 7H11.1335C10.2324 7 9.36811 7.35558 8.7309 7.98851C8.0937 8.62145 7.73572 9.47989 7.73572 10.375V44.125C7.73572 45.0201 8.0937 45.8785 8.7309 46.5115C9.36811 47.1444 10.2324 47.5 11.1335 47.5H45.1113C46.0124 47.5 46.8767 47.1444 47.5139 46.5115C48.1511 45.8785 48.5091 45.0201 48.5091 44.125V10.375C48.5091 9.47989 48.1511 8.62145 47.5139 7.98851C46.8767 7.35558 46.0124 7 45.1113 7ZM17.9291 44.125H11.1335V10.375H17.9291V44.125ZM38.3157 32.3125H24.7246C24.274 32.3125 23.8419 32.1347 23.5233 31.8182C23.2047 31.5018 23.0257 31.0726 23.0257 30.625C23.0257 30.1774 23.2047 29.7482 23.5233 29.4318C23.8419 29.1153 24.274 28.9375 24.7246 28.9375H38.3157C38.7663 28.9375 39.1984 29.1153 39.517 29.4318C39.8356 29.7482 40.0146 30.1774 40.0146 30.625C40.0146 31.0726 39.8356 31.5018 39.517 31.8182C39.1984 32.1347 38.7663 32.3125 38.3157 32.3125ZM38.3157 25.5625H24.7246C24.274 25.5625 23.8419 25.3847 23.5233 25.0682C23.2047 24.7518 23.0257 24.3226 23.0257 23.875C23.0257 23.4274 23.2047 22.9982 23.5233 22.6818C23.8419 22.3653 24.274 22.1875 24.7246 22.1875H38.3157C38.7663 22.1875 39.1984 22.3653 39.517 22.6818C39.8356 22.9982 40.0146 23.4274 40.0146 23.875C40.0146 24.3226 39.8356 24.7518 39.517 25.0682C39.1984 25.3847 38.7663 25.5625 38.3157 25.5625Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="program-highlights-card-item__desc">
                <h2>Best-In-Class Training Curriculum</h2>
                <p>
                  We offer a Best-in-class training curriculum for German
                  language classes in Dehradun. Our comprehensive program is
                  designed to provide a superior learning experience, ensuring
                  proficiency and fluency in the German language. With expert
                  trainers and a complete curriculum, we prioritize effective
                  teaching methods to help you master German with confidence and
                  ease.
                </p>
              </div>
            </div>
            <div className="program-highlights-card-item">
              <div className="program-highlights-card-item__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56 54"
                  fill="none"
                >
                  <path
                    d="M38.0798 11.8125H17.6931C13.6379 11.8125 9.74885 13.4126 6.88142 16.2608C4.01398 19.109 2.40308 22.972 2.40308 27C2.40308 31.028 4.01398 34.891 6.88142 37.7392C9.74885 40.5874 13.6379 42.1875 17.6931 42.1875H38.0798C42.1349 42.1875 46.024 40.5874 48.8914 37.7392C51.7589 34.891 53.3698 31.028 53.3698 27C53.3698 22.972 51.7589 19.109 48.8914 16.2608C46.024 13.4126 42.1349 11.8125 38.0798 11.8125ZM17.6931 35.4375C16.013 35.4375 14.3707 34.9426 12.9738 34.0155C11.5769 33.0884 10.4882 31.7706 9.84524 30.2289C9.20231 28.6871 9.0341 26.9906 9.36186 25.3539C9.68962 23.7172 10.4986 22.2138 11.6866 21.0338C12.8746 19.8538 14.3881 19.0502 16.0359 18.7246C17.6837 18.3991 19.3916 18.5662 20.9438 19.2048C22.4959 19.8434 23.8226 20.9248 24.756 22.3124C25.6893 23.6999 26.1875 25.3312 26.1875 27C26.1875 29.2378 25.2926 31.3839 23.6996 32.9662C22.1066 34.5486 19.946 35.4375 17.6931 35.4375Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="program-highlights-card-item__desc">
                <h2>Online &amp; Offline Training Modes</h2>
                <p>
                  We provide a wide range of options for German language
                  training in Dehradun, including both online and offline modes,
                  to accommodate various learning preferences. Learn German
                  Online as we offer a convenient and flexible approach to
                  learning German, allowing you to study from the comfort of
                  your home. For those who prefer traditional classroom
                  settings, our offline training in Dehradun ensures a
                  personalized and immersive learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="certificate-section">
        <div className="certificate-outer-div">
          <div className="certificate-heading-parent-div">
            <div className="certificate-main-div">
              <div
                className="certificate-image-div"
                onClick={() => openDialog("certificate")}
              >
                <img src="/images/certificate.jpg" alt="certificate" />
              </div>
              <div className="certificate-text-div">
                <h2 className="certificate-heading">Certification</h2>
                <p className="certificate-text-p">
                  Learning the German language can unlock a wealth of prospects
                  in the fields of commerce, science, and technology. Germany
                  boasts a significant number of multinational companies and is
                  a center for pioneering research and development. Upon the
                  successful completion of our German Language course in
                  Dehradun, you will receive a certification that verifies your
                  achievements and expertise. This certificate not only
                  demonstrates your commitment and hard work but also carries
                  substantial importance in diverse settings. Additionally, it
                  places you in a strategic position for the official Goethe
                  certificate process. Our German Language training in Dehradun
                  is designed to empower our students with the skills and
                  confidence needed to navigate the global landscape, and the
                  certification you earn is a tangible representation of that
                  achievement.
                </p>
              </div>
            </div>
            <CertificateDialog />
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="faq_role_container">
          <div className="faq_role_inner_container">
            <div className="faq_role_accordian">
              <div className="faq_title">
                <span className="faq_title_heading">
                  Frequently Asked Questions
                </span>
              </div>
              <Accordion unstyled className="accordian_header_container_faq">
                {faq.map((item, index) => (
                  <Fragment key={index}>
                    <AccordionItem
                      unstyled
                      value={index}
                      className="accordion_faq"
                    >
                      <div className="accordion_item_faq">
                        <AccordionTrigger
                          unstyled
                          className="accordion_title_faq"
                        >
                          <p className="accordion_heading_faq">
                            <span>{index + 1}</span>
                            <span>{item.que}</span>
                          </p>
                          <FaqToggleIcon />
                        </AccordionTrigger>
                        <AccordionContent
                          unstyled
                          className="content_description_faq content_accordion_faq"
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: `<p>${item.ans}</p>`,
                            }}
                          />
                        </AccordionContent>
                      </div>
                    </AccordionItem>
                  </Fragment>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
