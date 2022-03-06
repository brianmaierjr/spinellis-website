const { Liquid } = require("liquidjs");

module.exports = function (eleventyConfig) {

  eleventyConfig.addWatchTarget('src/sass/');
  eleventyConfig.addPassthroughCopy({ 'src/img': 'assets/img' });
  eleventyConfig.addPassthroughCopy({ 'src/fonts': 'assets/fonts' });
  eleventyConfig.addPassthroughCopy({ 'src/js': 'assets/js' });
  eleventyConfig.addPassthroughCopy({ 'src/favicon': './' });

  eleventyConfig.setBrowserSyncConfig({
    files: ['_site/assets/css/*.css']
  });

  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strictFilters: true, // renamed from `strict_filters` in Eleventy 1.0
  });

};


