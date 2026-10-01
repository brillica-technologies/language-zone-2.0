"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SiteDialog from "@/components/SiteDialog";
import { closeDialog, openDialog } from "@/lib/dialogs";

export default function Header() {
  return (
    <>
      <header className="main-header">
        <div className="header-logo">
          <Link href="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <nav className="main-navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-item" id="courses-link">
              <a href="#">Courses</a>
              <div className="courses-dropdown-list">
                <ul>
                  <li className="dropdown-item">
                    <Link href="/courses/ielts">IELTS</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="/courses/german">German</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="/courses/spanish">Spanish</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/courses/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link href="/courses/contact-us">Contact us</Link>
            </li>
          </ul>
        </nav>
        <div className="contact-info">
          <span className="contact-info__call">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
              onClick={() => openDialog("call")}
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#4a46a2"
                stroke="none"
              >
                <path
                  d={
                    "M2327 5109 c-325 -31 -613 -114 -906 -260 -260 -129 -450 -266 -665\n-477 -205 -203 -353 -408 -485 -673 -313 -628 -355 -1340 -120 -2004 88 -246\n263 -556 423 -750 241 -290 518 -510 847 -674 390 -194 805 -285 1229 -268\n381 16 712 100 1049 268 406 201 743 499 996 879 87 131 217 387 270 534 175\n478 200 1028 70 1523 -49 186 -92 300 -185 488 -130 263 -267 454 -478 669\n-531 538 -1297 817 -2045 745z m-650 -1219 c32 -12 517 -491 539 -532 34 -65\n27 -77 -155 -262 -92 -94 -176 -186 -185 -203 -38 -75 -30 -164 21 -241 167\n-248 607 -673 810 -782 46 -25 137 -27 191 -5 23 10 101 79 202 180 167 166\n193 184 248 170 34 -8 525 -494 548 -543 30 -64 -4 -118 -163 -257 -170 -149\n-359 -212 -553 -185 -261 36 -690 248 -1000 496 -116 93 -400 378 -492 494\n-208 261 -388 594 -454 835 -42 155 -24 317 53 475 42 85 59 108 176 227 71\n73 139 134 151 136 11 2 24 5 28 6 4 0 19 -4 35 -9z"
                  }
                />
              </g>
            </svg>
            <span className="call-contact-no">
              <a href="tel:8882140688">8882140688</a>{" "}
              <a href="tel:8979544473">8979544473</a>
            </span>
          </span>
        </div>
        <SiteDialog
          name="call"
          className="call-dialog-popup"
          overlayClassName="call-dialog-backdrop"
        >
          <div className="inner_show_popop_call">
            <div
              className="close_show_popop_call"
              onClick={() => closeDialog("call")}
            >
              <svg
                width="25"
                height="25"
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
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
                    fill="#33308b"
                  />
                </g>
              </svg>
            </div>
            <div className="call_svg_popup" onClick={() => closeDialog("call")}>
              <span className="svg_call_popup_mb">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#4a46a2"
                    stroke="none"
                  >
                    <path
                      d={
                        "M2327 5109 c-325 -31 -613 -114 -906 -260 -260 -129 -450 -266 -665\n-477 -205 -203 -353 -408 -485 -673 -313 -628 -355 -1340 -120 -2004 88 -246\n263 -556 423 -750 241 -290 518 -510 847 -674 390 -194 805 -285 1229 -268\n381 16 712 100 1049 268 406 201 743 499 996 879 87 131 217 387 270 534 175\n478 200 1028 70 1523 -49 186 -92 300 -185 488 -130 263 -267 454 -478 669\n-531 538 -1297 817 -2045 745z m-650 -1219 c32 -12 517 -491 539 -532 34 -65\n27 -77 -155 -262 -92 -94 -176 -186 -185 -203 -38 -75 -30 -164 21 -241 167\n-248 607 -673 810 -782 46 -25 137 -27 191 -5 23 10 101 79 202 180 167 166\n193 184 248 170 34 -8 525 -494 548 -543 30 -64 -4 -118 -163 -257 -170 -149\n-359 -212 -553 -185 -261 36 -690 248 -1000 496 -116 93 -400 378 -492 494\n-208 261 -388 594 -454 835 -42 155 -24 317 53 475 42 85 59 108 176 227 71\n73 139 134 151 136 11 2 24 5 28 6 4 0 19 -4 35 -9z"
                      }
                    />
                  </g>
                </svg>
              </span>{" "}
              <a href="tel:8882140688">+91-8882140688</a>
            </div>
            <div className="call_svg_popup" onClick={() => closeDialog("call")}>
              <span className="svg_call_popup_mb">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#4a46a2"
                    stroke="none"
                  >
                    <path
                      d={
                        "M2327 5109 c-325 -31 -613 -114 -906 -260 -260 -129 -450 -266 -665\n-477 -205 -203 -353 -408 -485 -673 -313 -628 -355 -1340 -120 -2004 88 -246\n263 -556 423 -750 241 -290 518 -510 847 -674 390 -194 805 -285 1229 -268\n381 16 712 100 1049 268 406 201 743 499 996 879 87 131 217 387 270 534 175\n478 200 1028 70 1523 -49 186 -92 300 -185 488 -130 263 -267 454 -478 669\n-531 538 -1297 817 -2045 745z m-650 -1219 c32 -12 517 -491 539 -532 34 -65\n27 -77 -155 -262 -92 -94 -176 -186 -185 -203 -38 -75 -30 -164 21 -241 167\n-248 607 -673 810 -782 46 -25 137 -27 191 -5 23 10 101 79 202 180 167 166\n193 184 248 170 34 -8 525 -494 548 -543 30 -64 -4 -118 -163 -257 -170 -149\n-359 -212 -553 -185 -261 36 -690 248 -1000 496 -116 93 -400 378 -492 494\n-208 261 -388 594 -454 835 -42 155 -24 317 53 475 42 85 59 108 176 227 71\n73 139 134 151 136 11 2 24 5 28 6 4 0 19 -4 35 -9z"
                      }
                    />
                  </g>
                </svg>
              </span>{" "}
              <a href="tel:8979544473">+91 8979544473</a>
            </div>
            <div className="call_svg_popup" onClick={() => closeDialog("call")}>
              <span className="svg_call_popup_mb">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#4a46a2"
                    stroke="none"
                  >
                    <path
                      d={
                        "M2327 5109 c-325 -31 -613 -114 -906 -260 -260 -129 -450 -266 -665\n-477 -205 -203 -353 -408 -485 -673 -313 -628 -355 -1340 -120 -2004 88 -246\n263 -556 423 -750 241 -290 518 -510 847 -674 390 -194 805 -285 1229 -268\n381 16 712 100 1049 268 406 201 743 499 996 879 87 131 217 387 270 534 175\n478 200 1028 70 1523 -49 186 -92 300 -185 488 -130 263 -267 454 -478 669\n-531 538 -1297 817 -2045 745z m-650 -1219 c32 -12 517 -491 539 -532 34 -65\n27 -77 -155 -262 -92 -94 -176 -186 -185 -203 -38 -75 -30 -164 21 -241 167\n-248 607 -673 810 -782 46 -25 137 -27 191 -5 23 10 101 79 202 180 167 166\n193 184 248 170 34 -8 525 -494 548 -543 30 -64 -4 -118 -163 -257 -170 -149\n-359 -212 -553 -185 -261 36 -690 248 -1000 496 -116 93 -400 378 -492 494\n-208 261 -388 594 -454 835 -42 155 -24 317 53 475 42 85 59 108 176 227 71\n73 139 134 151 136 11 2 24 5 28 6 4 0 19 -4 35 -9z"
                      }
                    />
                  </g>
                </svg>
              </span>{" "}
              <a href="tel:7351676494">+91 7351676494</a>
            </div>
          </div>
        </SiteDialog>
      </header>
    </>
  );
}
