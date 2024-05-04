'use client';

import login from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';

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
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <>
      <form action={action}>
        <Input label="Usuário" />
        <Input label="Senha" />
        <input type="text" name="username" placeholder="usuário" />
        <input type="password" name="password" placeholder="senha" />
        <FormButton />
        <p>{state.error}</p>
      </form>
    </>
  );
}
