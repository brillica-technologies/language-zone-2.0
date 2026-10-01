"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { showMore } from "@/lib/legacy";
import { ADDRESS, MAP_LINK } from "@/lib/location";

export default function Footer() {
  // the home page footer also shows the office address; course pages don't
  const isHome = usePathname() === "/";

  return (
    <>
      <div className="footer_main_container">
        <div className="footer_sec">
          <div className="footer_top_sec">
            <div className="footer_wrap">
              <Link href="/">
                <div className="footer_img_logo">
                  <img
                    src="/images/language zone white logo .png"
                    alt={
                      isHome
                        ? "Language course in dehradun "
                        : "Foreign Language course in dehrdun and delhi "
                    }
                  />
                </div>
              </Link>
              <div className="social_media_icons">
                <p className="follow_media">Follow Us On</p>
                <div className="social_icons">
                  <p className="social_svg">
                    <a
                      href="https://www.facebook.com/LanguagezoneTraining"
                      className="svg_ft"
                      target="_blank"
                    >
                      <svg
                        fill="#fff"
                        height="20px"
                        width="20px"
                        version="1.1"
                        id="Layer_1"
                        viewBox="-143 145 512 512"
                      >
                        <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3  v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2  c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z" />
                      </svg>
                    </a>
                  </p>
                  <p className="social_svg">
                    <a
                      href="https://www.instagram.com/languagezone0309/"
                      className="svg_ft"
                      target="_blank"
                    >
                      <svg
                        fill="#fff"
                        width="20px"
                        height="20px"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>instagram</title>
                        <path d="M25.805 7.996c0 0 0 0.001 0 0.001 0 0.994-0.806 1.799-1.799 1.799s-1.799-0.806-1.799-1.799c0-0.994 0.806-1.799 1.799-1.799v0c0.993 0.001 1.798 0.805 1.799 1.798v0zM16 20.999c-2.761 0-4.999-2.238-4.999-4.999s2.238-4.999 4.999-4.999c2.761 0 4.999 2.238 4.999 4.999v0c0 0 0 0.001 0 0.001 0 2.76-2.237 4.997-4.997 4.997-0 0-0.001 0-0.001 0h0zM16 8.3c0 0 0 0-0 0-4.253 0-7.7 3.448-7.7 7.7s3.448 7.7 7.7 7.7c4.253 0 7.7-3.448 7.7-7.7v0c0-0 0-0 0-0.001 0-4.252-3.447-7.7-7.7-7.7-0 0-0 0-0.001 0h0zM16 3.704c4.003 0 4.48 0.020 6.061 0.089 1.003 0.012 1.957 0.202 2.84 0.538l-0.057-0.019c1.314 0.512 2.334 1.532 2.835 2.812l0.012 0.034c0.316 0.826 0.504 1.781 0.516 2.778l0 0.005c0.071 1.582 0.087 2.057 0.087 6.061s-0.019 4.48-0.092 6.061c-0.019 1.004-0.21 1.958-0.545 2.841l0.019-0.058c-0.258 0.676-0.64 1.252-1.123 1.726l-0.001 0.001c-0.473 0.484-1.049 0.866-1.692 1.109l-0.032 0.011c-0.829 0.316-1.787 0.504-2.788 0.516l-0.005 0c-1.592 0.071-2.061 0.087-6.072 0.087-4.013 0-4.481-0.019-6.072-0.092-1.008-0.019-1.966-0.21-2.853-0.545l0.059 0.019c-0.676-0.254-1.252-0.637-1.722-1.122l-0.001-0.001c-0.489-0.47-0.873-1.047-1.114-1.693l-0.010-0.031c-0.315-0.828-0.506-1.785-0.525-2.785l-0-0.008c-0.056-1.575-0.076-2.061-0.076-6.053 0-3.994 0.020-4.481 0.076-6.075 0.019-1.007 0.209-1.964 0.544-2.85l-0.019 0.059c0.247-0.679 0.632-1.257 1.123-1.724l0.002-0.002c0.468-0.492 1.045-0.875 1.692-1.112l0.031-0.010c0.823-0.318 1.774-0.509 2.768-0.526l0.007-0c1.593-0.056 2.062-0.075 6.072-0.075zM16 1.004c-4.074 0-4.582 0.019-6.182 0.090-1.315 0.028-2.562 0.282-3.716 0.723l0.076-0.025c-1.040 0.397-1.926 0.986-2.656 1.728l-0.001 0.001c-0.745 0.73-1.333 1.617-1.713 2.607l-0.017 0.050c-0.416 1.078-0.67 2.326-0.697 3.628l-0 0.012c-0.075 1.6-0.090 2.108-0.090 6.182s0.019 4.582 0.090 6.182c0.028 1.315 0.282 2.562 0.723 3.716l-0.025-0.076c0.796 2.021 2.365 3.59 4.334 4.368l0.052 0.018c1.078 0.415 2.326 0.669 3.628 0.697l0.012 0c1.6 0.075 2.108 0.090 6.182 0.090s4.582-0.019 6.182-0.090c1.315-0.029 2.562-0.282 3.716-0.723l-0.076 0.026c2.021-0.796 3.59-2.365 4.368-4.334l0.018-0.052c0.416-1.078 0.669-2.326 0.697-3.628l0-0.012c0.075-1.6 0.090-2.108 0.090-6.182s-0.019-4.582-0.090-6.182c-0.029-1.315-0.282-2.562-0.723-3.716l0.026 0.076c-0.398-1.040-0.986-1.926-1.729-2.656l-0.001-0.001c-0.73-0.745-1.617-1.333-2.607-1.713l-0.050-0.017c-1.078-0.416-2.326-0.67-3.628-0.697l-0.012-0c-1.6-0.075-2.108-0.090-6.182-0.090z" />
                      </svg>
                    </a>
                  </p>
                  <p className="social_svg">
                    <a
                      href="https://www.linkedin.com/company/72137283/admin/feed/posts/"
                      className="svg_ft"
                      target="_blank"
                    >
                      <svg
                        fill="#fff"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4.983" cy="5.009" r="2.188" />
                        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="footer_wrap">
              <p className="footer_title_caption">Company</p>
              <div className="links_name">
                <ul className="links_item">
                  <li>
                    <a className="links" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="links">
                      Term &amp; Condition
                    </a>
                  </li>
                  <li>
                    <a className="links" href="#">
                      Refund-Policy
                    </a>
                  </li>
                  <li>
                    <a className="links" href="https://rzp.io/l/PgzYK7Q">
                      Pay Online
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_wrap">
              <p className="footer_title_caption">UseFul Links</p>
              <div className="links_name">
                <ul className="links_item">
                  <li>
                    <Link href="/courses/german" className="links">
                      German Language Training
                    </Link>
                  </li>
                  <li>
                    <Link className="links" href="/courses/ielts">
                      IELTS Certification
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses/spanish" className="links">
                      Spanish Language Training
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses/contact-us" className="links">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses/blog" className="links">
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_wrap">
              <p className="footer_title_caption">Contact Us</p>
              <div className="contact_sec">
                <a href="tel:8882140688" className="contact_us call_link">
                  <span className="contact_us_svg">
                    <svg
                      className="phone_svg"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5625 15.5989C12.5915 17.724 14.3098 19.4379 16.4375 20.4614C16.5944 20.5358 16.768 20.5679 16.9412 20.5548C17.1143 20.5416 17.2811 20.4836 17.425 20.3864L20.55 18.2989C20.6881 18.2053 20.8476 18.1482 21.0137 18.1329C21.1799 18.1176 21.3472 18.1446 21.5 18.2114L27.35 20.7239C27.5499 20.8072 27.717 20.9538 27.8254 21.1413C27.9338 21.3287 27.9776 21.5466 27.95 21.7614C27.7646 23.2086 27.0582 24.5386 25.9631 25.5027C24.8679 26.4667 23.459 26.9986 22 26.9989C17.4913 26.9989 13.1673 25.2079 9.97919 22.0198C6.79107 18.8316 5 14.5076 5 9.99894C5.00033 8.53994 5.53227 7.13104 6.49628 6.03589C7.4603 4.94073 8.79033 4.23436 10.2375 4.04894C10.4523 4.02135 10.6702 4.06513 10.8577 4.17355C11.0452 4.28197 11.1918 4.44901 11.275 4.64894L13.7875 10.5114C13.8528 10.6619 13.8802 10.8261 13.8671 10.9896C13.854 11.153 13.8009 11.3108 13.7125 11.4489L11.625 14.6239C11.5321 14.7675 11.4775 14.9326 11.4666 15.1033C11.4556 15.274 11.4887 15.4447 11.5625 15.5989V15.5989Z"
                        stroke="#DDD6F5"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="num">+91- 8882140688</p>
                </a>{" "}
                <a href="tel:7351676494" className="contact_us call_link">
                  <span className="contact_us_svg">
                    <svg
                      className="phone_svg"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5625 15.5989C12.5915 17.724 14.3098 19.4379 16.4375 20.4614C16.5944 20.5358 16.768 20.5679 16.9412 20.5548C17.1143 20.5416 17.2811 20.4836 17.425 20.3864L20.55 18.2989C20.6881 18.2053 20.8476 18.1482 21.0137 18.1329C21.1799 18.1176 21.3472 18.1446 21.5 18.2114L27.35 20.7239C27.5499 20.8072 27.717 20.9538 27.8254 21.1413C27.9338 21.3287 27.9776 21.5466 27.95 21.7614C27.7646 23.2086 27.0582 24.5386 25.9631 25.5027C24.8679 26.4667 23.459 26.9986 22 26.9989C17.4913 26.9989 13.1673 25.2079 9.97919 22.0198C6.79107 18.8316 5 14.5076 5 9.99894C5.00033 8.53994 5.53227 7.13104 6.49628 6.03589C7.4603 4.94073 8.79033 4.23436 10.2375 4.04894C10.4523 4.02135 10.6702 4.06513 10.8577 4.17355C11.0452 4.28197 11.1918 4.44901 11.275 4.64894L13.7875 10.5114C13.8528 10.6619 13.8802 10.8261 13.8671 10.9896C13.854 11.153 13.8009 11.3108 13.7125 11.4489L11.625 14.6239C11.5321 14.7675 11.4775 14.9326 11.4666 15.1033C11.4556 15.274 11.4887 15.4447 11.5625 15.5989V15.5989Z"
                        stroke="#DDD6F5"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      /&gt;
                    </svg>
                  </span>
                  <p className="num">+91- 7351676494</p>
                </a>{" "}
                <a
                  href="mailto:info@brillicaservices.com"
                  className="contact_us gmail_link"
                >
                  <span className="contact_us_svg">
                    <svg
                      className="envelope"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z"
                        stroke="#DDD6F5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28 7L16 18L4 7"
                        stroke="#DDD6F5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="company_email num">info@brillicaservices.com</p>
                </a>
                <div className="Location_wrapper">
                  <span>
                    <svg
                      className="location_svg"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#DDD6F5"
                      viewBox="0 0 256 256"
                    >
                      <path d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z" />
                    </svg>
                  </span>
                  <div className="company_location_wrap">
                    <a href={MAP_LINK} className="company_location num">
                      {ADDRESS}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="copy_title">
            © All rights reserved 2017-23 Website Designed and Developed by{" "}
            {/* the original markup (<Link to=...>) rendered as plain text, so it stays plain text */}
            Brillica Services
          </p>
        </div>
      </div>
      <div className="footer_section_mobile">
        <div className="inner_footer_section_mobile">
          <div className="img-social-links">
            <div className="footer_logo_img_wrapper">
              <Link href="/" className="footer_logo_link">
                <img
                  src="/images/language zone white logo .png"
                  alt="language courses in dehradun and delhi  "
                  className="footer_image_logo"
                />
              </Link>
            </div>
            <div className="contact_us_social_icons">
              <div className="social_icons">
                <a
                  href="https://www.facebook.com/LanguagezoneTraining"
                  className="social_svg"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                        fill="rgb(221 ,214,245)"
                      />
                    </g>
                  </svg>
                </a>{" "}
                <a
                  href="https://www.instagram.com/languagezone0309/"
                  className="social_svg"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        fill="rgb(221, 214,245)"
                      />
                      <path
                        d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                        fill="rgb(221 ,214 ,245)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                        fill="rgb(221 ,214,245)"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/72137283/admin/feed/posts/"
                  className="social_svg"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                        fill="rgb(221,214 ,245)"
                      />
                      <path
                        d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                        fill="rgb(221 ,214,245)"
                      />
                      <path
                        d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                        fill="rgb(221,214,245)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                        fill="rgb(221 ,214 ,245)"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {isHome && (
            <div className="location">
              <a href={MAP_LINK} className="location_title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#ddd6f5"
                  viewBox="0 0 256 256"
                >
                  <path d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z" />
                </svg>
                {ADDRESS}
              </a>
            </div>
          )}
        </div>
        <div className="click_popup_footer">
          <div
            className="see_more"
            onClick={() => {
              showMore();
            }}
          >
            + More
          </div>
        </div>
        <div className="footer_tab_link_mobile">
          <div className="inner_footer_tab_link_mb">
            <div className="footer_tabs">
              <div className="footer_tab_btn active_footer_tab">Company</div>
              <div className="footer_tab_btn">Courses</div>
              <div className="footer_tab_btn">Contact us</div>
            </div>
            <div className="footer_info_wrap" id="firstTab">
              <div className="title_item_info">
                <Link className="title_item_link" href="/static/privacy-policy">
                  Privacy Policy
                </Link>
              </div>
              <div className="title_item_info">
                <Link
                  className="title_item_link"
                  href="/static/terms-and-conditions"
                >
                  Terms &amp; Condition
                </Link>
              </div>
              <div className="title_item_info">
                <Link
                  className="title_item_link"
                  href="/static/terms-and-conditions"
                >
                  Terms &amp; Condition
                </Link>
              </div>
              <div className="title_item_info">
                <a className="title_item_link" href="https://rzp.io/l/PgzYK7Q">
                  Pay Online
                </a>
              </div>
            </div>
            <div className="footer_info_wrap" id="secondTab">
              <div className="title_item_info">
                <Link className="title_item_link" href="/courses/german">
                  German Training
                </Link>
              </div>
              <div className="title_item_info">
                <Link className="title_item_link" href="/courses/spanish">
                  Spanish Training
                </Link>
              </div>
              <div className="title_item_info">
                <Link className="title_item_link" href="/courses/ielts">
                  IELTS Training
                </Link>
              </div>
            </div>
            <div className="footer_info_wrap" id="fourTab">
              <div className="footer_wrap">
                <div className="contact_sec">
                  <a href="tel:8882140688" className="contact_us">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5625 15.5989C12.5915 17.724 14.3098 19.4379 16.4375 20.4614C16.5944 20.5358 16.768 20.5679 16.9412 20.5548C17.1143 20.5416 17.2811 20.4836 17.425 20.3864L20.55 18.2989C20.6881 18.2053 20.8476 18.1482 21.0137 18.1329C21.1799 18.1176 21.3472 18.1446 21.5 18.2114L27.35 20.7239C27.5499 20.8072 27.717 20.9538 27.8254 21.1413C27.9338 21.3287 27.9776 21.5466 27.95 21.7614C27.7646 23.2086 27.0582 24.5386 25.9631 25.5027C24.8679 26.4667 23.459 26.9986 22 26.9989C17.4913 26.9989 13.1673 25.2079 9.97919 22.0198C6.79107 18.8316 5 14.5076 5 9.99894C5.00033 8.53994 5.53227 7.13104 6.49628 6.03589C7.4603 4.94073 8.79033 4.23436 10.2375 4.04894C10.4523 4.02135 10.6702 4.06513 10.8577 4.17355C11.0452 4.28197 11.1918 4.44901 11.275 4.64894L13.7875 10.5114C13.8528 10.6619 13.8802 10.8261 13.8671 10.9896C13.854 11.153 13.8009 11.3108 13.7125 11.4489L11.625 14.6239C11.5321 14.7675 11.4775 14.9326 11.4666 15.1033C11.4556 15.274 11.4887 15.4447 11.5625 15.5989V15.5989Z"
                        stroke="#DDD6F5"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="num">+91- 8882140688</p>
                  </a>{" "}
                  <a href="tel:7351676494" className="contact_us">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5625 15.5989C12.5915 17.724 14.3098 19.4379 16.4375 20.4614C16.5944 20.5358 16.768 20.5679 16.9412 20.5548C17.1143 20.5416 17.2811 20.4836 17.425 20.3864L20.55 18.2989C20.6881 18.2053 20.8476 18.1482 21.0137 18.1329C21.1799 18.1176 21.3472 18.1446 21.5 18.2114L27.35 20.7239C27.5499 20.8072 27.717 20.9538 27.8254 21.1413C27.9338 21.3287 27.9776 21.5466 27.95 21.7614C27.7646 23.2086 27.0582 24.5386 25.9631 25.5027C24.8679 26.4667 23.459 26.9986 22 26.9989C17.4913 26.9989 13.1673 25.2079 9.97919 22.0198C6.79107 18.8316 5 14.5076 5 9.99894C5.00033 8.53994 5.53227 7.13104 6.49628 6.03589C7.4603 4.94073 8.79033 4.23436 10.2375 4.04894C10.4523 4.02135 10.6702 4.06513 10.8577 4.17355C11.0452 4.28197 11.1918 4.44901 11.275 4.64894L13.7875 10.5114C13.8528 10.6619 13.8802 10.8261 13.8671 10.9896C13.854 11.153 13.8009 11.3108 13.7125 11.4489L11.625 14.6239C11.5321 14.7675 11.4775 14.9326 11.4666 15.1033C11.4556 15.274 11.4887 15.4447 11.5625 15.5989V15.5989Z"
                        stroke="#DDD6F5"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="num">+91- 7351676494</p>
                  </a>{" "}
                  <a
                    href="mailto:info@brillicaservices.com"
                    className="contact_us"
                  >
                    <svg
                      className="envelope"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z"
                        stroke="#DDD6F5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28 7L16 18L4 7"
                        stroke="#DDD6F5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="company_email num">
                      info@brillicaservices.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright_mobile">
          © All rights reserved 2017- {new Date().getFullYear()} <br /> by
          Brillica Services.
        </p>
      </div>
    </>
  );
}
