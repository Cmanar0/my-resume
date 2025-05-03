declare module 'typed.js' {
  interface TypedOptions {
    strings?: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
    showCursor?: boolean;
    cursorChar?: string;
  }

  class Typed {
    constructor(element: HTMLElement, options?: TypedOptions);
    destroy(): void;
  }

  export default Typed;
} 