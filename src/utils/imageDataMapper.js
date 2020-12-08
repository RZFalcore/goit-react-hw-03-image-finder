const imageDataMapper = imgs => {
  return imgs.map(({ id, webformatURL, largeImageURL }) => {
    return { id, webformatURL, largeImageURL };
  });
};

export default imageDataMapper;
