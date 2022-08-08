import React from "react";
import {render, fireEvent} from '@testing-library/react'
import Todo from "./Todo";

it('does not crash', () => {
    render(<Todo />)
})

it('matches snapshot', () => {
    const {asFragment} = render(<Todo/>);
    expect(asFragment()).toMatchSnapshot();
})