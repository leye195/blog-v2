import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { getBaseUrl } from '@/libs/url';

describe('getBaseUrl', () => {
  const original = process.env.NEXT_PUBLIC_BASE_URL;

  afterEach(() => {
    process.env.NEXT_PUBLIC_BASE_URL = original;
  });

  it('falls back to the production domain when the env var is unset', () => {
    delete process.env.NEXT_PUBLIC_BASE_URL;
    expect(getBaseUrl()).toBe('https://www.dantechblog.xyz');
  });

  it('strips a trailing slash', () => {
    process.env.NEXT_PUBLIC_BASE_URL = 'https://www.dantechblog.xyz/';
    expect(getBaseUrl()).toBe('https://www.dantechblog.xyz');
  });

  it('returns the env value unchanged when it has no trailing slash', () => {
    process.env.NEXT_PUBLIC_BASE_URL = 'http://localhost:3000';
    expect(getBaseUrl()).toBe('http://localhost:3000');
  });

  it('falls back to the production domain when the env var is an empty string', () => {
    process.env.NEXT_PUBLIC_BASE_URL = '';
    expect(getBaseUrl()).toBe('https://www.dantechblog.xyz');
  });
});
