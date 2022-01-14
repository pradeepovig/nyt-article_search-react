import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";
import client from "../../tests/mocks/APIClient.mock";
import SearchAPIService from "./SearchAPI.service";
import FetchArticlesMock from "../../tests/mocks/fetchArticles.mock";

const server = setupServer(
	rest.get("/", (req, res, ctx) => {
		return res(ctx.json(FetchArticlesMock));
	}),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("It should fetch Articles from the server against a search query", async () => {
	SearchAPIService("Test", 0, client).then(res => {
		expect(res.status).toEqual(200);
		expect(res.data).toBe(FetchArticlesMock);
	});
});
