import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '../components/HeroSection';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { AboutSection } from '../components/AboutSection';
import { ServicesMarquee } from '../components/ServicesMarquee';
import { ProductsSection } from '../components/ProductsSection';
import { WhyUsSection } from '../components/WhyUsSection';
import { FramerFooterMenus } from '../components/FramerFooterMenus';
import { FramerFooterLegal } from '../components/FramerFooterLegal';
import { CtaSection } from '../components/CtaSection';
import { BookingCtaSection } from '../components/BookingCtaSection';
import { FaqSection } from '../components/FaqSection';
import { ResearchSection } from '../components/ResearchSection';
import { HomeServiceCard } from '../components/HomeServiceCard';
import { homeServiceCards } from '../content/homeServices';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <title>ParityBit Security: Cybersecurity that actually works.</title>
          <meta name="description" content="Intelligence-driven cybersecurity services and AI-native platforms for modern digital environments." />
          <link href="/favicon.png" rel="icon" type="image/png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="ParityBit Security: Cybersecurity that actually works." />
          <meta property="og:description" content="Intelligence-driven cybersecurity services and AI-native platforms for modern digital environments." />
          <meta property="og:image" content="https://paritybitsecurity.com/assets/images/hero-visual.png?v=3" />
          <meta property="og:url" content="https://paritybitsecurity.com/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="ParityBit Security: Cybersecurity that actually works." />
          <meta name="twitter:description" content="Intelligence-driven cybersecurity services and AI-native platforms for modern digital environments." />
          <meta name="twitter:image" content="https://paritybitsecurity.com/assets/images/hero-visual.png?v=3" />
          <link rel="canonical" href="https://paritybitsecurity.com/" />
          <meta name="robots" content="max-image-preview:large" />      </Helmet>
        {/*  Start of bodyStart  */}
        {/*  End of bodyStart  */}
        <div id="main" data-framer-hydrate-v2={"{\"routeId\":\"augiA20Il\",\"localeId\":\"default\",\"breakpoints\":[{\"hash\":\"72rtr7\",\"mediaQuery\":\"(min-width: 1380px)\"},{\"hash\":\"1bih26h\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1379.98px)\"},{\"hash\":\"n1lvbu\",\"mediaQuery\":\"(max-width: 809.98px)\"},{\"hash\":\"1ckteoo\",\"mediaQuery\":\"(max-width: 809.98px)\"},{\"hash\":\"1vvzmjz\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1379.98px)\"},{\"hash\":\"1kz64z5\",\"mediaQuery\":\"(min-width: 1380px)\"}]}"}>
          {/* $ */}
          <style data-framer-html-style="" dangerouslySetInnerHTML={{ __html: ":root body { background: var(--token-9f20ee12-4472-4d44-a80a-6b06de7d0fec, rgb(236, 238, 240)); }" }} />
          <div className="framer-PF8NH framer-KTGJj framer-1kz64z5" data-layout-template="true" style={{"minHeight": "100vh", "width": "auto"}}>
            <div className="framer-2g2nyi-container">
              {/* $ */}
              <div></div>              {/* /$ */}

            </div>            <div className="ssr-variant hidden-1ckteoo hidden-1vvzmjz">
              <header className="framer-1ypq8iu" data-border="true" data-framer-appear-id="1ypq8iu" data-framer-name="Header " style={{"opacity": "1", "transform": "none", "willChange": "transform"}}>
                <div className="framer-nk189b-container">
                  <nav className="framer-ajjfZ framer-1a90j4t framer-v-1a90j4t" data-framer-name="Large Menu 01" data-hide-scrollbars="true" style={{"backgroundColor": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96)", "maxWidth": "100%", "width": "100%", "opacity": "1"}}>
                    <div className="framer-z7wkaj" data-framer-name="Logo Wrapper" style={{"opacity": "1"}}>
                      {/* $ */}
                      <Link className="framer-155lym framer-2kjvqz" data-framer-name="Logo and Name" to="/" data-framer-page-link-current="true" style={{"opacity": "1"}}>
                        <img src="/assets/images/paritybit-logo.png" alt="ParityBit Security" width="148" height="40" style={{"display": "block", "width": "auto", "height": "40px"}} />
                      </Link>                      {/* /$ */}

                    </div>                    <div className="framer-1dkcpjc" data-framer-name="Menu &  Button Wrapper" style={{"opacity": "1"}}>
                      <div className="framer-b3jf3w" data-framer-name="Menu Wrapper" style={{"opacity": "1"}}>
                        <div className="framer-182qa0q" data-framer-name="Links" style={{"--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", "opacity": "1"}}>
                          <div className="framer-bz2kbm-container" id="undefined-bz2kbm" style={{"opacity": "1"}}>
                            <div className="framer-BzjOh framer-u0t8D framer-tpjd37 framer-v-tpjd37" data-framer-name="Closed 01" data-highlight="true" style={{"opacity": "1"}}>
                              <div className="framer-7hpmij" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none", "opacity": "1"}}>
                                <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255)))"}}>Platform</p>
                              </div>                              <div className="framer-s5zh8-container" style={{"opacity": "1"}}>
                                <div className="framer-ztmNm framer-1ad2ao4 framer-v-1ad2ao4" data-framer-name="Closed 01" data-highlight="true" tabIndex={0} style={{"opacity": "1"}}>
                                  <div className="framer-cuq98u" data-framer-name="Frame" style={{"transform": "none", "opacity": "1"}}>
                                    <div data-framer-component-type="SVG" data-framer-name="Icon" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="framer-oc8ovj" aria-hidden="true" style={{"imageRendering": "pixelated", "flexShrink": "0", "opacity": "1"}}>
                                      <div className="svgContainer" style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"}}>
                                        <svg style={{"width": "100%", "height": "100%"}}>
                                          <use href="#svg12390392361" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>                          {/* $ */}
                          <div className="framer-jgrbeo-container" style={{"opacity": "1"}}>
                            {/* $ */}
                            {/* <Link className="framer-wG3Fc framer-u0t8D framer-qsls34 framer-v-qsls34 framer-eej19x" data-framer-name="Menu Link 01" to="/case-studies" style={{"opacity": "1"}}> */}
                            <Link className="framer-wG3Fc framer-u0t8D framer-qsls34 framer-v-qsls34 framer-eej19x" data-framer-name="Menu Link 01" to="/#top" style={{"opacity": "1"}}>
                              <div className="framer-1a9srqp" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none", "opacity": "1"}}>
                                <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255)))"}}>Solutions</p>
                              </div>                              <div className="framer-1efj4tt" data-framer-name="Line" style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "opacity": "1"}}></div>
                            </Link>                            {/* /$ */}

                          </div>                          {/* /$ */}
                          {/* $ */}
                          <div className="framer-19co1ve-container" style={{"opacity": "1"}}>
                            {/* $ */}
                            {/* <Link className="framer-wG3Fc framer-u0t8D framer-qsls34 framer-v-qsls34 framer-eej19x" data-framer-name="Menu Link 01" to="/services" style={{"opacity": "1"}}> */}
                            <Link className="framer-wG3Fc framer-u0t8D framer-qsls34 framer-v-qsls34 framer-eej19x" data-framer-name="Menu Link 01" to="/#services" style={{"opacity": "1"}}>
                              <div className="framer-1a9srqp" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none", "opacity": "1"}}>
                                <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255)))"}}>Services</p>
                              </div>                              <div className="framer-1efj4tt" data-framer-name="Line" style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "opacity": "1"}}></div>
                            </Link>                            {/* /$ */}

                          </div>                          {/* /$ */}
                          {/* $ */}
                          <div className="framer-131sjn1-container" style={{"opacity": "1"}}>
                            {/* $ */}
                            {/* <Link className="framer-wG3Fc framer-u0t8D framer-qsls34 framer-v-qsls34 framer-eej19x" data-framer-name="Menu Link 01" to="/about" style={{"opacity": "1"}}> */}
                            <Link className="framer-wG3Fc framer-u0t8D framer-qsls34 framer-v-qsls34 framer-eej19x" data-framer-name="Menu Link 01" to="/#top" style={{"opacity": "1"}}>
                              <div className="framer-1a9srqp" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none", "opacity": "1"}}>
                                <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255)))"}}>Company</p>
                              </div>                              <div className="framer-1efj4tt" data-framer-name="Line" style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "opacity": "1"}}></div>
                            </Link>                            {/* /$ */}

                          </div>                          {/* /$ */}
                          <div className="framer-e9wpri-container" id="undefined-e9wpri" style={{"opacity": "1"}}>
                            <div className="framer-BzjOh framer-u0t8D framer-tpjd37 framer-v-tpjd37" data-framer-name="Closed 01" data-highlight="true" style={{"opacity": "1"}}>
                              <div className="framer-7hpmij" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none", "opacity": "1"}}>
                                <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255)))"}}>Resources</p>
                              </div>                              <div className="framer-s5zh8-container" style={{"opacity": "1"}}>
                                <div className="framer-ztmNm framer-1ad2ao4 framer-v-1ad2ao4" data-framer-name="Closed 01" data-highlight="true" tabIndex={0} style={{"opacity": "1"}}>
                                  <div className="framer-cuq98u" data-framer-name="Frame" style={{"transform": "none", "opacity": "1"}}>
                                    <div data-framer-component-type="SVG" data-framer-name="Icon" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="framer-oc8ovj" aria-hidden="true" style={{"imageRendering": "pixelated", "flexShrink": "0", "opacity": "1"}}>
                                      <div className="svgContainer" style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"}}>
                                        <svg style={{"width": "100%", "height": "100%"}}>
                                          <use href="#svg12390392361" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>                          <div className="framer-pqd2a-container" style={{"opacity": "1"}}>
                            {/* $ */}
                            <a className="framer-wG3Fc framer-u0t8D framer-qsls34 framer-v-qsls34 framer-eej19x" data-framer-name="Menu Link 01" style={{"opacity": "1"}}>
                              <div className="framer-1a9srqp" data-framer-name="Home" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none", "opacity": "1"}}>
                                <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255)))"}}>Sign in</p>
                              </div>                              <div className="framer-1efj4tt" data-framer-name="Line" style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "opacity": "1"}}></div>
                            </a>                            {/* /$ */}

                          </div>
                        </div>
                      </div>                      {/* $ */}
                      <div className="framer-12thzms-container" style={{"willChange": "transform", "opacity": "1", "transform": "none"}}>
                        {/* $ */}
                        <Link className="framer-mwUyB framer-5Yetb framer-49lrzb framer-v-o5ptat framer-jq0fxg" data-framer-name="Tertiary Button 01" data-reset="button" data-border="true" to="/#end-the-cycle" style={{"--border-bottom-width": "1px", "--border-color": "var(--token-b064c6d3-6719-4e9a-af1b-ebb80bb18fa0, rgb(228, 228, 228))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "borderRadius": "40px", "opacity": "1"}}>
                          <div className="framer-4f6r2a" data-framer-name="Title Wrapper" style={{"opacity": "1"}}>
                            <div className="framer-1nvbnf7" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                              <p className="framer-text framer-styles-preset-p6kp0d" data-styles-preset="RO4XsuvlA" dir="auto" style={{"--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>Request briefing</p>
                            </div>                            <div className="framer-1a8foqt" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                              <p className="framer-text framer-styles-preset-p6kp0d" data-styles-preset="RO4XsuvlA" dir="auto" style={{"--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>Request briefing</p>
                            </div>
                          </div>
                        </Link>                        {/* /$ */}

                      </div>                      {/* /$ */}

                    </div>
                  </nav>
                </div>
              </header>
            </div>            <style data-framer-html-style="" dangerouslySetInnerHTML={{ __html: "html body { background: var(--token-9f20ee12-4472-4d44-a80a-6b06de7d0fec, rgb(236, 238, 240)); }" }} />
            <div data-framer-root="" className="framer-zZ0aE framer-1mO5x framer-u0t8D framer-qvsax framer-5Yetb framer-KTGJj framer-ZoWwZ framer-72rtr7" style={{"minHeight": "100vh", "width": "auto", "display": "contents"}}>
              <HeroSection />
              <PartnerMarquee />
              <AboutSection />
              <section id="services" className="framer-guo2po" data-framer-name="Service Section">
                <div className="framer-yqfmw" data-framer-name="Container">
                  <div className="framer-12e1tu4" data-framer-name="Content">
                    <div className="framer-1pqd42c" data-framer-name="Title & Card Wrapper">
                      <div className="framer-xwmm96" data-framer-name="Title Wrapper">
                        <div className="ssr-variant">
                          <div className="framer-1dusofv-container" style={{"willChange": "transform", "opacity": "1", "transform": "none"}}>
                            <div className="framer-anh3M framer-5Yetb framer-2e2wsz framer-v-1rboqzm" data-framer-name="Section Title 02" style={{"opacity": "1"}}>
                              <div className="framer-1tdhzkh" data-framer-name="Icon" style={{"opacity": "1"}}>
                                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                  <img decoding="auto" loading="lazy" width="20" height="20" src="/assets/images/WfbxSQyOjo3fWmtKp5iBzgLjYro-baa859fd.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                </div>
                              </div>                              <div className="framer-15xtpsx" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                                <p className="framer-text framer-styles-preset-p6kp0d" data-styles-preset="RO4XsuvlA" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255)))"}}>Our services</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>                      <div className="services-section__title-row">
                        <div className="ssr-variant">
                          <div className="framer-npjpbi" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{"transform": "none"}}>
                            <h2 className="framer-text framer-styles-preset-1e5fy5g services-section__heading" data-styles-preset="Asl4I7beJ" dir="auto" style={{"--framer-text-alignment": "start", "--framer-text-color": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))"}}>
                              End-to-end security. One <span className="services-section__heading-accent">partner.</span>
                            </h2>
                          </div>
                        </div>
                      </div>                      <div className="framer-kn8zpw" data-framer-name="Card Wrapper 01">
                        <div className="framer-1e88ao">
                          <HomeServiceCard
                            card={homeServiceCards.find((card) => card.category === 'Governance, Risk & Compliance')!}
                            wrapperClassName="framer-loezzw"
                            containerClassName="framer-1meaboc-container"
                          />
                          <HomeServiceCard
                            card={homeServiceCards.find((card) => card.category === 'AI')!}
                            wrapperClassName="framer-loezzw"
                            containerClassName="framer-1meaboc-container"
                          />
                        </div>
                      </div>
                    </div>                    <div className="framer-1dvwtna" data-framer-name="Button & Card Wrapper">
                      <div className="framer-p0u3x6" data-framer-name="Card Wrapper 02">
                        <div className="framer-s7adb0">
                          <HomeServiceCard
                            card={homeServiceCards.find((card) => card.category === 'Offensive')!}
                            wrapperClassName="framer-afkh84"
                            containerClassName="framer-1hoqsjs-container"
                          />
                          <HomeServiceCard
                            card={homeServiceCards.find((card) => card.category === 'Defensive')!}
                            wrapperClassName="framer-afkh84"
                            containerClassName="framer-1hoqsjs-container"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="services-section__intro">
                      <p>Offensive testing, defensive operations, and governance, delivered by operators with the credentials to prove it. Pick a capability or engage the full stack.</p>
                      <Link className="services-section__cta" to="/#end-the-cycle">Talk to our sales team</Link>
                    </div>
                  </div>                  <div className="framer-7kg99k hidden-1bih26h hidden-n1lvbu" data-framer-name="Line"></div>                  <div className="framer-a9hy1o hidden-1bih26h hidden-n1lvbu" data-framer-name="Line"></div>
                </div>                <div className="ssr-variant">
                  <div className="framer-1o930g" style={{"transform": "translateX(-50%)"}}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                      <img decoding="auto" loading="lazy" width="1422" height="61" sizes="(min-width: 1380px) calc(100vw * 0.9797), (max-width: 809.98px) calc(100vw * 0.9795), (min-width: 810px) and (max-width: 1379.98px) calc(100vw * 0.9802)" srcSet="/assets/images/q7JkgQFdDjvXundaJxQ48iY3L0-0d22e084.svg 1422w" src="/assets/images/q7JkgQFdDjvXundaJxQ48iY3L0-0d22e084.svg" alt="Image" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                    </div>
                  </div>
                </div>
              </section>
              <ServicesMarquee />
              <ProductsSection />
              <WhyUsSection />
              <ResearchSection />              <FaqSection />
            </div>            <div id="overlay"></div>            <div className="framer-n9p53u"></div>            <BookingCtaSection />            <CtaSection />            <footer className="framer-m5pop4" data-framer-name="Footer">
              <div className="ssr-variant">
                <div className="framer-1nt6my8-container">
                  <footer className="framer-s1Cqe framer-ZoWwZ framer-5Yetb framer-Vg09K framer-sage8 framer-6efsvp framer-v-6efsvp" data-framer-name="Desktop" style={{"backgroundColor": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "width": "100%", "opacity": "1"}}>
                    <div className="framer-1fikf2s" data-framer-name="Container" style={{"opacity": "1"}}>
                      <div className="framer-1js4h6p" data-framer-name="Content" style={{"opacity": "1"}}>
                        <div className="framer-1r0y6a7" data-framer-name="Logo & Menu Wrapper" style={{"opacity": "1"}}>
                          <div className="framer-13t3nes" data-framer-name="Logo & Form Wrapper" style={{"willChange": "transform", "opacity": "0.992355", "transform": "translateY(0.382232px)"}}>
                            <div className="framer-q55yn3" data-framer-name="Logo Wrapper" style={{"opacity": "1"}}>
                              {/* $ */}
                              <Link as="a" className="framer-1m0zs24 framer-1uogfee" data-framer-name="Logo" to="/" data-framer-page-link-current="true" style={{"opacity": "1"}}>
                                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                  <img decoding="auto" width="256" height="94" src="/assets/images/paritybit-logo.png" alt="ParityBit Security" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                </div>
                              </Link>                              {/* /$ */}
                              <div className="framer-16ujpv9" data-framer-name="Short Description" data-framer-component-type="RichTextContainer" style={{"--extracted-1w1cjl5": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                                <h6 className="framer-text framer-styles-preset-1hhc6na" data-styles-preset="psLHE4vrw" dir="auto" style={{"--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-1w1cjl5, var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255)))"}}>ParityBit Security</h6>
                              </div>
                              <div className="framer-footer-tagline" data-framer-component-type="RichTextContainer" style={{"transform": "none", "opacity": "1"}}>
                                <p className="framer-text framer-styles-preset-zsangm" dir="auto" style={{"--framer-text-alignment": "start", "--framer-text-color": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))"}}>Cybersecurity that actually works. Evidence-first tooling and services for teams that need the signal, not the noise.</p>
                              </div>
                              <div className="framer-footer-contact">
                                <a href="tel:+12049637230">+1 (204) 963-7230</a>
                                <a href="mailto:contact@paritybitsecurity.com">contact@paritybitsecurity.com</a>
                                <span>Winnipeg, Canada</span>
                                <span className="framer-footer-soc">SOCs live · 24/7</span>
                              </div>
                            </div>
                          </div>                          <FramerFooterMenus />
                        </div>                        <div className="framer-oso9cw" data-framer-name="Icon & Text" style={{"opacity": "1"}}>
                          <div className="framer-6k5ypp" data-framer-name="Icon Werapper" style={{"opacity": "1"}}>
                            <div className="framer-1m73sh4-container" style={{"opacity": "1"}}>
                              {/* $ */}
                              <a className="framer-MKdOM framer-b3m557 framer-v-p752po framer-ywd9le" data-framer-name="Social Icon 03" href="https://www.facebook.com/" target="_blank" style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderRadius": "100px", "opacity": "1"}}>
                                <div className="framer-1d9s3us" data-framer-name="Icon" style={{"transform": "translateX(-50%)", "opacity": "1"}}>
                                  <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                    <img decoding="auto" width="22" height="22" src="/assets/images/SV3GS7t3slFCAxes4rqtAVgKePA-a65af3ce.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                  </div>
                                </div>                                <div className="framer-bosemm" data-framer-name="Icon" style={{"opacity": "1"}}>
                                  <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                    <img decoding="auto" width="22" height="22" src="/assets/images/SV3GS7t3slFCAxes4rqtAVgKePA-a65af3ce.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                  </div>
                                </div>
                              </a>                              {/* /$ */}

                            </div>                            <div className="framer-zn6cc1-container" style={{"opacity": "1"}}>
                              {/* $ */}
                              <a className="framer-MKdOM framer-b3m557 framer-v-p752po framer-ywd9le" data-framer-name="Social Icon 03" href="https://x.com/" target="_blank" style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderRadius": "100px", "opacity": "1"}}>
                                <div className="framer-1d9s3us" data-framer-name="Icon" style={{"transform": "translateX(-50%)", "opacity": "1"}}>
                                  <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                    <img decoding="auto" width="15" height="15" src="/assets/images/33rDQXnqeELgyzGqFx8c83lHke4-51e6117a.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                  </div>
                                </div>                                <div className="framer-bosemm" data-framer-name="Icon" style={{"opacity": "1"}}>
                                  <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                    <img decoding="auto" width="15" height="15" src="/assets/images/33rDQXnqeELgyzGqFx8c83lHke4-51e6117a.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                  </div>
                                </div>
                              </a>                              {/* /$ */}

                            </div>                            <div className="framer-8fdgsf-container" style={{"opacity": "1"}}>
                              {/* $ */}
                              <a className="framer-MKdOM framer-b3m557 framer-v-p752po framer-ywd9le" data-framer-name="Social Icon 03" href="https://www.linkedin.com/company/paritybitsecurity/" target="_blank" style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderRadius": "100px", "opacity": "1"}}>
                                <div className="framer-1d9s3us" data-framer-name="Icon" style={{"transform": "translateX(-50%)", "opacity": "1"}}>
                                  <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                    <img decoding="auto" width="15" height="15" src="/assets/images/qB5792DCcdXcm8D6OLNC7qMYFE-a3a802ff.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                  </div>
                                </div>                                <div className="framer-bosemm" data-framer-name="Icon" style={{"opacity": "1"}}>
                                  <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                    <img decoding="auto" width="15" height="15" src="/assets/images/qB5792DCcdXcm8D6OLNC7qMYFE-a3a802ff.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                  </div>
                                </div>
                              </a>                              {/* /$ */}

                            </div>                            <div className="framer-11zhyf5-container" style={{"opacity": "1"}}>
                              {/* $ */}
                              <a className="framer-MKdOM framer-b3m557 framer-v-p752po framer-ywd9le" data-framer-name="Social Icon 03" href="https://www.youtube.com/" target="_blank" style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderRadius": "100px", "opacity": "1"}}>
                                <div className="framer-1d9s3us" data-framer-name="Icon" style={{"transform": "translateX(-50%)", "opacity": "1"}}>
                                  <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                    <img decoding="auto" width="21" height="21" src="/assets/images/xCMwW363AKtSqExMnUWduaSHA-9a7731f9.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                  </div>
                                </div>                                <div className="framer-bosemm" data-framer-name="Icon" style={{"opacity": "1"}}>
                                  <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                    <img decoding="auto" width="21" height="21" src="/assets/images/xCMwW363AKtSqExMnUWduaSHA-9a7731f9.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                  </div>
                                </div>
                              </a>                              {/* /$ */}

                            </div>
                          </div>                          <FramerFooterLegal />
                        </div>                        <div className="framer-fvljym" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-eb3af59f-a2a6-4824-b5b4-1af0cddf1278, rgb(63, 63, 63))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "willChange": "transform", "opacity": "0.669269", "transform": "scale(0.503903)"}}>
                          <p className="framer-text framer-styles-preset-uzpa6t" data-styles-preset="UCHYDyleO" dir="auto" style={{"--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-eb3af59f-a2a6-4824-b5b4-1af0cddf1278, rgb(63, 63, 63)))"}}>parityBit</p>
                        </div>                        <div className="framer-1musm24" data-framer-name="Line" style={{"backgroundColor": "var(--token-53c1b7aa-0ef0-485a-be1e-f9ccb59dccc0, rgb(65, 65, 65))", "opacity": "1"}}></div>
                      </div>                      <div className="framer-1sfi2p3" data-framer-name="Line" style={{"backgroundColor": "var(--token-f8bb4eca-2fd3-4dd3-a9fc-f2d7e3a06680, rgb(37, 37, 37))", "opacity": "1"}}></div>                      <div className="framer-ux73kz" data-framer-name="Line" style={{"backgroundColor": "var(--token-f8bb4eca-2fd3-4dd3-a9fc-f2d7e3a06680, rgb(37, 37, 37))", "opacity": "1"}}></div>
                    </div>                    <div className="framer-1j9o3qj" style={{"transform": "translateX(-50%)", "opacity": "1"}}>
                      <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                        <img decoding="auto" loading="lazy" width="1300" height="61" sizes="(min-width: 1380px) 1300px, (max-width: 809.98px) calc(max(min(100vw, 1380px), 1px) * 0.9), (min-width: 810px) and (max-width: 1379.98px) calc(max(min(100vw, 1380px), 1px) * 0.9198)" srcSet="/assets/images/b8mulzOlrN7PtGqORoizmta3Q-425ce3c5.svg 1300w" src="/assets/images/b8mulzOlrN7PtGqORoizmta3Q-425ce3c5.svg" alt="Image" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"}} />
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </footer>
          </div>

        </div>
    </>
  );
};

export default Home;
