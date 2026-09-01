import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

type FramerFaqSectionProps = {
  /** Use homepage Framer breakpoint classes (default: contact page breakpoints). */
  variant?: 'contact' | 'home';
};

const contactFaq = (
<section className="framer-1hlr4u6" data-framer-name="FAQ Section">
                <div className="framer-196l935" data-framer-name="Container">
                  <div className="framer-8zqcpc" data-framer-name="Content">
                    <div className="framer-1es21h5" data-framer-name="Content Wrapper">
                      <div className="framer-1rlx2wk" data-framer-name="Title Wrapper">
                        <div className="framer-2h8y19-container">
                          <div className="framer-anh3M framer-5Yetb framer-2e2wsz framer-v-2e2wsz" data-framer-name="Section Title 01" style={{"opacity": "1"}}>
                            <div className="framer-1tdhzkh" data-framer-name="Icon" style={{"opacity": "1"}}>
                              <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                <img decoding="auto" width="20" height="20" src="/assets/images/ibx4mTDX10Vdj4noSJ1nX5EzVc-0c9480f5.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                              </div>
                            </div>                            <div className="framer-15xtpsx" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                              <p className="framer-text framer-styles-preset-p6kp0d" data-styles-preset="RO4XsuvlA" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>Frequently asked question</p>
                            </div>
                          </div>
                        </div>                        <div className="ssr-variant hidden-oy2nxd hidden-hypaot">
                          <div className="framer-cbhctb" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{"transform": "none"}}>
                            <h2 className="framer-text framer-styles-preset-1e5fy5g" data-styles-preset="Asl4I7beJ" dir="auto" style={{"--framer-text-alignment": "start", "--framer-text-color": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))"}}>
                              <span style={{"display": "inline-block", "opacity": "0.001", "filter": "blur(10px)", "transform": "translateY(0.053712px)", "willChange": "transform"}}>Everything</span>                               <span style={{"display": "inline-block", "opacity": "0.001", "filter": "blur(10px)", "transform": "translateY(0.0761153px)", "willChange": "transform"}}>you</span>                               <span style={{"display": "inline-block", "opacity": "0.001", "filter": "blur(10px)", "transform": "translateY(0.107863px)", "willChange": "transform"}}>need</span>                               <span style={{"display": "inline-block", "opacity": "0.001", "filter": "blur(10px)", "transform": "translateY(0.152853px)", "willChange": "transform"}}>to</span>                               <span style={{"display": "inline-block", "opacity": "0.001", "filter": "blur(10px)", "transform": "translateY(0.216607px)", "willChange": "transform"}}>know</span>
                            </h2>
                          </div>
                        </div>
                      </div>                      <div className="ssr-variant hidden-oy2nxd hidden-hypaot">
                        <div className="framer-9xsvb5" data-framer-name="Analyst CTA Card" style={{"willChange": "transform", "opacity": "0.260205", "transform": "translateX(-175.704px) scale(0.630102) rotateY(-73.9805deg)"}}>
                          <div className="framer-11iwsv4" data-framer-name="Content Wrapper">
                            <div className="framer-mwo7bw" data-framer-name="Number Wrapper">
                              <div className="framer-1rv3it0" data-framer-component-type="RichTextContainer" style={{"transform": "none"}}>
                                <p className="framer-text framer-styles-preset-p6kp0d" data-styles-preset="RO4XsuvlA" dir="auto" style={{"--framer-text-color": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))"}}>Still have questions?</p>
                              </div>                              <div className="framer-1r7yig5" data-framer-name="Short Description" data-framer-component-type="RichTextContainer" style={{"transform": "none"}}>
                                <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))"}}>Talk to one of our analysts. We&apos;ll respond same business day, or right now if it&apos;s urgent.</p>
                              </div>                              <div className="faq-analyst-cta__button-wrap">
                                <Link className="faq-analyst-cta__button" to="/contact">talk to an analyst</Link>
                              </div>                              <div className="framer-1r7yig5" data-framer-component-type="RichTextContainer" style={{"transform": "none"}}>
                                <p className="framer-text framer-styles-preset-p6kp0d" data-styles-preset="RO4XsuvlA" dir="auto" style={{"--framer-text-color": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))"}}>
                                  <a className="framer-text framer-styles-preset-18s8ptz" data-styles-preset="Q9ZJ0UWkE" href="tel:+12049637230">+1 (204) 963-7230</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>                    <div className="ssr-variant hidden-oy2nxd hidden-hypaot">
                      <div className="framer-1gka0wi-container">
                        <div className="framer-V8VOQ framer-7kh9se framer-v-7kh9se" data-framer-name="Desktop FAQ Tab 01" style={{"maxWidth": "100%", "width": "100%", "opacity": "1"}}>
                          <div className="framer-1vylbne-container" style={{"willChange": "transform", "opacity": "0.694188", "transform": "scale(0.541281)"}}>
                            <div className="framer-e1zbE framer-ZoWwZ framer-u0t8D framer-sjyj3i framer-v-ew3hrd" data-framer-name="Desktop FAQ Card Open" data-highlight="true" tabIndex={0} style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "width": "100%", "borderRadius": "5px", "opacity": "1"}}>
                              <div className="framer-xqtzh8" data-framer-name="Question & Ansewr" style={{"opacity": "1"}}>
                                <div className="framer-17xgowl" data-framer-name="Question" data-framer-component-type="RichTextContainer" style={{"--extracted-1w1cjl5": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                                  <h6 className="framer-text framer-styles-preset-1hhc6na" data-styles-preset="psLHE4vrw" dir="auto" style={{"--framer-text-color": "var(--extracted-1w1cjl5, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>What cybersecurity services do you provide?</h6>
                                </div>                                <div className="framer-1flkla8" data-framer-name="Ansewr" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "opacity": "1", "transform": "none"}}>
                                  <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87)))"}}>We provide comprehensive cybersecurity solutions protecting networks, systems, cloud infrastructure, and sensitive business data from threats.</p>
                                </div>
                              </div>                              <div className="framer-rspfy9" data-framer-name="Icon" style={{"borderRadius": "100px", "opacity": "1"}}>
                                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                  <img decoding="auto" width="36" height="36" src="/assets/images/RPca8JBkiSQrVzBNQepQCHTQRW0-9ca0d317.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                </div>
                              </div>
                            </div>
                          </div>                          <div className="framer-16mz0z6-container" style={{"willChange": "transform", "opacity": "0.694089", "transform": "scale(0.541133)"}}>
                            <div className="framer-e1zbE framer-ZoWwZ framer-u0t8D framer-sjyj3i framer-v-sjyj3i" data-framer-name="Desktop FAQ Card Close" data-highlight="true" tabIndex={0} style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "width": "100%", "borderRadius": "5px", "opacity": "1"}}>
                              <div className="framer-xqtzh8" data-framer-name="Question & Ansewr" style={{"opacity": "1"}}>
                                <div className="framer-17xgowl" data-framer-name="Question" data-framer-component-type="RichTextContainer" style={{"--extracted-1w1cjl5": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                                  <h6 className="framer-text framer-styles-preset-1hhc6na" data-styles-preset="psLHE4vrw" dir="auto" style={{"--framer-text-color": "var(--extracted-1w1cjl5, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>How do you help prevent cyber threats?</h6>
                                </div>                                <div className="framer-1flkla8" data-framer-name="Ansewr" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "opacity": "0", "transform": "none"}}>
                                  <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87)))"}}>We use AI-powered monitoring, threat detection, proactive defense, and rapid response to prevent cyberattacks effectively.</p>
                                </div>
                              </div>                              <div className="framer-rspfy9" data-framer-name="Icon" style={{"borderRadius": "100px", "opacity": "1"}}>
                                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                  <img decoding="auto" width="36" height="36" src="/assets/images/TTfJZYnUSIzyEhM38vQWo1UKkU-6fe0cca6.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                </div>
                              </div>
                            </div>
                          </div>                          <div className="framer-1fsri0f-container" style={{"willChange": "transform", "opacity": "0.694089", "transform": "scale(0.541133)"}}>
                            <div className="framer-e1zbE framer-ZoWwZ framer-u0t8D framer-sjyj3i framer-v-sjyj3i" data-framer-name="Desktop FAQ Card Close" data-highlight="true" tabIndex={0} style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "width": "100%", "borderRadius": "5px", "opacity": "1"}}>
                              <div className="framer-xqtzh8" data-framer-name="Question & Ansewr" style={{"opacity": "1"}}>
                                <div className="framer-17xgowl" data-framer-name="Question" data-framer-component-type="RichTextContainer" style={{"--extracted-1w1cjl5": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                                  <h6 className="framer-text framer-styles-preset-1hhc6na" data-styles-preset="psLHE4vrw" dir="auto" style={{"--framer-text-color": "var(--extracted-1w1cjl5, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>Can your solutions support large organizations?</h6>
                                </div>                                <div className="framer-1flkla8" data-framer-name="Ansewr" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "opacity": "0", "transform": "none"}}>
                                  <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87)))"}}>We offer threat monitoring, risk assessment, incident response, and security analytics to help organizations stay protected.</p>
                                </div>
                              </div>                              <div className="framer-rspfy9" data-framer-name="Icon" style={{"borderRadius": "100px", "opacity": "1"}}>
                                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                  <img decoding="auto" width="36" height="36" src="/assets/images/TTfJZYnUSIzyEhM38vQWo1UKkU-6fe0cca6.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                </div>
                              </div>
                            </div>
                          </div>                          <div className="framer-11hgx1m-container" style={{"willChange": "transform", "opacity": "0.694089", "transform": "scale(0.541133)"}}>
                            <div className="framer-e1zbE framer-ZoWwZ framer-u0t8D framer-sjyj3i framer-v-sjyj3i" data-framer-name="Desktop FAQ Card Close" data-highlight="true" tabIndex={0} style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "width": "100%", "borderRadius": "5px", "opacity": "1"}}>
                              <div className="framer-xqtzh8" data-framer-name="Question & Ansewr" style={{"opacity": "1"}}>
                                <div className="framer-17xgowl" data-framer-name="Question" data-framer-component-type="RichTextContainer" style={{"--extracted-1w1cjl5": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                                  <h6 className="framer-text framer-styles-preset-1hhc6na" data-styles-preset="psLHE4vrw" dir="auto" style={{"--framer-text-color": "var(--extracted-1w1cjl5, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>Do you provide 24/7 security monitoring?</h6>
                                </div>                                <div className="framer-1flkla8" data-framer-name="Ansewr" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "opacity": "0", "transform": "none"}}>
                                  <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87)))"}}>Yes, our experts provide 24/7 security monitoring, detecting threats instantly and responding before serious damage occurs.</p>
                                </div>
                              </div>                              <div className="framer-rspfy9" data-framer-name="Icon" style={{"borderRadius": "100px", "opacity": "1"}}>
                                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                  <img decoding="auto" width="36" height="36" src="/assets/images/TTfJZYnUSIzyEhM38vQWo1UKkU-6fe0cca6.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                </div>
                              </div>
                            </div>
                          </div>                          <div className="framer-136gg6d-container" style={{"willChange": "transform", "opacity": "0.694089", "transform": "scale(0.541133)"}}>
                            <div className="framer-e1zbE framer-ZoWwZ framer-u0t8D framer-sjyj3i framer-v-sjyj3i" data-framer-name="Desktop FAQ Card Close" data-highlight="true" tabIndex={0} style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "width": "100%", "borderRadius": "5px", "opacity": "1"}}>
                              <div className="framer-xqtzh8" data-framer-name="Question & Ansewr" style={{"opacity": "1"}}>
                                <div className="framer-17xgowl" data-framer-name="Question" data-framer-component-type="RichTextContainer" style={{"--extracted-1w1cjl5": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                                  <h6 className="framer-text framer-styles-preset-1hhc6na" data-styles-preset="psLHE4vrw" dir="auto" style={{"--framer-text-color": "var(--extracted-1w1cjl5, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>How quickly can you respond to incidents?</h6>
                                </div>                                <div className="framer-1flkla8" data-framer-name="Ansewr" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "opacity": "0", "transform": "none"}}>
                                  <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87)))"}}>Our incident response team reacts immediately, containing threats quickly to minimize downtime, damage, and business disruption.</p>
                                </div>
                              </div>                              <div className="framer-rspfy9" data-framer-name="Icon" style={{"borderRadius": "100px", "opacity": "1"}}>
                                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                  <img decoding="auto" width="36" height="36" src="/assets/images/TTfJZYnUSIzyEhM38vQWo1UKkU-6fe0cca6.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                </div>
                              </div>
                            </div>
                          </div>                          <div className="framer-sfg40j-container" style={{"willChange": "transform", "opacity": "0.693632", "transform": "scale(0.540447)"}}>
                            <div className="framer-e1zbE framer-ZoWwZ framer-u0t8D framer-sjyj3i framer-v-sjyj3i" data-framer-name="Desktop FAQ Card Close" data-highlight="true" tabIndex={0} style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "width": "100%", "borderRadius": "5px", "opacity": "1"}}>
                              <div className="framer-xqtzh8" data-framer-name="Question & Ansewr" style={{"opacity": "1"}}>
                                <div className="framer-17xgowl" data-framer-name="Question" data-framer-component-type="RichTextContainer" style={{"--extracted-1w1cjl5": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                                  <h6 className="framer-text framer-styles-preset-1hhc6na" data-styles-preset="psLHE4vrw" dir="auto" style={{"--framer-text-color": "var(--extracted-1w1cjl5, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>How do I get started with your services?</h6>
                                </div>                                <div className="framer-1flkla8" data-framer-name="Ansewr" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "opacity": "0", "transform": "none"}}>
                                  <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87)))"}}>Contact our team, schedule a consultation, discuss your security needs, and receive a customized cybersecurity protection plan.</p>
                                </div>
                              </div>                              <div className="framer-rspfy9" data-framer-name="Icon" style={{"borderRadius": "100px", "opacity": "1"}}>
                                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                  <img decoding="auto" width="36" height="36" src="/assets/images/TTfJZYnUSIzyEhM38vQWo1UKkU-6fe0cca6.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                  <div className="framer-1q52xow hidden-oy2nxd hidden-hypaot" data-framer-name="Line"></div>                  <div className="framer-1aqbx9a hidden-oy2nxd hidden-hypaot" data-framer-name="Line"></div>
                </div>
              </section>
);

