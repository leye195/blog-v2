// @vitest-environment node
import { getNotionPage } from '@/libs/notion';

const PAGE_ID = '37f8cb44-979a-80ec-a050-df11736b16ae';

describe('getNotionPage', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  // notion-client 7.12.0 미만에서는 User-Agent 없이 요청해 Cloudflare가 403으로 막았고,
  // 도메인도 폐기 예정인 www.notion.so였다. 다운그레이드나 회귀를 잡기 위한 가드다.
  // 참고: https://github.com/NotionX/react-notion-x/issues/710
  it('requests the official domain with a User-Agent', async () => {
    let firstRequest: { url: string; headers: Record<string, string> } | undefined;

    // 첫 요청만 포착하고 즉시 실패시켜, getPage의 후속 요청 루프를 타지 않게 한다.
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
        const request = new Request(input, init);
        firstRequest ??= {
          url: request.url,
          headers: Object.fromEntries(request.headers.entries()),
        };
        throw new Error('stubbed network');
      }),
    );

    await getNotionPage(PAGE_ID).catch(() => undefined);

    expect(firstRequest).toBeDefined();
    expect(firstRequest?.headers['user-agent']).toBeTruthy();
    expect(firstRequest?.url).toContain('notion.com');
  });
});
