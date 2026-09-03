import { useState } from 'react';
import { whyUsContent } from '../content/whyUs';
import './WhyUsSection.css';

const CX = 200;
const CY = 200;
const R = 150;
/** Shared radius so all three labels sit at equal distance from center */
const LABEL_R = 70;

function polar(deg: number, radius = R) {
  const rad = (deg * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

const BLADES = (
  [
    {
      id: 'intel',
      start: -120,
      fill: 'rgb(139, 77, 255)',
      // Top lobe — angle of the visual bulb mass
      labelAngle: -90,
      lines: ['THREAT', 'INTEL'] as const,
    },
    {
      id: 'defense',
      start: 0,
      fill: 'rgb(91, 33, 182)',
      // Bottom-right lobe
      labelAngle: 30,
      lines: ['SECURE', 'OPS'] as const,
    },
    {
      id: 'soc',
      start: 120,
      fill: 'rgb(181, 122, 255)',
      // Bottom-left lobe
      labelAngle: 150,
      lines: ['IN-HOUSE', 'SOC'] as const,
    },
  ] as const
).map((blade) => {
  const end = blade.start + 120;
  const p0 = polar(blade.start);
  const p1 = polar(end);
  const head = polar(blade.start, R / 2);
  const tail = polar(end, R / 2);
  const sector = `M ${CX} ${CY} L ${p0.x} ${p0.y} A ${R} ${R} 0 0 1 ${p1.x} ${p1.y} Z`;
  const label = polar(blade.labelAngle, LABEL_R);

  return {
    ...blade,
    end,
    head,
    tail,
    sector,
    label,
  };
});

const ROTATION_BY_ID: Record<string, number> = {
  // Bring the active lobe to the top (-90°)
  intel: 0,
  defense: -120,
  soc: 120,
};

function WhyUsEmblem({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const rotation = ROTATION_BY_ID[activeId] ?? 0;

  return (
    <svg
      className="why-us-section__emblem"
      viewBox="0 0 400 400"
      role="img"
      aria-label="ParityBit security across in-house SOC, threat intelligence, and secure operations"
    >
      <defs>
        <radialGradient id="why-us-halo" cx="50%" cy="50%" r="50%">
          <stop offset="58%" stopColor="rgb(123, 49, 255)" stopOpacity="0" />
          <stop offset="100%" stopColor="rgb(123, 49, 255)" stopOpacity="0.55" />
        </radialGradient>
        {BLADES.map((blade) => (
          <mask
            key={blade.id}
            id={`why-us-tomoe-${blade.id}`}
            maskUnits="userSpaceOnUse"
          >
            <rect width="400" height="400" fill="black" />
            <path d={blade.sector} fill="white" />
            <circle cx={blade.head.x} cy={blade.head.y} r={R / 2} fill="white" />
            <circle cx={blade.tail.x} cy={blade.tail.y} r={R / 2} fill="black" />
          </mask>
        ))}
      </defs>

      <circle cx={CX} cy={CY} r="198" fill="url(#why-us-halo)" />
      <circle
        cx={CX}
        cy={CY}
        r="184"
        fill="none"
        stroke="rgba(123, 49, 255, 0.28)"
        strokeWidth="14"
      />
      <circle
        cx={CX}
        cy={CY}
        r="174"
        fill="none"
        stroke="rgb(176, 132, 255)"
        strokeWidth="2.5"
      />
      <circle
        cx={CX}
        cy={CY}
        r="164"
        fill="none"
        stroke="rgb(123, 49, 255)"
        strokeWidth="2"
      />
      <circle cx={CX} cy={CY} r="156" fill="rgb(5, 5, 5)" />

      <g
        className="why-us-section__rotor"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: `${CX}px ${CY}px`,
        }}
      >
        {BLADES.map((blade) => (
          <circle
            key={blade.id}
            className={`why-us-section__blade${activeId === blade.id ? ' is-active' : ''}`}
            cx={CX}
            cy={CY}
            r={R}
            fill={blade.fill}
            mask={`url(#why-us-tomoe-${blade.id})`}
            onMouseEnter={() => onSelect(blade.id)}
          />
        ))}

        {BLADES.map((blade) => (
          <g
            key={`${blade.id}-label`}
            className="why-us-section__lobe-label-wrap"
            style={{
              transform: `rotate(${-rotation}deg)`,
              transformOrigin: `${blade.label.x}px ${blade.label.y}px`,
            }}
          >
            <text
              className={`why-us-section__lobe-label${activeId === blade.id ? ' is-active' : ''}`}
              textAnchor="middle"
            >
              <tspan x={blade.label.x} y={blade.label.y - 9}>
                {blade.lines[0]}
              </tspan>
              <tspan x={blade.label.x} y={blade.label.y + 9}>
                {blade.lines[1]}
              </tspan>
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function WhyUsSection() {
  const [activeId, setActiveId] = useState(whyUsContent.items[0].id);

  return (
    <section
      id="why-us"
      className="why-us-section"
      data-framer-name="Benefit Section"
    >
      <div className="why-us-section__container">
        <div className="why-us-section__header">
          <div className="why-us-section__eyebrow">
            <img
              src="/assets/images/ibx4mTDX10Vdj4noSJ1nX5EzVc-0c9480f5.svg"
              alt=""
              aria-hidden="true"
              className="why-us-section__eyebrow-icon"
            />
            <span>{whyUsContent.eyebrow}</span>
          </div>

          <h2 className="why-us-section__title">{whyUsContent.title}</h2>
          <p className="why-us-section__intro">{whyUsContent.intro}</p>
        </div>

        <div className="why-us-section__layout">
          <div className="why-us-section__visual">
            <WhyUsEmblem activeId={activeId} onSelect={setActiveId} />
          </div>

          <div className="why-us-section__claims">
            {whyUsContent.items.map((item) => (
              <article
                key={item.id}
                className={`why-us-section__claim${activeId === item.id ? ' is-active' : ''}`}
                onMouseEnter={() => setActiveId(item.id)}
              >
                <h3 className="why-us-section__claim-title">{item.title}</h3>
                <p className="why-us-section__claim-desc">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
