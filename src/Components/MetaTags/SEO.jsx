import { Helmet } from 'react-helmet-async';
import image from '../../assets/favicon.png';

const SEO = ({ title, description, keywords, url }) => {
	return (
		<>
			<Helmet prioritizeSeoTags>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta name="author" content="satyamkumar404" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />

				{/* Open Graph meta tags for better sharing on social media */}
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={image} />
				<meta property="og:url" content={url} />
				<meta property="og:type" content="website" />

				{/* Twitter meta tags for better sharing on Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />

				{/* Canonical URL to avoid duplicate content issues */}
				<link rel="canonical" href={url} />
			</Helmet>
		</>
	);
};

export default SEO;
