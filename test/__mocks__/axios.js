module.exports = {
  get: jest.fn(() => Promise.resolve({ data: [{ sizes: ['test'] }] })),
};
