# 🎭 Playwright

[![npm version](https://img.shields.io/npm/v/playwright.svg)](https://www.npmjs.com/package/playwright) <!-- GEN:chromium-version-badge -->[![Chromium version](https://img.shields.io/badge/chromium-121.0.6167.47-blue.svg?logo=google-chrome)](https://www.chromium.org/Home)<!-- GEN:stop --> <!-- GEN:firefox-version-badge -->[![Firefox version](https://img.shields.io/badge/firefox-121.0-blue.svg?logo=firefoxbrowser)](https://www.mozilla.org/en-US/firefox/new/)<!-- GEN:stop --> <!-- GEN:webkit-version-badge -->[![WebKit version](https://img.shields.io/badge/webkit-17.4-blue.svg?logo=safari)](https://webkit.org/)<!-- GEN:stop -->

## [Playwright - Documentation](https://playwright.dev) | [API reference](https://playwright.dev/docs/api/class-playwright)

Playwright is a framework for Web Testing and Automation. It allows testing [Chromium](https://www.chromium.org/Home), [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [WebKit](https://webkit.org/) with a single API. Playwright is built to enable cross-browser web automation that is **ever-green**, **capable**, **reliable** and **fast**.

Headless execution is supported for all browsers on all platforms. Check out [system requirements](https://playwright.dev/docs/intro#system-requirements) for details.


# @axe-core/playwright

```Shell
Provides a chainable axe API for playwright and automatically injects into all frames
```

## [Ace Core - Documentation](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md) 



--------------------------------------------------------------------------------------


## Installation

1. Clone the repo using below URL
```Shell
https://github.com/malithlk00/playwright_axe.git
```
2. Navigate to the folder and install packages using
```Shell
# Run from your project's root directory
npm install
```
3. Run below command to download required browsers
```Shell
# Run from your project's root directory
npx playwright install
```



### Usage

1. For browser configurations, change required parameters in `playwright.config.ts`

2. To change the URL, update `URL` parameter in .env file
```Shell
URL= "change the url"
```

3. Run test scripts using one of following command
```Shell
npx playwright test axe-test.spec.js
```


