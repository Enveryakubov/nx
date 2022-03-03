declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module 'bbcode-to-react' {
  function toReact(str: string): JSX.Element;
  function registerTag(tagName: string, a: any): void;
  function parse(str): Tag;
  // eslint-disable-next-line import/export
  export const Tag: any;

  abstract class Tag {
    public SELF_CLOSE?: boolean;

    public getContent(a: boolean): string;

    public getComponents(): JSX.Element;

    public abstract toReact(): JSX.Element;

    public abstract toText(): string;
  }

  export { toReact, registerTag, Tag, parse };
}
