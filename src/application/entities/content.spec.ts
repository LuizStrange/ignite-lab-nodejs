import { Content } from "./content"

describe('Notification Content', () => {
test('it should be able to create a notification content', () => { // TESTE: deve ser capaz de criar um conteúdo de notificação
  const content = new Content('Você recebeu uma solicitação de amizade')

  expect(content).toBeTruthy(); 
})

test('it should not be able to create a notification content width less than 5 characters', () => { // TESTE: não deve ser capaz de criar uma largura de conteúdo de notificação inferior a 5 caracteres
  expect(() => new Content('aaa')).toBeTruthy(); 
})

test('it should not be able to create a notification content width more than 240 characters', () => { // TESTE: não deve ser capaz de criar uma largura de conteúdo de notificação com mais de 240 caracteres
  expect(() => new Content('a'.repeat(241))).toBeTruthy(); 
})
});
