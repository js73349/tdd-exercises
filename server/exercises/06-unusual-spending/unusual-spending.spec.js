import * as td from 'testdouble';

const {replace, when, verify} = td;

describe('unusual spending', () => {

  it('unusual spending manages the collaboration of fetch, ' +
    'categorize and email', () => {
    const fetch = replace(require('./fetch'), 'fetch');
    const categorize = replace(require('./categorize'), 'categorize');
    const email = replace(require('./email'), 'email');


    const userId = {};
    const payments = {};
    const categorizedPayments = {};

    when(fetch(userId)).thenReturn(payments);
    when(categorize(payments)).thenReturn(categorizedPayments);

    //ACT
    let unusualSpending = require('./unusual-spending').unusualSpending;
    unusualSpending(userId);

    //assert
    verify(email(userId, categorizedPayments));
  });
});
