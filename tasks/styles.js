import gulp from 'gulp';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import errorHandler from 'gulp-plumber-error-handler';
import reporter from 'postcss-reporter';
import postcss from 'gulp-postcss';
import lost from 'lost';
import sass from 'gulp-sass';
import syntaxScss from 'postcss-scss';
import styleLint from 'stylelint';
import autoprefixer from 'autoprefixer';
import mqPacker from 'css-mqpacker';
import nano from 'cssnano';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import path from 'path';
import bulkSass from 'gulp-sass-bulk-import';
const srcPath = 'app';

const isDebug = process.env.NODE_ENV !== 'production';

gulp.task('styles', () => (
	gulp.src('app/styles/*.scss')
		.pipe(plumber({errorHandler: errorHandler(`Error in \'styles\' task`)}))
		.pipe(gulpIf(isDebug, sourcemaps.init()))
		.pipe(bulkSass())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer({
				browsers: [
					'last 2 version',
					'last 2 Chrome versions',
					'last 2 Firefox versions',
					'last 2 Opera versions',
					'last 2 Edge versions'
				]
			}),
			lost()
		]))
		.pipe(gulpIf(!isDebug, mqPacker()))
		.pipe(gulpIf(!isDebug, nano({zindex: false})))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulpIf(isDebug, sourcemaps.write()))
		.pipe(gulp.dest('dist/assets/styles'))
));

gulp.task('styles:lint', () => {
	const processors = [
		styleLint(),
		reporter({
			throwError: true
		})
	];
	return gulp.src(['app/**/*.scss', '!app/styles/**'], {cwd: path.join(srcPath, 'styles')})
		.pipe(plumber())
		.pipe(postcss(processors, {
			syntax: syntaxScss
		}));
});
