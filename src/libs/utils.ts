import { type notionDBRowStructed as Post } from "@/types/notion";

/**
 * @description breakpoint의 미디어 쿼리 조건만 반환합니다(useMedia에서 사용)
 * @param mediaQuery 미디어 쿼리
 */
export const getBreakpointQuery = (mediaQuery: string): string => {
  return mediaQuery.replace(/@media /, "");
};

/**
 * @description 넘겨받은 문자열을 PascalCase로 변환해줍니다.
 * @param value
 */
export const convertPascalCase = (value: string) =>
  value
    ? value.replace(/\w+/g, (word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      })
    : "";

/**
 * @description 1,000단위 콤마
 * @param num
 */
export const setComma = (num: number): string =>
  num.toLocaleString(undefined, { maximumFractionDigits: 4 });

export const classnames = (...classnames: string[]) => {
  return classnames.join(" ");
};

/**
 *
 * @param data posts 배열 데이터
 * @param category 카테고리 정보
 * @returns
 */
export const getPostsByCategory = (data: Post[], category: string) => {
  if (category === "all") return data;
  return data.filter(({ tag }) => tag.some(({ name }) => name === category));
};
