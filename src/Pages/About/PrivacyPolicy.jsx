import lazyLoad from '../../utils/lazyLoad/lazyLoad';
const SEO = lazyLoad('../../Components/MetaTags/SEO');

const PrivacyPolicy = () => {
	return (
		<>
			<SEO
				title={'Privacy & Policy'}
				description={`	DevToo1s.dev takes the privacy of its users seriously. In this
							document, we outline the types of information we collect and how
							we use it. By continuing to browse our website, you agree to this
							Privacy Policy, regardless of your browser settings.`}
				keywords={
					'Privacy & Policy - online free devtoo1s.dev, devtoo1s, devtools, privacy policy'
				}
				url={'https://www.devtoo1s.dev/privacy-policy'}
			/>
			<div className="p-4 sm:ml-52 text-justify max-w-screen overflow-y-auto max-h-screen">
				<div className="my-20 max-w-screen-lg">
					<h3 className="p-2 rounded text-lg sm:text-2xl text-yellow-500 w-full bg-[#1a1c2e]">
						Privacy & Policy
					</h3>

					<div>
						<h3 className="mt-5 text-xl text-orange-400">
							Privacy and Cookies Policy
						</h3>
						<p className="text-base text-gray-400">
							DevToo1s.dev takes the privacy of its users seriously. In this
							document, we outline the types of information we collect and how
							we use it. By continuing to browse our website, you agree to this
							Privacy Policy, regardless of your browser settings.
						</p>
						<h3 className="mt-5 text-xl text-orange-400">
							Cookies and Other Tracking Technologies
						</h3>
						<p className="text-base text-gray-400">
							Our website uses Google Analytics, a web analytics tool provided
							by Google, which uses performance cookies to collect anonymous
							browsing data (including truncated IPs). This data is exclusively
							aggregated to analyze site usage, compile reports on site
							activities, and provide other services related to the number of
							visitors and pages visited. You can find more information about
							Google Analytics cookies in the "How Google uses cookies" section.
						</p>
						<p className="text-base text-gray-400">
							To disable Google Analytics' analytical tracking, please refer to
							the "Google Analytics Opt-out Browser Add-on". For more
							information about Google Analytics' privacy policies, please visit
							Google Privacy & Terms.
						</p>
						<h3 className="mt-5 text-xl text-orange-400">
							Google DoubleClick DART Cookie
						</h3>
						<p className="text-base text-gray-400">
							We may use third-party service providers to display
							advertisements, and Google is the ad provider on our website. It
							uses DART cookies to display ads to visitors based on their visits
							to our site and other sites on the Internet. However, visitors can
							choose to decline the use of DART cookies by visiting Google Ad
							Policies. We also recommend checking out Google Ad Settings.
						</p>
						<h3 className="mt-5 text-xl text-orange-400">Disabling Cookies</h3>
						<p className="text-base text-gray-400">
							Cookies are tied to the browser used by the user, and they can be
							directly disabled within it by refusing or revoking consent for
							their use. However, disabling cookies may affect the functionality
							of some site features.
						</p>

						<h3 className="mt-5 text-xl text-orange-400">External Links</h3>
						<p className="text-base text-gray-400">
							This site may contain links to other websites. However, we are not
							responsible for the content, privacy policies, or practices of
							such sites. We recommend that you read the privacy policy of these
							sites should you decide to access them, as their policies and
							practices may differ from ours.
						</p>
						<h3 className="mt-5 text-xl text-orange-400">
							Data Processing Privacy
						</h3>
						<p className="text-base text-gray-400">
							Our online free devtools operate exclusively in your browser,
							which means that no data is sent to any other location. Any data
							processed by our tools is neither collected, stored, nor in any
							way persisted or disclosed.
						</p>
						<h3 className="mt-5 text-xl text-orange-400">Modifications</h3>
						<p className="text-base text-gray-400">
							We reserve the right to periodically update our Privacy Policy. By
							continuing to use our site following any changes to this Privacy
							Policy, you accept the modifications made.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default PrivacyPolicy;
