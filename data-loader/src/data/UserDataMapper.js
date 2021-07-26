import _get from 'lodash/get';
import DataMapper from './Abstract/DataMapper';
import DataComposer from './Abstract/DataComposer';

class UserDataComposer extends DataComposer {
  #data;

  constructor(data) {
    super();
    this.#data = data;
  }

  /*************************************************************
   *                           GETTERS                         *
  **************************************************************/
  get address() { return _get(this.#data, 'address', {}); }
  get company() { return _get(this.#data, 'company', {}); }
  get email() { return _get(this.#data, 'email', ''); }
  get id() { return _get(this.#data, 'id', 0); }
  get phone() { return _get(this.#data, 'phone', ''); }
  get username() { return _get(this.#data, 'username', ''); }
  get website() { return _get(this.#data, 'website', ''); }

  compose() {
    return [
      {
        compName: 'TestInput',
        props: {
          title: 'phone',
          v: this.phone,
        }
      },
      {
        compName: 'TestInput',
        props: {
          title: 'username',
          v: this.username,
        }
      },
      {
        compName: 'TestInput',
        props: {
          title: 'website',
          v: this.website,
        }
      }
    ]
  }
}

class UserDataMapper extends DataMapper {
  #datas;

  /**
   * 
   * @param {[UserData]} datas 
   */
  constructor(datas) {
    super();
    this.#datas = datas;
  }

  /**
   * 
   * @returns {array}
   */
  map() {
    return this.#datas.map(data => new UserDataComposer(data).compose());
  }
}

export default UserDataMapper;
