"use server";
import { PHOTO_POST } from '@/functions/api';

export default async function photoPost(state: {}, formData: FormData) {
	const token = cookies().get("token")?.value;
	const nome = formData.get("nome") as string | null;
	const idade = formData.get("idade") as string | null;
	const peso = formData.get("peso") as string | null;
	const img = formData.get("img") as File;
}
