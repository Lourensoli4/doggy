import Header from '../components/header';

describe('heading', (): void => {
  it('heading', (): void => {
    expect.assertions(1);
    expect(new Header({}).title).toStrictEqual('Doggy Identification Application');
  });
});

describe('paragraph', (): void => {
  it('paragraph', (): void => {
    expect.assertions(1);
    expect(new Header({}).paragraph).toStrictEqual('Upload an image below to identify a dog!');
  });
});
