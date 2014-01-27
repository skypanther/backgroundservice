var service = Ti.App.iOS.registerBackgroundService({url:'bg-service.js'});
if(service) {
    // service was registered, otherwise var would be undefined/falsy
    $.label.text = "Background service registered. Press Home to pause the application.";
}

Ti.App.addEventListener('resumed', function() {
    var count = Ti.App.Properties.getInt('bg-svc-count', 0);
    if(count>0) {
        $.label.text = 'bg-service ran ' + count + ' times in the background.';
    }
});





$.index.open();
