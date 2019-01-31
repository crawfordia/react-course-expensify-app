import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let wrapper, startEditExpense, removeExpense, history;

beforeEach(() => {
    startEditExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };

    wrapper = shallow(
        <EditExpensePage 
            expense={expenses[2]} 
            startEditExpense={startEditExpense} 
            startRemoveExpense={removeExpense} 
            history={history} 
        />
    );
})

test('Should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();    
});

test('Should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);

    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should handle removeExpense', () => {
    wrapper.find('button').simulate('click');

    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
    expect(history.push).toHaveBeenLastCalledWith('/');
});