import React from 'react';

interface IconProps {
  className?: string;
}

export const Search = (props: IconProps) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" />
  </svg>
);

export const Menu = (props: IconProps) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
  </svg>
);

export const Close = (props: IconProps) => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
  </svg>
);
