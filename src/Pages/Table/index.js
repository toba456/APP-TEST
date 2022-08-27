import { rows, users } from "../../Utils/Constants";
import { styles } from './styles'

function Table() {
  return (
    <div style={styles.container}>
        <h3>Table</h3>
        <table style={styles.table} class="table table-bordered">
        <thead>
            <tr>
                {rows.map(row=>{
                    return (
                        <th scope="col">{row}</th>
                    )
                })}
            </tr>
        </thead>
        <tbody>
                {users.map(user=>{
                    return (
                        <tr>
                            <td>{user.nombre}</td>
                            <td>{user.edad}</td>
                            <td>{user.carrera}</td>
                            <td>{user.hobbie}</td>
                        </tr>
                    )
                })}
        </tbody>
        </table>
    </div>
  );
}

export default Table;
