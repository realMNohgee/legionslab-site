// eleventy.config.js - Legion's config with date filter added
module.exports = function(eleventyConfig) {
  // Passthrough existing assets
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("particles-bg.js");

  // Blog collection: Markdown with "post" tag, newest first
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByTag("post").sort((a, b) => b.date - a.date);
  });

  // Add date filter for Nunjucks (fixes "filter not found: date")
  eleventyConfig.addFilter("date", function(date, format = "MMM dd, yyyy") {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_includes"
    },
    templateFormats: ["html", "md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};