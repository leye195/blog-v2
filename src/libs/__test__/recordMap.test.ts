import { getPageDescription, getPostCoverImage } from '@/libs/utils';

const PAGE_ID = 'page-1';

const textBlock = (id: string, text: string) => ({
  id,
  type: 'text',
  properties: { title: [[text]] },
});

const pageBlock = (id: string, cover?: string) => ({
  id,
  type: 'page',
  format: cover ? { page_cover: cover } : {},
});

// notion-client 7.12(app.notion.com)는 block 레코드를 한 겹 더 감싼다:
//   block[id] = { spaceId, value: { value: <실제 블록>, role } }
// 예전 구조는 block[id] = { role, value: <실제 블록> } 였다.
const nestedRecordMap = {
  block: {
    [PAGE_ID]: { spaceId: 's', value: { value: pageBlock(PAGE_ID, 'https://img/cover.png'), role: 'reader' } },
    b1: { spaceId: 's', value: { value: textBlock('b1', '첫 문단입니다'), role: 'reader' } },
    b2: { spaceId: 's', value: { value: textBlock('b2', '둘째 문단입니다'), role: 'reader' } },
  },
};

const legacyRecordMap = {
  block: {
    [PAGE_ID]: { role: 'reader', value: pageBlock(PAGE_ID, 'https://img/legacy.png') },
    b1: { role: 'reader', value: textBlock('b1', '레거시 문단') },
  },
};

describe('getPageDescription', () => {
  it('reads text blocks from the nested notion-client 7.12 shape', () => {
    expect(getPageDescription(nestedRecordMap)).toBe('첫 문단입니다 둘째 문단입니다');
  });

  it('still reads the legacy flat shape', () => {
    expect(getPageDescription(legacyRecordMap)).toBe('레거시 문단');
  });

  it('truncates at 160 characters', () => {
    const long = 'ㄱ'.repeat(200);
    const recordMap = {
      block: { b1: { value: { value: textBlock('b1', long), role: 'reader' } } },
    };

    const description = getPageDescription(recordMap) as string;

    expect(description).toHaveLength(163);
    expect(description.endsWith('...')).toBe(true);
  });

  it('returns undefined when there is no text', () => {
    expect(getPageDescription({ block: {} })).toBeUndefined();
  });
});

describe('getPostCoverImage', () => {
  it('reads page_cover from the nested shape', () => {
    expect(getPostCoverImage(nestedRecordMap, PAGE_ID)).toBe('https://img/cover.png');
  });

  it('still reads the legacy flat shape', () => {
    expect(getPostCoverImage(legacyRecordMap, PAGE_ID)).toBe('https://img/legacy.png');
  });

  it('returns undefined when the page has no cover', () => {
    const recordMap = { block: { [PAGE_ID]: { value: { value: pageBlock(PAGE_ID), role: 'reader' } } } };

    expect(getPostCoverImage(recordMap, PAGE_ID)).toBeUndefined();
  });
});
