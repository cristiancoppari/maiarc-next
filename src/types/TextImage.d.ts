export interface ITextImage {
  content: JSX.Element;
  image: {
    src: string;
    text: string;
  };
  theme: "light" | "dark";
}
