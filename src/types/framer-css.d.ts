import 'react';

declare module 'react' {
  interface CSSProperties {
    cornerShape?: string;
    [key: `--${string}`]: string | number | undefined;
  }

  interface HTMLAttributes<T> {
    name?: string;
    as?: string;
    parentsize?: string;
    _constraints?: string;
    rotation?: string;
    shadows?: string;
    [key: string]: unknown;
  }

  interface AnchorHTMLAttributes<T> {
    name?: string;
    as?: string;
    [key: string]: unknown;
  }
}
