// eleventy.config.js - Legion's minimal config for blog on top of existing site
module.exports = function(eleventyConfig) {
  // Passthrough: copy your existing assets unchanged
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("particles-bg.js");

  // Blog collection: Markdown files tagged "post", newest first
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByTag("post").sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: ".",          // Source = current folder
      output: "_site",     // Build output (upload this folder)
      includes: "_includes",
      layouts: "_includes"
    },
    templateFormats: ["html", "md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}