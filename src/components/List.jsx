import { NotePencil, Trash } from "phosphor-react";
import styles from "./list.module.css"

export function List({list}) {
  return (
    <div className={styles.container}>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">First Name:</th>
            <th scope="col">Last Name:</th>
            <th scope="col">Edit:</th>
            <th scope="col">Delete:</th>
          </tr>
        </thead>
        <tbody>
          {list.map((person) => {
            return (
              <tr>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>
                  <button>
                    <NotePencil size={26} />
                  </button>
                </td>
                <td>
                  <button>
                    <Trash size={26} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      ;
    </div>
  );
}
