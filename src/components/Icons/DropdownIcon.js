function DropdownIcon({ active }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 10L12 15L17 10H7Z" fill={active ? "#2E66E6" : "#5C667E"} />
    </svg>
  );
}

export default DropdownIcon;
