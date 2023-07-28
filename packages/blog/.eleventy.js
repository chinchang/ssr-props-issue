const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const {DateTime} = require('luxon')

const markdownItConfig = {
  html: true,
  breaks: true,
  linkify: true,
}
const markdownItAnchorConfig = {
  permalink: true,
  permalinkClass: 'bookmark',
  permalinkSymbol: '#',
}

const markdownLib = markdownIt(markdownItConfig).use(
  markdownItAnchor,
  markdownItAnchorConfig
)

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.setLibrary('md', markdownLib)

  eleventyConfig.addLayoutAlias('default', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('post', 'layouts/post.html')

  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('LLL dd, yyyy')
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd')
  })

  // only content in the `posts/` directory
  eleventyConfig.addCollection('posts', function (collection) {
    return collection
      .getFilteredByGlob('./posts/*')
      .sort(function (a, b) {
        return a.date - b.date
      })
      .reverse()
  })

  eleventyConfig.addCollection('tagList', (collection) => {
    const set = new Set()
    const coll = collection.getAllSorted()

    for (const item of collection.getAllSorted()) {
      if ('tags' in item.data) {
        const tags = item.data.tags
        if (typeof tags === 'string') {
          tags = [tags]
        }
        for (const tag of tags) {
          set.add(tag)
        }
      }
    }
    return [...set].sort()
  })

  eleventyConfig.addPairedLiquidShortcode(
    'interview',
    function (content, player) {
      return `<div class="chat-wrap
      ${player ? `chat-wrap--${player}` : ''}"
      ><div class="chat-bubble__content">${content}</div><div class="chat-bubble"></div></div>`
    }
  )

  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('images')
  return {
    pathPrefix: '/blog/',
  }
}
