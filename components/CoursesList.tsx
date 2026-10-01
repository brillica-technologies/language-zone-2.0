"use client";

import Link from "next/link";
import SiteSheet from "@/components/SiteSheet";
import { useEffect } from "react";
import { closeDialog, useDialog } from "@/lib/dialogs";
import { show_classes_section_for_phone } from "@/lib/legacy";

const links = [
  { link: "german", link_name: "German" },
  { link: "ielts", link_name: "IELTS" },
  { link: "spanish", link_name: "Spanish" },
];

export default function CoursesList() {
  const [open] = useDialog("courses");

  // when the sheet closes, put the bottom nav's highlight back on the current page
  useEffect(() => {
    if (!open) show_classes_section_for_phone();
  }, [open]);

  return (
    <SiteSheet
      name="courses"
      side="bottom"
      className="our_services_phone"
      overlay={false}
    >
      <div className="our_services_phone_inner">
        <div className="border_div"></div>
        <div className="cancle_heading">
          <h2>All Courses </h2>
          <div className="cancle_btn" onClick={() => closeDialog("courses")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
          </div>
        </div>

        {links.map((value) => (
          <Link key={value.link} href={`/courses/${value.link}`}>
            <div className="phone_services_page">
              <p> {value.link_name}</p>
              <div className="right_svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SiteSheet>
  );
}
