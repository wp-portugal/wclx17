# WordCamp Lisboa 2017

Child theme based on Twenty Seventeen.

## Requirements

* [Composer](https://getcomposer.org/)
* [Node](http://nodejs.org/) (for NPM)
* [Gulp](http://gulpjs.com/)
* [Sass](http://sass-lang.com/)
* [stylelint](https://github.com/stylelint/stylelint)
* [GraphicsMagick](http://www.graphicsmagick.org/) (for `gulp-unretina`)

## Build

1. The header comment metadata can be edited at `src/styles/_meta.scss`.
2. Run `composer install` to install PHP dependencies.
3. Run `npm install` to setup the build tools.
4. Run `npm run-script build` to generate public site assets from sources.

## Setup

* Site Font

[PT Sans](https://fonts.google.com/specimen/PT+Sans)
```css
@import url('https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700');
```

* [Site Icon](public/images/icon@2x.png)
* [Logo](public/images/logo@2x.png)
* [Header Image](public/images/banner@2x.jpg)

## Assets

* SVG
  * [Logo Horizontal](assets/svg/logo-horz.svg)
  * [Logo Vertical](assets/svg/logo-vert.svg)
