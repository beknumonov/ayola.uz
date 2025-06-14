import { Navigate, Outlet } from 'react-router-dom'
import appConfig from '@/configs/app.config'
import useAuth from '@/utils/hooks/useAuth'

const { authenticatedEntryPath } = appConfig

const AuthRoute = () => {
    const { authenticated } = useAuth()

    return authenticated ? <Navigate to={authenticatedEntryPath} /> : <Outlet />
}

export default AuthRoute
