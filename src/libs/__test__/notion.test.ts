// @vitest-environment node
import { getNotionPage } from '@/libs/notion';

const PAGE_ID = '37f8cb44-979a-80ec-a050-df11736b16ae';

type CapturedRequest = { url: string; headers: Record<string, string> };

describe('getNotionPage', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  // notion-client 7.12.0 미만에서는 User-Agent 없이 요청해 Cloudflare가 403으로 막았고,
  // 도메인도 폐기 예정인 www.notion.so였다. 다운그레이드나 회귀를 잡기 위한 가드다.
  // 참고: https://github.com/NotionX/react-notion-x/issues/710
  it('requests the official domain with a User-Agent', async () => {
    // getPage는 실패한 요청을 재시도하므로, 완료를 기다리면 재시도 횟수에 따라 소요 시간이
    // 달라진다. 첫 요청이 관측되는 즉시 단언하도록 해서 타이밍 의존을 없앤다.
    let captureFirstRequest: (request: CapturedRequest) => void;
    const firstRequest = new Promise<CapturedRequest>((resolve) => {
      captureFirstRequest = resolve;
    });

    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
        const request = new Request(input, init);
        captureFirstRequest({
          url: request.url,
          headers: Object.fromEntries(request.headers.entries()),
        });
        throw new Error('stubbed network');
      }),
    );

    void getNotionPage(PAGE_ID).catch(() => undefined);

    const { url, headers } = await firstRequest;

    expect(headers['user-agent']).toBeTruthy();
    expect(url).toContain('notion.com');
  });
});
