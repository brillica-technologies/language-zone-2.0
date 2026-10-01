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
import { faq } from "@/lib/faq/spanish";
import { show_pop_up_form, submit_home_query } from "@/lib/legacy";

export default function SpanishContent() {
  return (
    <>
      <section className="banner-section">
        <div className="banner-section__part1">
          <div className="course-affilation__logo" style={{ width: "60%" }}>
            <p>Our Course is mapped to :</p>
            <img src="/images/DELE-logo.png" alt="goethe-logo" />
          </div>
          <div className="course-title">
            <h1>Spanish Language Training In Dehradun</h1>
          </div>
          <div className="course-desc">
            <p>
              Spanish is a Roman language that has its roots in the Iberian
              Peninsula and has now become one of the most commonly spoken
              languages across the globe. At Language Zone, we understand the
              importance of effective language learning, and our Spanish
              Language course in Dehradun is designed for both beginners and
              advanced learners, ensuring a seamless and engaging experience for
              all. If you want to Learn Spanish in Dehradun, the Language Zone
              is the best in the town. Language Zone is more than just a
              language institution, it is your passport to achieving verbal
              fluency mastery. Join Us and Learn Spanish with our Spanish
              Language training in Dehradun.
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
            The need for Spanish Language skills is steadily increasing in
            various industries worldwide. Language Zone offers Spanish language
            Training in Dehradun that is carefully crafted to meet the needs of
            learners at every level, from those who are just starting to those
            who are already proficient in the language. Whether you want to
            learn how to have simple conversations, improve your communication
            skills for work, or explore the complexities of Spanish literature,
            the Spanish Language course in Dehradun is customized to suit your
            requirements. In our Spanish Language classes in Dehradun, you will
            learn about all Spanish Language levels like level A1, level A2,
            level B1, level B2, level C1, level C2. Learn Spanish in Dehradun
            with our experienced Spanish trainers, who are native speakers, and
            are equipped with a wealth of teaching experience and a deep love
            for the language. They will lead you through a comprehensive
            curriculum.
          </p>
          <h2 className="course-desc__title">
            Benefits of Doing Spanish Language Training In Dehradun From
            Language Zone
          </h2>
          <p className="course-desc__info">
            By enrolling in Spanish Language Training in Dehradun, language
            enthusiasts can get numerous benefits in their pursuit of enhancing
            their Verbal skills. Our Spanish Language course in Dehradun is
            thoughtfully designed for both beginners and advanced learners,
            providing a personalized learning experience for individuals at any
            proficiency level. Our trainers are highly qualified and
            experienced, bringing a wealth of knowledge to the table and making
            the learning process dynamic and engaging. Here are some of its
            benefits-
          </p>
          <h3 className="course-desc__info">
            1. <strong>Enhanced Communication Skills :</strong> By enrolling in
            a Spanish Language course in Dehradun at Language Zone you can
            enhance your communication skills and confidently interact in
            various everyday situations. Whether you are traveling, engaging
            with Spanish speakers, or seeking professional growth, this Spanish
            Language Training in Dehradun will equip you with the fluency in
            speaking, listening, reading, and writing necessary to engage in
            meaningful conversations and express yourself with confidence.
          </h3>
          <h3 className="course-desc__info">
            2. <strong>Experienced and Certified Educators :</strong> Learn the
            Spanish Language in Dehradun with Language Zone. We take pride
            itself in having a group of skilled and accredited Spanish Language
            educators. They have a wealth of experience and a deep passion for
            imparting knowledge, and helping students achieve their language
            learning goals.
          </h3>
          <h3 className="course-desc__info">
            3. <strong>Certification :</strong>
            Upon completion of the Spanish Language training in Dehradun, you
            will be awarded a certification. This course is designed to prepare
            you for the dele certification, which is a globally recognized
            credential. Obtaining this certification can be beneficial in
            showcasing your Spanish language proficiency for academic or
            professional purposes.
          </h3>
          <h3 className="course-desc__info">
            4.{" "}
            <strong>Structured and Interactive Learning Environment :</strong>{" "}
            In our Spanish Language Training in Dehradun, you will get a
            structured and interactive learning environment that encourages
            active participation in group activities, discussions, and
            multimedia resources. Our approach is designed to facilitate
            effective language acquisition and help you develop practical
            communication skills, rather than just memorizing grammar rules.
          </h3>
          <h3 className="course-desc__info">
            5. <strong>Flexible Learning Options to Suit Your Needs :</strong>{" "}
            At Language Zone, we offer a range of course options that meet your
            unique needs and preferences. Whether you prefer attending regular
            batches, weekend classes, or personalized one-on-one sessions, we
            have got you covered. Learn Spanish in Dehradun with Our flexible
            course options designed to align with your busy schedule and
            learning style, ensuring a seamless learning journey.
          </h3>
          <h3 className="course-desc__info">
            6. <strong>Career Guidance and Support :</strong> Our team of career
            advisors is available to assist you throughout your Spanish Language
            course in Dehradun, providing guidance and placement support. They
            will aid you in preparing impactful resumes and offer in-depth
            knowledge of the Spanish Language.
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
                    The DELE A1 certification allows students to explore the
                    Spanish-speaking world, upskill their academic knowledge,
                    and introduce them to the self-assurance to progress towards
                    higher proficiency levels. This diploma verifies that the
                    student possesses the ability to
                  </p>
                  <ul className="content_description">
                    <li>
                      Use simple phrases to introduce oneself and others, and to
                      ask and answer basic questions about personal information
                      such as name, age, nationality, and occupation.
                    </li>
                    <li>
                      You can engage in simple conversations by asking and
                      answering questions about others' daily routines,
                      immediate surroundings, and familiar topics.
                    </li>
                    <li>
                      You can utilize basic numbers and quantifiers to count,
                      express prices, and indicate quantities.
                    </li>
                    <li>
                      You can employ simple expressions to greet people, bid
                      farewell, and express gratitude or apologies.
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
                    Level A2 of the Common European Framework of Reference for
                    Languages (CEFR) is regarded as the foundational stage of
                    Spanish proficiency. It signifies that learners possess a
                    fundamental comprehension of the language and can
                    effectively communicate in uncomplicated situations. In our
                    Spanish Language course in Dehradun, Learners possess a
                  </p>
                  <ul className="content_description">
                    <li>
                      Comprehend sentences and commonly used expressions
                      pertaining to topics of utmost relevance (e.g., basic
                      personal and family information, shopping, local
                      geography, employment).
                    </li>
                    <li>
                      Engage in simple and regular tasks that necessitate a
                      direct exchange of information regarding familiar and
                      routine matters.
                    </li>
                    <li>
                      Describe, in straightforward terms, aspects of their
                      background, immediate surroundings, and matters in areas
                      of immediate necessity.
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
                  <p className="content_description" />
                  <p className="content_description">
                    Level B1, which is also referred to as the Threshold level
                    in the Common European Framework of Reference for Languages
                    (CEFR), represents an intermediate stage of Spanish
                    proficiency. At this particular level, in our Spanish
                    Language training in Dehradun Learners possess the ability
                    to:
                  </p>
                  <ul className="content_description">
                    <li>
                      Comprehend the key aspects of straightforward and standard
                      information on familiar subjects that are commonly
                      encountered in various settings such as work, school, and
                      leisure activities.
                    </li>
                    <li>
                      Handle most situations that are likely to arise while
                      traveling in a region where the language is spoken.
                    </li>
                    <li>
                      Produce coherent and concise written text on topics that
                      are familiar or personally interesting.
                    </li>
                    <li>
                      Narrate personal experiences and events, express dreams,
                      hopes, and ambitions, and provide brief reasons and
                      explanations for opinions and plans.
                    </li>
                  </ul>
                  <p />
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
                    The "Vantage" or "Upper Intermediate" level in the Spanish
                    language is referred to as Level B2. This level is
                    considered intermediate and is defined by the Common
                    European Framework of Reference for Languages (CEFR). In our
                    Learn Spanish in Dehradun program, Learners will possess:
                  </p>
                  <ul className="content_description">
                    <li>
                      Recognize the key concepts in difficult texts on both
                      concrete and abstract subjects, including specialized
                      technical talks.
                    </li>
                    <li>
                      Possesses a level of fluency and spontaneity in
                      interactions that makes regular, stress-free communication
                      with native speakers fairly feasible.
                    </li>
                    <li>
                      Able to create broad and Expressive written content on
                      various topics, while also presenting a perspective on a
                      current matter and weighing the pros and cons of different
                      alternatives.
                    </li>
                  </ul>
                  <p />
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
                    Level C1, also known as Effective Operational Proficiency,
                    represents the fifth level. Learn level C1 with our Spanish
                    Language classes in Dehradun At this level, Learners will
                    possess:
                  </p>
                  <ul className="content_description">
                    <li>
                      Understand extensive and challenging texts, as well as
                      grasp underlying meanings
                    </li>
                    <li>
                      Express thoughts effortlessly and naturally, without
                      apparent hesitation. Capable of utilizing language in a
                      versatile and efficient manner for social, academic, and
                      professional contexts.
                    </li>
                    <li>
                      Able to generate Meaningful, well-organized, and complete
                      texts on Complex topics, demonstrating skillful employment
                      of organizational structures, connectors, and Connected
                      elements.
                    </li>
                  </ul>
                  <p />
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
                    The C2 level of Spanish proficiency is the highest rank on
                    the Common European Framework of Reference for Languages
                    (CEFR) scale. It is regarded as a level close to that of a
                    native speaker, and those who achieve this level can
                    effortlessly comprehend almost everything they hear or read.
                    In our Spanish Language course in Dehradun, Learners will
                    possess
                  </p>
                  <ul className="content_description">
                    <li>
                      Possesses the ability to understand almost everything that
                      is heard or read with ease. Can effectively summarize
                      information from various spoken and written sources, and
                      present arguments and accounts in a logical and coherent
                      manner.
                    </li>
                    <li>
                      Has the capability to express oneself spontaneously, with
                      great fluency and precision, while Identifying subtle
                      suggestions of meaning even in the most complex
                      situations.
                    </li>
                    <li>
                      Has the ability to create detailed, well-structured texts
                      on complex topics, demonstrating a controlled use of
                      organizational patterns, connectors, and cohesive devices.
                    </li>
                  </ul>
                  <p />
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
                  At Language Zone, we are proud to offer Spanish Language
                  Training in Dehradun with our team of certified and
                  industry-experienced trainers. Our educators possess extensive
                  knowledge and practical insights, improving your learning
                  journey with high-quality education and valuable language
                  skills.
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
                  Our Spanish language course in Dehradun covers a wide range of
                  proficiency levels, from beginners to experts. Our curriculum
                  is carefully designed to guide you from foundational language
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
                  Learn Spanish in Dehradun with the best-in-class training
                  curriculum for Spanish language classes in Dehradun. Our
                  comprehensive program ensures a superior learning experience,
                  fostering proficiency and fluency in the Spanish language.
                  With our expert instructors and tailored curriculum, we
                  prioritize effective teaching methods to help you master
                  Spanish with confidence and ease.
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
                  We offer a variety of options for Spanish language training in
                  Dehradun, including both online and offline modes, catering to
                  different learning preferences. Learn Spanish online for a
                  convenient and flexible approach, allowing you to study from
                  the comfort of your home. If you prefer a traditional
                  classroom setting, our offline training in Dehradun provides a
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
                  After completing the Spanish Language Course in Dehradun from
                  Language Zone you will receive a Certification of completion.
                  This certificate not only showcases your dedication and hard
                  work but also holds significant value in various contexts.
                  Moreover, it positions you strategically for the official dele
                  certification process. Learning Spanish can unlock numerous
                  captivating and fulfilling professional prospects. By
                  possessing a solid grasp of the Spanish language, you can
                  start on a career path in a wide array of industries, such as
                  business, education, government, healthcare, and tourism.
                  Learn Spanish in Dehradun with our best Spanish Language
                  training in Dehradun. The certification you acquire serves as
                  a Strong manifestation of your accomplishment.
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