const homeFaq = (
<section className="framer-1hlr4u6" data-framer-name="FAQ Section">
                <div className="framer-196l935" data-framer-name="Container">
                  <div className="framer-8zqcpc" data-framer-name="Content">
                    <div className="framer-1es21h5" data-framer-name="Content Wrapper">
                      <div className="framer-1rlx2wk" data-framer-name="Title Wrapper">
                        <div className="framer-2h8y19-container">
                          <div className="framer-anh3M framer-5Yetb framer-2e2wsz framer-v-2e2wsz" data-framer-name="Section Title 01" style={{"opacity": "1"}}>
                            <div className="framer-1tdhzkh" data-framer-name="Icon" style={{"opacity": "1"}}>
                              <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                <img decoding="auto" width="20" height="20" src="/assets/images/ibx4mTDX10Vdj4noSJ1nX5EzVc-0c9480f5.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                              </div>
                            </div>                            <div className="framer-15xtpsx" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                              <p className="framer-text framer-styles-preset-p6kp0d" data-styles-preset="RO4XsuvlA" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>Frequently asked question</p>
                            </div>
                          </div>
                        </div>                        <div className="ssr-variant hidden-n1lvbu hidden-1bih26h">
                          <div className="framer-cbhctb" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{"transform": "none"}}>
                            <h2 className="framer-text framer-styles-preset-1e5fy5g" data-styles-preset="Asl4I7beJ" dir="auto" style={{"--framer-text-alignment": "start", "--framer-text-color": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))"}}>
                              <span style={{"display": "inline-block", "opacity": "0.001", "filter": "blur(10px)", "transform": "translateY(0.053712px)", "willChange": "transform"}}>Everything</span>                               <span style={{"display": "inline-block", "opacity": "0.001", "filter": "blur(10px)", "transform": "translateY(0.0761153px)", "willChange": "transform"}}>you</span>                               <span style={{"display": "inline-block", "opacity": "0.001", "filter": "blur(10px)", "transform": "translateY(0.107863px)", "willChange": "transform"}}>need</span>                               <span style={{"display": "inline-block", "opacity": "0.001", "filter": "blur(10px)", "transform": "translateY(0.152853px)", "willChange": "transform"}}>to</span>                               <span style={{"display": "inline-block", "opacity": "0.001", "filter": "blur(10px)", "transform": "translateY(0.216607px)", "willChange": "transform"}}>know</span>
                            </h2>
                          </div>
                        </div>
                      </div>                      <div className="ssr-variant hidden-n1lvbu hidden-1bih26h">
                        <div className="framer-9xsvb5" data-framer-name="Analyst CTA Card" style={{"willChange": "transform", "opacity": "0.260205", "transform": "translateX(-175.704px) scale(0.630102) rotateY(-73.9805deg)"}}>
                          <div className="framer-11iwsv4" data-framer-name="Content Wrapper">
                            <div className="framer-mwo7bw" data-framer-name="Number Wrapper">
                              <div className="framer-1rv3it0" data-framer-component-type="RichTextContainer" style={{"transform": "none"}}>
                                <p className="framer-text framer-styles-preset-p6kp0d" data-styles-preset="RO4XsuvlA" dir="auto" style={{"--framer-text-color": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))"}}>Still have questions?</p>
                              </div>                              <div className="framer-1r7yig5" data-framer-name="Short Description" data-framer-component-type="RichTextContainer" style={{"transform": "none"}}>
                                <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))"}}>Talk to one of our analysts. We&apos;ll respond same business day, or right now if it&apos;s urgent.</p>
                              </div>                              <div className="faq-analyst-cta__button-wrap">
                                <Link className="faq-analyst-cta__button" to="/contact">talk to an analyst</Link>
                              </div>                              <div className="framer-1r7yig5" data-framer-component-type="RichTextContainer" style={{"transform": "none"}}>
                                <p className="framer-text framer-styles-preset-p6kp0d" data-styles-preset="RO4XsuvlA" dir="auto" style={{"--framer-text-color": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))"}}>
                                  <a className="framer-text framer-styles-preset-18s8ptz" data-styles-preset="Q9ZJ0UWkE" href="tel:+12049637230">+1 (204) 963-7230</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>                    <div className="ssr-variant hidden-n1lvbu hidden-1bih26h">
                      <div className="framer-1gka0wi-container">
                        <div className="framer-V8VOQ framer-7kh9se framer-v-7kh9se" data-framer-name="Desktop FAQ Tab 01" style={{"maxWidth": "100%", "width": "100%", "opacity": "1"}}>
                          <div className="framer-1vylbne-container" style={{"willChange": "transform", "opacity": "0.694188", "transform": "scale(0.541281)"}}>
                            <div className="framer-e1zbE framer-ZoWwZ framer-u0t8D framer-sjyj3i framer-v-ew3hrd" data-framer-name="Desktop FAQ Card Open" data-highlight="true" tabIndex={0} style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "width": "100%", "borderRadius": "5px", "opacity": "1"}}>
                              <div className="framer-xqtzh8" data-framer-name="Question & Ansewr" style={{"opacity": "1"}}>
                                <div className="framer-17xgowl" data-framer-name="Question" data-framer-component-type="RichTextContainer" style={{"--extracted-1w1cjl5": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                                  <h6 className="framer-text framer-styles-preset-1hhc6na" data-styles-preset="psLHE4vrw" dir="auto" style={{"--framer-text-color": "var(--extracted-1w1cjl5, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>What cybersecurity services do you provide?</h6>
                                </div>                                <div className="framer-1flkla8" data-framer-name="Ansewr" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "opacity": "1", "transform": "none"}}>
                                  <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87)))"}}>We provide comprehensive cybersecurity solutions protecting networks, systems, cloud infrastructure, and sensitive business data from threats.</p>
                                </div>
                              </div>                              <div className="framer-rspfy9" data-framer-name="Icon" style={{"borderRadius": "100px", "opacity": "1"}}>
                                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                  <img decoding="auto" width="36" height="36" src="/assets/images/RPca8JBkiSQrVzBNQepQCHTQRW0-9ca0d317.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                </div>
                              </div>
                            </div>
                          </div>                          <div className="framer-16mz0z6-container" style={{"willChange": "transform", "opacity": "0.694089", "transform": "scale(0.541133)"}}>
                            <div className="framer-e1zbE framer-ZoWwZ framer-u0t8D framer-sjyj3i framer-v-sjyj3i" data-framer-name="Desktop FAQ Card Close" data-highlight="true" tabIndex={0} style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "width": "100%", "borderRadius": "5px", "opacity": "1"}}>
                              <div className="framer-xqtzh8" data-framer-name="Question & Ansewr" style={{"opacity": "1"}}>
                                <div className="framer-17xgowl" data-framer-name="Question" data-framer-component-type="RichTextContainer" style={{"--extracted-1w1cjl5": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                                  <h6 className="framer-text framer-styles-preset-1hhc6na" data-styles-preset="psLHE4vrw" dir="auto" style={{"--framer-text-color": "var(--extracted-1w1cjl5, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>How do you help prevent cyber threats?</h6>
                                </div>                                <div className="framer-1flkla8" data-framer-name="Ansewr" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "opacity": "0", "transform": "none"}}>
                                  <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87)))"}}>We use AI-powered monitoring, threat detection, proactive defense, and rapid response to prevent cyberattacks effectively.</p>
                                </div>
                              </div>                              <div className="framer-rspfy9" data-framer-name="Icon" style={{"borderRadius": "100px", "opacity": "1"}}>
                                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                  <img decoding="auto" width="36" height="36" src="/assets/images/TTfJZYnUSIzyEhM38vQWo1UKkU-6fe0cca6.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                </div>
                              </div>
                            </div>
                          </div>                          <div className="framer-1fsri0f-container" style={{"willChange": "transform", "opacity": "0.694089", "transform": "scale(0.541133)"}}>
                            <div className="framer-e1zbE framer-ZoWwZ framer-u0t8D framer-sjyj3i framer-v-sjyj3i" data-framer-name="Desktop FAQ Card Close" data-highlight="true" tabIndex={0} style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "width": "100%", "borderRadius": "5px", "opacity": "1"}}>
                              <div className="framer-xqtzh8" data-framer-name="Question & Ansewr" style={{"opacity": "1"}}>
                                <div className="framer-17xgowl" data-framer-name="Question" data-framer-component-type="RichTextContainer" style={{"--extracted-1w1cjl5": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                                  <h6 className="framer-text framer-styles-preset-1hhc6na" data-styles-preset="psLHE4vrw" dir="auto" style={{"--framer-text-color": "var(--extracted-1w1cjl5, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>Can your solutions support large organizations?</h6>
                                </div>                                <div className="framer-1flkla8" data-framer-name="Ansewr" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "opacity": "0", "transform": "none"}}>
                                  <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87)))"}}>We offer threat monitoring, risk assessment, incident response, and security analytics to help organizations stay protected.</p>
                                </div>
                              </div>                              <div className="framer-rspfy9" data-framer-name="Icon" style={{"borderRadius": "100px", "opacity": "1"}}>
                                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                  <img decoding="auto" width="36" height="36" src="/assets/images/TTfJZYnUSIzyEhM38vQWo1UKkU-6fe0cca6.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                </div>
                              </div>
                            </div>
                          </div>                          <div className="framer-11hgx1m-container" style={{"willChange": "transform", "opacity": "0.694089", "transform": "scale(0.541133)"}}>
                            <div className="framer-e1zbE framer-ZoWwZ framer-u0t8D framer-sjyj3i framer-v-sjyj3i" data-framer-name="Desktop FAQ Card Close" data-highlight="true" tabIndex={0} style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "width": "100%", "borderRadius": "5px", "opacity": "1"}}>
                              <div className="framer-xqtzh8" data-framer-name="Question & Ansewr" style={{"opacity": "1"}}>
                                <div className="framer-17xgowl" data-framer-name="Question" data-framer-component-type="RichTextContainer" style={{"--extracted-1w1cjl5": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                                  <h6 className="framer-text framer-styles-preset-1hhc6na" data-styles-preset="psLHE4vrw" dir="auto" style={{"--framer-text-color": "var(--extracted-1w1cjl5, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>Do you provide 24/7 security monitoring?</h6>
                                </div>                                <div className="framer-1flkla8" data-framer-name="Ansewr" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "opacity": "0", "transform": "none"}}>
                                  <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87)))"}}>Yes, our experts provide 24/7 security monitoring, detecting threats instantly and responding before serious damage occurs.</p>
                                </div>
                              </div>                              <div className="framer-rspfy9" data-framer-name="Icon" style={{"borderRadius": "100px", "opacity": "1"}}>
                                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                  <img decoding="auto" width="36" height="36" src="/assets/images/TTfJZYnUSIzyEhM38vQWo1UKkU-6fe0cca6.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                </div>
                              </div>
                            </div>
                          </div>                          <div className="framer-136gg6d-container" style={{"willChange": "transform", "opacity": "0.694089", "transform": "scale(0.541133)"}}>
                            <div className="framer-e1zbE framer-ZoWwZ framer-u0t8D framer-sjyj3i framer-v-sjyj3i" data-framer-name="Desktop FAQ Card Close" data-highlight="true" tabIndex={0} style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "width": "100%", "borderRadius": "5px", "opacity": "1"}}>
                              <div className="framer-xqtzh8" data-framer-name="Question & Ansewr" style={{"opacity": "1"}}>
                                <div className="framer-17xgowl" data-framer-name="Question" data-framer-component-type="RichTextContainer" style={{"--extracted-1w1cjl5": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                                  <h6 className="framer-text framer-styles-preset-1hhc6na" data-styles-preset="psLHE4vrw" dir="auto" style={{"--framer-text-color": "var(--extracted-1w1cjl5, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>How quickly can you respond to incidents?</h6>
                                </div>                                <div className="framer-1flkla8" data-framer-name="Ansewr" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "opacity": "0", "transform": "none"}}>
                                  <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87)))"}}>Our incident response team reacts immediately, containing threats quickly to minimize downtime, damage, and business disruption.</p>
                                </div>
                              </div>                              <div className="framer-rspfy9" data-framer-name="Icon" style={{"borderRadius": "100px", "opacity": "1"}}>
                                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                  <img decoding="auto" width="36" height="36" src="/assets/images/TTfJZYnUSIzyEhM38vQWo1UKkU-6fe0cca6.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                </div>
                              </div>
                            </div>
                          </div>                          <div className="framer-sfg40j-container" style={{"willChange": "transform", "opacity": "0.693632", "transform": "scale(0.540447)"}}>
                            <div className="framer-e1zbE framer-ZoWwZ framer-u0t8D framer-sjyj3i framer-v-sjyj3i" data-framer-name="Desktop FAQ Card Close" data-highlight="true" tabIndex={0} style={{"backgroundColor": "var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))", "width": "100%", "borderRadius": "5px", "opacity": "1"}}>
                              <div className="framer-xqtzh8" data-framer-name="Question & Ansewr" style={{"opacity": "1"}}>
                                <div className="framer-17xgowl" data-framer-name="Question" data-framer-component-type="RichTextContainer" style={{"--extracted-1w1cjl5": "var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none", "opacity": "1"}}>
                                  <h6 className="framer-text framer-styles-preset-1hhc6na" data-styles-preset="psLHE4vrw" dir="auto" style={{"--framer-text-color": "var(--extracted-1w1cjl5, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))"}}>How do I get started with your services?</h6>
                                </div>                                <div className="framer-1flkla8" data-framer-name="Ansewr" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv": "var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "opacity": "0", "transform": "none"}}>
                                  <p className="framer-text framer-styles-preset-zsangm" data-styles-preset="VOzck8Hj3" dir="auto" style={{"--framer-text-color": "var(--extracted-r6o4lv, var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87)))"}}>Contact our team, schedule a consultation, discuss your security needs, and receive a customized cybersecurity protection plan.</p>
                                </div>
                              </div>                              <div className="framer-rspfy9" data-framer-name="Icon" style={{"borderRadius": "100px", "opacity": "1"}}>
                                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"}} data-framer-background-image-wrapper="true">
                                  <img decoding="auto" width="36" height="36" src="/assets/images/TTfJZYnUSIzyEhM38vQWo1UKkU-6fe0cca6.svg" alt="Icon" style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                  <div className="framer-1q52xow hidden-n1lvbu hidden-1bih26h" data-framer-name="Line"></div>                  <div className="framer-1aqbx9a hidden-n1lvbu hidden-1bih26h" data-framer-name="Line"></div>
                </div>
              </section>
);

