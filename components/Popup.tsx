"use client";

import SiteDialog from "@/components/SiteDialog";
import SiteSheet from "@/components/SiteSheet";
import { closeDialog, openDialog, useDialog } from "@/lib/dialogs";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  hide_pop_error_box,
  submitBottomForm,
  submit_course_curriculam,
  submit_query_form,
} from "@/lib/legacy";

export default function Popup() {
  const [queryOpen] = useDialog("query");

  return (
    <>
      <div className="bottom-strip">
        <div className="bottom-strip-first-container">
          <div className="whatsapp_icons_div">
            <a
              href="https://api.whatsapp.com/send?phone=918882140688"
              target="_blank"
              className="whatsapp_icons_inner"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#fff"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
          </div>
        </div>
        <div
          className="drop_query"
          style={
            queryOpen ? { transition: ".5s ease", right: "-100%" } : undefined
          }
          onClick={() => openDialog("query")}
        >
          <p className="for-pc">drop us a query</p>
          <p className="for-mobile">Call Back</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="25"
              fill="#fff"
              className="rotate_svg"
              viewBox="0 0 256 256"
              style={{ transform: "rotate(180deg)" }}
            >
              <path d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z" />
            </svg>
          </p>
        </div>
      </div>
      <SiteSheet
        name="query"
        side="right"
        modal={false}
        className="drop_query_form"
      >
        <div
          className="drop_query_form_box"
          onClick={() => closeDialog("query")}
        >
          <p>drop us a query</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              style={{ transform: "rotate(180)" }}
              height="25"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
            </svg>
          </p>
        </div>
        <form action="/submit_query" className="query_form" method="post">
          <Label unstyled htmlFor="name">
            Name *
          </Label>
          <Input
            unstyled
            type="text"
            name=""
            id="bottom_form_username"
            placeholder="Enter Name"
          />
          <Label unstyled htmlFor="contact">
            Contact *
          </Label>
          <Input
            unstyled
            type="text"
            name="contact"
            id="bottom_form_usernumber"
            placeholder="Enter Contact "
          />
          <Label unstyled htmlFor="email">
            Query *
          </Label>
          <Input
            unstyled
            type="text"
            name="query"
            id="bottom_form_userquery"
            placeholder="Enter Query"
          />{" "}
          <Input
            unstyled
            type="submit"
            value="Get a Callback"
            style={{ cursor: "pointer" }}
            onClick={(event) => {
              submitBottomForm(event);
            }}
          />
        </form>
      </SiteSheet>
      <SiteDialog name="download_curriculam">
        <div className="inside_pop_up_form">
          <div className="form_enquiry_course">
            <DialogClose render={<p className="hide_pop_up" />}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="#56429a"
                viewBox="0 0 256 256"
              >
                <path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
              </svg>
            </DialogClose>
            <form className="form_course ">
              <h2 className="form_enquiry_caption_course">Download Now</h2>
              <div className="Input_field_enquiry_course">
                <Label unstyled htmlFor="name" className="label_course">
                  Name*
                </Label>
                <Input
                  unstyled
                  id="download_course_curriculam_name"
                  type="text"
                  required
                  name="name"
                  className="input_course"
                  placeholder="Please Enter Your Name"
                />
              </div>
              <div className="Input_field_enquiry_course">
                <Label unstyled htmlFor="name" className="label_course">
                  Phone No*
                </Label>
                <Input
                  unstyled
                  required
                  name="name"
                  className="input_course"
                  placeholder="Phone No."
                  id="download_course_curriculam_phone_no"
                />
              </div>
              <div
                className="Input_field_enquiry_course"
                onClick={(event) => {
                  submit_course_curriculam(event, "download_curriculam");
                }}
              >
                <Button unstyled className="btn_course">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </SiteDialog>
      <div className="error_pop_up_box ">
        <div
          className="error_inside_box"
          onClick={() => {
            hide_pop_error_box("error_pop_up_box");
          }}
        >
          <p className="your_msg" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#721c24"
            viewBox="0 0 256 256"
          >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
          </svg>
        </div>
      </div>
      <SiteDialog name="pop_up_form">
        <div className="inside_pop_up_form">
          <div className="form_enquiry_course">
            <DialogClose render={<p className="hide_pop_up" />}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="#56429a"
                viewBox="0 0 256 256"
              >
                <path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
              </svg>
            </DialogClose>
            <form className="form_course ">
              <h2 className="form_enquiry_caption_course">Apply To Enroll</h2>
              <div className="Input_field_enquiry_course">
                <Label unstyled htmlFor="name" className="label_course">
                  Name*
                </Label>
                <Input
                  unstyled
                  id="customize_training_username"
                  type="text"
                  required
                  name="name"
                  className="input_course"
                  placeholder="Please enter your name"
                />
              </div>
              <div className="Input_field_enquiry_course">
                <Label unstyled htmlFor="name" className="label_course">
                  Phone No*
                </Label>
                <Input
                  unstyled
                  required
                  name="name"
                  className="input_course"
                  placeholder="Phone No."
                  id="customize_training_number"
                />
              </div>
              <div className="Input_field_enquiry_course">
                <Label unstyled htmlFor="quiry" className="label_course">
                  Query
                </Label>
                <Input
                  unstyled
                  className="input_course"
                  placeholder="Enter your query"
                  id="coustmize_training_query"
                />
              </div>
              <div
                className="Input_field_enquiry_course"
                onClick={(event) => {
                  submit_query_form(event, "pop_up_form");
                }}
              >
                <Button unstyled className="btn_course">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </SiteDialog>
    </>
  );
}
