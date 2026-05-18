import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 720})
        await page.goto("file:///Users/mohitgarg/qback/agents-web/pitch-deck/oden-pitch-deck.html")
        await page.wait_for_timeout(2000)
        await page.pdf(
            path="/Users/mohitgarg/qback/agents-web/pitch-deck/oden-pitch-deck.pdf",
            width="1280px",
            height="720px",
            print_background=True,
            margin={"top": "0", "right": "0", "bottom": "0", "left": "0"},
        )
        await browser.close()
        print("PDF generated successfully")

asyncio.run(main())
