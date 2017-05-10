// themeId: The space id which you can find on storyblok app.storyblok.com in the space settings.
// domain: The domain without the protocol. Example: classic.me.storyblok.com

module.exports = {
  blok: {
    apiVersion: 2,
    themeId: "40269",
    domain: "3cdd4e4b.me.storyblok.com",
    apiKey: require('./token'),
    basePath: "views"
  }
}
