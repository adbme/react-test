import React, { useState } from 'react';
import '../App.css';
import { SidebarData } from './SidebarData';

function Sidebar({ setContent }) {
    const [width, setWidth] = useState('30%');
    const [hideTitle, setHideTitle] = useState(false);

    function menu() {
        if (width === '100px') {
            setWidth('');
            setHideTitle(false);
        } else {
            setWidth('100px');
            setHideTitle(true);
        }
    }

    return (
        <div className="Sidebar" style={{ width, transition: 'width 0.5s' }}>
            <ul className='SidebarList'>

                <button className='menuButton' onClick={menu}>☰</button>

                <div className="subtitle1">{SidebarData[0].subtitle}{SidebarData[0].arrow}</div>

                {SidebarData.map((val, key) => {
                    const id = `row-${key}`;
                    return (
                        <li key={key} className='row' id={id} onClick={() => { window.history.pushState(null, "", val.link); setContent(val.text); }}>
                            <div id='icon'>{val.icon}</div>
                            <div id='title' className={hideTitle ? 'hidden' : ''}>{val.title}</div>
                        </li>
                    )
                })}

                <div className="subtitle2">{SidebarData[0].subtitle2}{SidebarData[0].arrow}</div>

                <div className="footer"><button>{SidebarData[0].footerIcon}HOME</button></div>

            </ul>
        </div>
    );
}

export default Sidebar;
