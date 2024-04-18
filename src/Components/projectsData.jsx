export const projectsData = [
  {
    id: 7,
    title: "Notably",
    description:
      "Leveraged TypeScript for static type checking, ensuring robust and maintainable code throughout the development process. Designed an interactive task and note management application using React.js for the frontend, Node.js for backend scalability, and MongoDB for data storage, ensuring a smooth user experience.",
    image: "./img/notably.png",
    url: "https://www.example.com/notably",
  },
  {
    id: 8,
    title: "CoWrite",
    description:
      "Developed a collaborative document editing platform using React.js, facilitating simultaneous editing by multiple users. Implemented live updates using Socket.io, utilized Quill for the editing interface, Material-UI for the user interface design, and MongoDB for backend data storage.",
    image: "./img/cowrite.png",
    url: "https://www.example.com/cowrite",
  },
  {
    id: 9,
    title: "autosyncer",
    description:
      "SAAS Automation Builder that enhances workflow efficiencies by integrating Clerk Authentication, Neon Tech, Uploadcare, and Ngrok. Built using Next.js 14, featuring secure Stripe payment integrations for a seamless user experience.",
    image: "./img/autosyncer.png",
    url: "https://www.example.com/autosyncer",
  },
  {
    id: 1,
    title: "Todo List",
    description:
      "A React-based to-do list web application for managing tasks and projects. ",
    image:
      "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png",
    url: "https://github.com/jayalohana/react-todo",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A weather app that utilizes APIs to fetch and display weather data for user-selected locations.",
    image:
      "https://i.pinimg.com/originals/a0/25/db/a025db6304cdc1ae74e17e7be05e40f4.png",
    url: "https://www.example.com/project2",
  },
  {
    id: 3,
    title: "Schizphrenia Society Website",
    description:
      "A responsive website developed with React and styled with Tailwind CSS that presents your work and expertise, with a mobile-first approach for seamless navigation on any device.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1WaxUrTEcxSt7G0uurvO193HOHjwEN4n7UaO4Si07o6sd4B88kt_o61-n_ACd8pNOXE&usqp=CAU",
    url: "https://github.com/jayalohana/ssy-website",
  },
  {
    id: 4,
    title: "The Blog Spot",
    description:
      "A full-stack blog application that utilizes MongoDB, Express, React, and Node.js to create, read, update, and delete blog posts.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGDDW1VX2KyUhM6wtHNpgAeTrvwd-cQ7UPg&usqp=CAU",
    url: "https://www.example.com/project4",
  },
  {
    id: 5,
    title: "Personal Website",
    description:
      "My personal website that features a 3D experience using Three.js library, built with React and Tailwind CSS.",
    image: "./img/jaya.png",
    url: "https://github.com/jayalohana/personal-website",
  },
  {
    id: 6,
    title: "Sudoku Solver",
    description:
      "A Python-based Sudoku solver that utilizes algorithms and logic to find the solution for any given puzzle.",
    image:
      "data:image/png;base64,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",
    url: "https://github.com/jayalohana/Sudoku",
  },
  // {
  //   id: 7,
  //   title: "Project 5",
  //   description: "Mauris eget erat massa. Nullam eget imperdiet massa.",
  //   image: "https://via.placeholder.com/150",
  //   url: "https://www.example.com/project5"
  // },
  // {
  //   id: 8,
  //   title: "Project 5",
  //   description: "Mauris eget erat massa. Nullam eget imperdiet massa.",
  //   image: "https://via.placeholder.com/150",
  //   url: "https://www.example.com/project5"
  // },
  // {
  //   id: 9,
  //   title: "Project 5",
  //   description: "Mauris eget erat massa. Nullam eget imperdiet massa.",
  //   image: "https://via.placeholder.com/150",
  //   url: "https://www.example.com/project5"
  // },
  // {
  //   id: 10,
  //   title: "Project 5",
  //   description: "Mauris eget erat massa. Nullam eget imperdiet massa.",
  //   image: "https://via.placeholder.com/150",
  //   url: "https://www.example.com/project5"
  // },
  // {
  //   id: 11,
  //   title: "Project 5",
  //   description: "Mauris eget erat massa. Nullam eget imperdiet massa.",
  //   image: "https://via.placeholder.com/150",
  //   url: "https://www.example.com/project5"
  // },
  // {
  //   id: 12,
  //   title: "Project 5",
  //   description: "Mauris eget erat massa. Nullam eget imperdiet massa.",
  //   image: "https://via.placeholder.com/150",
  //   url: "https://www.example.com/project5"
  // },
  // {
  //   id: 13,
  //   title: "Project 5",
  //   description: "Mauris eget erat massa. Nullam eget imperdiet massa.",
  //   image: "https://via.placeholder.com/150",
  //   url: "https://www.example.com/project5"
  // },
];
