import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found — ParityBit Security</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          padding: '96px 24px',
          textAlign: 'center',
          background: 'rgb(236, 238, 240)',
          color: 'rgb(17, 17, 17)',
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: '"Inter", sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgb(123, 49, 255)',
          }}
        >
          404
        </p>
        <h1
          style={{
            margin: 0,
            fontFamily: '"Inter Tight Regular", "Inter", sans-serif',
            fontSize: 'clamp(32px, 5vw, 48px)',
            lineHeight: 1.05,
            fontWeight: 400,
          }}
        >
          This page doesn&apos;t exist.
        </h1>
        <p
          style={{
            margin: 0,
            maxWidth: '420px',
            fontFamily: '"Inter", sans-serif',
            fontSize: '16px',
            lineHeight: 1.65,
            color: 'rgb(87, 87, 87)',
          }}
        >
          The route may have moved. Head back to the homepage or contact us if you need help.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 24px',
              borderRadius: '999px',
              background: 'rgb(123, 49, 255)',
              color: 'rgb(255, 255, 255)',
              fontFamily: '"Inter", sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Back to home
          </Link>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 24px',
              borderRadius: '999px',
              border: '1px solid rgb(200, 200, 200)',
              background: 'rgb(255, 255, 255)',
              color: 'rgb(17, 17, 17)',
              fontFamily: '"Inter", sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
