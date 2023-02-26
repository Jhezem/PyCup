import { CSSProperties } from "react";
import { ImageProps } from "next/image";

export interface ITwoColumn {
  subtitle?: string;
  title: string;
  description: string;
  buttonText: string;
  img: ImageProps;
  imgStyles?: CSSProperties;
}
