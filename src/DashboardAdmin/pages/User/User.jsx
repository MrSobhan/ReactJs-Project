import { useParams } from 'react-router-dom'
import { userRows } from '../../datas'

import './User.css'

export default function User() {

    const Id = useParams()
      const dataUser = userRows.filter((e)=> e.id == Id.userID)[0]
      console.log(dataUser);

    return (
        <div className='product'>

            <form class="row g-3">
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Username</label>
                    <input type="text" class="form-control shadow" id="inputAddress" value={dataUser.username} />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control shadow" id="inputEmail4" value={dataUser.email} />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control shadow" id="inputPassword4" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select shadow">
                        <option>Choose...</option>
                        <option selected={dataUser.status == 'active' ? 'true' : 'false'}>Active</option>
                        <option selected={dataUser.status != 'active' ? 'true' : 'false'}>NotActive</option>
                    </select>
                </div>
                <div class="col-12">
                    <button type="button" class="btn btn-outline-primary px-4">Edit</button>
                </div>
            </form>

        </div>
    )
}
