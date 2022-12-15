import { SendNotification } from "./send-notification"
import { Notification } from "../entities/notification"
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository"

describe('Send Notification', () => {
  test('should be able to send a notification', async () => {
    const noticationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(noticationsRepository)

    const { notification } = await sendNotification.execute({
      content: 'This Is a notification',
      category: 'social',
      recipientId: 'exemple-recipient-Id',
    });

    expect(noticationsRepository.notifications).toHaveLength(1);
    expect(noticationsRepository.notifications[0]).toEqual(notification)
  })
})