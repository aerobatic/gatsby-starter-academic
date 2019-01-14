import React, { CSSProperties } from 'react';

declare const __PATH_PREFIX__: string;

declare module '*.svg';

declare module 'react-anchor-link-smooth-scroll' {
  export default class AnchorLink extends React.Component<{
    href: string;
    className?: string;
    style?: CSSProperties;
  }> {}
}
