import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter copy';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string
): void {
  if (emailValidator.isEmail(email)) {
    console.log('E-mail e valido - CLASS');
  } else {
    console.log('E-mail e invalido - CLASS');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string
): void {
  if (emailValidator(email)) {
    console.log('E-mail e valido - FUNCTION');
  } else {
    console.log('E-mail e invalido - FUNCTION');
  }
}

const email = 'jsn@email.com';
validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmailFn(emailValidatorFnAdapter, email);
