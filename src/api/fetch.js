const callAPI = async (url, method = 'POST', payload = {}) => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json'
    }
  });
  if(!response.ok){
    const errorData = await response.json();
    throw new Error(errorData.error?.message || 'API Error');
  }
  return await response.json();
};

export const shimmerData = async () => {
  const data = await callAPI('','GET');
}
