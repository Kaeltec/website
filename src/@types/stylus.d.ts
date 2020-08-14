declare module '*.styl' {
  interface ClassNames {
    [className: string]: string;
  }

  const classNames: ClassNames;
  export = classNames;
}
