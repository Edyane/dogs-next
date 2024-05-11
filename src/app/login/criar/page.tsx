import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Crie sua conta',
    description: 'Crie sua conta no site Dogs.',
};

export default async function CriarPage() {
    return (
        <main>
            <h1>Criar</h1>
        </main>
    );
}