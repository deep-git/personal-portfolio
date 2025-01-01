import {
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoTypescript,
  BiSolidBuildingHouse,
} from "react-icons/bi";
import {
  BsFiletypeXml,
  BsGithub,
  BsHouseLockFill,
  BsPersonFillCheck,
} from "react-icons/bs";
import {
  FaCss3Alt,
  FaHandshake,
  FaHtml5,
  FaJava,
  FaLightbulb,
  FaNodeJs,
  FaPencilRuler,
  FaReact,
} from "react-icons/fa";
import { IoChatbubbles, IoLogoFirebase, IoSparkles } from "react-icons/io5";
import { PiFigmaLogo, PiFileMagnifyingGlassFill } from "react-icons/pi";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiAndroidstudio,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandPrisma, TbMapPinSearch } from "react-icons/tb";
import { GiPathDistance } from "react-icons/gi";
import { TbTimelineEventExclamation } from "react-icons/tb";

export const featuredProject = [
  {
    id: 1,
    title: "Skill Weave",
    type: "Full-stack Learning Path Generator",
    description:
      "Skill Weave is an AI-powered full-stack learning path generator that allows users to transform their goals into actionable guided paths. Get personalized recommendations, track your progress, and achieve your goals faster than ever.",
    objectives: [
      {
        num: 1,
        title: "User-Centric Design",
        details:
          "Create an intuitive and responsive user interface that enhances user experience, making it easy for users to navigate, register, and interact with the application.",
        Icon: FaPencilRuler,
      },
      {
        num: 2,
        title: "Comprehensive Property Management",
        details:
          "Enable users to seamlessly add, edit, and manage their property listings, ensuring they have full control over the content they share.",
        Icon: BsHouseLockFill,
      },
      {
        num: 3,
        title: "Enhanced Search and Discovery",
        details:
          "Implement advanced search and filtering options to help users quickly find properties that meet their criteria, fostering efficient exploration of listings.",
        Icon: TbMapPinSearch,
      },
      {
        num: 4,
        title: "Community Engagement",
        details:
          "Facilitate user interaction through features like ratings, reviews, and private messaging, building a sense of community and trust among users.",
        Icon: FaHandshake,
      },
    ],
    purpose: {
      description:
        "The purpose of Nest Quest is to revolutionize the way users engage with the real estate market by providing a comprehensive, user-friendly platform that simplifies the process of property management and discovery. By bridging the gap between property owners and potential buyers or renters, Nest Quest aims to:",
      purpose_list: [
        {
          num: 1,
          title: "Empower Users",
          details:
            "Equip users with the tools they need to effectively manage their property listings and find suitable real estate options, enhancing their overall experience in the market.",
          Icon: BsPersonFillCheck,
        },
        {
          num: 2,
          title: "Foster Transparency",
          details:
            "Create a trustworthy environment where users can share reviews and ratings, facilitating informed decision-making for potential buyers and renters.",
          Icon: PiFileMagnifyingGlassFill,
        },
        {
          num: 3,
          title: "Build Community Connections",
          details:
            "Encourage meaningful interactions between users, allowing for direct communication and support, which enhances user satisfaction and engagement.",
          Icon: IoChatbubbles,
        },
        {
          num: 4,
          title: "Innovate Real Estate Transactions:",
          details:
            "Introduce a modern approach to real estate transactions by integrating technology with traditional practices, making the process more accessible and efficient for all users.",
          Icon: FaLightbulb,
        },
      ],
    },
    projectImg: "/images/featured/nest-quest/nest-quest.jpg",
    page_link: "skill-weave",
    ProjectIcon: GiPathDistance,
    Stack: [
      FaHtml5,
      SiTailwindcss,
      BiLogoTypescript,
      TbBrandNextjs,
      BiLogoPostgresql,
      TbBrandPrisma,
    ],
    github: "https://github.com/deep-git/learning-generator",
    view_link: "https://skill-weave.vercel.app/",
    completedBy: "Deepak",
    conclusion:
      "Our full-stack real estate application successfully aligns with key objectives to empower users and foster community connections. By implementing a user-centric design and comprehensive property management tools, we enhanced the search and discovery process, making it intuitive and efficient. The platform promotes transparency in transactions, ensuring users have access to clear information while facilitating engagement within the community. Overall, our application innovates the real estate experience, setting a new standard for how users interact with property transactions.",
    design_objectives: [
      {
        num: 1,
        title: "User-Centric Design",
        description:
          "We developed an intuitive and responsive user interface that prioritizes ease of navigation. The layout is clean and organized, enabling users to register and interact with the application with minimal effort. By incorporating user feedback during the design process, we tailored the experience to meet the needs of various user demographics, enhancing overall satisfaction and encouraging prolonged engagement.",
        image: "/images/featured/nest-quest/user-interface.png",
      },
      {
        num: 2,
        title: "Comprehensive Property Management",
        description:
          "We utilized Prisma ORM to facilitate seamless interactions with the MongoDB database, allowing users to add, edit, and manage their property listings efficiently. The interface features straightforward forms and editing tools, giving users full control over their content while ensuring that all actions are user-friendly. This approach not only empowers users but also enhances the accuracy and relevance of the listings shared on the platform.",
        image: "/images/featured/nest-quest/property-management.png",
      },
      {
        num: 3,
        title: "Enhanced Search and Discovery",
        description:
          "To improve search and discovery, we implemented advanced filtering and sorting options, enabling users to quickly find properties that align with their specific criteria. The design features a dynamic search bar and customizable filters, allowing for a tailored exploration of listings. By prioritizing speed and accessibility in this feature, we foster an engaging experience that encourages users to interact with a wider range of properties.",
        image: "/images/featured/nest-quest/search-filter.png",
      },
      {
        num: 4,
        title: "Community Engagement",
        description:
          "To facilitate community engagement, we incorporated features such as ratings, reviews, and real-time private messaging using Socket.io. This design choice promotes interaction among users, helping to build trust and a sense of community within the platform. By allowing users to share feedback and communicate directly, we enhance the overall user experience, making the application not just a transactional platform but a vibrant community space.",
        image: "/images/featured/nest-quest/community.png",
      },
    ],
    object_map: "/images/featured/nest-quest/structure-map.png",
    tag: "Fullstack",
  },
  {
    id: 2,
    title: "Notify Now",
    type: "Full-stack Real-Time Event Notification System",
    description:
      "Notify Now is a full-stack real-time event notification system that allows users to receive notifications for upcoming events, reminders, and alerts. Users can customize what events and what type of events they want to track and receive notifications for using a customize API, ensuring they receive timely updates and stay informed.",
    objectives: [
      {
        num: 1,
        title: "User-Centric Design",
        details:
          "Create an intuitive and responsive user interface that enhances user experience, making it easy for users to navigate, register, and interact with the application.",
        Icon: FaPencilRuler,
      },
      {
        num: 2,
        title: "Comprehensive Property Management",
        details:
          "Enable users to seamlessly add, edit, and manage their property listings, ensuring they have full control over the content they share.",
        Icon: BsHouseLockFill,
      },
      {
        num: 3,
        title: "Enhanced Search and Discovery",
        details:
          "Implement advanced search and filtering options to help users quickly find properties that meet their criteria, fostering efficient exploration of listings.",
        Icon: TbMapPinSearch,
      },
      {
        num: 4,
        title: "Community Engagement",
        details:
          "Facilitate user interaction through features like ratings, reviews, and private messaging, building a sense of community and trust among users.",
        Icon: FaHandshake,
      },
    ],
    purpose: {
      description:
        "The purpose of Nest Quest is to revolutionize the way users engage with the real estate market by providing a comprehensive, user-friendly platform that simplifies the process of property management and discovery. By bridging the gap between property owners and potential buyers or renters, Nest Quest aims to:",
      purpose_list: [
        {
          num: 1,
          title: "Empower Users",
          details:
            "Equip users with the tools they need to effectively manage their property listings and find suitable real estate options, enhancing their overall experience in the market.",
          Icon: BsPersonFillCheck,
        },
        {
          num: 2,
          title: "Foster Transparency",
          details:
            "Create a trustworthy environment where users can share reviews and ratings, facilitating informed decision-making for potential buyers and renters.",
          Icon: PiFileMagnifyingGlassFill,
        },
        {
          num: 3,
          title: "Build Community Connections",
          details:
            "Encourage meaningful interactions between users, allowing for direct communication and support, which enhances user satisfaction and engagement.",
          Icon: IoChatbubbles,
        },
        {
          num: 4,
          title: "Innovate Real Estate Transactions:",
          details:
            "Introduce a modern approach to real estate transactions by integrating technology with traditional practices, making the process more accessible and efficient for all users.",
          Icon: FaLightbulb,
        },
      ],
    },
    projectImg: "/images/featured/nest-quest/nest-quest.jpg",
    page_link: "notify-now",
    ProjectIcon: TbTimelineEventExclamation,
    Stack: [
      FaHtml5,
      SiTailwindcss,
      BiLogoTypescript,
      TbBrandNextjs,
      BiLogoPostgresql,
      TbBrandPrisma,
    ],
    github: "https://github.com/deep-git/event-notifications",
    view_link: "https://notifynow-events.vercel.app/",
    completedBy: "Deepak",
    conclusion:
      "Our full-stack real estate application successfully aligns with key objectives to empower users and foster community connections. By implementing a user-centric design and comprehensive property management tools, we enhanced the search and discovery process, making it intuitive and efficient. The platform promotes transparency in transactions, ensuring users have access to clear information while facilitating engagement within the community. Overall, our application innovates the real estate experience, setting a new standard for how users interact with property transactions.",
    design_objectives: [
      {
        num: 1,
        title: "User-Centric Design",
        description:
          "We developed an intuitive and responsive user interface that prioritizes ease of navigation. The layout is clean and organized, enabling users to register and interact with the application with minimal effort. By incorporating user feedback during the design process, we tailored the experience to meet the needs of various user demographics, enhancing overall satisfaction and encouraging prolonged engagement.",
        image: "/images/featured/nest-quest/user-interface.png",
      },
      {
        num: 2,
        title: "Comprehensive Property Management",
        description:
          "We utilized Prisma ORM to facilitate seamless interactions with the MongoDB database, allowing users to add, edit, and manage their property listings efficiently. The interface features straightforward forms and editing tools, giving users full control over their content while ensuring that all actions are user-friendly. This approach not only empowers users but also enhances the accuracy and relevance of the listings shared on the platform.",
        image: "/images/featured/nest-quest/property-management.png",
      },
      {
        num: 3,
        title: "Enhanced Search and Discovery",
        description:
          "To improve search and discovery, we implemented advanced filtering and sorting options, enabling users to quickly find properties that align with their specific criteria. The design features a dynamic search bar and customizable filters, allowing for a tailored exploration of listings. By prioritizing speed and accessibility in this feature, we foster an engaging experience that encourages users to interact with a wider range of properties.",
        image: "/images/featured/nest-quest/search-filter.png",
      },
      {
        num: 4,
        title: "Community Engagement",
        description:
          "To facilitate community engagement, we incorporated features such as ratings, reviews, and real-time private messaging using Socket.io. This design choice promotes interaction among users, helping to build trust and a sense of community within the platform. By allowing users to share feedback and communicate directly, we enhance the overall user experience, making the application not just a transactional platform but a vibrant community space.",
        image: "/images/featured/nest-quest/community.png",
      },
    ],
    object_map: "/images/featured/nest-quest/structure-map.png",
    tag: "Fullstack",
  },
  {
    id: 3,
    title: "Nest Quest",
    type: "Full-stack Real Estate Application",
    description:
      "Nest Quest is a full-stack real estate application that simplifies property buying, selling, and renting. Users can easily register, log in, and explore diverse property listings with detailed information. Key features include adding and managing personal listings, saving and bookmarking properties, writing ratings and reviews, and engaging in private messaging with listing owners. With a focus on user-friendly navigation and security, Nest Quest aims to create a transparent and interactive platform for a seamless real estate experience.",
    objectives: [
      {
        num: 1,
        title: "User-Centric Design",
        details:
          "Create an intuitive and responsive user interface that enhances user experience, making it easy for users to navigate, register, and interact with the application.",
        Icon: FaPencilRuler,
      },
      {
        num: 2,
        title: "Comprehensive Property Management",
        details:
          "Enable users to seamlessly add, edit, and manage their property listings, ensuring they have full control over the content they share.",
        Icon: BsHouseLockFill,
      },
      {
        num: 3,
        title: "Enhanced Search and Discovery",
        details:
          "Implement advanced search and filtering options to help users quickly find properties that meet their criteria, fostering efficient exploration of listings.",
        Icon: TbMapPinSearch,
      },
      {
        num: 4,
        title: "Community Engagement",
        details:
          "Facilitate user interaction through features like ratings, reviews, and private messaging, building a sense of community and trust among users.",
        Icon: FaHandshake,
      },
    ],
    purpose: {
      description:
        "The purpose of Nest Quest is to revolutionize the way users engage with the real estate market by providing a comprehensive, user-friendly platform that simplifies the process of property management and discovery. By bridging the gap between property owners and potential buyers or renters, Nest Quest aims to:",
      purpose_list: [
        {
          num: 1,
          title: "Empower Users",
          details:
            "Equip users with the tools they need to effectively manage their property listings and find suitable real estate options, enhancing their overall experience in the market.",
          Icon: BsPersonFillCheck,
        },
        {
          num: 2,
          title: "Foster Transparency",
          details:
            "Create a trustworthy environment where users can share reviews and ratings, facilitating informed decision-making for potential buyers and renters.",
          Icon: PiFileMagnifyingGlassFill,
        },
        {
          num: 3,
          title: "Build Community Connections",
          details:
            "Encourage meaningful interactions between users, allowing for direct communication and support, which enhances user satisfaction and engagement.",
          Icon: IoChatbubbles,
        },
        {
          num: 4,
          title: "Innovate Real Estate Transactions:",
          details:
            "Introduce a modern approach to real estate transactions by integrating technology with traditional practices, making the process more accessible and efficient for all users.",
          Icon: FaLightbulb,
        },
      ],
    },
    projectImg: "/images/featured/nest-quest/nest-quest.jpg",
    page_link: "nest-quest",
    ProjectIcon: BiSolidBuildingHouse,
    Stack: [
      FaHtml5,
      SiTailwindcss,
      FaReact,
      SiSocketdotio,
      BiLogoMongodb,
      TbBrandPrisma,
      FaNodeJs,
      SiExpress,
    ],
    github: "https://github.com/deep-git/nest-quest",
    view_link: "https://nestquest-estate.netlify.app/",
    completedBy: "Deepak",
    conclusion:
      "Our full-stack real estate application successfully aligns with key objectives to empower users and foster community connections. By implementing a user-centric design and comprehensive property management tools, we enhanced the search and discovery process, making it intuitive and efficient. The platform promotes transparency in transactions, ensuring users have access to clear information while facilitating engagement within the community. Overall, our application innovates the real estate experience, setting a new standard for how users interact with property transactions.",
    design_objectives: [
      {
        num: 1,
        title: "User-Centric Design",
        description:
          "We developed an intuitive and responsive user interface that prioritizes ease of navigation. The layout is clean and organized, enabling users to register and interact with the application with minimal effort. By incorporating user feedback during the design process, we tailored the experience to meet the needs of various user demographics, enhancing overall satisfaction and encouraging prolonged engagement.",
        image: "/images/featured/nest-quest/user-interface.png",
      },
      {
        num: 2,
        title: "Comprehensive Property Management",
        description:
          "We utilized Prisma ORM to facilitate seamless interactions with the MongoDB database, allowing users to add, edit, and manage their property listings efficiently. The interface features straightforward forms and editing tools, giving users full control over their content while ensuring that all actions are user-friendly. This approach not only empowers users but also enhances the accuracy and relevance of the listings shared on the platform.",
        image: "/images/featured/nest-quest/property-management.png",
      },
      {
        num: 3,
        title: "Enhanced Search and Discovery",
        description:
          "To improve search and discovery, we implemented advanced filtering and sorting options, enabling users to quickly find properties that align with their specific criteria. The design features a dynamic search bar and customizable filters, allowing for a tailored exploration of listings. By prioritizing speed and accessibility in this feature, we foster an engaging experience that encourages users to interact with a wider range of properties.",
        image: "/images/featured/nest-quest/search-filter.png",
      },
      {
        num: 4,
        title: "Community Engagement",
        description:
          "To facilitate community engagement, we incorporated features such as ratings, reviews, and real-time private messaging using Socket.io. This design choice promotes interaction among users, helping to build trust and a sense of community within the platform. By allowing users to share feedback and communicate directly, we enhance the overall user experience, making the application not just a transactional platform but a vibrant community space.",
        image: "/images/featured/nest-quest/community.png",
      },
    ],
    object_map: "/images/featured/nest-quest/structure-map.png",
    tag: "Fullstack",
  },
  // {
  //   id: 3,
  //   title: "Focusboard",
  //   type: "Full-stack Kanban Task Management Application",
  //   description:
  //     "Focusboard is a robust Kanban task management application designed to enhance productivity and organization. Users can easily register and log in to create customizable task boards, add columns, and manage tasks with detailed descriptions and subtasks. The platform allows for intuitive drag-and-drop functionality to move tasks between columns, ensuring a seamless workflow. With a fully responsive design and the ability to edit board and column names and colors, Focusboard caters to individual preferences and styles. Users can efficiently track progress and collaborate by viewing all their boards from a user-friendly sidebar, making task management straightforward and effective.",
  //   projectImg: "/images/featured/focusboard/focusboard.png",
  //   page_link: "focusboard",
  //   ProjectIcon: FaTasks,
  //   Stack: [
  //     FaHtml5,
  //     SiTailwindcss,
  //     TbBrandNextjs,
  //     BiLogoMongodb,
  //     TbBrandPrisma,
  //   ],
  //   github: "https://github.com/deep-git/focus-board",
  //   view_link: "https://focusboard-task.vercel.app/",
  //   completedBy: "Deepak",
  //   objectives: [
  //     {
  //       num: 1,
  //       title: "Streamlined Task Management",
  //       details:
  //         "Develop an intuitive platform that enables users to create, manage, and organize tasks efficiently through customizable boards and columns.",
  //       Icon: FaClipboardList,
  //     },
  //     {
  //       num: 2,
  //       title: "User-Friendly Interface",
  //       details:
  //         "Design a responsive and accessible user interface that facilitates easy navigation and task management, making it simple for users to add, edit, and move tasks.",
  //       Icon: FaPencilRuler,
  //     },
  //     {
  //       num: 3,
  //       title: "Flexible Task Organization",
  //       details:
  //         "Allow users to create and customize boards, columns, and tasks, enabling them to structure their workflow in a way that suits their individual needs.",
  //       Icon: BsGrid1X2Fill,
  //     },
  //     {
  //       num: 4,
  //       title: "Enhanced Collaboration",
  //       details:
  //         "Foster an environment where users can track progress through subtasks and task completion toggles, promoting accountability and collaboration.",
  //       Icon: RiTeamFill,
  //     },
  //   ],
  //   purpose: {
  //     description:
  //       "The purpose of Focusboard is to empower individuals and teams to enhance their productivity through an efficient, customizable task management system. By providing a user-friendly platform, Focusboard aims to:",
  //     purpose_list: [
  //       {
  //         num: 1,
  //         title: "Facilitate Organization",
  //         details:
  //           "Help users structure their tasks and projects in a way that aligns with their workflow, making it easier to stay on track and meet deadlines.",
  //         Icon: FaFolderOpen,
  //       },
  //       {
  //         num: 2,
  //         title: "Promote Accountability",
  //         details:
  //           "Enable users to break down larger tasks into manageable subtasks, allowing for better tracking of progress and completion.",
  //         Icon: TbTarget,
  //       },
  //       {
  //         num: 3,
  //         title: "Encourage Flexibility",
  //         details:
  //           "Offer a highly adaptable environment where users can modify boards, columns, and tasks to fit their unique needs and preferences.",
  //         Icon: FaGears,
  //       },
  //       {
  //         num: 4,
  //         title: "Enhance Collaboration",
  //         details:
  //           "Create a space where users can visually manage their tasks, fostering better communication and coordination among team members.",
  //         Icon: FaHandshake,
  //       },
  //     ],
  //   },
  //   conclusion:
  //     "Our task management application effectively meets its objectives by streamlining task organization and promoting accountability among users. With a user-friendly interface and flexible task organization features, we facilitate seamless management of projects and responsibilities. Enhanced collaboration tools empower teams to work together efficiently, fostering an environment that encourages communication and adaptability. Overall, our application sets a new standard for task management, helping users stay organized and engaged in their work.",
  //   design_objectives: [
  //     {
  //       num: 1,
  //       title: "Streamlined Task Management",
  //       description:
  //         "We designed an intuitive layout that minimizes clutter and focuses on essential features. Customizable boards and columns allow users to easily organize tasks visually, with drag-and-drop functionality enhancing efficiency. This design choice reduces friction in task creation and management, making the workflow more fluid.",
  //       image: "/images/featured/focusboard/task-management.png",
  //     },
  //     {
  //       num: 2,
  //       title: "User-Friendly Interface",
  //       description:
  //         "The user-friendly interface was crafted with accessibility and simplicity in mind, ensuring that users of all skill levels can navigate the app effortlessly. We employed responsive design principles to guarantee a consistent experience across devices, utilizing clear icons and labels for intuitive interactions. Feedback from user testing informed our choices, leading to an interface that feels natural and welcoming.",
  //       image: "/images/featured/focusboard/user-interface.png",
  //     },
  //     {
  //       num: 3,
  //       title: "Flexible Task Organization",
  //       description:
  //         "We implemented customizable boards and columns that users can tailor to their specific needs. Users can easily add, modify, or remove tasks and categories, empowering them to create a workflow that fits their unique processes. This design fosters creativity and adaptability, enabling users to organize their tasks in a way that suits their individual preferences.",
  //       image: "/images/featured/focusboard/task-organization.png",
  //     },
  //     {
  //       num: 4,
  //       title: "Enhanced Collaboration",
  //       description:
  //         "We integrated features that promote teamwork and accountability, such as subtasks and real-time updates. The design encourages users to engage with each other by making it simple to track progress within the app. This approach not only boosts collaboration but also helps maintain transparency in task management, ensuring everyone is aligned and informed. The app is highly scalable as team integration and further collaboration is to be introduced in the future!",
  //       image: "/images/featured/focusboard/enhanced-collaboration.png",
  //     },
  //   ],
  //   object_map: "/images/featured/focusboard/structure-map.png",
  //   tag: "Fullstack",
  // },
  //   {
  //     id: 3,
  //     title: "Converso",
  //     type: "Full-stack AI Chatbot Application",
  //     description:
  //       "Converso is an AI chatbot application designed to facilitate engaging and informative conversations between users and an intelligent chatbot. Users can easily register and log in to initiate chat rooms, where they can ask questions and receive real-time responses. The platform supports multimedia interactions, allowing users to upload images to enhance their queries. With a user-friendly interface, Converso ensures seamless navigation, enabling users to manage chat rooms effortlessly, including creating new chats and deleting existing ones. All chat data is securely stored and retrievable, providing users with access to their conversation history. Converso aims to make information access quick, engaging, and enjoyable.",
  //     projectImg: "/images/featured/converso/converso.png",
  //     page_link: "converso",
  //     ProjectIcon: TbMessageChatbotFilled,
  //     Stack: [
  //       FaHtml5,
  //       SiTailwindcss,
  //       BiLogoMongodb,
  //       FaNodeJs,
  //       SiExpress,
  //       IoSparkles,
  //     ],
  //     github: "https://github.com/deep-git/converso",
  //     view_link: "https://converso-ai.netlify.app/",
  //     completedBy: "Deepak",
  //     objectives: [
  //       {
  //         num: 1,
  //         title: "Intuitive User Experience",
  //         details:
  //           "Design a straightforward interface that enables users to easily register, log in, and start chatting with the AI chatbot with minimal friction.",
  //         Icon: FaPencilRuler,
  //       },
  //       {
  //         num: 2,
  //         title: "Dynamic Chat Management",
  //         details:
  //           "Allow users to initiate new chat rooms effortlessly, enabling seamless conversations with the AI for various topics and inquiries.",
  //         Icon: BsChatSquareTextFill,
  //       },
  //       {
  //         num: 3,
  //         title: "Efficient Data Handling",
  //         details:
  //           "Ensure that all chat data is securely stored and easily retrievable, providing users with quick access to their chat history whenever they re-enter a chat room.",
  //         Icon: FaDatabase,
  //       },
  //       {
  //         num: 4,
  //         title: "User Control Over Chats",
  //         details:
  //           "Enable users to delete chat rooms, giving them the freedom to manage their conversations according to their preferences.",
  //         Icon: RiUserSettingsFill,
  //       },
  //     ],
  //     purpose: {
  //       description:
  //         "The purpose of Converso is to provide a seamless and engaging platform for users to interact with an AI chatbot, enhancing their ability to obtain information and assistance in real-time. By focusing on user-friendly design and functionality, Converso aims to:",
  //       purpose_list: [
  //         {
  //           num: 1,
  //           title: "Empower Users",
  //           details:
  //             "Equip users with an easy-to-navigate interface that encourages exploration and effective communication with the AI.",
  //           Icon: BsPersonFillCheck,
  //         },
  //         {
  //           num: 2,
  //           title: "Foster Engagement",
  //           details:
  //             "Create a dynamic environment where users can ask questions, share images, and receive relevant responses, making conversations more interactive.",
  //           Icon: BiSolidConversation,
  //         },
  //         {
  //           num: 3,
  //           title: "Support Learning and Discovery",
  //           details:
  //             "Help users access information quickly and efficiently, promoting a deeper understanding of various topics through conversation with the AI.",
  //           Icon: FaLightbulb,
  //         },
  //         {
  //           num: 4,
  //           title: "Enhance User Control",
  //           details:
  //             "Provide tools that allow users to manage their chat experiences, fostering a sense of ownership and personalization in their interactions.",
  //           Icon: IoMdSettings,
  //         },
  //       ],
  //     },
  //     conclusion:
  //       "Our full-stack AI chatbot application successfully delivers an intuitive user experience while empowering users to take control of their interactions. With dynamic chat management and efficient data handling, we foster engagement and support learning and discovery. By prioritizing user control over chats, our application enhances the overall experience, ensuring users feel confident and informed in their conversations. Overall, we are setting a new standard for how AI chatbots can enhance communication and interaction.",
  //     design_objectives: [
  //       {
  //         num: 1,
  //         title: "Intuitive User Experience",
  //         description:
  //           "We designed a clean and minimalistic interface that emphasizes user flow. Leveraging React Router DOM for seamless navigation, users can quickly register, log in, and access the chatbot without unnecessary steps. We prioritized clear visual cues and streamlined interactions, ensuring that users can start chatting with the AI chatbot with minimal friction, enhancing overall satisfaction.",
  //         image: "/images/featured/converso/user-interface.png",
  //       },
  //       {
  //         num: 2,
  //         title: "Dynamic Chat Management",
  //         description:
  //           "We implemented a straightforward mechanism for users to initiate new chat rooms, allowing for easy transitions between different conversations. The design features prominent buttons and notifications, making it simple to access various topics and inquiries. This user-centric approach promotes engagement by encouraging users to explore multiple chat scenarios with the AI, enhancing the versatility of their experience.",
  //         image: "/images/featured/converso/dynamic-chat.png",
  //       },
  //       {
  //         num: 3,
  //         title: "Efficient Data Handling",
  //         description:
  //           "We utilized MongoDB for secure storage of chat data, allowing for quick retrieval of chat history. The integration of React Query for data fetching further optimizes performance by minimizing load times and ensuring that users can access their previous conversations instantly upon re-entering a chat room. This design choice not only enhances user satisfaction but also builds trust by prioritizing data security and accessibility.",
  //         image: "/images/featured/converso/data-handling.png",
  //       },
  //       {
  //         num: 4,
  //         title: "User Control Over Chats",
  //         description:
  //           "To empower users with control over their chats, we included functionality that allows them to delete chat rooms as needed. The design incorporates clear options for managing conversations, providing users with the autonomy to curate their chat history. This approach not only enhances the user experience but also fosters a sense of ownership and privacy, ensuring users feel comfortable managing their interactions with the AI.",
  //         image: "/images/featured/converso/user-control.png",
  //       },
  //     ],
  //     object_map: "/images/featured/converso/structure-map.png",
  //     tag: "Fullstack",
  //   },
];

