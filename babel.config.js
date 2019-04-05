module.exports = {
  "presets": [
    "@vue/app"
  ],
  "plugins": [
    [
      "transform-imports",
      {
        "quasar": {
          "transform": "quasar/dist/babel-transforms/imports.js",
          "preventFullImport": true
        }
      }
    ]
  ]
}