import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ExpensesSummary expenses={[]}/>)
})

test('Should show count with no total for no expenses', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should show total for single expense', () => {
    wrapper.setProps({
        expenses: [expenses[0]]
    });

    expect(wrapper).toMatchSnapshot();
});

test('Should show total for multiple expenses', () => {
    wrapper.setProps({
        expenses
    });

    expect(wrapper).toMatchSnapshot();
});