declare global {
  interface Window {
    Wistia: {
      ready: (callback: () => void) => void;
      [key: string]: any;
    };
    _wq: Array<any>;
  }
}

export {};