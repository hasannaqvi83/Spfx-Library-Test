declare interface IHelloStrings {
  Loading: string;
}

declare module 'HelloStrings' {
  const strings: IHelloStrings;
  export = strings;
}
