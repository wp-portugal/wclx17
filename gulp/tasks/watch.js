import gulp from 'gulp';
import config from '../config';

gulp.task('watch', ['set-watch', 'browser-sync'], () => {
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.images.src, ['images']);
});
