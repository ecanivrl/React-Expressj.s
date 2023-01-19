import "./home.css"

export const Home = () => {
  return (
    <div className="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>NO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Ecani</td>
                    <td>Ecani@gmail.com</td>
                    <td>Turkey</td>
                    <td>0543 801 48 28</td>
                    <td>Edit</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
