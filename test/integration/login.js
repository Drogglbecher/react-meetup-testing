import { fillLoginForm } from "./../support/commands";
describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("logins in succesfully", () => {
    fillLoginForm("name", "name");
    cy.url().should("include", "/home");
    cy.get("#rt-user-container").should("contain", "Hi, name");
  });
  it("logs out in succesfully", () => {
    fillLoginForm("name", "name");
    cy.get("#rt-user-container").should("contain", "Hi, name");
    cy.get("#rt-logout-button").click();
    cy.url().should("include", "/auth");
    cy.get("Form").should("exist");
  });

  it("shows error on failed login", () => {
    fillLoginForm("name", "password");
    cy.get("#rt-authentication-error").should(
      "contain",
      "Username and password are not the same."
    );
  });
});
