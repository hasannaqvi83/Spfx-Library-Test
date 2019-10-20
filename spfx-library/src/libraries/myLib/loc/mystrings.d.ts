declare interface IMyLibraryStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'MyLibraryStrings' {
  const strings: IMyLibraryStrings;
  export = strings;
}
