import React from 'react';

// Custom SVG diagram — energy + revenue loop.
// Monochrome ink linework + solar-500 accent on the flow.
// Strokes use currentColor so the diagram inherits parent text color
// (works in both light and dark modes).
export const EnergyFlow: React.FC = () => {
  return (
    <figure
      className="w-full max-w-5xl mx-auto text-ink-900 dark:text-paper"
      aria-label="Schéma du flux énergétique et financier SoliBox"
    >
      <svg
        viewBox="0 0 900 360"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        {/* Background grid (very subtle) */}
        <defs>
          <pattern id="flow-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.06" />
          </pattern>
          <marker
            id="arrow-ink"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
          <marker
            id="arrow-solar"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#FF9900" />
          </marker>
        </defs>

        <rect width="900" height="360" fill="url(#flow-grid)" />

        {/* === Top row: production line === */}

        {/* Sun (left) */}
        <g transform="translate(80, 110)">
          <circle cx="0" cy="0" r="22" fill="none" stroke="currentColor" strokeWidth="1.4" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1={Math.cos((deg * Math.PI) / 180) * 30}
              y1={Math.sin((deg * Math.PI) / 180) * 30}
              x2={Math.cos((deg * Math.PI) / 180) * 38}
              y2={Math.sin((deg * Math.PI) / 180) * 38}
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          ))}
          <text x="0" y="65" textAnchor="middle" fontSize="11" fontFamily="Montserrat, sans-serif" fill="currentColor">
            Soleil
          </text>
        </g>

        {/* Solar panel */}
        <g transform="translate(260, 110)">
          <rect x="-40" y="-26" width="80" height="52" fill="none" stroke="currentColor" strokeWidth="1.4" />
          {[-20, 0, 20].map((x) => (
            <line key={x} x1={x} y1={-26} x2={x} y2={26} stroke="currentColor" strokeWidth="0.6" />
          ))}
          {[-13, 0, 13].map((y) => (
            <line key={y} x1={-40} y1={y} x2={40} y2={y} stroke="currentColor" strokeWidth="0.6" />
          ))}
          <text x="0" y="50" textAnchor="middle" fontSize="11" fontFamily="Montserrat, sans-serif" fill="currentColor">
            Panneau (votre toit)
          </text>
        </g>

        {/* SoliBox device (center) */}
        <g transform="translate(450, 110)">
          {/* Outer frame */}
          <rect x="-46" y="-36" width="92" height="72" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
          {/* Inner screen line */}
          <line x1="-32" y1="-18" x2="32" y2="-18" stroke="currentColor" strokeWidth="0.6" />
          <line x1="-32" y1="-10" x2="14" y2="-10" stroke="currentColor" strokeWidth="0.6" />
          {/* Pulsing LED — solar */}
          <circle cx="30" cy="-24" r="3" fill="#FF9900">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
          </circle>
          {/* Label inside */}
          <text x="0" y="20" textAnchor="middle" fontSize="11" fontFamily="Glacial Indifference, Montserrat, sans-serif" fontWeight="600" fill="currentColor">
            SoliBox
          </text>
          {/* Caption below */}
          <text x="0" y="60" textAnchor="middle" fontSize="11" fontFamily="Montserrat, sans-serif" fill="currentColor">
            Boîtier de redistribution
          </text>
        </g>

        {/* Houses row (right) — 3 voisins */}
        <g transform="translate(720, 110)">
          {[-50, 0, 50].map((x, i) => (
            <g key={i} transform={`translate(${x}, 0)`}>
              <path
                d="M -14,8 L 0,-12 L 14,8 L 14,22 L -14,22 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <rect x="-4" y="10" width="8" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
            </g>
          ))}
          <text x="0" y="50" textAnchor="middle" fontSize="11" fontFamily="Montserrat, sans-serif" fill="currentColor">
            Foyers voisins inscrits
          </text>
        </g>

        {/* === Flow lines (top: energy, solar accent, animated dash) === */}

        {/* Sun → Panel */}
        <line
          x1="125"
          y1="110"
          x2="215"
          y2="110"
          stroke="#FF9900"
          strokeWidth="1.6"
          strokeDasharray="4 4"
          markerEnd="url(#arrow-solar)"
        >
          <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.9s" repeatCount="indefinite" />
        </line>

        {/* Panel → SoliBox */}
        <line
          x1="305"
          y1="110"
          x2="400"
          y2="110"
          stroke="#FF9900"
          strokeWidth="1.6"
          strokeDasharray="4 4"
          markerEnd="url(#arrow-solar)"
        >
          <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.9s" repeatCount="indefinite" />
        </line>

        {/* SoliBox → Voisins */}
        <line
          x1="500"
          y1="110"
          x2="660"
          y2="110"
          stroke="#FF9900"
          strokeWidth="1.6"
          strokeDasharray="4 4"
          markerEnd="url(#arrow-solar)"
        >
          <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.9s" repeatCount="indefinite" />
        </line>

        {/* Eyebrow labels above each flow */}
        <text x="170" y="92" textAnchor="middle" fontSize="9" fontFamily="Montserrat, sans-serif" fontWeight="500" letterSpacing="2" fill="currentColor" opacity="0.6">
          ÉNERGIE
        </text>
        <text x="352" y="92" textAnchor="middle" fontSize="9" fontFamily="Montserrat, sans-serif" fontWeight="500" letterSpacing="2" fill="currentColor" opacity="0.6">
          kWh PRODUITS
        </text>
        <text x="580" y="92" textAnchor="middle" fontSize="9" fontFamily="Montserrat, sans-serif" fontWeight="500" letterSpacing="2" fill="currentColor" opacity="0.6">
          SURPLUS REDISTRIBUÉ
        </text>

        {/* === Return loop: revenue (bottom, ink color, going right→left, broken in two so label sits cleanly) === */}

        {/* From houses down and left, stopping before the label */}
        <path
          d="M 720 195 L 720 250 L 470 250"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        {/* From after the label, continuing left and up to producer */}
        <path
          d="M 330 250 L 80 250 L 80 195"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          markerEnd="url(#arrow-ink)"
        />

        {/* Label centered between the two segments */}
        <text x="400" y="255" textAnchor="middle" fontSize="13" fontFamily="Glacial Indifference, Montserrat, sans-serif" fontWeight="700" fill="currentColor">
          150k - 500k GNF / mois
        </text>

        {/* Small eyebrow label on return loop */}
        <text x="400" y="280" textAnchor="middle" fontSize="9" fontFamily="Montserrat, sans-serif" fontWeight="500" letterSpacing="2" fill="currentColor" opacity="0.6">
          REVENU MENSUEL VERSÉ AU PRODUCTEUR
        </text>
      </svg>

      <figcaption className="mt-8 text-center text-xs uppercase tracking-eyebrow text-ink-500 dark:text-ink-400">
        Le flux énergétique et financier du pilote SoliBox
      </figcaption>
    </figure>
  );
};
