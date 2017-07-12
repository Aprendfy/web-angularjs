var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify     = require('gulp-uglify'),
    bowerFiles = require('main-bower-files');

gulp.task('default', ['app', 'css', 'libs']);

gulp.task('js', function () {
    return gulp.watch('./www/**/*.js', ['app']);
});

gulp.task('libs', function () {
    return gulp.src([
            './lib/angular/angular.min.js',
            './lib/jquery/dist/jquery.min.js',
            './lib/bootstrap/dist/js/bootstrap.min.js',
            './lib/angular-animate/angular-animate.min.js',
            './lib/angular-messages/angular-messages.min.js',
            './lib/angular-ui-router/release/angular-ui-router.min.js',
            './lib/satellizer/dist/satellizer.min.js',
            './lib/angular-bootstrap/ui-bootstrap.min.js',
            './lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
            './lib/ng-file-upload/ng-file-upload-shim.min.js',
            './lib/ng-file-upload/ng-file-upload.min.js',
            './lib/angularjs-toaster/toaster.min.js',
        ])
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('css', function () {
    return gulp.src([
      './lib/bootstrap/dist/css/bootstrap.min.css',
      './lib/angularjs-toaster/toaster.min.css'
    ])
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('app', function () {
    return gulp.src([
            './www/app.js',
            './www/routes.js',
            './www/interceptors/**/*.js',
            './www/controllers/**/*.js',
            './www/components/**/*.js',
            './www/services/**/*.js',
            './www/translation/**/*.js',
            './www/value/**/*.js'
        ])
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./dist'));
});
