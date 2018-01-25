module.exports = {
    // Production settings
    prod: {
        files: [{
            expand: true,
            /*cwd: 'views',*/
            src: ['views/*.pug'],
            dest: 'public/html',
            ext: '.html'
        }]
    }
};