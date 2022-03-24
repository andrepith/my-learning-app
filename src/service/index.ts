const baseURL = 'https://baee0c5d-15e7-45e2-ae1b-392ba74406a9.mock.pstmn.io';

export const getAvailableClass = async () => {
  try {
    const res = await fetch(`${baseURL}/available-classes`);
    const data = await res.json();
    return data;
  } catch (err) {
    return null;
  }
};

export default baseURL;
