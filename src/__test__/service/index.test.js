import baseURL, { getAvailableClass } from '../../service';

const mockData = {
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

describe('testing getAvailableClass', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('Get data correctly', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));
    const res = await getAvailableClass();
    expect(res).toEqual(mockData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${baseURL}/available-classes`);
  });

  it('returns null when exception', async () => {
    fetch.mockReject(() => Promise.reject('API is down'));
    const res = await getAvailableClass();
    expect(res).toEqual(null);
  });
});
