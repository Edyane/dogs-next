import login from '@/actions/login';

export default async function LoginForm() {
    return (
        <>
            <form action={login}>
                <input type="text" name="username" placeholder="usuário" />
                <input type="text" name="password" placeholder="senha" />
                <button>Entrar</button>
            </form>
        </>
    )
}