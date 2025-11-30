export default function Button({ 
  children, 
  variant = "primary", 
  size = "md",
  onClick, 
  className = "",
  type = "button",
}) {

  const baseClass = `btn btn-${variant} btn-${size} ${className}`;

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
