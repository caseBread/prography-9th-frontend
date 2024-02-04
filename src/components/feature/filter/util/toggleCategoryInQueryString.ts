export const toggleCategoryInQueryString = (
  queryStringCategory: string | null,
  category: string
): string => {
  // null 체크를 수행하고 기존 queryStringCategory를 쉼표로 분할하여 배열로 만듭니다.
  const categoryList = queryStringCategory
    ? queryStringCategory.split(",")
    : [];

  // 새로운 카테고리를 추가하거나 제거합니다.
  const updatedCategoryList = categoryList.includes(category)
    ? categoryList.filter((item) => item !== category)
    : [...categoryList, category];

  // 합쳐진 값을 다시 문자열로 변환하여 반환합니다.
  return updatedCategoryList.join(",");
};
