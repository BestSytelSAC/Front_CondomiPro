export const Login = () => {
    const handleClick = () => {
        localStorage.setItem("token", "insertando valor");
        console.log("Token guardado:", localStorage.getItem("token"));
    };

    return (
        <div>
            <h1>Login</h1>
            <h1>Login</h1>
            <h1>Login</h1>
            <h1>Login</h1>
            <h1>Login</h1>
            <h2>Cambios jonathan</h2>
            <button onClick={handleClick}>Guardar token</button>
        </div>
    );
}
