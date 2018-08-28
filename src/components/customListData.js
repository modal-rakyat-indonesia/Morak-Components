import { IDRFormatter } from '../helpers/textFormatter';

export const listCardWithTimeData = [{
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

export const listBasicCard = [{
  id: 1,
  title: 'Pendanaan Baru',
  content: 17
}, {
  id: 2,
  title: 'Total Nilai Pendanaan',
  content: IDRFormatter(17650000)
}, {
  id: 3,
  title: 'Range Tenor',
  content: '30-120 Hari'
}, {
  id: 4,
  title: 'Total Pendapatan',
  content: IDRFormatter(9550000)
}, {
  id: 5,
  title: 'Rata-rata Imbal Balik',
  content: '13 Persen'
}
];

export const listCardFooter = {
  title: '7 Peluang Pendanaan!',
  content: 'Lihat Peluang',
  action: () => {
    console.warn('opportunity clicked');
  }
};

export const contentCard = [{
  id: 1,
  title: 'Dana Tersedia',
  content: IDRFormatter(176500000000)
}, {
  id: 2,
  title: 'Dalam Pendanaan',
  content: IDRFormatter(176500000000)
}
];
