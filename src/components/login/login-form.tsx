'use client';

import login from '@/actions/login';
import { useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  return (
    <>
      <form action={login}>
        <input type="text" name="username" placeholder="usuário" />
        <input type="password" name="password" placeholder="senha" />
        <FormButton />
        {/* <p>{state.error}</p> */}
      </form>
    </>
  );
}
