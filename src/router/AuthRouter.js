/* Router */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from '../pages/Menu';

// COMPONENTE
/* Rutas Autenticadas */
export const AuthRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Menu />} path='/' />
        </Routes>
    </BrowserRouter>
);
