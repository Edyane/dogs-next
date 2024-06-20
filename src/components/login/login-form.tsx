'use client';

import login from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';
import ErrorMessage from '@/components/helper/error-message';
import React, {useEffect} from 'react';
import Link from 'next/link';
import styles from './login-form.module.css';

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

	useEffect(() => {
		if (state.ok) window.location.href = '/conta';
	}, [state.ok]);

	return (
		<>
			<form action={action} className={styles.form}>
				<Input label="Usuário" name="username" type='text' />
				<Input label="Senha" name="password" type='password' />
				<ErrorMessage error={state.error} />
				<FormButton />
			</form>
		</>
	);
}
