import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
    const numExpenses = props.expenses.length;
    const total = numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00');
    return (
        <div>
        <p>
            {`Viewing ${numExpenses} expenses`}
            {numExpenses > 0 && ` totalling ${total}`}
        </p>
        </div>
    )
};

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);