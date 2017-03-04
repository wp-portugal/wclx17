import hasFlag from 'has-flag';
import findupNodeModules from 'findup-node-modules';

const host = '2017.lisboa.wordcamp.dev';
const src = './src';
const dest = './public';
const test = './test';
const debug = hasFlag('debug');

export default {
  src,
  dest,
  environment: {
    debug
  },
  sass: {
    src: src + '/styles/**/*.{sass,scss}',
    dest: './',
    settings: {
      sourceComments: debug ? 'map' : null,
      imagePath: 'public/images',
      includePaths: [
        findupNodeModules('modularized-normalize-scss'),
        findupNodeModules('susy/sass')
      ]
    }
  },
  autoprefixer: {
    browsers: ['last 2 versions']
  },
  images: {
    src: src + '/images/**',
    dest: dest + '/images',
    settings: {
      svgoPlugins: [
        {
          cleanupIDs: false
        },
        {
          removeUnknownsAndDefaults: {
            SVGid: false
          }
        }
      ]
    }
  },
  svgSprite: {
    src: src + '/svg-sprite/**.*svg',
    dest: dest + '/images',
    config: {
      svg: {
        rootAttributes: {
          height: 0,
          width: 0,
          style: 'position: absolute'
        },
        transform: ['svgo']
      },
      mode: {
        symbol: {
          dest: '',
          sprite: 'sprite.svg'
        }
      }
    }
  },
  browserSync: {
    proxy: host,
    files: [
      '*.css',
      '**/*.php',
      dest + '/**',
      '!**/*.map',
      '!' + test + '/**/*.php'
    ]
  }
};
