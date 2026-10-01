"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { show_query_form, submitContactDetails } from "@/lib/legacy";
import { ADDRESS, MAP_LINK } from "@/lib/location";

export default function ContactContent() {
  return (
    <>
      <main>
        <div className="contact_us_container">
          <div className="contact_us_inner">
            <div className="inner_wrapper_contact_us">
              <div className="contact_us_wrapper">
                <div className="contact_info">
                  <div className="contact_caption_wrapper">
                    <h1 className="caption_contact_us">Contact Information</h1>
                    <p className="contact_us_des">
                      Fill the form and we will reach to you within 24hr
                    </p>
                    <div className="contact_us_as">
                      <a
                        href="mailto:info@brillicaservices.com"
                        className="email_id_wrapper"
                      >
                        <span className="svg_email_contact_us">
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z"
                              stroke="#D7EBFF"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M28 7L16 18L4 7"
                              stroke="#D7EBFF"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>{" "}
                        <span className="mail_id">
                          info@brillicaservices.com
                        </span>
                      </a>
                      <p className="email_id_wrapper">
                        <span className="svg_email_contact_us">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 25 25"
                            fill="none"
                          >
                            <path
                              d="M7.5625 12.5986C8.59153 14.7236 10.3098 16.4375 12.4375 17.4611C12.5944 17.5354 12.768 17.5676 12.9412 17.5544C13.1143 17.5413 13.2811 17.4832 13.425 17.3861L16.55 15.2986C16.6881 15.2049 16.8476 15.1478 17.0137 15.1325C17.1799 15.1172 17.3472 15.1442 17.5 15.2111L23.35 17.7236C23.5499 17.8068 23.717 17.9534 23.8254 18.1409C23.9338 18.3284 23.9776 18.5463 23.95 18.7611C23.7646 20.2083 23.0582 21.5383 21.9631 22.5023C20.8679 23.4663 19.459 23.9982 18 23.9986C13.4913 23.9986 9.1673 22.2075 5.97919 19.0194C2.79107 15.8313 1 11.5073 1 6.99858C1.00033 5.53957 1.53227 4.13068 2.49628 3.03552C3.4603 1.94036 4.79033 1.23399 6.2375 1.04858C6.4523 1.02098 6.67021 1.06477 6.85768 1.17319C7.04515 1.2816 7.19178 1.44864 7.275 1.64858L9.7875 7.51108C9.85284 7.66151 9.88017 7.82571 9.86709 7.98919C9.85401 8.15268 9.80092 8.31044 9.7125 8.44858L7.625 11.6236C7.53206 11.7672 7.47752 11.9322 7.46657 12.1029C7.45563 12.2736 7.48866 12.4443 7.5625 12.5986V12.5986Z"
                              stroke="white"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>{" "}
                        <a
                          href="tel:8882140688"
                          className="phone_no_contact_us"
                        >
                          +91-8882140688
                        </a>{" "}
                        <a
                          href="tel:7351676494"
                          className="phone_no_contact_us"
                        >
                          +91-8979544473
                        </a>
                      </p>
                      <a href={MAP_LINK} className="address_contact_us_wrapper">
                        <div className="svg_address">
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 17C18.2091 17 20 15.2091 20 13C20 10.7909 18.2091 9 16 9C13.7909 9 12 10.7909 12 13C12 15.2091 13.7909 17 16 17Z"
                              stroke="#D7EBFF"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M26 13C26 22 16 29 16 29C16 29 6 22 6 13C6 10.3478 7.05357 7.8043 8.92893 5.92893C10.8043 4.05357 13.3478 3 16 3C18.6522 3 21.1957 4.05357 23.0711 5.92893C24.9464 7.8043 26 10.3478 26 13Z"
                              stroke="#D7EBFF"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="address_contact_us">{ADDRESS}</p>
                      </a>
                    </div>
                  </div>
                  <div className="contact_us_social_svg_wrapper">
                    <div className="svg_social_as_contact_us">
                      <a
                        href="https://www.linkedin.com/company/72137283/admin/feed/posts/"
                        className="svg_social_media"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M26.5 4.5H5.5C4.94772 4.5 4.5 4.94772 4.5 5.5V26.5C4.5 27.0523 4.94772 27.5 5.5 27.5H26.5C27.0523 27.5 27.5 27.0523 27.5 26.5V5.5C27.5 4.94772 27.0523 4.5 26.5 4.5Z"
                            stroke="#D7EBFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15 14V22"
                            stroke="#D7EBFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11 14V22"
                            stroke="#D7EBFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15 17.5C15 16.5717 15.3687 15.6815 16.0251 15.0251C16.6815 14.3687 17.5717 14 18.5 14C19.4283 14 20.3185 14.3687 20.9749 15.0251C21.6313 15.6815 22 16.5717 22 17.5V22"
                            stroke="#D7EBFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11 11.5C11.8284 11.5 12.5 10.8284 12.5 10C12.5 9.17157 11.8284 8.5 11 8.5C10.1716 8.5 9.5 9.17157 9.5 10C9.5 10.8284 10.1716 11.5 11 11.5Z"
                            fill="#D7EBFF"
                          />
                        </svg>
                      </a>{" "}
                      <a
                        href="https://www.instagram.com/languagezone0309/"
                        className="svg_social_media"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z"
                            stroke="#D7EBFF"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M21.5039 4.5H10.5039C7.1902 4.5 4.50391 7.18629 4.50391 10.5V21.5C4.50391 24.8137 7.1902 27.5 10.5039 27.5H21.5039C24.8176 27.5 27.5039 24.8137 27.5039 21.5V10.5C27.5039 7.18629 24.8176 4.5 21.5039 4.5Z"
                            stroke="#D7EBFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22.5 11C23.3284 11 24 10.3284 24 9.5C24 8.67157 23.3284 8 22.5 8C21.6716 8 21 8.67157 21 9.5C21 10.3284 21.6716 11 22.5 11Z"
                            fill="#D7EBFF"
                          />
                        </svg>
                      </a>{" "}
                      <a
                        href="https://www.facebook.com/LanguagezoneTraining"
                        className="svg_social_media"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                            stroke="#D7EBFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 11H19C18.6056 10.9984 18.2147 11.0748 17.85 11.225C17.4853 11.3752 17.1539 11.5961 16.875 11.875C16.5961 12.1539 16.3752 12.4853 16.225 12.85C16.0748 13.2147 15.9984 13.6056 16 14V28"
                            stroke="#D7EBFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 18H20"
                            stroke="#D7EBFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="svg_react_angle">
                      <div className="circle_svg_contact_us" />
                      <div className="svg_hafh_circle" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="get_in_touch_btn"
                onClick={(event) => {
                  show_query_form(event.currentTarget as HTMLElement);
                }}
              >
                <span className="getIntouchTitle">Get In Touch</span>{" "}
                <span className="arrow_btn">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="#fff"
                      stroke="none"
                    >
                      <path
                        d={
                          "M918 3920 c-47 -14 -85 -48 -102 -90 -20 -49 -20 -81 -2 -123 7 -18\n221 -281 475 -586 257 -308 460 -560 457 -567 -3 -7 -209 -257 -458 -556 -249\n-299 -461 -559 -470 -578 -23 -44 -22 -84 1 -136 38 -83 151 -115 225 -63 19\n13 265 301 547 639 372 446 517 627 527 658 12 36 12 48 0 85 -10 30 -155 211\n-527 657 -282 338 -527 625 -544 637 -38 26 -91 35 -129 23z"
                        }
                      />
                      <path
                        d={
                          "M2007 3916 c-21 -8 -48 -22 -59 -33 -42 -37 -60 -120 -39 -175 5 -13\n218 -275 475 -583 256 -307 466 -562 466 -565 0 -3 -210 -258 -466 -565 -257\n-308 -470 -570 -475 -583 -23 -61 1 -147 52 -184 55 -41 146 -40 193 0 17 15\n987 1171 1041 1241 15 20 20 41 20 91 0 50 -5 71 -20 91 -54 70 -1024 1226\n-1041 1241 -16 13 -86 39 -104 38 -3 -1 -22 -7 -43 -14z"
                        }
                      />
                      <path
                        d={
                          "M3107 3916 c-72 -26 -107 -76 -107 -151 0 -26 5 -56 12 -68 6 -12\n220 -273 475 -579 l465 -558 -465 -557 c-255 -307 -469 -568 -475 -580 -7 -12\n-12 -44 -12 -71 0 -116 124 -192 228 -138 21 11 216 237 555 644 288 345 526\n636 530 646 9 23 9 89 0 112 -13 35 -1053 1273 -1080 1287 -45 23 -85 27 -126\n13z"
                        }
                      />
                    </g>
                  </svg>
                </span>
              </div>
              <div className="enquiry_form_contact_us">
                <div className="enquiry_form_container">
                  <div className="form_contact_us">
                    <form action="" className="form">
                      <h2 className="enqiry_title_contact_us">Get In Touch</h2>
                      <div className="form_enquiry_contact_us">
                        <div className="contact_us_input">
                          <Label unstyled className="contact_us_label">
                            Name
                          </Label>
                          <Input
                            unstyled
                            type="text"
                            required
                            id="contact_name"
                            placeholder="Please enter your name"
                          />
                        </div>
                        <div className="contact_us_input">
                          <Label unstyled className="contact_us_label">
                            Phone No
                          </Label>
                          <Input
                            unstyled
                            id="contact_mobile"
                            required
                            className="input_new"
                            placeholder="Enter phone number"
                          />
                        </div>
                        <div className="contact_us_input">
                          <Label unstyled className="contact_us_label">
                            Email
                          </Label>
                          <Input
                            unstyled
                            id="contact_email"
                            type="email"
                            placeholder="Please enter your email address"
                          />
                        </div>
                        <div className="contact_us_input">
                          <Label unstyled className="contact_us_label">
                            I am looking for
                          </Label>
                          <Input
                            unstyled
                            type="text"
                            placeholder="I want to know about the courses"
                            id="contact_query"
                          />
                        </div>
                        <div className="submit_btn_contact_us">
                          <Input
                            unstyled
                            type="submit"
                            value="Submit"
                            onClick={(event) => {
                              submitContactDetails(event);
                            }}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* (commented out in the original too; import MAP_EMBED from @/lib/location to enable) <iframe
          src={MAP_EMBED}
          height="300"
          style={{ border: "0", width: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        /> */}
      </main>
    </>
  );
}
