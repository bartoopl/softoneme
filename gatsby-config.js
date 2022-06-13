module.exports = {
  siteMetadata: {
    title: `softone.me`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"},
	  {
		  resolve: "gatsby-plugin-react-svg",
		  options: {
			  rule: {
				  include: /assets/ // See below to configure properly
			  }},},
	  {
		  resolve: 'gatsby-plugin-google-fonts',
		  options: {
			  fonts: [
				  'Poppins\:400,500,700',
			  ],
			  display: 'swap',
		  },

  }]
};
