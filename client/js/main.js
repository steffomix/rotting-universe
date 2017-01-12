/**
 * Created by stefan on 11.01.17.
 */



require(['config', 'postal', 'postalWorker'], function (config, postal, PostalWorker) {


    var worker = new PostalWorker('/js/worker.js');

    postal.subscribe({
        chanel: 'worker',
        topic: '#',
        callback: function(d, e){
            loadGame();
        }
    });

    postal.publish({
        chanel: 'worker',
        topic: 'anz',
        data: postal
    });

    function loadGame(){

    }

});
