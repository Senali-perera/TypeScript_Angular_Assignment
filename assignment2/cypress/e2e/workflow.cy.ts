import {DataUtils, TestDataUtils} from "../../src/app/utils/data-utils";

describe('Dialog box E2E Test', () => {
  it('complete workflow', () => {
    cy.visit('http://localhost:4200/');
    cy.get('button#btn-text-alert').click();
    cy.get('#dialog-title').should('have.text', DataUtils.TEXT_ALERT_TITLE);
    cy.get('#dialog-content').should('have.text', DataUtils.TEXT_ALERT_DESCRIPTION);
    cy.get('#dialog-backdrop').click(0, 0);
    cy.get('button#btn-form-alert').click();
    cy.get('#dialog-title').should('have.text', DataUtils.FORM_ALERT_TITLE);
    cy.get('#fName-lbl').should('have.text', 'First name:');
    cy.get('#fName').type(TestDataUtils.FIRST_NAME);
    cy.get('#lName-lbl').should('have.text', 'Last name:');
    cy.get('#lName').type(TestDataUtils.LAST_NAME);
    cy.window().then((win: Cypress.AUTWindow) => {
      cy.spy(win.console, 'log').as('consoleLog');
    });
    cy.get('button#dialog-custom-btn').click();
    cy.get('@consoleLog').should('be.calledWith', TestDataUtils.FIRST_NAME, TestDataUtils.LAST_NAME);
    cy.get('button#btn-component-alert').click();
    cy.get('#dialog-title').should('have.text', DataUtils.COMPONENT_ALERT_TITLE);
    cy.get('#demo-component-content').should('exist');
    cy.get('button#dialog-custom-btn').should('not.exist');
    cy.get('.dialog-close').click();
  });
})
