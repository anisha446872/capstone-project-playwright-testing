const { test, expect } =
require('@playwright/test');

test.describe('API Testing Module', () => {

  test('GET Posts API', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

    expect(response.status()).toBe(200);

  });

  test('GET Single Post API', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

    expect(response.ok()).toBeTruthy();

  });

  test('Validate Post ID', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

    const body = await response.json();

    expect(body.id).toBe(1);

  });

  test('Validate User ID Exists', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

    const body = await response.json();

    expect(body.userId)
      .toBeTruthy();

  });

  test('POST Create Post API', async ({ request }) => {

    const response =
      await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          data: {
            title: 'Playwright',
            body: 'API Testing',
            userId: 1
          }
        }
      );

    expect(response.status()).toBe(201);

  });

  test('PUT Update Post API', async ({ request }) => {

    const response =
      await request.put(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
          data: {
            id: 1,
            title: 'Updated Title',
            body: 'Updated Body',
            userId: 1
          }
        }
      );

    expect(response.ok()).toBeTruthy();

  });

  test('DELETE Post API', async ({ request }) => {

    const response =
      await request.delete(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

    expect(response.status()).toBe(200);

  });

  test('Validate Response Title', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

    const body = await response.json();

    expect(body.title)
      .toBeTruthy();

  });

  test('Validate Response Body', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

    const body = await response.json();

    expect(body.body)
      .toBeTruthy();

  });

  test('Validate Content Type', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

    expect(
      response.headers()['content-type']
    ).toContain('application/json');

  });

  test('Validate API Response Time', async ({ request }) => {

    const start = Date.now();

    await request.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    const end = Date.now();

    expect(end - start)
      .toBeLessThan(3000);

  });

  test('Validate Array Response', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

    const body = await response.json();

    expect(Array.isArray(body))
      .toBeTruthy();

  });

  test('Validate Response Header Exists', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

    expect(response.headers())
      .toBeTruthy();

  });

  test('Validate Status Code 200', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

    expect(response.status()).toBe(200);

  });

  test('Validate API Response Object', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

    const body = await response.json();

    expect(body)
      .toBeTruthy();

  });

  test('Validate Post Contains Title', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

    const body = await response.json();

    expect(body)
      .toHaveProperty('title');

  });

  test('Validate Post Contains Body', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

    const body = await response.json();

    expect(body)
      .toHaveProperty('body');

  });

  test('Validate Post Contains UserId', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

    const body = await response.json();

    expect(body)
      .toHaveProperty('userId');

  });

  test('Validate Total Posts Returned', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

    const body = await response.json();

    expect(body.length)
      .toBeGreaterThan(0);

  });

  test('Validate Response Is JSON', async ({ request }) => {

    const response =
      await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

    expect(
      response.headers()['content-type']
    ).toContain('application/json');

  });

});