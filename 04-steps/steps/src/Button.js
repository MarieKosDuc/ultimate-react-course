export default function Button({bgColor, textColor, handleClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={handleClick}
    >
        {children}
    </button>
  );
}
