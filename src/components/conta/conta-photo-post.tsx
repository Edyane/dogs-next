'use client';

import React from 'react';
import Button from '@/components/forms/button';
import { useFormState, useFormStatus } from 'react-dom';

export default function ContaPhotoPost() {
	const { pending } = useFormStatus();

	return (
		<>
			{pending ? (
				<Button disabled={pending}>Enviando...</Button>
			) : (
				<Button>Enviar</Button>
			)}
		</>
	);
}
