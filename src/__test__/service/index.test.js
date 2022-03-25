import baseURL, { getAvailableClass, getDetailClass } from '../../service';

const mockClass = {
  items: [
    {
      id: 1,
      name: 'Belajar Javascript Dasar',
    },
    {
      id: 2,
      name: 'Belajar CSS Dasar',
    },
  ],
};

const mockDetail = {
  id: 1,
  name: 'Belajar Javascript Dasar',
  mentors: [
    {
      id: 1,
      name: 'Andi',
      description: 'Engineer Company 1',
    },
    {
      id: 2,
      name: 'Budi',
      description: 'Engineer Company 2',
    },
  ],
  description: 'Belajar Javascript Dasar bersama Andi dan Budi',
};

describe('testing getAvailableClass', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('Get data correctly', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockClass));
    const res = await getAvailableClass();
    expect(res).toEqual(mockClass);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${baseURL}/available-classes`);
  });

  it('returns null when exception', async () => {
    fetch.mockReject(() => Promise.reject('API is down'));
    const res = await getAvailableClass();
    expect(res).toEqual(null);
  });
});

describe('testing detail class', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('Get data correctly', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockDetail));
    const res = await getDetailClass(1);
    expect(res).toEqual(mockDetail);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${baseURL}/learning-class?id=1`);
  });
  it('returns null when exception', async () => {
    fetch.mockReject(() => Promise.reject('API is down'));
    const res = await getDetailClass(1);
    expect(res).toEqual(null);
  });
});
