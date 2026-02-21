import puppeteer from 'puppeteer';
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://codepen.io/thingbynemanja/pen/qEbxvmz.js');
const text = await page.evaluate(() => document.body.innerText);
console.log(text);
await browser.close();
