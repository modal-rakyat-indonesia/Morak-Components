const listCardWithTimeData = [{
  id: 1,
  date: '2018-03-20 10:00:00',
  title: 'Pendanaan Baru',
  subtitle: 'Debit',
  type: 'debit',
  amount: 5600000,
  action: () => {
    console.warn(1);
  }
}, {
  id: 2,
  date: '2018-03-20 10:00:00',
  title: 'Imbal Balik',
  subtitle: 'Wallet',
  type: 'credit',
  amount: 1650000,
  action: () => {
    console.warn(2);
  }
}, {
  id: 3,
  date: '2018-03-20 10:00:00',
  title: 'Deposit',
  subtitle: 'Wallet',
  type: 'credit',
  amount: 17650000,
  action: () => {
    console.warn(3);
  }
},
{
  id: 4,
  date: '2018-03-20 10:00:00',
  title: 'Imbal Balik',
  subtitle: 'Wallet',
  type: 'credit',
  amount: 1650000,
  action: () => {
    console.warn(4);
  }
},
{
  id: 5,
  date: '2018-03-20 10:00:00',
  title: 'Deposit',
  subtitle: 'Wallet',
  type: 'credit',
  amount: 17650000,
  action: () => {
    console.warn(5);
  }
}
];

export default listCardWithTimeData;

