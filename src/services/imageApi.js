import axios from "axios";

const key = "13203870-f88321e1576e2ee35198d8add";

const fetchImages = (query, page = 1) => {
  const url = `https://pixabay.com/api/?key=${key}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`;

  return axios
    .get(url)
    .then(data => data.data.hits)
    .catch(err => {
      throw new Error(err);
    });
};

export default fetchImages;
