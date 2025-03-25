import React, { useEffect, useContext, useState } from 'react';
import { Typography, Card, CardBody } from "@material-tailwind/react";
import AuthContext from "../../context/authContext";
import { Link } from 'react-router-dom';


function ContentCard({ id, subject, content, thumbnail }) {
  return (
    <Link to={'/blog/' + id}>
      <Card
        className="relative grid min-h-[25rem] items-end overflow-hidden rounded-xl"
        color="transparent"
      >
        <img
          src={thumbnail}
          alt="bg"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <CardBody className="relative flex flex-col justify-end">
          <Typography variant="h5" color="white" className='mb-4 leading-8'>
            {subject}
          </Typography>
          <Typography
            variant="paragraph"
            color="white"
            className="my-2 font-normal text-xs"
          >
            {content.slice(0, 30)}...
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
}

// const contents = [
//   {
//     img: "https://www.material-tailwind.com/image/blog-11.jpeg",
//     title: "Search and Discovery",
//     desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
//   },
//   {
//     img: "https://www.material-tailwind.com/image/blog-10.jpeg",
//     title: "Last visits in US",
//     desc: "Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.",
//   },
//   {
//     img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
//     title: "Grow in a beautiful area",
//     desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
//   },
//   {
//     img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg",
//     title: "Grow in a beautiful area",
//     desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
//   },
// ];

export function BlogSection() {

  const authContext = useContext(AuthContext)
  const [contents, setContents] = useState([])


  useEffect(() => {
    fetchBlog()
  }, [])

  const fetchBlog = async () => {
    const response = await fetch(`${authContext.baseUrl}/posts`);

    const allBlog = await response.json();


    if (response.status === 200) {
      setContents(allBlog)
    }
  }

  return (
    <section className="container mx-auto px-8 py-10 lg:py-28">
      <h3 className="titleSlider lalezar mr-3">وبلاگ ها</h3>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-4">
        {contents.map((blog) => (
          <ContentCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}

export default BlogSection;