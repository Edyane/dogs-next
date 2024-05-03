import LoginForm from "@/components/login/login-form";

export default async function LoginPage() {
    return (
        <section className="amimeLeft">
            <h1 className="title">Login</h1>
            <LoginForm />
        </section>
    )
}