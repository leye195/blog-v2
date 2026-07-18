const FALLBACK_BASE_URL = 'https://www.dantechblog.xyz';

/**
 * @description NEXT_PUBLIC_BASE_URL을 읽어 트레일링 슬래시를 제거한 절대 URL을 반환합니다.
 * 값이 없으면 프로덕션 도메인으로 폴백합니다. metadataBase의 단일 소스로 사용합니다.
 */
export const getBaseUrl = (): string => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? FALLBACK_BASE_URL;
  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
};
