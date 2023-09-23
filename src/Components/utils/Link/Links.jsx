import {
  IconFileText,
  IconColorPalette,
  IconImageEdit,
  IconBxTransfer,
  IconContrastDropFill,
  IconBxCodeAlt,
  IconArrowsMinimize,
  IconGrid_squares,
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
];
