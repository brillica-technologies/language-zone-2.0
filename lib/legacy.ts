// Client-side behaviour ported 1:1 from the original site's js/*.js files.
// All functions operate on the rendered DOM by class / id, exactly like the PHP site.

import { openDialog } from "@/lib/dialogs";

type Evt = { preventDefault(): void };

const NamePattern = /^[a-zA-Z\s]+$/;
const PhoneNumberPattern = /^[^0][0-9]{9}$/;

// set in .env (NEXT_PUBLIC_ so it is available in the browser)
const ENQUIRY_URL = process.env.NEXT_PUBLIC_ENQUIRY_URL;
//  "http://localhost:4000/api/enquiry/online-query";

const $ = (id: string) => document.getElementById(id) as HTMLInputElement;
const first = (cls: string) =>
  document.getElementsByClassName(cls)[0] as HTMLElement;

// ---------------------------------------------------------------- alerts

export function show_alert_box(msg: string, success: boolean) {
  const ele = first("error_pop_up_box");
  const msgEle = first("your_msg");
  const ele2 = first("error_inside_box");

  ele.classList.add("show_error_pop_box");
  msgEle.innerText = msg;
  if (success === true) {
    ele2.classList.add("sucess_box");
  }
  setTimeout(() => hide_pop_error_box(), 2000);
}

export function hide_pop_error_box(_cls?: string) {
  first("error_pop_up_box").classList.remove("show_error_pop_box");
}

// ---------------------------------------------------------------- enquiry submit

async function postEnquiry(name: string, number: string, query: string) {
  if (!ENQUIRY_URL) {
    console.error("NEXT_PUBLIC_ENQUIRY_URL is not set in .env");
    show_alert_box("Failed to submit query. Please try again later.", false);
    return;
  }
  try {
    const response = await fetch(ENQUIRY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        mobileNumber: Number(91 + number),
        message: query,
        page: window.location.pathname,
        website: "languageZone",
      }),
    });

    const res = await response.json();
    console.log("API Response:", res);

    if (response.ok) {
      show_alert_box("Your Query is Submitted ", true);
      setTimeout(() => window.location.reload(), 2000);
    } else {
      show_alert_box(res?.message || "Something went wrong!", false);
    }
  } catch (err) {
    console.error("API Error:", err);
    show_alert_box("Failed to submit query. Please try again later.", false);
  }
}

/**
 * Validates and posts an enquiry, returning a message for inline display
 * (used by the redesigned forms instead of the alert popup + page reload).
 */
export async function sendEnquiry(
  name: string,
  number: string,
  query: string,
): Promise<{ ok: boolean; message: string }> {
  if (!NamePattern.test(name)) {
    return { ok: false, message: "Please enter your name." };
  }
  if (!PhoneNumberPattern.test(number)) {
    return {
      ok: false,
      message: "Please enter a valid 10-digit mobile number.",
    };
  }
  if (!ENQUIRY_URL) {
    console.error("NEXT_PUBLIC_ENQUIRY_URL is not set in .env");
    return {
      ok: false,
      message: "Sorry, something went wrong. Please call +91 88821 40688.",
    };
  }
  try {
    const response = await fetch(ENQUIRY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        mobileNumber: Number(91 + number),
        message: query,
        page: window.location.pathname,
        website: "languageZone",
      }),
    });
    const res = await response.json().catch(() => null);
    if (response.ok) {
      return { ok: true, message: "Thank you. We will call you back soon." };
    }
    return { ok: false, message: res?.message || "Something went wrong!" };
  } catch (err) {
    console.error("API Error:", err);
    return {
      ok: false,
      message: "Sorry, something went wrong. Please call +91 88821 40688.",
    };
  }
}

/** Shared name / number / (optional) query validation. Returns true when valid. */
function validate(
  name: string,
  number: string,
  query?: string,
  queryMsg?: string,
) {
  if (!NamePattern.test(name)) {
    show_alert_box("Please Enter correct name ", false);
    return false;
  }
  if (number.length != 10) {
    show_alert_box("Please Enter Valid Mobile Number ", false);
    return false;
  }
  if (!PhoneNumberPattern.test(number)) {
    show_alert_box("Please Enter Valid  Mobile Number ", false);
    return false;
  }
  if (query !== undefined && query == "") {
    show_alert_box(
      queryMsg ?? "Please Tell Us What You are looking For",
      false,
    );
    return false;
  }
  return true;
}

export async function submitContactDetails(e: Evt) {
  e.preventDefault();
  const name = $("contact_name").value.trim();
  const number = $("contact_mobile").value.trim();
  const query = $("contact_query").value.trim();
  if (!validate(name, number, query)) return;
  await postEnquiry(name, number, query);
}

export async function submit_home_query(e: Evt) {
  e.preventDefault();
  const name = $("username").value.trim();
  const number = $("usernumber").value.trim();
  const query = $("userquery").value.trim();
  if (
    !validate(
      name,
      number,
      query,
      "Please Tell Us What You are looking For query",
    )
  )
    return;
  await postEnquiry(name, number, query);
}

export async function submit_course_curriculam(e: Evt, _cls?: string) {
  e.preventDefault();
  const name = $("download_course_curriculam_name").value.trim();
  const number = $("download_course_curriculam_phone_no").value.trim();
  const query = " Download Curriculum Request ";
  if (!validate(name, number)) return;
  await postEnquiry(name, number, query);
}

export async function submit_query_form(e: Evt, _cls?: string) {
  e.preventDefault();
  const name = $("customize_training_username").value.trim();
  const number = $("customize_training_number").value.trim();
  const query = $("coustmize_training_query").value.trim();
  if (!validate(name, number, query)) return;
  await postEnquiry(name, number, query);
}

