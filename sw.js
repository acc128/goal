self.addEventListener('install', () => {
    skipWaiting();
});

async function askUserPermission() {
    return await Notification.requestPermission();
  }

addEventListener('message', async (event) => {
    const data = event.data;
    
    // notifs not supported
    if (!('showTrigger' in Notification.prototype)) {
        return;
    }

    // check if it was already scheduled
    const notifs = Notifications.getNotifications({includeTriggered: true});
    if(Array.isArray(notifs) && notifs.length > 1) return;

    // ask for user permission and schedule it
    console.log("SChedule notif");
    await askUserPermission();
    console.log("Scheduling");
    const tomorrow = (new Date()).addDays(1);
    const tomorrowMorning = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 09, 00, 00, 00);
    Notification.showNotification("Morning notification", {
        tag: Math.random().toString(),
        body: "Good morning! Take this opportunity to view your goals for today!",
        showTrigger: new TimestampTrigger(tomorrowMorning.getTime()),
        icon: "/logo-256x256.png"
    });
});