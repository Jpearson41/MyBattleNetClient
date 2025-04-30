import React from "react";
import { Fragment } from "react";
import { useState } from "react";

interface Item {
    id: number;
    name: string;
}

interface Props {
    items: Item[];
    onItemSelected: (item: Item) => void;
}

function ListGroup({ items, onItemSelected }: Props) {
    const myhardListItems = [
        { id: 0, name: "Assasins Creed" },
        { id: 1, name: "Black Op 6" },
        { id: 2, name: "Morbi leo risus" },
        { id: 3, name: "Porta ac consectetur ac" },
        { id: 4, name: "Vestibulum at eros" }
    ];
    //let mySelectedItem = myListItems[0];

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleClick = (item: Item) => {
        setSelectedIndex(item.id);
        onItemSelected(item);
    };

    return (
        <>
            <h1>MyList</h1>
            <ul className="list-group">
                {items.map((item) => (
                    <li 
                    key={item.id} 
                    className={selectedIndex === item.id ? "list-group-item active" : "list-group-item"}
                    onClick={() => handleClick(item)}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
