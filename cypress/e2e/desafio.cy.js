describe('Desafio de Automação', () => {
  // Dados de teste
  const firstName = 'Jaderson';
  const lastName = 'Nascimento';
  const email = 'jadersonnascimento@gmail.com';
  const company = 'Desafio';
  const role = 'other';
  const language = 'Python';
  const confirmationText = 'Almost there …';
  const invalidPassword = '12365478';
  const errorText = 'There was a problem with your login.';

  // Executa antes de cada teste
  beforeEach(() => {
    cy.visit('https://id.heroku.com/login');
  });

  it('página de cadastro', () => {
    // Clicar no botão "Sign Up"
    cy.contains('span', 'Sign Up').should('be.visible').click();

    // Aguarde 2 segundos
    cy.wait(2000); // 2000 milissegundos = 2 segundos

    // Verifica se o popup com o texto "Aceitar todos os cookies" está presente
    cy.get('body').then(($body) => {
      if ($body.find('button').filter((_, el) => Cypress.$(el).text().includes('Aceitar todos os cookies')).length) {
        cy.contains('button', 'Aceitar todos os cookies').click();
      }
    });

    // Preencher os campos do formulário
    cy.get('#first_name').should('be.visible').type(firstName);
    cy.get('#last_name').should('be.visible').type(lastName);
    cy.get('#email').should('be.visible').type(email);
    cy.get('#company').should('be.visible').type(company);

    // Selecionar opções
    cy.get('#role').scrollIntoView().should('be.visible').select(role);
    cy.get('#main_programming_language').scrollIntoView().should('be.visible').select(language);

    // Clicar no botão de submit
    cy.get('[name="commit"]').should('be.visible').click();

    // Verificar o texto de confirmação
    cy.contains(confirmationText, { timeout: 10000 }).should('be.visible');
  });

  it('página de Login - Dados Inválidos', () => {
    // Aguarde 2 segundos
    cy.wait(2000); // 2000 milissegundos = 2 segundos

    // Verifica se o popup com o texto "Aceitar todos os cookies" está presente
    cy.get('body').then(($body) => {
      if ($body.find('button').filter((_, el) => Cypress.$(el).text().includes('Aceitar todos os cookies')).length) {
        cy.contains('button', 'Aceitar todos os cookies').click();
      }
    });

    // Preencher o campo com id "email" com o valor de teste
    cy.get('#email').should('be.visible').type(email);

    // Preencher o campo de senha com dados inválidos
    cy.get('#password').should('be.visible').type(invalidPassword);

    // Submeter o formulário clicando no botão com name="commit"
    cy.get('[name="commit"]').click();

    // Validar a mensagem de erro
    cy.get('div.alert.alert-danger')
      .should('be.visible')
      .should('contain.text', errorText);
  });
});

