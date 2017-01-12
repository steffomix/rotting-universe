/**
 * Created by stefan on 11.01.17.
 */


self.importScripts('/js/bower/requirejs/require.js');
self.importScripts('/js/config.js');

define('main', ['postal', 'postalWorker'], function(postal, PostalWorker){

    var window = new PostalWorker('', self);

    window.publish({
        chanel: 'worker',
        topic: 'workerReady',
        data: 'worker is ready'
    })

});

require(['main'], function(main){

});
