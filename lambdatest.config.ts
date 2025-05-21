// playwright.config.ts for LambdaTest WebSocket
import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'LambdaTest-Chrome',
      use: {
        browserName: 'chromium',
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=` + encodeURIComponent(JSON.stringify({
            browserName: 'Chrome',
            browserVersion: 'latest',
            'LT:Options': {
              platform: 'Windows 10',
              build: 'Playwright Parallel Build',
              name: 'Chrome Test',
              user: 'angelshrestha93',
              accessKey: 'LT_7mpDLHGPQul7462JTIxifLgGk34DsOZLaK4aazPz52ZXZiz',
              video: true,
              network: true,
              console: true
            }
          })),
        }
      },
    },
    {
      name: 'LambdaTest-Firefox',
      use: {
        browserName: 'firefox',
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=` + encodeURIComponent(JSON.stringify({
            browserName: 'Firefox',
            browserVersion: 'latest',
            'LT:Options': {
              platform: 'macOS Catalina',
              build: 'Playwright Parallel Build',
              name: 'Firefox Test',
              user: 'YOUR_USERNAME',
              accessKey: 'YOUR_ACCESS_KEY',
              video: true,
              network: true,
              console: true
            }
          })),
        }
      }
    }
  ],
  timeout: 60000
});
