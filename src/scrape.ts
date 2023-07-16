import puppeteer from 'puppeteer';

const nameSelector = 'h1';

async function fetchPage() {
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: null,
	});
	const page = await browser.newPage();
	await page.goto('https://www.linkedin.com/in/nathan-djian-martin/');
	await page.waitForSelector('h1');

	const data = await page.evaluate(() => {
		const name = document.querySelector(nameSelector)?.innerText;
		return name;
	});

	return data;
}
fetchPage();