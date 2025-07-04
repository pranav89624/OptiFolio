module.exports = function(eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("src/styles");
  
  // Watch CSS for changes
  eleventyConfig.addWatchTarget("src/styles/");
  
  return {
    dir: {
      input: "src",
      output: "public"
    },
    markdownTemplateEngine: "njk"
  };
};