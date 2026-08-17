// @vitest-environment node
import { getNotionPage } from '@/libs/notion';

const PAGE_ID = '37f8cb44-979a-80ec-a050-df11736b16ae';

describe('getNotionPage', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  // notion.so는 Cloudflare 뒤에 있고, User-Agent 없는 요청은 403 HTML 챌린지로 막힌다.
  // notion-client는 기본적으로 accept/content-type만 보내므로 직접 넣어줘야 한다.
  it('sends a User-Agent so Cloudflare does not reject the request', async () => {
    let firstRequestHeaders: Record<string, string> | undefined;

    // 첫 요청 헤더만 포착하고 즉시 실패시켜, getPage의 후속 요청 루프를 타지 않게 한다.
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
        firstRequestHeaders ??= Object.fromEntries(new Request(input, init).headers.entries());
        throw new Error('stubbed network');
      }),
    );

    await getNotionPage(PAGE_ID).catch(() => undefined);

    expect(firstRequestHeaders).toBeDefined();
    expect(firstRequestHeaders?.['user-agent']).toBeTruthy();
  });
});
