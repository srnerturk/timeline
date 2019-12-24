import React from 'react';
import './timeline.scss';
function Timeline({ item }) {
    return (
        <li class="event" data-date={item.date}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
        </li>
    )
}
export default Timeline;