import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify"; // Import the toast function
import { HelmetProvider } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Components/utils/Loader/Loader";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics, GoogleTagManager } from "./utils/GoogleAnalytics";

const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Notfound = lazy(() => import("./Components/Notfound/Notfound"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Home = lazy(() => import("./Pages/Home/Home"));

// Lazy-loaded route components 'Texts'
const Texts = lazy(() => import("./Pages/Texts/Texts"));
const TextCounter = lazy(() => import("./Pages/Texts/TextCounter"));
const TextComparator = lazy(() => import("./Pages/Texts/TextComparator"));
const TextConverter = lazy(
  () => import("./Pages/Texts/TextConverter/TextConverter")
);
const AsciiLater = lazy(() => import("./Pages/Texts/AsciiLater/AsciiLater"));
const TextToSpeech = lazy(
  () => import("./Pages/Texts/TextToSpeech/TextToSpeech")
);
const TextToHtml = lazy(() => import("./Pages/Texts/TextToHtml/TextToHtml"));

// Lazy-loaded route components 'Images'
const Images = lazy(() => import("./Pages/Images/Images"));
const ImageCircleCrop = lazy(
  () => import("./Pages/Images/ImageCrop/ImageCircleCrop")
);
const ImageSquareCrop = lazy(
  () => import("./Pages/Images/ImageCrop/ImageSquareCrop")
);
const ImageCrop = lazy(() => import("./Pages/Images/ImageCrop/ImageCrop"));

const ImageToBase64Converter = lazy(
  () => import("./Pages/Images/ImageToBase64Converter/ImageToBase64Converter")
);

// Lazy-loaded route components 'CSS TOOLS'
const Colors = lazy(() => import("./Pages/CSSTools/Colors"));
const ColorPicker = lazy(() => import("./Pages/CSSTools/ColorPicker"));
const RandomColor = lazy(() => import("./Pages/CSSTools/RandomColor"));
const FavoriteColor = lazy(() => import("./Pages/CSSTools/FavoriteColor"));
const ImageColorPicker = lazy(
  () => import("./Pages/CSSTools/ImageColorPicker")
);
const ColorConverter = lazy(
  () => import("./Pages/CSSTools/ColorConverter/ColorConverter")
);
const GradientColor = lazy(
  () => import("./Pages/CSSTools/GradientColor/GradientColor")
);
const BoxShadow = lazy(() => import("./Pages/CSSTools/BoxShadow/BoxShadow"));
const RandomGradientColor = lazy(
  () => import("./Pages/CSSTools/RandomGradientColor/RandomGradientColor")
);

// Lazy-loaded route components 'RandomData'
const RandomData = lazy(() => import("./Pages/RandomData/RandomData"));
const PasswordGenerator = lazy(
  () => import("./Pages/RandomData/PasswordGenerator/PasswordGenerator")
);
const DummyTextGenerator = lazy(
  () => import("./Pages/RandomData/DummyTextGenerator/TextGenerator")
);
const FakeDetails = lazy(
  () => import("./Pages/RandomData/FakeDetails/FakeDetails")
);
const CreditCard = lazy(
  () => import("./Pages/RandomData/CreditCard/CreditCard")
);

const TokenGenerator = lazy(
  () => import("./Pages/RandomData/TokeGenerator/TokenGenerator")
);

// Lazy-loaded route components 'Converters'
const Converters = lazy(() => import("./Pages/Converters/Converters"));
const TimestampConverter = lazy(
  () => import("./Pages/Converters/TimestampConverter/TimestampConverter")
);
const JsonToXml = lazy(() => import("./Pages/Converters/JsonToXml/JsonToXml"));
const XmlToJson = lazy(() => import("./Pages/Converters/XmlToJson/XmlToJson"));
const LessToCss = lazy(() => import("./Pages/Converters/LessToCss/LessToCss"));
const StorageUnitConverter = lazy(
  () => import("./Pages/Converters/StorageUnitConverter/StorageUnitConverter")
);
const TimeConverter = lazy(
  () => import("./Pages/Converters/TimeConverter/TimeConverter")
);

// Lazy-loaded route components 'About'
const About = lazy(() => import("./Pages/About/About"));

const Privacy = lazy(() => import("./Pages/About/PrivacyPolicy"));
const Terms = lazy(() => import("./Pages/About/Terms"));

// Lazy-loaded route components 'FormatCode'
const FormatCode = lazy(() => import("./Pages/FormatCode/FormatCode"));
const JSONFormat = lazy(
  () => import("./Pages/FormatCode/JSONFormat/JsonFormat")
);
const HTMLFormat = lazy(
  () => import("./Pages/FormatCode/HTMLFormat/HTMLFormat")
);
const CssFormat = lazy(() => import("./Pages/FormatCode/CssFormat/CssFormat"));
const JSFormat = lazy(() => import("./Pages/FormatCode/JsFormat/JsFormat"));

// Lazy-loaded route components 'VariousTools'
const VariousTools = lazy(() => import("./Pages/VariousTools/VariousTools"));
const ShortUrl = lazy(() => import("./Pages/VariousTools/ShortUrl/ShortUrl"));
const AgeCalculator = lazy(
  () => import("./Pages/VariousTools/AgeCalculator/AgeCalculator")
);
const Md5Hash = lazy(() => import("./Pages/VariousTools/Md5Hash/Md5Hash"));
const Base64Encoder = lazy(
  () => import("./Pages/VariousTools/Base64Encoder/Base64Encoder")
);
const FrontendCode = lazy(
  () => import("./Pages/VariousTools/FrontendCodeViewer/FrontendCode")
);

const EncodeURL = lazy(
  () => import("./Pages/VariousTools/URLEncoder/URLEncoder")
);

const QRCodeGenerator = lazy(
  () => import("./Pages/VariousTools/QrCodeGenerator/QrCodeGenerator")
);
const MetaTagsGenerator = lazy(
  () => import("./Pages/VariousTools/MetaTagsGenerator/MetaTagsGenerator")
);

// Lazy-loaded route components 'MinifyCode'
const MinifyCode = lazy(() => import("./Pages/MinifyCode/MinifyCode"));
const HtmlMinify = lazy(
  () => import("./Pages/MinifyCode/HtmlMinify/HtmlMinify")
);
const CssMinify = lazy(() => import("./Pages/MinifyCode/CssMinify/CssMinify"));
const JSMinify = lazy(() => import("./Pages/MinifyCode/JSMinify/JSMinify"));

// Lazy-loaded route components 'EmojiPicker'
const EmojiPicker = lazy(() => import("./Pages/EmojiPicker/EmojiPicker"));
function App() {
  const disableContextMenu = (e) => {
    e.preventDefault();
  };

  const disableF12 = (e) => {
    if (e.key === "F12" || e.keyCode === 123) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("keydown", disableF12);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableF12);
    };
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <GoogleAnalytics />
        <GoogleTagManager />
        <Analytics />
        <ToastContainer
          position="top-right"
          theme="dark"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          pauseOnHover={false}
          draggable={false}
          closeOnClick={false}
          closeButton={false}
          transition={Slide}
        />
        <HelmetProvider>
          <Routes>
            <Route path="*" element={<Notfound />} />
            <Route path="/" element={<Home />} />
            {/* Here are the routes for 'Texts' */}
            <Route path="/texts" element={<Texts />} />
            <Route path="/texts/text-counter" element={<TextCounter />} />
            <Route path="/texts/text-comparator" element={<TextComparator />} />
            <Route path="/texts/text-converter" element={<TextConverter />} />
            <Route path="/texts/ascii-later" element={<AsciiLater />} />
            <Route path="/texts/text-to-speech" element={<TextToSpeech />} />
            <Route path="/texts/text-to-html" element={<TextToHtml />} />

            {/* Here are the routes for 'Images' */}
            <Route path="/image-tools" element={<Images />} />
            <Route path="/image/circle-crop" element={<ImageCircleCrop />} />
            <Route path="/images/square-crop" element={<ImageSquareCrop />} />
            <Route path="/images/images-crop" element={<ImageCrop />} />
            <Route
              path="/converters/ImageToBase64Converter"
              element={<ImageToBase64Converter />}
            />

            {/* Here are the routes for 'CSS Tools' */}
            <Route path="/colors" element={<Colors />} />
            <Route path="/colors/color-picker" element={<ColorPicker />} />
            <Route path="/colors/random-color" element={<RandomColor />} />
            <Route path="/colors/favorite-color" element={<FavoriteColor />} />
            <Route
              path="/colors/image-color-picker"
              element={<ImageColorPicker />}
            />
            <Route
              path="/converters/color-converter"
              element={<ColorConverter />}
            />
            <Route path="/colors/gradient-color" element={<GradientColor />} />
            <Route path="/colors/box-shadow" element={<BoxShadow />} />

            <Route
              path="/colors/random-gradient-color"
              element={<RandomGradientColor />}
            />

            {/* Here are the routes for 'Converters' */}
            <Route path="/converters" element={<Converters />} />

            <Route
              path="/converters/timestamp-converter"
              element={<TimestampConverter />}
            />
            <Route path="/converters/json-to-xml" element={<JsonToXml />} />
            <Route path="/converters/xml-to-json" element={<XmlToJson />} />
            <Route path="/converters/less-to-css" element={<LessToCss />} />
            <Route
              path="/converters/storage-unit-converter"
              element={<StorageUnitConverter />}
            />
            <Route
              path="/converters/time-converter"
              element={<TimeConverter />}
            />

            {/* Here are the routes for 'Random Data' */}
            <Route path="/random-data" element={<RandomData />} />
            <Route
              path="/random-data/password-generator"
              element={<PasswordGenerator />}
            />
            <Route
              path="/random-data/text-generator"
              element={<DummyTextGenerator />}
            />
            <Route path="/random-data/fake-details" element={<FakeDetails />} />
            <Route path="/random-data/credit-card" element={<CreditCard />} />
            <Route
              path="/random-data/token-generator"
              element={<TokenGenerator />}
            />

            {/* Here are the routes for 'Format Code' */}
            <Route path="/format-code" element={<FormatCode />} />
            <Route path="/format-code/json-format" element={<JSONFormat />} />
            <Route path="/format-code/html-format" element={<HTMLFormat />} />
            <Route path="/format-code/css-format" element={<CssFormat />} />
            <Route path="/format-code/js-format" element={<JSFormat />} />

            {/* Here are the routes for 'Various Tools' */}
            <Route path="/various-tools" element={<VariousTools />} />
            <Route path="/various-tools/short-url" element={<ShortUrl />} />
            <Route
              path="/various-tools/age-calculator"
              element={<AgeCalculator />}
            />
            <Route path="/various-tools/md5-hash" element={<Md5Hash />} />
            <Route
              path="/various-tools/base64-encoder"
              element={<Base64Encoder />}
            />
            <Route
              path="/various-tools/frontend-code"
              element={<FrontendCode />}
            />
            <Route path="/various-tools/encode-url" element={<EncodeURL />} />
            <Route
              path="/various-tools/qr-code-generator"
              element={<QRCodeGenerator />}
            />
            <Route
              path="/various-tools/meta-tags-generator"
              element={<MetaTagsGenerator />}
            />

            {/* Here are the routes for 'Emoji Picker' */}
            <Route path="/emojis-picker" element={<EmojiPicker />} />

            {/* Here are the routes for 'Minify Code' */}
            <Route path="/minify-code" element={<MinifyCode />} />
            <Route path="/minify-code/html-minify" element={<HtmlMinify />} />
            <Route path="/minify-code/css-minify" element={<CssMinify />} />
            <Route path="/minify-code/js-minify" element={<JSMinify />} />

            {/* Here are the routes for 'About',' Privacy Policy', and 'Terms' */}
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
          </Routes>
        </HelmetProvider>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
