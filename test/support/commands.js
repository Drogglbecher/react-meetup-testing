export const fillLoginForm = (name, password) => {
  cy.get("Form")
    .find("#rt-authentication-username-input")
    .type(name);
  cy.get("Form")
    .find("#rt-authentication-password-input")
    .type(password);
  cy.get("Form")
    .find("button")
    .click();
};
