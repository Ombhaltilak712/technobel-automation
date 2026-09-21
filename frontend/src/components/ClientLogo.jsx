import React from 'react';

export default function ClientLogo({ brandId, className = "h-10 w-auto" }) {
  switch (brandId) {
    case 1:
      // Kongsberg Automotive
      return (
        <svg viewBox="0 0 240 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 10L40 45H10L25 10Z" fill="#0052CC" />
          <path d="M25 10L32 30H18L25 10Z" fill="#3385FF" />
          <text x="50" y="32" fill="#1E293B" fontSize="15" fontStyle="italic" fontWeight="900" fontFamily="sans-serif">
            KONGSBERG
          </text>
          <text x="50" y="46" fill="#0052CC" fontSize="10" fontWeight="700" letterSpacing="2" fontFamily="sans-serif">
            AUTOMOTIVE
          </text>
        </svg>
      );

    case 2:
      // Yaskawa Robotics
      return (
        <svg viewBox="0 0 220 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="36" fill="#0044B3" fontSize="24" fontWeight="900" letterSpacing="1" fontFamily="sans-serif">
            YASKAWA
          </text>
          <rect x="180" y="16" width="24" height="6" fill="#F59E0B" />
        </svg>
      );

    case 3:
      // Bellsonica
      return (
        <svg viewBox="0 0 220 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="16" stroke="#008080" strokeWidth="4" strokeDasharray="6 3" fill="none" />
          <circle cx="25" cy="25" r="8" fill="#008080" />
          <text x="50" y="34" fill="#008080" fontSize="22" fontWeight="800" fontFamily="sans-serif">
            Bellsonica
          </text>
        </svg>
      );

    case 4:
      // SKH Group
      return (
        <svg viewBox="0 0 180 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="18" fill="url(#skhGrad)" />
          <path d="M12 25C18 15 32 15 38 25" stroke="#FFFFFF" strokeWidth="3" />
          <text x="52" y="34" fill="#003399" fontSize="22" fontWeight="900" fontFamily="sans-serif">
            SKH
          </text>
          <defs>
            <linearGradient id="skhGrad" x1="0" y1="0" x2="36" y2="36">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#003399" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 5:
      // Dikacto Robotics & Automation
      return (
        <svg viewBox="0 0 240 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="32" fill="#0F172A" fontSize="20" fontWeight="900" fontFamily="sans-serif">
            DIKACTO
          </text>
          <text x="10" y="44" fill="#0052CC" fontSize="9" fontWeight="700" letterSpacing="1.5" fontFamily="sans-serif">
            ROBOTICS & AUTOMATION
          </text>
        </svg>
      );

    case 6:
      // Faith Automation
      return (
        <svg viewBox="0 0 220 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="15" width="18" height="18" transform="rotate(45 19 24)" fill="#DC2626" />
          <rect x="24" y="15" width="14" height="14" transform="rotate(45 31 22)" fill="#0052CC" />
          <text x="48" y="30" fill="#0F172A" fontSize="16" fontWeight="900" fontFamily="sans-serif">
            FAITH
          </text>
          <text x="48" y="42" fill="#DC2626" fontSize="10" fontWeight="800" letterSpacing="1" fontFamily="sans-serif">
            AUTOMATION
          </text>
        </svg>
      );

    case 7:
      // JBM Group
      return (
        <svg viewBox="0 0 200 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="12" width="28" height="28" rx="6" fill="#F59E0B" />
          <text x="17" y="33" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="sans-serif">
            JBM
          </text>
          <text x="46" y="32" fill="#1E293B" fontSize="20" fontWeight="900" fontFamily="sans-serif">
            JBM GROUP
          </text>
        </svg>
      );

    case 8:
      // Ultra Corpotech
      return (
        <svg viewBox="0 0 230 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="25" r="14" fill="#0052CC" />
          <path d="M16 25L22 18L28 25L22 32Z" fill="#FFFFFF" />
          <text x="44" y="30" fill="#0F172A" fontSize="16" fontWeight="900" fontFamily="sans-serif">
            ULTRA
          </text>
          <text x="44" y="42" fill="#0052CC" fontSize="10" fontWeight="700" letterSpacing="1.5" fontFamily="sans-serif">
            CORPOTECH
          </text>
        </svg>
      );

    case 9:
      // JSW Motors
      return (
        <svg viewBox="0 0 200 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="32" fill="#003399" fontSize="22" fontWeight="900" fontFamily="sans-serif">
            JSW
          </text>
          <text x="65" y="32" fill="#DC2626" fontSize="18" fontWeight="800" fontFamily="sans-serif">
            MOTORS
          </text>
        </svg>
      );

    case 10:
      // Patil Automation
      return (
        <svg viewBox="0 0 220 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 15H30V25H10Z" fill="#0052CC" />
          <path d="M10 27H22V37H10Z" fill="#F59E0B" />
          <text x="38" y="30" fill="#1E293B" fontSize="16" fontWeight="900" fontFamily="sans-serif">
            PATIL
          </text>
          <text x="38" y="42" fill="#64748B" fontSize="9" fontWeight="700" letterSpacing="1" fontFamily="sans-serif">
            AUTOMATION
          </text>
        </svg>
      );

    case 11:
      // Lean Automation
      return (
        <svg viewBox="0 0 210 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="25" r="12" fill="#10B981" />
          <text x="38" y="32" fill="#0F172A" fontSize="18" fontWeight="900" fontFamily="sans-serif">
            LEAN <tspan fill="#10B981">AUTO</tspan>
          </text>
        </svg>
      );

    case 12:
      // KHK Gears
      return (
        <svg viewBox="0 0 190 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="12" width="28" height="28" fill="#DC2626" />
          <text x="16" y="32" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif">
            KHK
          </text>
          <text x="46" y="32" fill="#1E293B" fontSize="18" fontWeight="900" fontFamily="sans-serif">
            GEARS
          </text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 200 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="32" fill="#0F172A" fontSize="18" fontWeight="800" fontFamily="sans-serif">
            CLIENT LOGO
          </text>
        </svg>
      );
  }
}
