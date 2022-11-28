function IconPrevious({ handlePrevious }) {
  return (
    <svg
      onClick={handlePrevious}
      className="btn btn-previous"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" fill="white" />
      <path d="M24 28L16 20L24 12" stroke="#1D2026" strokeWidth="3" />
    </svg>
  );
}

export default IconPrevious;
