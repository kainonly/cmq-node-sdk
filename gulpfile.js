const gulp = require('gulp');
const del = require('del');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

// mocha --require ts-node/register --ui bdd testing\queue.spec.ts

gulp.task('default', function () {
    del.sync(['dist']);
    return gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
});
