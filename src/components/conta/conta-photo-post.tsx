'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';
import ErrorMessage from '../helper/error-message';
import React from 'react';
import styles from './conta-photo-post.module.css';
import photoPost from '@/actions/photo-post';

function FormButton() {
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

export default function ContaPhotoPost() {
	const [state, action] = useFormState(photoPost, {
		ok: false,
		error: '',
		data: null,
	});



	return (
		<section className={`${styles.photoPost} animeLeft`}>
			<h1></h1>
		</section>
	);
}