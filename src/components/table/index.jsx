function Table (props){
    return (
        <tbody>
            <tr>
                <td>{ props.index }</td>
                <td>{ props.name }</td>
                <td>{ props.price }</td>
                <td>{ props.age }</td>
                <td>{ props.address }</td>
                <td>{ props.doctor }</td>
            </tr>
        </tbody>

    )
}

export default Table