function IconNext({ handleChangePhoto }) {
  return (
    <svg
      className="btn btn-next"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="40"
        height="40"
        transform="translate(40 40) rotate(-180)"
        fill="white"
      />
      <path d="M16 12L24 20L16 28" stroke="#1D2026" strokeWidth="3" />
    </svg>
  );
}

export default IconNext;
