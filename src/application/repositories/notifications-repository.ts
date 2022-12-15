import { Notification } from "../../application/entities/notification";

export abstract class NoticationsRepository {
  abstract create(notification: Notification): Promise<void>
}