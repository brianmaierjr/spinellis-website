const { Liquid } = require("liquidjs");

const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ["avif", "jpeg"]
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {

  eleventyConfig.addWatchTarget('src/sass/');
  eleventyConfig.addPassthroughCopy({ 'src/img': 'assets/img' });
  eleventyConfig.addPassthroughCopy({ 'src/fonts': 'assets/fonts' });
  eleventyConfig.addPassthroughCopy({ 'src/js': 'assets/js' });
  eleventyConfig.addPassthroughCopy({ 'src/favicon': './' });
  eleventyConfig.addLiquidShortcode("image", imageShortcode);

  // eleventyConfig.setBrowserSyncConfig({
  //   files: ['_site/assets/css/*.css']
  // });

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


