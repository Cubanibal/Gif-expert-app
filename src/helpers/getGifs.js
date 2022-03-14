export const getGifs = async (category) => {
  const apiKey = "L1eAjk1QoEIr7kaYJQN9dHXsLhaDEGB3";
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(
    category
  )}&limit=10&offset=0&rating=g&lang=en`;
  const resp = await fetch(apiURL);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
