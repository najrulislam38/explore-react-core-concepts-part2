import { useState } from "react";

export default function Team(){
    const [team, setTeam] = useState(11);
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemove = () => {
        setTeam(team -1 )
    }
    const teamStyle = {
        margin: '20px',
        padding: '20px',
        border: '2px solid pink',
        borderRadius: '10px'
    }
    return (
        <div style={teamStyle}>
            <h3>Player: {team}</h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}