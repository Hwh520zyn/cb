(() => {
    const ROOT = '../../'
    require.config({
        urlArgs: 't=' + +new Date(),
        baseUrl: ROOT + 'js',
        paths:{
            jquery:'jquery',
            rem: 'rem',
        },
        exclude: [
            'jquery', 'rem'
        ],
    })
   
})