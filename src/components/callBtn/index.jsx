import { FaPhone } from "react-icons/fa";

function CallButton() {
  return (
    <a
      href="tel:+998901234567" // o'zingizning raqamingizni yozing
      className="fixed bottom-20 right-6 bg-[#71914B] hover:bg-[#72914bb0] text-white p-3 rounded-full shadow-lg z-50 transition-colors animate-ping-slow"
      aria-label="Call phone number"
    >
      <FaPhone className="text-xl" />
    </a>
  );
}

export default CallButton;
