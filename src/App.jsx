import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify"; // Import the toast function
import { HelmetProvider } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar/Navbar";
import Loader from "./Components/utils/Loader/Loader";
import Footer from "./Components/Footer/Footer";
const Notfound = lazy(() => import("./Components/Notfound/Notfound"));
const Home = lazy(() => import("./Pages/Home/Home"));

// Lazy-loaded route components 'Texts'
const Texts = lazy(() => import("./Pages/Texts/Texts"));
const TextCounter = lazy(() => import("./Pages/Texts/TextCounter"));
const TextComparator = lazy(() => import("./Pages/Texts/TextComparator"));
const TextConverter = lazy(() =>
  import("./Pages/Texts/TextConverter/TextConverter")
);
const AsciiLater = lazy(() => import("./Pages/Texts/AsciiLater/AsciiLater"));

// Lazy-loaded route components 'Images'
const Images = lazy(() => import("./Pages/Images/Images"));
const ImageCircleCrop = lazy(() =>
  import("./Pages/Images/ImageCrop/ImageCircleCrop")
);
const ImageSquareCrop = lazy(() =>
  import("./Pages/Images/ImageCrop/ImageSquareCrop")
);
const ImageCrop = lazy(() => import("./Pages/Images/ImageCrop/ImageCrop"));
const ImageConverter = lazy(() =>
  import("./Pages/Images/ImageConvert/ImageConverter")
);
const ImageToBase64Converter = lazy(() =>
  import("./Pages/Images/ImageToBase64Converter/ImageToBase64Converter")
);

// Lazy-loaded route components 'CSS TOOLS'
const Colors = lazy(() => import("./Pages/CSSTools/Colors"));
const ColorPicker = lazy(() => import("./Pages/CSSTools/ColorPicker"));
const RandomColor = lazy(() => import("./Pages/CSSTools/RandomColor"));
const FavoriteColor = lazy(() => import("./Pages/CSSTools/FavoriteColor"));
const ImageColorPicker = lazy(() =>
  import("./Pages/CSSTools/ImageColorPicker")
);
const ColorConverter = lazy(() =>
  import("./Pages/CSSTools/ColorConverter/ColorConverter")
);

// Lazy-loaded route components 'RandomData'
const RandomData = lazy(() => import("./Pages/RandomData/RandomData"));
const PasswordGenerator = lazy(() =>
  import("./Pages/RandomData/PasswordGenerator/PasswordGenerator")
);
const DummyTextGenerator = lazy(() =>
  import("./Pages/RandomData/DummyTextGenerator/TextGenerator")
);
const FakeDetails = lazy(() =>
  import("./Pages/RandomData/FakeDetails/FakeDetails")
);
const CreditCard = lazy(() =>
  import("./Pages/RandomData/CreditCard/CreditCard")
);

const TokenGenerator = lazy(() =>
  import("./Pages/RandomData/TokeGenerator/TokenGenerator")
);

// Lazy-loaded route components 'Converters'
const Converters = lazy(() => import("./Pages/Converters/Converters"));
const TimestampConverter = lazy(() =>
  import("./Pages/Converters/TimestampConverter/TimestampConverter")
);
const JsonToXml = lazy(() => import("./Pages/Converters/JsonToXml/JsonToXml"));
const XmlToJson = lazy(() => import("./Pages/Converters/XmlToJson/XmlToJson"));
const LessToCss = lazy(() => import("./Pages/Converters/LessToCss/LessToCss"));
const StorageUnitConverter = lazy(() =>
  import("./Pages/Converters/StorageUnitConverter/StorageUnitConverter")
);
// const CssToLess = lazy(() => import("./Pages/Converters/CssToLess/CssToLess"));

// Lazy-loaded route components 'About'
const About = lazy(() => import("./Pages/About/About"));
const Privacy = lazy(() => import("./Pages/About/PrivacyPolicy"));
const Terms = lazy(() => import("./Pages/About/Terms"));

// Lazy-loaded route components 'FormatCode'
const FormatCode = lazy(() => import("./Pages/FormatCode/FormatCode"));
const JSONFormat = lazy(() =>
  import("./Pages/FormatCode/JSONFormat/JsonFormat")
);
const HTMLFormat = lazy(() =>
  import("./Pages/FormatCode/HTMLFormat/HTMLFormat")
);

// Lazy-loaded route components 'VariousTools'
const VariousTools = lazy(() => import("./Pages/VariousTools/VariousTools"));
const ShortUrl = lazy(() => import("./Pages/VariousTools/ShortUrl/ShortUrl"));
const AgeCalculator = lazy(() =>
  import("./Pages/VariousTools/AgeCalculator/AgeCalculator")
);
const Md5Hash = lazy(() => import("./Pages/VariousTools/Md5Hash/Md5Hash"));
const Base64Encoder = lazy(() =>
  import("./Pages/VariousTools/Base64Encoder/Base64Encoder")
);
const FrontendCode = lazy(() =>
  import("./Pages/VariousTools/FrontendCodeViewer/FrontendCode")
);

// Lazy-loaded route components 'MinifyCode'
const MinifyCode = lazy(() => import("./Pages/MinifyCode/MinifyCode"));
const HtmlMinify = lazy(() =>
  import("./Pages/MinifyCode/HtmlMinify/HtmlMinify")
);
const CssMinify = lazy(() => import("./Pages/MinifyCode/CssMinify/CssMinify"));
const JSMinify = lazy(() => import("./Pages/MinifyCode/JSMinify/JSMinify"));

// Lazy-loaded route components 'EmojiPicker'
const EmojiPicker = lazy(() => import("./Pages/EmojiPicker/EmojiPicker"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Navbar />
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

            {/* Here are the routes for 'Images' */}
            <Route path="/image-tools" element={<Images />} />
            <Route path="/image/circle-crop" element={<ImageCircleCrop />} />
            <Route path="/images/square-crop" element={<ImageSquareCrop />} />
            <Route path="/images/images-crop" element={<ImageCrop />} />
            <Route path="/image/image-convert" element={<ImageConverter />} />

            {/* Here are the routes for 'Colors' */}
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

            {/* Here are the routes for 'Converters' */}
            <Route path="/converters" element={<Converters />} />
            <Route
              path="/converters/ImageToBase64Converter"
              element={<ImageToBase64Converter />}
            />
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
