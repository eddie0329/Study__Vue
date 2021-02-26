import _reduce from 'lodash/reduce';
import I18nErrors, { errorTypes } from '../i18n/I18nErrors';

const LANG_PATH = '@/lang';

export default class Mediator {
  constructor(lang) {
    if (!lang) throw new I18nErrors(errorTypes.NO_LANG);
    this.lang = lang;
    this.internationals = {};
    return this;
  }

  _getCommonFiles() {
    const commonFile = require(`${LANG_PATH}/common`);
    this._parseLang(commonFile);
    return this;
  }

  _parseLang(jsonFile) {
    this.internationals = Object.assign(
      _reduce(
        jsonFile,
        (result, value, key) => {
          result[key] = value[this.lang];
          return result;
        },
        {}
      ),
      this.internationals
    );
    return this;
  }

  _getJsonFile(...args) {
    args.forEach(file => {
      this._parseLang(file);
    });
    return this;
  }

  _getFiles(...args) {
    args.forEach(filename => {
      if (typeof filename !== 'string')
        throw new I18nErrors(errorTypes.NON_STRING);
      try {
        const jsonFile = require(`${LANG_PATH}/${filename}`);
        this._parseLang(jsonFile);
      } catch (_) {
        throw new I18nErrors(errorTypes.NOT_FOUND, filename);
      }
    });
    return this;
  }

  _getInternationals() {
    return this.internationals;
  }
}
