import Mediator from '../../src/i18n/Mediator';

describe('Mediator test', () => {
  let mediator;

  beforeEach(() => {
    mediator = new Mediator('en');
  });

  describe('_getCommonFiles & _getInternationals test', () => {
    it('test1', () => {
      const toBe = {
        HEADER: 'LVUP X LOL'
      };
      mediator._getCommonFiles();
      expect(mediator._getInternationals()).toMatchObject(toBe);
    });
  });

  describe('_getFiles test', () => {
    it('invalid filename test', () => {
      try {
        mediator._getFiles('123');
      } catch (error) {
        expect(error.message).toEqual(
          'i18n error: require validate filename: 123'
        );
      }
    });

    // it('valid filename test', () => {
    //   mediator._getFiles('greetings', 'arena.json');
    //   const toBe = {
    //     HEADER: 'LVUP X LOL',
    //     GREETING: 'hello',
    //     MY_ARENA: 'My Arena'
    //   };
    //   expect(mediator._getInternationals()).toMatchObject(toBe);
    // });
  });
});
