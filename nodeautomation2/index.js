const gulp = require('gulp');


//Example task: Copy files from folder1 to folder2
gulp.task('copy',function(){
    return gulp.src('./folder1/test.txt')
        .pipe(gulp.dest(''));
});

//Example task: Watch for changes in src/ and run the 'copy' task
gulp.task('watch',function(){
    gulp.watch('./folder1/test.txt',gulp.series('copy'));
});

//Default task: Run the 'copy' and 'watch' tasks
gulp.task('default',gulp.series('copy','watch'));