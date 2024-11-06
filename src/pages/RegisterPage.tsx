import Button from "../components/Botton";


export function RegisterPage(){
    return(
        <main className="px-10">
            <section className="flex justify-center items-center py-10">
            <Button message="Iniciar Sesión" to={"/login"} />
            <Button message="Registrarse" to={"/register"} />
            </section>

            <article className="flex justify-between">
                <section className="login-section flex flex-col items-center p-4 text-center">
                    <h1 className="title">Registro</h1>
                    <p>Regístrate como cliente o propietario para empezar con Plateful</p>
                </section>
            </article>
        </main>
    );
}