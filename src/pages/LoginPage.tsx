import Button from "../components/Botton";

export function LoginPage(){
    return (
		<main className="px-10">
			<section className="flex justify-center items-center py-10">
				<Button message="Iniciar Sesión" to={"/login"} />
				<Button message="Registrarse" to={"/register"} />
			</section>

			<article className="flex justify-between">
				<section className="login-section flex flex-col items-center p-4 text-center">
					<h2 className="title">Plateful</h2>
					<p>Tu aplicacion de confianza para encontrar tu restaruante ideal</p>
				</section>
			</article>
		</main>
	);
}