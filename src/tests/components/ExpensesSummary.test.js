import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ExpensesSummary expenseCount={0} expenseTotal={0} />)
})

test('Should show count with no total for no expenses', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should show total for single expense', () => {
    wrapper.setProps({
        expenseCount: 1,
        expenseTotal: 195
    });

    expect(wrapper).toMatchSnapshot();
});

test('Should show total for multiple expenses', () => {
    wrapper.setProps({
        expenseCount: 3,
        expenseTotal: 114195
    });

    expect(wrapper).toMatchSnapshot();
});