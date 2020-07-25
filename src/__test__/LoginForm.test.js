import React from "react";
import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "../context/Auth.context";
import LoginForm from "../components/Login/LoginForm";

afterEach(cleanup);

describe("testing", () => {
  it("should render the input fields with initial value", () => {
    const { getByTestId } = render(
      <Router>
        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      </Router>
    );
    const emailInitialValue = "";
    const passwordInitialValue = "";

    expect(getByTestId("form__input--email").value).toEqual(emailInitialValue);
    expect(getByTestId("form__input--password").value).toEqual(
      passwordInitialValue
    );
  });

  it("should show the changes made in the input fields", () => {
    const { getByTestId } = render(
      <Router>
        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      </Router>
    );

    const emailChanges = "email@changes.com";
    const passwordChanges = "passwordChanges@@";

    const email = getByTestId("form__input--email");
    const password = getByTestId("form__input--password");

    userEvent.type(email, emailChanges);
    userEvent.type(password, passwordChanges);

    expect(email.value).toEqual(emailChanges);
    expect(password.value).toEqual(passwordChanges);
  });

  // it("should render error message on incorrect email and password", () => {
  //   const { getByTestId } = render(
  //     <Router>
  //       <AuthProvider>
  //         <LoginForm />
  //       </AuthProvider>
  //     </Router>
  //   );

  //   const errorMessage = "Incorrect email or password";

  //   const unregisteredEmail = "unregistered@email.com";
  //   const passwordValue = "OneTwoThree123@@";

  //   const email = getByTestId("form__input--email");
  //   const password = getByTestId("form__input--password");

  //   userEvent.type(email, unregisteredEmail);
  //   userEvent.type(password, passwordValue);

  //   const error = getByTestId("error");

  //   expect(error.value).toEqual(errorMessage);
  // });
});
