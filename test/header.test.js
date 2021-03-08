
const Page = require('./helpers/page');


let page;

beforeEach(async () => {
    page = await Page.build();
    await page.goto("http://localhost:3000");
});

afterEach(async () => {
    await page.close();
})

test("the header has the correct text", async () => {
    // const text = await page.$eval('a.brand-logo', el => el.innerHTML);
    const text = await page.getContentsOf('a.brand-logo');
    expect(text).toEqual('Blogster')
});

test('clicking logins starts oauth flow', async () => {
    await page.waitForSelector('.right a')
    await page.click('.right a');
    const url = await page.url();
    expect(url).toMatch(/accounts.\google.\com/);
});

test.only("shows logout button when signed in", async () => {
    await page.login();
    const btnText = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);
    expect(btnText).toEqual('Logout');
});