export const otherProjectsList = [
  {
    title: "Job Listings",
    projectImg: "/images/otherprojects/job_listings.png",
    description:
      "This is a challenge project that utilizes HTML, Tailwind CSS, and React to create a job listings page. The page contains a number of job listings that is retrieved through JSON data and displayed. Each job listing contains the company name, position, and other job specific details.",
    Stack: [FaHtml5, SiTailwindcss, FaReact],
    github: "https://github.com/deep-git/job-listings",
    view_link: "https://deep-git.github.io/job-listings/",
    tag: "Frontend",
  },
  {
    title: "Interactive Rating",
    projectImg: "/images/otherprojects/interactive_rating.png",
    description:
      "Project that allows the user to select a rating and submit the rating, to which the user will then be redirected to a thank you page that shows the rating out of 5 that the user chose, as well as a thank you message.",
    Stack: [FaHtml5, FaCss3Alt, FaReact],
    github: "https://github.com/deep-git/interactive-rating",
    view_link: "https://deep-git.github.io/interactive-rating/",
    tag: "Frontend",
  },
  {
    title: "Todo-list App",
    projectImg: "/images/otherprojects/todo_list.png",
    description:
      "A todo list application that allows users to add, remove, edit, and manage todos. Options for switching between light mode and dark mode are available, and all of the changes, whether it be the mode or the todos, will be saved to local storage.",
    Stack: [FaHtml5, SiTailwindcss, FaReact, SiRedux],
    github: "https://github.com/deep-git/todo-list",
    view_link: "https://deepgit-todo-list.netlify.app/",
    tag: "Frontend",
  },
  {
    title: "Word-Vault Dictionary App",
    projectImg: "/images/otherprojects/dictionary_preview.png",
    description:
      "The application allows users to input words to find their definition and information through an external API. Options for switching between light mode and dark mode, as well as switching between different fonts are available, and all of the changes, whether it be the mode or font, will be saved to local storage.",
    Stack: [FaHtml5, SiTailwindcss, TbBrandNextjs],
    github: "https://github.com/deep-git/word-vault",
    view_link: "https://deepgit-word-vault.netlify.app/",
    tag: "Frontend",
  },
  {
    title: "Country Search API",
    projectImg: "/images/otherprojects/country_preview.png",
    description:
      "The application allows users to search and filter through countries based on input and regions. The country cards show some simple information, and upon clicking the country card, the app will redirect the user to the specific country page where more detailed information can be viewed.",
    Stack: [FaHtml5, FaCss3Alt, FaReact],
    github: "https://github.com/deep-git/country-search",
    view_link: "https://deep-git.github.io/country-search/",
    tag: "Frontend",
  },
  {
    title: "Charge-Up",
    projectImg: "/images/otherprojects/charge_up.png",
    description:
      "Welcome to project Charge-Up! An invoice full-stack application that allows users to register/login, add invoices based on billing information, view and sort through invoices, and edit, delete, and mark invoices as paid or pending.",
    Stack: [
      FaHtml5,
      SiTailwindcss,
      BiLogoTypescript,
      TbBrandNextjs,
      BiLogoPostgresql,
    ],
    github: "https://github.com/deep-git/invoices-app",
    view_link: "https://deepgit-charge-up.vercel.app/",
    tag: "Fullstack",
  },
  {
    title: "Converso",
    projectImg: "/images/featured/converso/converso.png",
    description:
      "Converso is an AI chatbot application designed to facilitate engaging and informative conversations between users and an intelligent chatbot. Users can easily register and log in to initiate chat rooms, where they can ask questions and receive real-time responses.",
    Stack: [
      FaHtml5,
      SiTailwindcss,
      BiLogoMongodb,
      FaNodeJs,
      SiExpress,
      IoSparkles,
    ],
    github: "https://github.com/deep-git/converso",
    view_link: "https://converso-ai.netlify.app/",
    tag: "Fullstack",
  },
  {
    title: "Focusboard",
    projectImg: "/images/featured/focusboard/focusboard.png",
    description:
      "Focusboard is a robust Kanban task management application designed to enhance productivity and organization. Users can easily register and log in to create customizable task boards, add columns, and manage tasks with detailed descriptions and subtasks. Users can efficiently track progress and collaborate by viewing all their boards from a user-friendly sidebar, making task management straightforward and effective.",
    Stack: [
      FaHtml5,
      SiTailwindcss,
      TbBrandNextjs,
      BiLogoMongodb,
      TbBrandPrisma,
    ],
    github: "https://github.com/deep-git/focus-board",
    view_link: "https://focusboard-task.vercel.app/",
    tag: "Fullstack",
  },
  {
    title: "Calculator",
    projectImg: "/images/otherprojects/calculator_app.png",
    description:
      "Calculator app that allows users to perform basic arithmetic calculations such as addition, substraction, division, and multiplication.",
    Stack: [FaHtml5, FaCss3Alt, RiJavascriptFill],
    github: "https://github.com/deep-git/Calculator",
    view_link: "https://deep-git.github.io/Calculator/",
    tag: "Frontend",
  },
  {
    title: "Pixel Sort / Capstone Project",
    projectImg: "/images/otherprojects/pixelsort.png",
    description:
      "Consisting of a team of 4, created an Android photo organization application with photo storage and organization capabilities, as well as machine learning techniques to search through and remove any redundant and low-quality images.",
    Stack: [FaJava, SiAndroidstudio, BsFiletypeXml, IoLogoFirebase],
    github: "https://github.com/rnlclngpilar/photoOrganizer-CapstoneProject",
    view_link: "https://github.com/rnlclngpilar/photoOrganizer-CapstoneProject",
    tag: "Fullstack",
  },
  {
    title: "Calorie Tracker / Mobile",
    projectImg: "/images/otherprojects/calorie_tracker.png",
    description:
      "Project consisting of 3 members to create an android calorie tracker application that enables users to track calorie amounts consumed each day. Users are able to add meals for breakfast, lunch, dinner, and snacks through the use of a food API. The total amount of daily calories consumed are displayed, and users are able to go back and forth to view the history of each day.",
    Stack: [FaJava, SiAndroidstudio, BsFiletypeXml, IoLogoFirebase],
    github: "https://github.com/deep-git/SOFE4640-CalorieTracker",
    view_link: "https://github.com/deep-git/SOFE4640-CalorieTracker",
    tag: "Fullstack",
  },
];

