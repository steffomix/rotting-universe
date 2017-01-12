/**
 * Created by stefan on 12.01.17.
 */

define(['postal'], function (postal) {


    function PostalWorker(script, worker) {

        if (!worker) {
            worker = new Worker(script);
            // start worker
            worker.postMessage('');
        }

        // forward incoming messages
        worker.addEventListener('message', function (e) {
            e.data && postal.publish(e.data);
        });

        // forward outgoing messages
        this.publish = function (post) {
            worker.postMessage(post);
        }

    }

    return PostalWorker;

});