export async function submit_query_form_for_phone(e: Evt, _cls?: string) {
  e.preventDefault();
  const name = $("form_for_phone_username").value.trim();
  const number = $("form_for_phone__number").value.trim();
  const query = $("form_for_phone__query").value.trim();
  if (!validate(name, number, query)) return;
  await postEnquiry(name, number, query);
}

export async function submitBottomForm(e: Evt) {
  e.preventDefault();
  const name = $("bottom_form_username").value.trim();
  const number = $("bottom_form_usernumber").value.trim();
  const query = $("bottom_form_userquery").value.trim();
  if (
    !validate(
      name,
      number,
      query,
      "Please Tell Us What You are looking For query",
    )
  )
    return;
  await postEnquiry(name, number, query);
}

// ---------------------------------------------------------------- popups / drawers

export function show_pop_up_form(name: string, _x?: string) {
  openDialog(name);
}

export function show_query_form(_t?: HTMLElement) {
  openDialog("query");
}

export function hidePopup() {
  const popup = first("main-popup");
  if (!popup) return; // markup is commented out in the original too
  popup.setAttribute(
    "style",
    "transform:translateY(-500%);transition: all 0.4s linear;",
  );
  setTimeout(() => {
    document.body.style.overflowY = "scroll";
  }, 750);
  setTimeout(() => {
    const after = document.querySelector(
      ".cross-after-text",
    ) as HTMLElement | null;
    if (after) after.setAttribute("style", "display:flex");
  }, 1100);
}

export function openOfferPopUp() {
  const popup = first("main-popup");
  if (!popup) return; // markup is commented out in the original too
  popup.setAttribute(
    "style",
    "transform:translateY(0%); transition: all 0.7s linear;",
  );
  setTimeout(() => {
    document.body.style.overflow = "hidden";
  }, 750);
}

// ---------------------------------------------------------------- footer

export function showMore() {
  const buttonTap = document.querySelector(".see_more") as HTMLElement;
  const footerContent = document.querySelector(
    ".inner_footer_tab_link_mb",
  ) as HTMLElement;
  if (footerContent.classList.contains("show")) {
    footerContent.classList.remove("show");
    buttonTap.innerHTML = "+ More";
  } else {
    footerContent.classList.add("show");
    buttonTap.innerHTML = "- Less";
  }
}

// ---------------------------------------------------------------- mobile bottom nav

export function show_classes_section_for_phone() {
  const item = document.getElementsByClassName("mobile-bottom-nav__item");
  if (!item.length) return;
  switch (window.location.pathname) {
    case "/":
      item[0].classList.add("active");
      item[2].classList.remove("active");
      item[1].classList.remove("active");
      break;
    case "/courses":
      item[1].classList.add("active");
      item[0].classList.remove("active");
      break;
    case "/our_services":
    case "/technology-training":
    case "/services/digital-marketing":
    case "/services/web-and-app-development":
    case "/services/data-analytics-services":
      item[2].classList.add("active");
      break;
    case "/static/blog":
    case "/static/contact-us":
      item[3].classList.add("active");
      item[2].classList.remove("active");
      item[1].classList.remove("active");
      break;
    case "/static/jobs-opening":
      item[4].classList.add("active");
      item[2].classList.remove("active");
      item[1].classList.remove("active");
      break;
    default:
      break;
  }
}

export function our_services_toogle(k: number) {
  openDialog("courses");
  const item = document.getElementsByClassName("mobile-bottom-nav__item");
  for (let i = 0; i < item.length; i++) item[i].classList.remove("active");
  item[k].classList.add("active");
}

export function go_to_page(
  _txt: string,
  route: string,
  _i: number,
  event: Evt,
) {
  event.preventDefault();
  window.location.href = "/" + route;
}

// ---------------------------------------------------------------- course pages

export function left_scroll_course_scroller() {
  first("related_course_wrap_container").scrollLeft -= 400;
}

export function right_scroll_course_scroller() {
  first("related_course_wrap_container").scrollLeft += 400;
}

// ---------------------------------------------------------------- one-time setup (footer.js / tabnav.js on load)

/** Wires the footer tab buttons and returns a cleanup function. */
export function initFooterTabs() {
  const buttons = document.querySelectorAll<HTMLElement>(".footer_tab_btn");
  const contents = document.querySelectorAll<HTMLElement>(".footer_info_wrap");

  const handlers = Array.from(buttons).map((button, index) => {
    const handler = () => {
      buttons.forEach((b) => b.classList.remove("active_footer_tab"));
      contents.forEach((c) => (c.style.display = "none"));
      button.classList.add("active_footer_tab");
      contents[index].style.display = "block";
    };
    button.addEventListener("click", handler);
    return handler;
  });
  if (contents[0]) contents[0].style.display = "block";

  return () =>
    buttons.forEach((b, i) => b.removeEventListener("click", handlers[i]));
}

/** Offer popup that opens 7.5s after load unless the visitor already submitted. */
export function scheduleOfferPopup() {
  const timer = setTimeout(() => {
    if (document.cookie.includes("submitted=true")) return;
    const p = window.location.pathname;
    if (
      p != "/static/career-camp" &&
      p != "/services/technology-training" &&
      p != "/services/digital-marketing" &&
      p != "/services/web-and-app-development" &&
      p != "/services/data-analytics-services"
    ) {
      openOfferPopUp();
    }
  }, 7500);
  return () => clearTimeout(timer);
}
