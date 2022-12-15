import { Notification } from "src/application/entities/notification"
import { NoticationsRepository } from "src/application/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NoticationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
