import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";
import ArticleAPIService from "./ArticleAPI.service";
import client from "../../tests/mocks/APIClient.mock";
import { FetchArticleMock, FetchArticleSlugMock } from "../../tests/mocks/fetchArticle.mock";

const server = setupServer(
	rest.get("/", (req, res, ctx) => {
		return res(ctx.json(FetchArticleMock));
	}),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("It should fetch Article from the server", async () => {
	ArticleAPIService(FetchArticleSlugMock, client).then(res => {
		expect(res.status).toEqual(200);
		expect(res.data).toBe(FetchArticleMock);
	});
});
