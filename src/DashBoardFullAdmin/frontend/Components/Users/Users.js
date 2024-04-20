import React, { useEffect, useState } from "react";
import ErrorBox from "../Errorbox/Errorbox";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/users`)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div className="cms-main">
      <h1 className="cms-title">لیست کاربران</h1>

      {users.length ? (
        <table className="products-table">
          <thead>
            <tr className="products-table-heading-tr">
              <th>نام و نام خانوادگی</th>
              <th>یوزرنیم</th>
              <th>رمز عبور</th>
              <th>شماره تماس</th>
              <th>ایمیل</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="products-table-tr">
                <td>{user.firstname} {user.lastname}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button className="products-table-btn">حذف</button>
                  <button className="products-table-btn">جزییات</button>
                  <button className="products-table-btn">ویرایش</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ کاربری یافت نشد" />
      )}
    </div>
  );
}
