const savedNewsKey = "savedNews";

export const getSavedNews = () => {
  const savedNewsData = localStorage.getItem(savedNewsKey);
  if (savedNewsData) {
    return JSON.parse(savedNewsData);
  }
  return [];
};

export const saveNews = (news) => {
  const savedNewsData = getSavedNews();
  const updatedNewsData = [...savedNewsData, news];
  localStorage.setItem(savedNewsKey, JSON.stringify(updatedNewsData));
};

export const removeNews = (newsId) => {
  const savedNewsData = getSavedNews();
  const updatedNewsData = savedNewsData.filter((item) => item.id !== newsId);
  localStorage.setItem(savedNewsKey, JSON.stringify(updatedNewsData));
};
