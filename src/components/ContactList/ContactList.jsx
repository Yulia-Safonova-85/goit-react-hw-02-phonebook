
export const ContactList = ({ contacts,onDeleteContact }) => {
    return (
        <div>
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <li key ={id}>
                        <p>{name}:{number}</p>
                        <button type="button" onClick={() => onDeleteContact(id) }>
                            Delete
                        </button>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}