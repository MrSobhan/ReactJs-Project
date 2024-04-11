import React, { useEffect, useState } from "react";
import ErrorBox from "../Errorbox/Errorbox";
import "../ProductsTable/ProductsTable.css";

import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [commentID, setCommentID] = useState(null);
  const [commentText, setCommentText] = useState("");

  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const [contentEditInput, setContentEditInput] = useState("");

  const getAllComment = () => {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  };

  useEffect(() => {
    getAllComment();
  }, []);

  const deleteModalCancelAction = () => {
    console.log("مدال حذف کنسل شد");
    setIsShowDeleteModal(false);
  };

  const deleteModalSubmitAction = () => {
    console.log("مدال حذف تایید شد");
    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowDeleteModal(false);
        getAllComment();
      });
  };

  const closeDetailsmodal = () => {
    setIsShowDetailsModal(false);
    console.log("مدال جزییات بسته شد");
  };

  const updateCommentEditModal = () => {
    setIsShowEditModal(false);
    console.log("مدال Edit بسته شد");

    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body : contentEditInput
      })
    }).then(res => res.json())
    .then(result => {
      console.log(result);
      getAllComment()
      setIsShowEditModal(false)
    })
  };

  return (
    <div className="cms-main">
      {allComments.length ? (
        <table className="products-table">
          <thead>
            <tr className="products-table-heading-tr">
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
            </tr>
          </thead>

          <tbody>
            {allComments.map((comment) => (
              <tr key={comment.id} className="products-table-tr">
                <td>{comment.userID}</td>
                <td>{comment.productID}</td>
                <td>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDetailsModal(true);
                      setCommentText(comment.body);
                    }}
                  >
                    دیدن متن
                  </button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setCommentID(comment.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setCommentID(comment.id);
                      setContentEditInput(comment.body)
                    }}
                  >
                    ویرایش
                  </button>
                  <button className="products-table-btn">پاسخ</button>
                  <button className="products-table-btn">تایید</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ کامنتی یافت نشد" />
      )}

      {/* Modal */}

      {isShowDeleteModal && (
        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancelAction}
        />
      )}

      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsmodal}>
          <h3>{commentText}</h3>
        </DetailsModal>
      )}

      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateCommentEditModal}
        >
          <textarea
            value={contentEditInput}
            onChange={(e) => setContentEditInput(e.target.value)}
          ></textarea>
        </EditModal>
      )}
    </div>
  );
}
