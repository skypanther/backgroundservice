var count = Ti.App.Properties.getInt("bg-svc-count", 0);

count > 4 && (count = 0);

count++;

Ti.App.Properties.setInt("bg-svc-count", count);

if (count > 4) {
    Ti.App.currentService.unregister();
    var finalNotif = Ti.App.iOS.scheduleLocalNotification({
        alertBody: "bg-service has run > 4 times, it's been unregistered and won't run until you kill/relaunch the app",
        date: new Date(new Date().getTime() + 1e3)
    });
    Ti.App.Properties.setInt("bg-svc-count", 0);
} else var curNotif = Ti.App.iOS.scheduleLocalNotification({
    alertBody: "bg-service has been invoked " + count + " times. It will run again when the app is backgrounded",
    date: new Date(new Date().getTime() + 1e3)
});