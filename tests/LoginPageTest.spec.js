import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Page Tests", { tag: ["@regression", "@smoke"] }, () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    loginPage.navigateToLoginPage();
  });

  test(
    "Successful login with credentials",
    { tag: "@p0" },
    async ({ page }) => {
      await loginPage.doLogin(process.env.USERNAME, process.env.PASSWORD);
      await expect(page).toHaveURL("https://demoblaze.com/");
    }
  );

  const failedLoginData = [
    {
      username: "Gregoire",
      password: "123435",
      expectedMessage: "Please fill out Username and Password.",
      tag: "@p1",
    },
    {
      username: "",
      password: "",
      expectedMessage: "Please fill out Username and Password.",
      tag: "@p2",
    },
  ];

  for (const data of failedLoginData) {
    test(`Failed login with username: "${data.username}" and password: "${data.password}"`, async ({
      page,
    }) => {
      page.once("dialog", async (dialog) => {
        expect(dialog.message()).toContain(data.expectedMessage); // or expected text
        await dialog.accept(); // close popup
      });
      await loginPage.doLogin(data.username, data.password);
    });
  }
});
