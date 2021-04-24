import { render, fireEvent } from '@testing-library/react';
import App from './App';

//chech if the buttons apperar correctly
it('Buttons appear test', () => {
  const { queryByTitle } = render(<App />);
  const button = queryByTitle("invest");
  const button2 = queryByTitle("next");
  const button3 = queryByTitle("adjust");
  expect(button).toBeTruthy();
  expect(button2).toBeTruthy();
  expect(button3).toBeTruthy();
});

//chech if the input fields apperar correctly
it("Input appear test", () => {
  const {queryByTitle} = render(<App />);
  const input = queryByTitle("money");
  const input2 = queryByTitle("month");

  expect(input).toBeTruthy();
  expect(input2).toBeTruthy();
});

//check if the input fields set the correct input values
it("Input test",() =>{
  const {queryByTitle} = render(<App />);
  const input = queryByTitle("money");
  const input2 = queryByTitle("month");

  fireEvent.change(input,{target:{value: "10"}});
  expect(input.value).toBe("10");

  fireEvent.change(input2,{target:{value: "10"}});
  expect(input2.value).toBe("10");

});

