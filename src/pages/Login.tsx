import { GetPersona } from "../components/GetPersona";
export const Login = () => {
    const handleClick = () => {
        localStorage.setItem("token", "insertando valor");
        console.log("Token guardado:", localStorage.getItem("token"));
    };

    return (
        <div>
            <h1>Login</h1>
            <GetPersona />
            <button onClick={handleClick}>Guardar token</button>
        </div>
    );
}
