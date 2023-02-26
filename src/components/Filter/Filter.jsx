
export const Filter = ({ filter, onChangeFilter }) => {
    return (
        <label>
            Find contacts by name
            <input type="text" value={filter} placeholder="Find contact" onChange={onChangeFilter} />
        </label>
    )
};