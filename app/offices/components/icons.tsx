import React from "react";

interface IconProps {
  className?: string;
}

export const PhoneIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.4468 13.9509C16.2178 13.8702 16.1032 13.8298 15.9906 13.8398C15.8922 13.8487 15.7977 13.8857 15.7167 13.9470C15.6253 14.0191 15.5586 14.1360 15.4252 14.3698L14.7236 15.5414C14.2049 15.3187 13.0837 14.8201 11.9116 13.6481C10.7394 12.4759 10.2408 11.3546 10.0181 10.8360L11.1897 10.1344C11.4235 10.0009 11.5404 9.93424 11.6125 9.84290C11.6738 9.76186 11.7108 9.66732 11.7197 9.56897C11.7297 9.45633 11.6893 9.34175 11.6085 9.11259L10.4424 5.61259C10.3044 5.23324 10.2354 5.04357 10.1138 4.90365C10.0064 4.78009 9.87035 4.68518 9.71742 4.62652C9.54451 4.56004 9.34262 4.56004 8.93882 4.56004H6.12174C5.64191 4.56004 5.40199 4.56004 5.19615 4.65932C5.02572 4.74154 4.85828 4.89704 4.76389 5.06093C4.64998 5.25905 4.63587 5.47651 4.60766 5.91143C4.57956 6.29067 4.56551 6.48029 4.56551 6.48029C4.56551 6.48029 4.56551 6.48029 4.56551 6.48029Z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7V12L15 15"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="10"
      r="3"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
