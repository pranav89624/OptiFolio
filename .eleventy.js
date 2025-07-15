module.exports = function(eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("src/styles");

  // Copy images to output
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Watch CSS for changes
  eleventyConfig.addWatchTarget("src/styles/");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk"
  };
};