import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { researchContent } from '../content/research';
import './ResearchSection.css';

function hash(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function ParticleCloud() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const particles = Array.from({ length: 560 }, (_, i) => {
      const theta = hash(i + 1) * Math.PI * 2;
      const phi = Math.acos(2 * hash(i + 41) - 1);
      const radius = 0.38 + hash(i + 17) * 0.62;
      return {
        theta,
        phi,
        radius,
        size: 0.55 + hash(i + 9) * 2.2,
        tint: hash(i + 23),
      };
    });

    let frame = 0;
    let raf = 0;
    let visible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.1 },
    );
    observer.observe(canvas);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const cx = width * 0.5;
      const cy = height * 0.5;
      const scale = Math.min(width, height) * 0.46;
      const rotY = media.matches ? 0.4 : frame * 0.004;
      const rotX = 0.35;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        let x = particle.radius * Math.sin(particle.phi) * Math.cos(particle.theta);
        let y = particle.radius * Math.cos(particle.phi);
        let z = particle.radius * Math.sin(particle.phi) * Math.sin(particle.theta);

        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const zx = z * cosY - x * sinY;
        x = z * sinY + x * cosY;
        z = zx;

        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const zy = y * cosX - z * sinX;
        z = y * sinX + z * cosX;
        y = zy;

        const depth = (z + 1.2) / 2.2;
        const px = cx + x * scale;
        const py = cy + y * scale;
        const alpha = 0.18 + depth * 0.82;
        const purple = particle.tint > 0.72;

        ctx.beginPath();
        ctx.arc(px, py, particle.size * (0.45 + depth), 0, Math.PI * 2);
        ctx.fillStyle = purple
          ? `rgba(176, 132, 255, ${alpha})`
          : `rgba(236, 238, 240, ${alpha})`;
        ctx.fill();
      }

      if (!media.matches && visible) {
        frame += 1;
      }
      raf = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="research-section__cloud" aria-hidden="true" />;
}

export function ResearchSection() {
  return (
    <section id="research" className="research-section" data-framer-name="Blog Section">
      <div className="research-section__container">
        <div className="research-section__header">
          <h2 className="research-section__title">{researchContent.title}</h2>
          <Link className="research-section__cta" to={researchContent.ctaHref}>
            {researchContent.ctaLabel}
          </Link>
        </div>

        <div className="research-section__columns">
          {researchContent.columns.map((column) => (
            <Link key={column.title} className="research-section__column" to={column.href}>
              <h3>{column.title}</h3>
              <p>
                <span className="research-section__arrow" aria-hidden="true">
                  ↳
                </span>
                {column.body}
              </p>
            </Link>
          ))}
        </div>

        <div className="research-section__stage">
          <div className="research-section__feed">
            <p className="research-section__rail-label">Sources</p>
            <div className="research-section__sources">
              {researchContent.sources.map((source) => (
                <div key={source.name} className="research-section__source">
                  <span className="research-section__source-name">{source.name}</span>
                  <span className="research-section__source-hint">{source.hint}</span>
                </div>
              ))}
            </div>
            <svg
              className="research-section__wires"
              viewBox="0 0 120 280"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {Array.from({ length: 8 }, (_, i) => {
                const y = 18 + i * 35;
                return (
                  <path
                    key={`wire-${i}`}
                    d={`M0 ${y} C 52 ${y}, 82 140, 120 140`}
                    fill="none"
                    stroke="rgba(176, 132, 255, 0.42)"
                    strokeWidth="1.15"
                  />
                );
              })}
            </svg>
          </div>

          <div className="research-section__core">
            <ParticleCloud />
            <p className="research-section__flow">{researchContent.flowLabel}</p>
          </div>

          <div className="research-section__exit">
            <svg viewBox="0 0 72 24" className="research-section__exit-line" aria-hidden="true">
              <path
                d="M0 12 H72"
                fill="none"
                stroke="rgba(176, 132, 255, 0.5)"
                strokeWidth="1.2"
              />
            </svg>
            <Link className="research-section__output" to={researchContent.ctaHref}>
              {researchContent.outputLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
