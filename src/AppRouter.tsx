import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { RoutesWithNotFound } from "./components/RoutesWithNotFound"
import { PrivateRouter } from "./pages/private/PrivateRouter"
import { PrivateGuard } from "./components/PrivateGuard"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <RoutesWithNotFound>            
                <Route path="/" element={<Navigate to="/login" />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Register />}/>
                <Route element={<PrivateGuard />}>
                    <Route path="/private/*" element={<PrivateRouter/>}/>
                </Route>               
            </RoutesWithNotFound>
        </BrowserRouter>
    )
}