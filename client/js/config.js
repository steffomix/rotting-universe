/**
 * Created by stefan on 11.01.17.
 */


(function (global, undefined) {

    var config = {
        requirejs: {
            baseUrl: '/js/',
            paths: {
                // third party libs
                jquery: 'bower/jquery/dist/jquery',
                backbone: 'bower/backbone/backbone',
                lodash: 'bower/lodash/lodash',
                machina: 'bower/machina/lib/machina',
                socket: 'bower/socket.io/lib/client',
                seedRandom: 'bower/seedrandom/seedrandom',
                postal: 'bower/postal.js/lib/postal',
                __postalWhen: 'bower/postal.when/lib/postal.when',
                __postalRequestResponse: 'bower/postal.request-response/lib/postal.request-response',
                __postaldiags: 'bower/postal.diagnostics.js/lib/postal.diagnostics',
                conduitjs: 'bower/conduitjs/lib/conduit.min',


                // own libs or libs based on third party libs
                postalWorker: 'lib/postal-worker',
                noise: 'lib/noise',

                // game window
                'event-dispatcher': 'eventDispatcher'

            }
        }


    };

    require.config(config.requirejs);


    // about the war of libs :
    // eeny, meeny, miny, moe,
    // catch a tiger by his toe,
    // if he hollers let him go,
    // eeny, meeny, miny, moe.
    // my mother told me to catch the very best one and you are not it.
    define('underscore', ['lodash'], function(_){
        return _;
    });


    define('config', [
        'postal',
        '__postaldiags',
        '__postalRequestResponse',
        '__postalWhen',
        'backbone',
        'lodash'], function (postal) {


        // We need to tell postal how to get a deferred instance
        postal.configuration.promise.createDeferred = function () {
            return new $.Deferred();
        };
        // We need to tell postal how to get a "public-facing"/safe promise instance
        postal.configuration.promise.getPromise = function (dfd) {
            return dfd.promise();
        };

    });


})(this);






