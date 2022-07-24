import React, { useRef, useState } from 'react';

import { Anchor } from '@wordy-nx-workspace/wordy-web/ui';
import { Button } from '@wordy-nx-workspace/wordy-web/ui';
import { Form } from '@wordy-nx-workspace/wordy-web/ui';
import { Input } from '@wordy-nx-workspace/wordy-web/ui';
import { Small } from '@wordy-nx-workspace/wordy-web/ui';

import { encryptString } from '@wordy-nx-workspace/shared/util/cryptology';
import { isNullOrEmptyArray } from '@wordy-nx-workspace/shared/util/null-checking';
import { DTOAuthentication } from '@wordy-nx-workspace/shared/data/data-transfer-objects';

// TODOEgemen: api invoker must be more generic. example: invokeApi(httpMethod, httpUrl, requestBody)
import { apiInvoker } from '@wordy-nx-workspace/wordy-web/data/api-invoker';

enum PageTypes {
  Login,
  Signup,
}

function Authentication() {
  const [pageType, setPageType] = useState(PageTypes.Login);

  const formEl = useRef(null);

  const strPassword = 'Password';
  const strEmail = 'E-mail';
  const strFullName = 'Full Name';
  const strPasswordPlaceholder = '•••••••••';

  const strLogin = 'Login';
  const strSignup = 'Signup';

  const isPageTypeSignup = () => pageType === PageTypes.Signup;

  const formSubmitHandler = async (e) => {
    const formValues: string[] = Array.from(e.target.elements)
      .filter((e) => e['name'])
      .map((e) => e['value']);

    if (!isNullOrEmptyArray(formValues)) {
      let dtoAuthentication: DTOAuthentication;
      if (isPageTypeSignup()) {
        const [email, fullName, password, confirmPassword] = formValues;
        dtoAuthentication = {
          email: encryptString(email),
          fullName: encryptString(fullName),
          password: encryptString(password),
          confirmPassword: encryptString(confirmPassword),
        };
      } else {
        const [email, password] = formValues;
        dtoAuthentication = {
          email: encryptString(email),
          password: encryptString(password),
        };
      }
      const response = await apiInvoker.post(
        'http://localhost:3001/login',
        dtoAuthentication
      );
      console.log(response);
      // TODOEgemen: route names, http methods must be read from libs
    }
  };

  const anchorClickHandler = () => {
    if (formEl) {
      formEl.current.reset();
    }
    isPageTypeSignup()
      ? setPageType(PageTypes.Login)
      : setPageType(PageTypes.Signup);
  };

  return (
    <Form ref={formEl} onSubmit={formSubmitHandler}>
      <Input
        type="email"
        id={strEmail.toLowerCase()}
        name={strEmail.toLowerCase()}
        label={strEmail}
        placeholder={strEmail}
        required
      />
      {isPageTypeSignup() && (
        <Input
          type="text"
          className="mt-4"
          id="full-name"
          name="full-name"
          label={strFullName}
          placeholder={strFullName}
          minLength={3}
          maxLength={50}
          required
        />
      )}
      <Input
        type="password"
        className="mt-4"
        id={strPassword.toLowerCase()}
        name={strPassword.toLowerCase()}
        label={strPassword}
        placeholder={strPasswordPlaceholder}
        minLength={10}
        maxLength={10}
        required
      />
      {isPageTypeSignup() && (
        <Input
          type="password"
          className="mt-4"
          id={`confirm-${strPassword.toLowerCase()}`}
          name={`confirm-${strPassword.toLowerCase()}`}
          label={`Confirm ${strPassword.toLowerCase()}`}
          placeholder={strPasswordPlaceholder}
          minLength={10}
          maxLength={10}
          required
        />
      )}
      <Button type="submit" color="default" className="w-full mt-6">
        {isPageTypeSignup() ? strSignup : strLogin}
      </Button>
      <Small className="block text-center mt-4">
        {isPageTypeSignup()
          ? `Do you already have an account? `
          : `Do you have not an account? `}
        <Anchor onClick={anchorClickHandler}>
          {isPageTypeSignup() ? strLogin : strSignup}
        </Anchor>
      </Small>
    </Form>
  );
}

export default Authentication;
