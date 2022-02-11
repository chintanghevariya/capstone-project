const { ObjectId } = require("mongodb");
const notificationModel = require("../models/notification");

class NotificationService {
    async getUserNotifications(user) {
        console.log(user._id);
        const notifications = await notificationModel.find({
            forUser: new ObjectId(user._id),
        });
        return notifications;
    }
}

module.exports = new NotificationService();