export const designProjects = [
  {
    title: "Social Links Profile",
    projectImg: "/images/design/social_links.png",
    description:
      "This ia a challenge project that utilizes HTML and CSS to create a social links profile card, consisting of a profile image, general information, and buttons that link to the users various social media and contact sites.",
    Stack: [FaHtml5, SiTailwindcss],
    github: "https://github.com/deep-git/social-links-profile",
    view_link: "https://deep-git.github.io/social-links-profile/",
    tag: "UI",
  },
  {
    title: "NFT Preview Card",
    projectImg: "/images/design/nft_preview.png",
    description:
      "This is a challenge project that utilizes HTML and CSS to create an nft preview card component, consisting of related information such as currency, days left, and the user that created the nft. The component also contains hover states for various elements such as the title, user, and the main image.",
    Stack: [FaHtml5, SiTailwindcss],
    github: "https://github.com/deep-git/nft-preview-card",
    view_link: "https://deep-git.github.io/nft-preview-card/",
    tag: "UI",
  },
  {
    title: "Blog Preview Card",
    projectImg: "/images/design/blog_preview.png",
    description:
      "This is a challenge project that utilizes HTML and CSS to create a blog preview card, consisting of related information such as the title of the blog, tags, date published, a description, and the author.",
    Stack: [FaHtml5, SiTailwindcss],
    github: "https://github.com/deep-git/blog-preview-card",
    view_link: "https://deep-git.github.io/blog-preview-card/",
    tag: "UI",
  },
  {
    title: "Order Summary",
    projectImg: "/images/design/order_summary.png",
    description:
      "This is a challenge project that utilizes HTML and CSS to create an order summary component, consisting of related information such as the order description, payment plan, and options to either proceed to payment or cancel the payment.",
    Stack: [FaHtml5, SiTailwindcss],
    github: "https://github.com/deep-git/order-summary",
    view_link: "https://deep-git.github.io/order-summary/",
    tag: "UI",
  },
  {
    title: "Profile Card",
    projectImg: "/images/design/profile_card.png",
    description:
      "This is a challenge project that utilizes HTML and CSS to create a profile card component, consisting of related information such as the user information, social media statistics, and amount of photos uploaded.",
    Stack: [FaHtml5, SiTailwindcss],
    github: "https://github.com/deep-git/profile-card",
    view_link: "https://deep-git.github.io/profile-card/",
    tag: "UI",
  },
  {
    title: "Article Preview",
    projectImg: "/images/design/article_preview.png",
    description:
      "This is a challenge project that utilizes HTML and CSS to create an article preview component consisting of related information. The component also contains an active click state for the share button, which upon click, shows more options for social media sharing.",
    Stack: [FaHtml5, SiTailwindcss],
    github: "https://github.com/deep-git/article-preview",
    view_link: "https://deep-git.github.io/article-preview/",
    tag: "UI",
  },
  {
    title: "FAQ Accordion",
    projectImg: "/images/design/faq_accordion.png",
    description:
      "This is a challenge project that utilizes HTML, CSS, and React to create a FAQ accordion, which consists of a subheading title question as well as the content within the accordion associated with the subtitle.",
    Stack: [FaHtml5, SiTailwindcss, FaReact],
    github: "https://github.com/deep-git/faq-accordion",
    view_link: "https://deep-git.github.io/faq-accordion/",
    tag: "UI",
  },
  {
    title: "Results Summary",
    projectImg: "/images/design/results_summary.png",
    description:
      "This is a challenge project that utilizes HTML and CSS to create a results summary component, which consists of an overall score out of 100, a description of the score, and an overall summary of each of the various sections.",
    Stack: [FaHtml5, FaCss3Alt],
    github: "https://github.com/deep-git/results-summary",
    view_link: "https://deep-git.github.io/results-summary/",
    tag: "UI",
  },
  {
    title: "Product Preview Card",
    projectImg: "/images/design/product_preview.png",
    description:
      "This is a challenge project that utilizes HTML and CSS to create a product review card, which consists of a product title, description, price, and add to cart button.",
    Stack: [FaHtml5, FaCss3Alt],
    github: "https://github.com/deep-git/product-preview-card",
    view_link: "https://deep-git.github.io/product-preview-card/",
    tag: "UI",
  },
  {
    title: "QR Code",
    projectImg: "/images/design/qr_code.png",
    description:
      "This is a challenge project that utilizes HTML and CSS to create a QR code component, which consists of a QR code of the Frontend Mentor website, as well as a heading and description.",
    Stack: [FaHtml5, FaCss3Alt],
    github: "https://github.com/deep-git/qr-code",
    view_link: "https://deep-git.github.io/qr-code/",
    tag: "UI",
  },
  {
    title: "3-Column Preview Card",
    projectImg: "/images/design/column_preview.png",
    description:
      "This is a challenge project that utilizes HTML and CSS to create a 3 column preview card component, which consists of three different types of cars: Sedans, SUVs, and Luxury. Each column contains an image, title, description, and a learn more button.",
    Stack: [FaHtml5, FaCss3Alt],
    github: "https://github.com/deep-git/column-preview-card",
    view_link: "https://deep-git.github.io/column-preview-card/",
    tag: "UI",
  },
];

