import React from "react";
import {render, fireEvent} from '@testing-library/react'
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import TodoList from "./TodoList";

it('does not crash', () => {
    render(<TodoList />)
})

it('matches snapshot', () => {
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
})