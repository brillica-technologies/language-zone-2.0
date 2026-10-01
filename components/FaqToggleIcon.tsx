/** Plus / cross icon of an FAQ row; which one shows is switched by CSS from the accordion's open state. */
export default function FaqToggleIcon() {
  return (
    <span className="svg_box_1">
      <svg
        className="faq_icon_plus"
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M3.125 10H16.875"
          stroke="#363636"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 3.125V16.875"
          stroke="#363636"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="faq_icon_cancel"
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8613 5.13867L5.13861 14.8614"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.8613 14.8613L5.13861 5.13861"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
