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
  IconEmojiSunglasses,
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
  { text: "Random Data", link: "/random-data", icon: <IconDatabase /> },
  {
    text: "Emojis Picker",
    link: "emojis-picker",
    icon: <IconEmojiSunglasses />,
  },
  {
    text: "Various Tools",
    link: "various-tools",
    icon: <IconGrid_squares />,
  },
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
  { text: "Text Generator", link: "/random-data/text-generator" },
  { text: "Token Generator", link: "/random-data/token-generator" },
  { text: "MD5 Hash", link: "/random-data/md5-hash" },
  { text: "KB To MB, GB, TB", link: "/converters/storage-unit-converter" },
  { text: "Code Viewer", link: "/various-tools/frontend-code" },
  // { text: "Short URL", link: "/various-tools/short-url" },
];
