import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/authContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar, Select, Option, Button, Input, Textarea, Spinner
} from "@material-tailwind/react";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Contact() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext)
  const [loadingSub, setLoadingSub] = useState(false)
  const [isLoginUser, setIsLoginUser] = useState(false)


  const [subjectInput, setSubjectInput] = useState('پیشنهاد')
  const [contentInput, setContentInput] = useState('')

  const [comments, setComments] = useState([])


  useEffect(() => {

    getAllComments()

    authContext.isLogin() && setIsLoginUser(true)

  }, [])

  const CommentHandler = async () => {
    setLoadingSub(true)


    console.log(subjectInput);


    if (isLoginUser) {
      const dataComments = {
        "subject": subjectInput,
        "content": contentInput,
        "status": "pending",
        "customer_id": authContext.user.ID
      }

      console.log(dataComments);

      const response = await fetch(`${authContext.baseUrl}/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
          "Authorization": `Bearer ${authContext.user.access_token}`,
          "Authorization-Refresh": `Bearer ${authContext.user.refresh_token}`,
        },
        body: JSON.stringify(dataComments),
      });


      if (response.status === 200) {
        setLoadingSub(false)
        setSubjectInput('')
        setContentInput('')
        swal({
          title: "با موفقیت نظر شما ثبت شد",
          icon: "success",
        })
      } else {
        setLoadingSub(false)
        swal({
          title: "ارسال نظرات شما به مشکل خورد...",
          icon: "error",
          buttons: "تلاش مجدد",
        })
      }
    } else {
      setLoadingSub(false)
      swal({
        title: "لطفا برای ثبت نظر ابتدا وارد شوید",
        icon: "error",
        buttons: "صفحه ورود",
      }).then((value) => {
        navigate("/login");
      });
    }


  }

  const getAllComments = async () => {
    const resComments = await fetch(`${authContext.baseUrl}/comments`);

    resComments.json().then(comment => {
      const commentsData = comment.filter(comment => comment.status == 'approved').reverse().slice(0, 6)
      // console.log(commentsData);

      setComments(commentsData);
    })



  }


  return (
    <section className="py-8 pb-14 lg:pb-24 container mx-auto lg:w-[80%] w-[90%]">
      <h3 className="titleSlider lalezar mr-3 mb-16">ارتباط با ما</h3>
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <img
            src="https://i.redd.it/0uermbt9q8b61.jpg"
            alt="map"
            className="block lg:hidden w-full h-full max-w-[500px] max-h-[500px] rounded-xl object-contain mx-auto"
          />
          <form
            action="#"
            className="flex flex-col gap-4 max-w-[500px] mx-auto"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-right font-medium !text-gray-900"
                >
                  نام و نام خانوادگی
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  name="first-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-right font-medium !text-gray-900"
                >
                  ایمیل
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-right font-medium !text-gray-900"
              >
                موضوع
              </Typography>
              <Select label="" value={subjectInput}
                onChange={(val) => setSubjectInput(val)}
              >
                <Option value="گزارش مشکل">گزارش مشکل</Option>
                <Option value="درخواست ویژگی جدید">درخواست ویژگی جدید</Option>
                <Option value="سوال">سوال</Option>
                <Option value="بازخورد">بازخورد</Option>
                <Option value="پیشنهاد">پیشنهاد</Option>
                <Option value="انتقاد">انتقاد</Option>
              </Select>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-right font-medium !text-gray-900"
              >
                متن نظر
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
                value={contentInput}
                onChange={(e) => setContentInput(e.target.value)}
              />
            </div>
            <Button className="w-full" color="gray" onClick={CommentHandler}>
              {loadingSub ? <Spinner className=" inline h-4 w-4" /> : ''}  ارسال نظرات
            </Button>
          </form>
          <img
            src="https://i.redd.it/0uermbt9q8b61.jpg"
            alt="map"
            className=" hidden lg:block w-full h-full lg:max-h-[510px] rounded-lg"
          />
        </div>
      </div>
      {
        comments.length ? (
          <div className="container mx-auto mt-16">
            <h3 className="titleSlider lalezar mr-3 mb-16">نظرات شما</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {
                comments.map((data) => (
                  <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
                    <CardHeader
                      color="transparent"
                      floated={false}
                      shadow={false}
                      className="mx-0 flex items-center gap-6 pt-0 pb-4"
                    >
                      <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                          <Typography variant="h5" color="blue-gray">
                            {data.subject}
                          </Typography>
                          <div className="5 flex items-center gap-0">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                          </div>
                        </div>
                        <Typography color="blue-gray">{authContext.calcuteRelativeTimeDifference(data.created_at)}</Typography>
                      </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                      <Typography>
                        {data.content}
                      </Typography>
                    </CardBody>
                  </Card>
                ))
              }

            </div>
          </div>
        ) : (<></>)
      }
    </section>
  );
}

export default Contact;