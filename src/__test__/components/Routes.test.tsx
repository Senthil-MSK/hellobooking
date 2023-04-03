import { render,screen } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import { BrowserRouter } from "react-router-dom";
import { store } from '../../redux/store/store';
 
 

// test case for /login route
test("WHEN user is in index route (/) THEN render Counter component", () => { //  /login route test 
  window.history.pushState({}, "", "/");
  render(
    <Provider store={store}>
      <BrowserRouter>
      </BrowserRouter>
     </Provider>
  );
  expect(screen.getByTestId("counter-page-test-id")).toBeInTheDocument();
});