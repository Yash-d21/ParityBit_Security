import React from 'react';
import { Link } from 'react-router-dom';
import type { HomeServiceCard as HomeServiceCardData } from '../content/homeServices';
import './HomeServiceCard.css';

type Props = {
  card: HomeServiceCardData;
  wrapperClassName: string;
  containerClassName: string;
};

export function HomeServiceCard({ card, wrapperClassName, containerClassName }: Props) {
  return (
    <div className={wrapperClassName}>
      <div className="ssr-variant">
        <div className={containerClassName} style={{ opacity: '1', transform: 'none' }}>
          <Link
            className="framer-b2yRS framer-5Yetb framer-RvjoO framer-u0t8D framer-wvswm framer-v-wvswm framer-zylch8"
            data-framer-name="Desktop Service Card "
            to={card.href}
            style={{
              backgroundColor: 'var(--token-594d84c5-38ce-4879-b3b4-0e435f0ebf91, rgba(255, 255, 255, 0.8))',
              width: '100%',
              borderRadius: '5px',
              opacity: '1',
            }}
          >
            <div className="framer-dbx3bk" data-framer-name="Content Wrapper" style={{ opacity: '1' }}>
              <div className="framer-1y89h9o" data-framer-name="Icon" style={{ opacity: '1' }}>
                <div
                  style={{
                    position: 'absolute',
                    borderRadius: 'inherit',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                  }}
                  data-framer-background-image-wrapper="true"
                >
                  <img
                    decoding="auto"
                    loading="lazy"
                    width="100"
                    height="100"
                    src={card.icon}
                    alt=""
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      borderRadius: 'inherit',
                      objectPosition: 'center',
                      objectFit: card.iconObjectFit ?? 'cover',
                    }}
                  />
                </div>
              </div>
              <div className="framer-1rki90g" data-framer-name="Title Wrapper" style={{ opacity: '1' }}>
                <div className="framer-dhpktq" data-framer-name="Category & Title" style={{ opacity: '1' }}>
                  <div className="framer-vm66zc" data-framer-name="Category" style={{ opacity: '1' }}>
                    <div
                      className="framer-1lj8eru"
                      style={{
                        backgroundColor: 'var(--token-f9b40a10-3aa2-419d-aa95-59bb9d326ccc, rgb(187, 62, 44))',
                        borderRadius: '100px',
                        opacity: '1',
                      }}
                    />
                    <div
                      className="framer-q1lhml"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        '--extracted-r6o4lv':
                          'var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))',
                        transform: 'none',
                        opacity: '1',
                      } as React.CSSProperties}
                    >
                      <p
                        className="framer-text framer-styles-preset-p6kp0d"
                        data-styles-preset="RO4XsuvlA"
                        dir="auto"
                        style={{
                          '--framer-text-color':
                            'var(--extracted-r6o4lv, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))',
                        } as React.CSSProperties}
                      >
                        {card.category}
                      </p>
                    </div>
                  </div>
                  {card.items.map((item) => (
                    <div
                      key={item}
                      className="framer-1kt8wk1 home-service-card__item"
                      data-framer-name="Title"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        '--extracted-1eung3n':
                          'var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17))',
                        opacity: '1',
                      } as React.CSSProperties}
                    >
                      <h4
                        className="framer-text framer-styles-preset-17nmdi8 home-service-card__item-text"
                        data-styles-preset="Pipw65IC4"
                        dir="auto"
                        style={{
                          '--framer-text-alignment': 'start',
                          '--framer-text-color':
                            'var(--extracted-1eung3n, var(--token-da28af61-a496-40e4-bb87-a33c0601bb96, rgb(17, 17, 17)))',
                        } as React.CSSProperties}
                      >
                        - {item}
                      </h4>
                    </div>
                  ))}
                </div>
                <div
                  className="framer-11q5vb5"
                  data-framer-name="Line"
                  style={{
                    backgroundColor: 'var(--token-a9492df4-afd1-4c28-90f0-cf83a6de37e1, rgb(177, 177, 177))',
                    opacity: '1',
                  }}
                />
                <div
                  className="framer-of2y41"
                  data-framer-name="Short Description"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    '--extracted-r6o4lv':
                      'var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87))',
                    transform: 'none',
                    opacity: '1',
                  } as React.CSSProperties}
                >
                  <p
                    className="framer-text framer-styles-preset-zsangm"
                    data-styles-preset="VOzck8Hj3"
                    dir="auto"
                    style={{
                      '--framer-text-alignment': 'start',
                      '--framer-text-color':
                        'var(--extracted-r6o4lv, var(--token-3c85a5ae-91cb-4727-974c-a277a7768b75, rgb(87, 87, 87)))',
                    } as React.CSSProperties}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-dr2ejp" data-framer-name="Bg" style={{ borderRadius: '5px', opacity: '1' }}>
              <div
                style={{
                  position: 'absolute',
                  borderRadius: 'inherit',
                  top: '0',
                  right: '0',
                  bottom: '0',
                  left: '0',
                }}
                data-framer-background-image-wrapper="true"
              >
                <img
                  decoding="auto"
                  loading="lazy"
                  width="1220"
                  height="1320"
                  src="/assets/images/MAE7Zx5OmWLiAo31N1Eynhcyin4-7ed69742.avif"
                  alt=""
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    objectPosition: 'center',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
