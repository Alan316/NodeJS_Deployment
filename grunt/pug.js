module.exports = {
    // Production settings
    prod: {
        files: [{
            expand: true,
            cwd: 'views', 
            src: ['*.pug'],
            dest: 'dist/html',
            ext: '.html'
        }]
    }
};