/**
 * @returns {array}
 */
const getTestData = ({ name, gender, type = 'default' }) => {
  if (type === 'claire') {
    return [
      {
        compName: 'Test1',
        propsData: {
          name
        }
      }
    ];
  }
  return [
    {
      id: 0,
      compName: 'Test1',
      propsData: {
        name
      }
    },
    {
      id: 1,
      compName: 'Test2',
      propsData: {
        gender
      }
    }
  ];
};

export default getTestData;
