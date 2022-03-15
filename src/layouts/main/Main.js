import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as routes from '../../constants/Routes';

import Dashboard from '../../pages/dashboard/Dashboard';
import MyTask from '../../pages/my-task/MyTask';
import Header from '../header/Header';

import Sidebar from "../sidebar/Sidebar";

import './Main.css';
import { client, GET_TASKS } from '../../services/TasksAPI';
import { useQuery } from '@apollo/client';
import { FormatDate } from '../../services/FormatDate';
import { STATUS } from '../../constants/TaskValues';
import Loading from '../../components/loading/Loading';

function ContentMain(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Sidebar />
                <div className='content'>
                    <Header />
                    <Routes>
                        <Route exact path={routes.DASHBOARD} element={<Dashboard columns={props.columns}/>}/>
                        <Route exact path={routes.MY_TASKS} element={<MyTask columns={props.columns}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

function Main() {
    const { loading, error, data } = useQuery(GET_TASKS, {
        variables: { input: {} },
        client: client
    });

    if (loading) return <Loading />;
    if (error) return <div>Error!</div>;

    const grouped = {}
    Object.keys(STATUS).forEach(key => grouped[key] = [])
    data.tasks.forEach(item => {
        grouped[item.status]?.push({...item, dueDate: FormatDate(item.dueDate)})
    });

    return <ContentMain columns={grouped} />
}

export default Main;
