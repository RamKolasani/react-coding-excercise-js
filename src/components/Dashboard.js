import React from 'react';
import DisplayMenuItems from './DisplayItems';


const Dashboard = (props) => {
    let MenuData= props.MenuData;
    return (
        <div className="dashboard">
                <ul className="items-list">
                    {Object.keys(MenuData).map(key =>{
                        return <li id={key}>
                                    <DisplayMenuItems item={MenuData[key]} />
                                </li>
                    })}
                </ul>
       </div>
    )
}

export default Dashboard;