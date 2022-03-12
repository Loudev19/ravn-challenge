import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Dashboard from '../../pages/dashboard/Dashboard';
import MyTask from '../../pages/my-task/MyTask';

function Main() {
    return (
        <div className="wrapper">
            <h1>Ravn Challenge</h1>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/my-task">My Task</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/my-task" element={<MyTask />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Main;
