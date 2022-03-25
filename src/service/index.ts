import swal from 'sweetalert';

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

export const getDetailClass = async (id: string) => {
  try {
    const res = await fetch(`${baseURL}/learning-class?id=${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    return null;
  }
};

export const enrollToClass = async (body: any) => {
  try {
    const response = await fetch(`${baseURL}/join-class`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });
    const data = await response.json();
    return data;
  } catch (err: any) {
    swal(err.message);
    return null;
  }
};

export default baseURL;