const OPEN_ICON = '/assets/images/RPca8JBkiSQrVzBNQepQCHTQRW0-9ca0d317.svg';
const CLOSED_ICON = '/assets/images/TTfJZYnUSIzyEhM38vQWo1UKkU-6fe0cca6.svg';

function setFaqCardOpen(card: HTMLElement, open: boolean) {
  card.setAttribute('data-framer-name', open ? 'Desktop FAQ Card Open' : 'Desktop FAQ Card Close');
  card.classList.remove('framer-v-ew3hrd', 'framer-v-sjyj3i');
  card.classList.add(open ? 'framer-v-ew3hrd' : 'framer-v-sjyj3i');

  const answer = card.querySelector<HTMLElement>('[data-framer-name="Ansewr"]');
  if (answer) {
    answer.style.opacity = open ? '1' : '0';
  }

  const icon = card.querySelector<HTMLImageElement>('[data-framer-name="Icon"] img');
  if (icon) {
    icon.src = open ? OPEN_ICON : CLOSED_ICON;
  }
}

export function FramerFaqSection({ variant = 'contact' }: FramerFaqSectionProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cards = Array.from(
      root.querySelectorAll<HTMLElement>('[data-framer-name^="Desktop FAQ Card"]'),
    );

    const handleClick = (event: Event) => {
      const card = event.currentTarget as HTMLElement;
      const isOpen = card.getAttribute('data-framer-name') === 'Desktop FAQ Card Open';
      cards.forEach((item) => setFaqCardOpen(item, item === card ? !isOpen : false));
    };

    cards.forEach((card) => {
      card.addEventListener('click', handleClick);
      card.style.cursor = 'pointer';
    });

    return () => {
      cards.forEach((card) => card.removeEventListener('click', handleClick));
    };
  }, [variant]);

  return (
    <div className="framer-jdWFo" ref={rootRef}>
      {variant === 'home' ? homeFaq : contactFaq}
    </div>
  );
}
