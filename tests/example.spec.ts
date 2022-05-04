import { expect, test } from '@playwright/test';

test.describe.parallel('generate all tests', () => {
  test(`testing roomselector`, async ({ page }) => {
    await page.goto(
      `http://host.docker.internal:6006/iframe.html?id=example-button--secondary&args=&viewMode=story`
    );
    await page.addStyleTag({
      content: `*,
									*::before,
									*::after {
									-moz-animation: none !important;
									-moz-transition: none !important;
									animation: none !important;
									caret-color: transparent !important;
									transition: none !important;
									}`,
    });
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      `button.png`
    );
  });

  test(`testing receipt page playwright`, async ({ page }) => {
    await page.goto(
      `http://host.docker.internal:6006/iframe.html?id=example-header--logged-in&args=&viewMode=story`
    );
    await page.addStyleTag({
      content: `*,
									*::before,
									*::after {
									-moz-animation: none !important;
									-moz-transition: none !important;
									animation: none !important;
									caret-color: transparent !important;
									transition: none !important;
									}`,
    });
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      `header.png`
    );
  });
});
