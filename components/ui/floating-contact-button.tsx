import React from "react";
import styles from "./floating-contact-button.module.css";

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
}

const FloatingContactButton: React.FC<Props> = ({ onClick, ariaLabel = "Open contact form" }) => {
  return (
    <div className={styles.floatingWrapper}>
      <button
        className="btn-class-name"
        onClick={onClick}
        aria-label={ariaLabel}
        title={ariaLabel}
      >
        <span className="back" />
        <span className="front">
          {/* Simple + icon */}
          <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default FloatingContactButton;
