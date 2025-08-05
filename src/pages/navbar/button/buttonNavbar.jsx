import { useNavigate } from "react-router-dom";
import "./buttonNavbar.css";

export const ButtonNavbar = ({
  buttonText = "Button",
  kind = "primary",
  color = "primary",
  state = "default",
  round = "squire",
  variant = "filled", 
  className, to, onClick,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  const variantsClassName =
    `kind-${kind} color-${color} state-${state} round-${round} variant-${variant}`;

  return (
    <div
      className={`buttonNavbar ${className || ""} ${variantsClassName}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="button-text">{buttonText}</div>
    </div>
  );
};
