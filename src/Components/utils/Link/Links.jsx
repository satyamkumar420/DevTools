import {
  IconFileText,
  IconColorPalette,
  IconImageEdit,
  IconBxTransfer,
  IconContrastDropFill,
  IconBxCodeAlt,
  IconArrowsMinimize,
  IconGrid_squares,
  IconDatabase,
} from "../../Icons/Icons";

export const Links = [
  {
    text: "Texts",
    link: "texts",
    icon: <IconFileText />,
  },
  { text: "CSS Tools", link: "colors", icon: <IconColorPalette /> },
  { text: "Image Tools", link: "image-tools", icon: <IconImageEdit /> },
  { text: "Converters", link: "converters", icon: <IconBxTransfer /> },
  { text: "Format Code", link: "format-code", icon: <IconBxCodeAlt /> },
  { text: "Minify Code", link: "minify-code", icon: <IconArrowsMinimize /> },
  {
    text: "Various Tools",
    link: "various-tools",
    icon: <IconGrid_squares />,
  },
  { text: "Emojis Picker", link: "emojis-picker", icon: "😂" },
  { text: "Random Data", link: "/random-data", icon: <IconDatabase /> },
];

export const HomeLinks = [
  { text: "Texts", link: "texts" },
  { text: "CSS Tools", link: "colors" },
  { text: "Image Tools", link: "image-tools" },
  { text: "Converters", link: "converters" },
  { text: "Random Color", link: "/colors/random-color" },
  { text: "Minify Code", link: "minify-code" },
  { text: "Various Tools", link: "various-tools" },
  { text: "Emojis Picker", link: "emojis-picker" },
  { text: "Password Generator", link: "/random-data/password-generator" },
  { text: "Circle Image Crop", link: "/image/circle-crop" },
  { text: "Square Image Crop", link: "/images/square-crop" },
];
