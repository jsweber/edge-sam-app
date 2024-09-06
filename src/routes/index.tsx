// router component
import {
    BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom';
import Home from '@pages/home/home';

const RouterRoot = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={<Navigate to="home" replace />}
                />
                <Route path="home" element={<Home />} />
                <Route
                    path="*"
                    element={(
                        <main>
                            <p>There is nothing here!</p>
                        </main>
                    )}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterRoot;
