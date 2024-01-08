const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default; // 1
import { createHtmlReport } from 'axe-html-reporter';

test.describe('Validate webpage with Axe', () => { 
  test('should automatically detect accessibility issues', async ({ page }) => {


    await page.goto(process.env.URL); 

    const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']) // you can add the tags here
    .analyze();


    // this will create the html report using the json report generated above
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        projectKey: 'Axe-Report',
        outputDir: 'axe-reports',
        reportFileName: 'axeReport.html',
    },
  });

    console.log(accessibilityScanResults);
  });
});