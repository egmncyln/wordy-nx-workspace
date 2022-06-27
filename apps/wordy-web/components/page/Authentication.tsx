import React, { useEffect, useRef, useState } from 'react';

import Anchor from '../web/anchor/Anchor';
import Button from '../web/button/Button';
import Form from '../web/form/Form';
import Input from '../web/input/Input';
import Small from '../web/small/Small';

// import {
//   decryptString,
//   encryptString,
// } from '@wordy-nx-workspace/shared-util-encryption';

enum PageTypes {
  Login,
  Signup,
}

// TODOEgemen: add validations to inputs
function Authentication() {
  // useEffect(() => {
  //   const e = encryptString('this is a loooonngggg string şŞöÖçÇğĞüÜiİ');
  //   const d = decryptString(e);
  //   console.log(e);
  //   console.log(d);
  // }, []);

  const [pageType, setPageType] = useState(PageTypes.Login);

  const formEl = useRef(null);

  const strPassword = 'Password';
  const strEmail = 'E-mail';
  const strName = 'Name';
  const strSurname = 'Surname';
  const strPasswordPlaceholder = '•••••••••';

  const strLogin = 'Login';
  const strSignup = 'Signup';

  const isPageTypeSignup = () => pageType === PageTypes.Signup;

  const formSubmitHandler = (e) => console.log(e);

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
          id={strName.toLowerCase()}
          name={strName.toLowerCase()}
          label={strName}
          placeholder={strName}
          required
        />
      )}
      {isPageTypeSignup() && (
        <Input
          type="text"
          className="mt-4"
          id={strSurname.toLowerCase()}
          name={strSurname.toLowerCase()}
          label={strSurname}
          placeholder={strSurname}
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
