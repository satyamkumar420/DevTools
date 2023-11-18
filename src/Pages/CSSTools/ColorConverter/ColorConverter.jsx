import SEO from '../../../Components/MetaTags/SEO';
import HSLConverter from './HSLConverter';
import HexConverter from './HexConverter';
import RGBConverter from './RGBConverter';

const ColorConverter = () => {
	return (
		<>
			<SEO
				title="Color Converter"
				description={`Devtoo1s.dev offers a free online Color Converter tool that
          allows you to convert colors between different formats. With
          this tool, you can easily convert colors from RGB to HEX, HSL,
          and HSV. This is particularly useful for web developers and
          designers who need to work with different color formats for
          their projects. The tool is user-friendly and provides you with
          the converted color code in the format of your choice. You can
          use this code in your design work or copy it to your clipboard
          for later use. Best of all, it is completely free to use on
          devtoo1s.dev.`}
				keywords={'color converter, color converter tool, color converter tool'}
				url={'https://devtoo1s.dev/converters/color-converter'}
			/>
			<div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20  max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Colors Converters
					</h3>
					<div className="flex flex-wrap gap-5 justify-center">
						<HexConverter />
						<RGBConverter />
						<HSLConverter />
					</div>
					<div className="mt-10">
						<div className=" text-left border-l-4 border-l-purple-500 p-2 text-sm sm:text-lg bg-[#1a1c2e]">
							<span className="text-blue-300">
								Devtoo1s.dev offers a free online Color Converter tool that
								allows you to convert colors between different formats. With
								this tool, you can easily convert colors from RGB to HEX, HSL,
								and HSV. This is particularly useful for web developers and
								designers who need to work with different color formats for
								their projects. The tool is user-friendly and provides you with
								the converted color code in the format of your choice. You can
								use this code in your design work or copy it to your clipboard
								for later use. Best of all, it is completely free to use on
								devtoo1s.dev.
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ColorConverter;
