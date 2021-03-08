const getTestData = ({ name, gender }) => [
  {
    id: 0,
    compName: 'Test1',
    props: {
      name
    },
    vModel: {
      address: 'TEST'
    },
    className: ['mb', 'mt']
  },
  {
    id: 1,
    compName: 'Test2',
    props: {
      gender
    }
  }
];

export default getTestData;
