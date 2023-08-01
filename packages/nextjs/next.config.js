const isProd = process.env.NODE_ENV === "production";

const moduleExports = {
  async redirects() {
    return [
      {
        source: "/pro",
        destination: "/plus",
        permanent: true,
      },
    ];
  },
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = moduleExports;
