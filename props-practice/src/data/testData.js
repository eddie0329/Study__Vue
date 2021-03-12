const getTestData = ({ name, gender, onClick }) => [
  {
    id: 0,
    compName: 'Test1',
    props: {
      name
    },
    vModel: {
      address: 'TEST'
    },
    className: ['mb', 'mt'],
    events: {
      click: onClick
    }
  },
  {
    id: 1,
    compName: 'Test2',
    props: {
      gender
    },
    events: {
      onChange: onClick
    }
  }
];

export default getTestData;
