// Eleventy configuration file - defines build settings and behavior
module.exports = function (eleventyConfig) {
  // Passthrough copy - copies files directly to output without processing
  // CSS files are copied as-is to maintain styles in the built site
  eleventyConfig.addPassthroughCopy("src/styles");

  // Copy images to output directory without processing
  // Ensures all image assets are available in the final build
  eleventyConfig.addPassthroughCopy("src/images");

  // Watch CSS files for changes during development
  // Triggers rebuild when stylesheets are modified
  eleventyConfig.addWatchTarget("src/styles/");

  // Return configuration object with directory structure and settings
  return {
    dir: {
      input: "src",           // Source files directory
      output: "_site",        // Built site output directory
      includes: "_includes",  // Template includes/partials directory
    },
    // Use Nunjucks templating engine for Markdown processing
    markdownTemplateEngine: "njk"
  };
};