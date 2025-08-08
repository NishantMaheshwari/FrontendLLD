const callAPI = async (url, method = 'POST', payload = {}) => {
  const options = {
    method,
    headers: {
      'Content-type': 'application/json'
    }
  }
  if (method !== 'GET') {
    options.body = JSON.stringify(payload);
  }
  const response = await fetch(url, options);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || 'API Error');
  }
  const data = await response.json();
  return data;
};

export const fetchShimmerData = async (amountOfMemes = 20) => {
  try {
    const data = await callAPI(`https://meme-api.com/gimme/${amountOfMemes}`, 'GET');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const fetchPaginationData = async (limit = 10, skip = 0) => {
  try {
    const response = callAPI(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=id,title,price,description,thumbnail`,'GET');
    return response;
  } catch (error) {
    console.log(error);
  }
}
