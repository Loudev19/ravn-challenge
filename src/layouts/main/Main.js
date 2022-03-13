import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as routes from '../../routes/routes';

import Dashboard from '../../pages/dashboard/Dashboard';
import MyTask from '../../pages/my-task/MyTask';
import Header from '../header/Header';

import Sidebar from "../sidebar/Sidebar";

import './Main.css';

function Main() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Sidebar />
                <div className='content'>
                    <Header />
                    <Routes>
                        <Route exact path={routes.DASHBOARD} element={<Dashboard />}/>
                        <Route exact path={routes.MY_TASKS} element={<MyTask />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Main;
