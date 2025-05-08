import { Navigate, Route } from "react-router-dom"

import { RoutesWithNotFound } from "../../components/RoutesWithNotFound" 


export const PrivateRouter = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to="dashboard"/>}/>
            {/* <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/propietario" element={<Propietario />}/> */}
            <Route path="/user"/>
            <Route path="/about"/>
        </RoutesWithNotFound>
    )
}