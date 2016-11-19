/**
 * Static HTTP Server
 *
 * Create a static file server instance to serve files
 * and folder in the './public' folder
 */

// modules
var static = require( 'node-static' ),

    port = 8080,

    http = require( 'http' );

// config
var file = new static.Server( './app', {

    cache: 3600,

    gzip: true

} );


console.log('Running server on http://localhost:' + port);

console.log('Press Ctrl + C to stop server');
// serve
http.createServer( function ( request, response ) {



    request.addListener( 'end', function () {



        file.serve( request, response );

    } ).resume();

} ).listen( port );