export const techSkills = [
  {
    name: "HTML",
    Icon: FaHtml5,
  },
  {
    name: "CSS",
    Icon: FaCss3Alt,
  },
  {
    name: "JavaScript",
    Icon: RiJavascriptFill,
  },
  {
    name: "React.js",
    Icon: FaReact,
  },
  {
    name: "TypeScript",
    Icon: BiLogoTypescript,
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    name: "Next.js",
    Icon: TbBrandNextjs,
  },
  {
    name: "NodeJS",
    Icon: FaNodeJs,
  },
  {
    name: "ExpressJS",
    Icon: SiExpress,
  },
  {
    name: "Prisma ORM",
    Icon: TbBrandPrisma,
  },
  {
    name: "MongoDB",
    Icon: BiLogoMongodb,
  },
  {
    name: "PostgreSQL",
    Icon: BiLogoPostgresql,
  },
  {
    name: "Figma",
    Icon: PiFigmaLogo,
  },
  {
    name: "Github",
    Icon: BsGithub,
  },
];

export const projectWorkedOnSkills = [
  {
    name: "HTML",
    Icon: FaHtml5,
  },
  {
    name: "CSS",
    Icon: FaCss3Alt,
  },
  {
    name: "JavaScript",
    Icon: RiJavascriptFill,
  },
  {
    name: "React.js",
    Icon: FaReact,
  },
  {
    name: "TypeScript",
    Icon: BiLogoTypescript,
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    name: "Next.js",
    Icon: TbBrandNextjs,
  },
  {
    name: "NodeJS",
    Icon: FaNodeJs,
  },
  {
    name: "ExpressJS",
    Icon: SiExpress,
  },
  {
    name: "Prisma ORM",
    Icon: TbBrandPrisma,
  },
  {
    name: "MongoDB",
    Icon: BiLogoMongodb,
  },
  {
    name: "PostgreSQL",
    Icon: BiLogoPostgresql,
  },
  {
    name: "Figma",
    Icon: PiFigmaLogo,
  },
  {
    name: "Java",
    Icon: FaJava,
  },
  {
    name: "Android Studio",
    Icon: SiAndroidstudio,
  },
  {
    name: "XML",
    Icon: BsFiletypeXml,
  },
  {
    name: "Firebase",
    Icon: IoLogoFirebase,
  },
  {
    name: "Socket.io",
    Icon: SiSocketdotio,
  },
  {
    name: "Gemini AI",
    Icon: IoSparkles,
  },
  {
    name: "Redux",
    Icon: SiRedux,
  },
  {
    name: "Github",
    Icon: BsGithub,
  },
];
