import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
  test('should be able to create a notification', () => { // TESTE: deve ser capaz de criar um conteúdo de notificação
    const notification = new Notification({
      content: new Content('Nova Solicitação de amizade'),
      category: 'social',
      recipientId: 'Example-recipient-Id',
    });
  
    expect(notification).toBeTruthy(); 
  })
})