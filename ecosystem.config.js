module.exports = {
    apps : [{
        name: 'gun',
        script: './',
        instances: '2',
        exec_mode: 'cluster'
    }]
}