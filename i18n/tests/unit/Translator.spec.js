import Translator from '../../src/i18n/Translator';
import commonFile from '../../src/lang/common.json';

describe('Mediator test', () => {
  let translator;

  beforeEach(() => {
    translator = new Translator('en');
  });

  describe('_getCommonFiles & _getInternationals test', () => {
    it('test1', () => {
      const toBe = {
        HEADER: 'LVUP X LOL'
      };
      expect(
        translator._getJsonFile(commonFile)._getInternationals()
      ).toMatchObject(toBe);
    });
  });
});
