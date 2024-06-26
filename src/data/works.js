const TITLES = {
  plantyApp: "Planty App (iOS)",
  roommate: "Roommate (iOS)",
  listAm: "List.am (Web)",
  finFly: "FinFly (Web)",
  keepsMe: "KeepsMe (Web/Mobile)",
  medicalApp: "Medical App (iOS)",
  hcaHealthcare: "HCA Healthcare (Web) / NDA",
  spaarkd: "SPAARKD (iOS) / NDA",
  inecobank: "Inecobank (iOS) / NDA",
  novartis: "Novartis (Web) / NDA",
};

const WORK_PLANTY_APP_DETAILED = {
  title: TITLES.plantyApp,
  banner: "images/planty/banner.png",
  caseStudy: "https://www.behance.net/gallery/142507201/Planty-App-%28iOS%29-Case-Study",
  sections: [
    {
      title: "My Role",
      data: [
        {
          type: "text",
          value: "UX Researcher / UX Designer / UI Designer",
        },
      ],
    },
    {
      title: "Pain Points",
      data: [
        {
          type: "text",
          value:
            "As a result of the Covid-19 outbreak, a large number of people have begun gardening for the first time. With the influx of new gardeners comes a slew of concerns about how to cultivate and care for their plants. Time and fear of failure are the two most common reasons why individuals do not garden. \nNew gardeners have a lot of questions about gardening and are more likely to fail if they don't obtain the guidance they need. If you fail, you'll stop gardening completely, which will result in fewer gardening customers. It is necessary to design items that make gardening easier in order to keep people gardening. There is a chance to create better garden education solutions to assist people save time and enjoy their gardening experience.",
        },
      ],
    },
    {
      title: "Possible Solution",
      data: [
        {
          type: "text",
          value:
            "Create a digital solution for receiving help with plants and caring for them - an app that allows gardeners to quickly and easily identify and fix issues with their plants.",
        },
        {
          type: "text",
          value:
            "Planty is a plant care software that provides answers and assistance with plant care to help gardeners have more success in the garden.",
        },
      ],
    },
    {
      title: "Key Findings",
      data: [
        {
          type: "text",
          value:
            "It's better to keep things simple: It can be difficult to figure out what's wrong with a plant and how to fix it. ",
        },
        {
          type: "text",
          value:
            "It is critical to keep track of time: It takes too long to look for help on the internet, and it doesn't always work. It takes far too long to determine whether or not the assistance will be useful.",
        },
        {
          type: "text",
          value:
            "Real-life assistance: Users want to be able to get assistance from seasoned gardeners. ",
        },
        {
          type: "text",
          value:
            "Vegetables are widely consumed: Growing vegetable gardens was something that everyone enjoyed. ",
        },
        {
          type: "text",
          value:
            "The worst are pests and plant diseases: Dealing with plant problems and losing a harvest is the most aggravating and difficult thing to cope with.",
        },
      ],
    },
    {
      title: "Wireframe",
      data: [
        {
          type: "text",
          value:
            "After I'd looked at a few choices and decided on a design I liked, I started building low-fidelity wireframes in Figma, focusing on the golden path scenario and elements that I thought would be most useful to consumers.",
        },
        {
          type: "image",
          value: "images/planty/work-item_wireframe.png",
        },
      ],
    },
    {
      title: "Testing",
      data: [
        {
          type: "text",
          value:
            "I used Userberry to develop test scenarios with the high-fidelity prototype to get user feedback on the app design, core user processes, and detect usability concerns. ",
        },
        {
          type: "text",
          value:
            "There will be a total of 10 participants, with a mix of gardeners and designers. Background: You're a beginner gardener who just started a garden, but you're having trouble with your plants and don't know what's wrong.",
        },
        {
          type: "group",
          value: {
            title: "Tasks",
            bullets: [
              "Task 1: You have a new plant with a problem. Show me how you would figure out what problem your new plant is having and how to treat it.",
              "Task 2: You have a question about your plant which you would like to ask a garden expert for help with. Show me how you would ask for help.",
              "Task 3: You received a notification that a pro has responded to your question. Please show me how you would check this message.",
            ],
          },
        },
        {
          type: "group",
          value: {
            title: "Feedback",
            bullets: [
              "90% Task Completion: The large number of users completed through the tasks of diagnosing their plant problem and treatment options, as well as contacting or responding to an Expert. Making the flow simpler and the options more obvious could benefit users who were having trouble.",
              '80% Helpful App: This app was found to be useful for gardening by all participants. The "Ask an Expert" function was well received by users.',
              "25% Missclick Rate: Users have suggested that the home page and plant cards be made simpler. The flow of adding plants will be more transparent if redundancy of controls is removed.",
            ],
          },
        },
        {
          type: "image",
          value: "images/planty/work-item_testing.png",
        },
      ],
    },
    {
      title: "Final UI",
      data: [
        {
          type: "text",
          value:
            "Overall, it was a great experience, and I learnt a lot, including about mobile and iOS design patterns, as well as got to stretch my UX muscles. The following are some key takeaways: ",
        },
        {
          type: "text",
          value:
            "Iteration produces better results - After constructing and testing the high-fidelity prototype, data revealed that the majority of users comprehended the design and found it useful - we achieved our aim. However, simply attaining the target does not suggest that the product is ready to ship. The user had a better experience as a result of iterating on the design based on their feedback and using superior craftsmanship through design principles.",
        },
        {
          type: "text",
          value:
            "Simplicity is crucial - the user should be able to see what their next action is on each screen and at each step in the process, and redundancy should be eliminated. The more the Ul can be simplified to focus on the essential goal that the user is attempting to do, the better. ",
        },
        {
          type: "text",
          value:
            "Initial states are critical - Early prototypes put users in a situation where they were using the app for the second or third time. This is how the design began because I needed to expand out plant cards, notifications, and reminders. However, this only added to the confusion, therefore even in the early prototypes, these first run stages and instructional moments should be built.",
        },
        {
          type: "image",
          value: "images/planty/work-item_final-ui.png",
        },
      ],
    },
  ],
  previousPage: null,
  nextPage: "/works/roommate-app",
};

const WORK_ROOMMATE_APP_DETAILED = {
  title: TITLES.roommate,
  banner: "images/roommate/banner.png",
  caseStudy: "https://www.behance.net/gallery/140674567/Roommate-App-%28iOS%29-Case-Study",
  sections: [
    {
      title: "My Role",
      data: [
        {
          type: "text",
          value: "UX Researcher / UX Designer / UI Designer",
        },
      ],
    },
    {
      title: "Challenges",
      data: [
        {
          type: "text",
          value:
            "Moving to a new city, in search of a job or for studies, have become a very common thing in today's fast paced lives. I witnessed people struggling to find a room or a roommate in a new city. Either the contact of landlords is not genuine or they cannot find someone of their choice for co-living.",
        },
      ],
    },
    {
      title: "Possible Solution",
      data: [
        {
          type: "text",
          value:
            "RoomMate bring the best solution to enable you to find your ideal roommate or a room in your ideal budget without being worried about the fake landlord contacts or a roommate with some weird habits which you are not comfortable with. You can choose your roommate after reading their living habits, moving preferences and all the other required information you need to know about your roommate. ",
        },
        {
          type: "text",
          value:
            "On RoomMate, finding a room is even easier. You can contact the landlord directly after checking the rent, images and all the amenities you need in your apartment. RoomMate is our first stop after moving to a new city.",
        },
      ],
    },
    {
      title: "Research",
      data: [
        {
          type: "text",
          value:
            "I conducted secondary research to identify difficulties and have a better understanding of existing conditions. Based on those inputs, I conducted primary research to better grasp the project aim and empathize with the users. ",
        },
        {
          type: "text",
          value:
            "I conducted both qualitative and quantitative research. Their responses had a pattern to them, which I recognized. I also conducted online interviews with ten other people who were asked the same quantitative questions as the survey respondents and followed the same trends.",
        },
        {
          type: "image",
          value: "images/roommate/work-item_research.png",
        },
      ],
    },
    {
      title: "Define Users",
      data: [
        {
          type: "text",
          value:
            "I combined users's goals into a single main user flow after considering his objectives. This allows me to better understand the steps a user will take to fulfill the objective in the most efficient manner possible, which in turn allows me to identify the information architecture the app will require to enable this flow. The most important scenario is determining what's wrong with your plant and how to treat it. The two options are to diagnose using a picture scan or to seek professional assistance.",
        },
        {
          type: "image",
          value: "images/roommate/work-item_define-users.png",
        },
      ],
    },
    {
      title: "Ideate",
      data: [
        {
          type: "text",
          value:
            'It\'s difficult to gain the perspective needed to find design solutions. I need a dedicated environment for standing back and seeking and seeing every angle to have productive ideation sessions. But first, my team must identify the appropriate problem to address. After "Empathize" (gaining user insights from research/observation) and "Define" (finding links/patterns within those insights to create a meaningful and workable problem statement or point of view).',
        },
        {
          type: "image",
          value: "images/roommate/work-item_ideate.png",
        },
      ],
    },
    {
      title: "Design",
      data: [
        {
          type: "text",
          value:
            "At the Design phase, I am ready to design an early version of the solution. This phase is one of the best ways to reveal how my users think and feel about a product or solution and can help me resolve any uncertainties around the idea I have selected. Creating multiple prototypes takes the risk out of innovation by allowing me to fail quickly – and keeps me from spending time and money on an idea that may not actually work in practice.",
        },
        {
          type: "image",
          value: "images/roommate/work-item_design.png",
        },
      ],
    },
  ],
  previousPage: "/works/planty-app",
  nextPage: "/works/list-am-app",
};

const WORK_LIST_AM_APP_DETAILED = {
  title: TITLES.listAm,
  banner: "images/list-am/banner.png",
  caseStudy: "https://www.behance.net/gallery/145151351/Listam-%28Web%29-Case-Study",
  sections: [
    {
      title: "My Role",
      data: [
        {
          type: "text",
          value: "UX Researcher / UX Designer / UI Designer",
        },
      ],
    },
    {
      title: "About",
      data: [
        {
          type: "text",
          value:
            "List.am is the largest Armenian community and classifieds site for all types of goods, services and offers. The entire country knows, loves and uses List.am. Here you can buy and sell almost anything: from the real estate, cars and electronics to clothing, children's items and consumer goods, as well as find various services and jobs",
        },
      ],
    },
    {
      title: "Why I Conducted Research",
      data: [
        {
          type: "text",
          value:
            "List.am is the number one online store for buying and selling items by internet, either between an official entity and the client, or between users of the same platform. Currently, it is fully diversified and cataloged in different product lines, offering DVDs, music CDs, software, video games, electronics, clothes, furniture, food, books, etc. It is the most valuable retail brand in Armenia. Being one of the most recognized sites in Armenia, I want to know how users interact on the platform in order to discover the pain points and thus improve the experience and usability",
        },
      ],
    },
    {
      title: "Problems",
      data: [
        {
          type: "text",
          value:
            "I have observed that the website in general lacks clarity in the search for its products, causing waste of time and difficulties when choosing and buying. Another point of observation was the product page that has too much information and the CTAs go unnoticed; which causes fatigue in the reading, confusion on the part of the consumer and loss of possible conversions.",
        },
      ],
    },
    {
      title: "Value Proposition",
      data: [
        {
          type: "text",
          value:
            'To improve the user experience and increase conversions, convert the most "renowned e-Commerce" platform into a modern, welcoming, and intuitive site. Maintaining user confidence in the site while keeping them informed.',
        },
      ],
    },
    {
      title: "Research",
      data: [
        {
          type: "text",
          value:
            "Through interviews, questionnaires, usability tests, and other types of feedback approaches, user research aims to understand user behaviors, needs, and motivations. It is applied to comprehend how consumers interact with items and assess the suitability of design solutions.",
        },
        {
          type: "image",
          value: "images/list-am/work-item_research.png",
        },
      ],
    },
    {
      title: "Define Users",
      data: [
        {
          type: "text",
          value:
            'I began defining our users using the Define phase after the Discovery phase. The main goal is to gain insights from the data gathered during the Discovery phase, shifting away from "what" people want, think they need, or need to know to "why" they want it. Designers verify that the team\'s most crucial presumptions are true throughout this phase. ',
        },
        {
          type: "text",
          value:
            "I were able to gain a deeper understanding of the users' motivations and issues throughout the discovery phase. Therefore, we have provided the functional requirements in the form of Jobs to be done tales in order to develop a solution that will satisfy these needs.",
        },
        {
          type: "image",
          value: "images/list-am/work-item_define-users.png",
        },
      ],
    },
    {
      title: "Problems to Resolve / Value Proposal",
      data: [
        {
          type: "group",
          value: {
            title: "Problems to Resolve",
            bullets: [
              "The website presents an unintuitive search engine; causing the user to get lost among so much information. It is confusing and unclear to start searching for a product, and many times they do not end up finding anything, generating frustration for the user and a loss of conversion for List.am. Like the use of filters: they are not as precise, they are repeated and they are very extensive. Confusing product page I have observed that the product page does not present a visible and clear CTA, causing losses in possible conversions. There is too much information that ends up distracting the user and is not relevant, causing confusion.",
              'The graphics are not very clear, indicating that the product does not entice customers to buy it. Finally, this section of the site is far too long, leaving "the most important" at the bottom of the page, and the user never scrolls far enough to read everything. When I first visit the website, I see a lack of visual hierarchy, many sections that are chaotic, excess material that causes confusion in the user, and slow desertion of the site if the user has never visited the platform before. It also has an out-of-date design and is missing reading levels.',
            ],
          },
        },
        {
          type: "group",
          value: {
            title: "Value Proposal",
            bullets: [
              "I want to improve the user experience on one of the Armenian’s most well-known e-Commerce platforms by presenting a more current design and making it more user-friendly and intuitive. Filters that are more precise. The time it takes to find a product will be lowered. Post-sale contact with the seller, will be improved, with the goal of continuing to capture clients or having them back through newlesteer or promotions, and above all, for the positive experience. Highlight the most critical points, organize what is vital, and increase attention levels.Maintain active users, stay current with new technology, and provide a tailored site to make the user feel at ease. Client at the center: putting the customer at the center of all decisions is List.am's key decision. The organization is continually working to increase customer happiness by offering competitive prices, expanding its offering, simplifying the purchasing procedure, and making it as simple as possible to return things. Being a slave to your desires: Extending delivery options and improving the experience And that the site caters to different types of users. Instill trust and security.",
            ],
          },
        },
        {
          type: "image",
          value: "images/list-am/work-item_value-proposal.png",
        },
      ],
    },
    {
      title: "Customer Needs / Objective & Goals",
      data: [
        {
          type: "group",
          value: {
            title: "Customer Needs",
            bullets: [
              "Maintain active users, stay current with new technology, and provide a tailored site to make the user feel at ease. Client at the center: putting the customer at the center of all decisions is List.am's key decision. The organization is continually working to increase customer happiness by offering competitive prices, expanding its offering, simplifying the purchasing procedure, and making it as simple as possible to return things. Being a slave to your desires: Extending delivery options and improving the experience And that the site caters to different types of users. Instill trust and security.",
              "Offer a straightforward, easy-to-use platform with the highest number of products and price ranges for all types of customers, including buyers and sellers who use the site as a profit-generating intermediary.",
            ],
          },
        },
        {
          type: "group",
          value: {
            title: "Objectives & Goals",
            bullets: [
              "In consideration of what I've been studying, I've realized that I need to concentrate on the following points: Enhance the user interface: Redesign the UI to make it more intuitive and to make searching and navigating easier. This not only reduce pain, but it also helps users to execute activities more quickly without being distracted from their primary goal. ",
              "Make the product page and the search procedure easier. Reduce the amount of unnecessary and lengthy content on each product page. Improve the filters and make the search process more intuitive (make them more precise). Carry out an onboarding of all the List.am site has to offer in the future, since there are many things concealed by the disarray in the information arrangement. Provide discounts or reward points for using the platform.",
            ],
          },
        },
        {
          type: "image",
          value: "images/list-am/work-item_objective-and-goal.png",
        },
      ],
    },
    {
      title: "Develop",
      data: [
        {
          type: "text",
          value:
            "I began approaching information architecture in this manner based on the outcomes of card sorting and my overall research. It was decided to restructure the categories, limiting the diversity so that the user does not become disoriented. The visual hierarchy of key items that are more visible to users has also been raised. Only the most relevant sessions were retained.",
        },
        {
          type: "image",
          value: "images/list-am/work-item_develop.png",
        },
      ],
    },
    {
      title: "Wireframe",
      data: [
        {
          type: "text",
          value:
            "After evaluating my findings, I began creating low-fidelity wireframes in Figma, focusing on the golden path scenario and the elements I believed users would find most useful. I used these data to create a list of things on the top left side of the screen, and then moved them as it was displayed. Then I rewrote the process of visualizing the diagram around the dots and began to see how to do it as an object.",
        },
        {
          type: "text",
          value:
            "I started generating high-fidelity wireframes in Figma after reviewing my research and analysis, concentrating on the golden path scenario and components that I thought would be most valuable to consumers. At the end of the day, my goal was to create a great product, based on the experiences I'd had with products that sell well on the market and would not sell to consumers. It'd be hard to find compelling value in products that do not sell well, and at least I'd have a good sense of the customer as a general rule, not his specific value. My goal was to maximize value out of existing products.",
        },
        {
          type: "image",
          value: "images/list-am/work-item_wireframe.png",
        },
      ],
    },
    {
      title: "User Testing",
      data: [
        {
          type: "text",
          value:
            "A crucial step in the UX design process is user testing. It usually involves assessing a product by doing research on it with your representative users. The most effective way to perform user testing is through face-to-face, one-on-one interviews. With the help of this research methodology, detailed knowledge of user behavior patterns, preferences, and viewpoints may be acquired in order to incorporate this input into a more successful product. Testing early on in the design phase enables you to deploy a user-friendly product while avoiding future redesign costs. Since the purpose of the session is to collect qualitative data, testing doesn't require a large sample of participants.",
        },
        {
          type: "image",
          value: "images/list-am/work-item_user-testing.png",
        },
      ],
    },
    {
      title: "UI / Design System",
      data: [
        {
          type: "text",
          value:
            "This was a difficult design, and I attempted to concentrate on enhancing the experience of the users I interviewed. I believe that by creating minor yet useful features, the user would have a more engaging and delightful experience. List.am is a fantastic selling service with a wide range of products.On the homepage, too much repetitive content causes clutter and confusion for the user. On the page, new subheadings with better segregation have been added. The design of the product view screen has also been updated to meet current design requirements. Icons have been adjusted to make them much more approachable for the user and to clear the page of clutter.",
        },
        {
          type: "image",
          value: "images/list-am/work-item_design-system.png",
        },
      ],
    },
  ],
  previousPage: "/works/roommate-app",
  nextPage: "/works/medical-app",
};

// ! IGNORE
export const WORK_FIN_FLY_APP_DETAILED = {
  title: TITLES.finFly,
  banner: "fin-fly-app-banner.png",
  sections: [
    {
      title: "My Role",
      data: [
        {
          type: "text",
          value: "UX Researcher / UX Designer / UI Designer",
        },
      ],
    },
    {
      title: "About",
      data: [
        {
          type: "text",
          value:
            "FinFly platform is owned and operated by Kinetic Finance Limited, registered in the Republic of Lithuania. The company's activities fully comply with EU standards and are regulated by European regulatory authorities (FCIS). The Republic of Lithuania is a recognized European fintech center and provides favorable conditions for doing crypto business for both companies and their clients.\nOur mission is to provide everyone with the necessary information and effective tools for successful investment in the crypto market. FinFly is closing the information gap between retail investors and professional crypto traders.",
        },
      ],
    },
    {
      title: "Key Features",
      data: [
        {
          type: "text",
          value:
            "Simplicity\nOur user-friendly design and the minimum investment of just $10 allow you to start working with crypto in a matter of minutes.",
        },
        {
          type: "text",
          value:
            "Security\nFinFly is a reliable high-tech platform operating in more than 50 countries around the world on a basis of the license of the Republic of Lithuania. The company's activities fully comply with EU standards and are controlled and regulated by European regulatory authorities (FCIS).",
        },
        {
          type: "text",
          value:
            "Service 24/7\nOur specialists process all transactions as quickly as possible, and the support team is in touch 24/7.",
        },
      ],
    },
    {
      title: "Pain Points",
      data: [
        {
          type: "text",
          value:
            "Users find the verification process cumbersome and time-consuming. They may face issues with the KYC (know your customer) process, which could cause delays in trading.",
        },
        {
          type: "text",
          value:
            "Users worry about the security of their funds and personal information. They may want reassurance that the platform has implemented robust security measures, such as two-factor authentication, encryption, and insurance against hacking and theft.",
        },
        {
          type: "text",
          value:
            "Users encounter technical issues, such as slow loading times, system crashes, and error messages. These issues could be related to the platform's infrastructure or the user's internet connection and device.",
        },
        {
          type: "text",
          value:
            "Users find challenging to trade certain cryptocurrencies due to low liquidity on the platform. This could limit their ability to buy or sell assets at the desired price.",
        },
        {
          type: "text",
          value:
            "Users have difficulty reaching customer support or may find the support team unresponsive or unhelpful. This could cause frustration and lead to negative reviews and feedback.",
        },
        {
          type: "text",
          value:
            "Users find the platform's user interface confusing or overwhelming, especially if they are new to crypto trading. This could deter them from using the platform or cause them to make mistakes when placing trades.",
        },
        {
          type: "text",
          value:
            "Users be put off by high trading fees, which could eat into their profits or make trading unaffordable for smaller investors. They may also be unhappy with hidden fees or charges, such as withdrawal fees or inactivity fees.",
        },
        {
          type: "text",
          value:
            "Users disappointed if the platform does not support their preferred cryptocurrencies or if it has a limited selection of coins to trade. This could cause them to switch to another platform that offers a wider range of assets.",
        },
      ],
    },
    {
      title: "Possible Solution",
      data: [
        {
          type: "text",
          value:
            "Streamline the verification process by simplifying the KYC requirements and providing clear instructions to users. Consider implementing automated verification tools, such as facial recognition or document scanning, to speed up the process.",
        },
        {
          type: "text",
          value:
            "Prioritize security and communicate your security measures clearly to users. Implement multi-factor authentication, encryption, and regular security audits. Offer insurance against hacking and theft to reassure users that their funds and personal information are protected.",
        },
        {
          type: "text",
          value:
            "Monitor the platform's performance closely and address any technical issues promptly. Provide users with clear error messages and troubleshooting steps. Consider offering a mobile app to improve accessibility and speed.",
        },
        {
          type: "text",
          value:
            "Increase liquidity by partnering with other exchanges or liquidity providers. Offer incentives, such as lower fees or higher trading volumes, to encourage users to trade on your platform.",
        },
        {
          type: "text",
          value:
            "Invest in a dedicated customer support team that is available 24/7. Offer multiple support channels, such as email, live chat, and phone, and ensure that response times are prompt. Implement a comprehensive FAQ section and provide user guides to address common issues.",
        },
        {
          type: "text",
          value:
            "Simplify the user interface by using clear and intuitive design elements. Provide educational resources, such as video tutorials and user guides, to help users navigate the platform. Consider offering a demo account or a sandbox environment for users to practice trading.",
        },
        {
          type: "text",
          value:
            "Review your fee structure regularly and consider reducing fees where possible. Offer fee discounts for high-volume traders or long-term users. Be transparent about your fees and communicate them clearly to users.",
        },
        {
          type: "text",
          value:
            "Expand your coin offerings by adding new cryptocurrencies to your platform regularly. Conduct market research to identify popular coins and offer them to users. Consider offering a voting system to allow users to suggest and vote on new coins to be added to the platform.",
        },
      ],
    },
    {
      title: "Final Design",
      data: [
        {
          type: "text",
          value:
            "Our crypto exchange platform, designed with the user in mind. We understand the challenges that users face when trading cryptocurrencies and have developed solutions to address these issues.",
        },
        {
          type: "text",
          value:
            "We have simplified the verification process, making it quick and easy for users to get started. Our multi-factor authentication, encryption, and regular security audits ensure that users' funds and personal information are protected.",
        },
        {
          type: "text",
          value:
            "Our platform is built for speed and reliability, with minimal downtime and fast loading times. In the rare event of technical issues, our support team is available 24/7 to assist users with prompt and helpful responses.",
        },
        {
          type: "text",
          value:
            "We offer a wide range of cryptocurrencies, with a focus on liquidity and user demand. Our fees are transparent and competitive, with regular fee reviews and discounts for high-volume traders.",
        },
        {
          type: "text",
          value:
            "Our user interface is clear and intuitive, with educational resources and a demo account available to help users get started. Our dedicated customer support team is available to answer questions and resolve issues quickly and efficiently.\nJoin us on our journey to make cryptocurrency trading accessible, secure, and enjoyable for everyone.",
        },
        {
          type: "image",
          value: "fin-fly-app-1.png",
        },
      ],
    },
  ],
  previousPage: "/works/list-am-app",
  nextPage: "/works/keeps-me-app",
};

// ! IGNORE
const WORK_KEEPS_ME_APP_DETAILED = {
  title: TITLES.keepsMe,
  banner: "keeps-me-app-banner.png",
  sections: [
    {
      title: "My Role",
      data: [
        {
          type: "text",
          value: "UX Researcher / UX Designer / UI Designer",
        },
      ],
    },
    {
      title: "Overview",
      data: [
        {
          type: "text",
          value:
            "Our mission is to contribute to the sustainable tourism development of Armenia through offering a win-win concept platform for both travelers and businesses. We strongly believe that sustainable tourism development makes Armenia a better place.\nOver the course of the passing decade tourism has been one of the fastest growing industries in Armenia and the touristic infrastructures have developed respectively. Small and medium businesses such as hotels, restaurants, travel and adventure agencies have been a valuable addition to the pleasant experience of growing numbers of tourists.\n2020 was expected to bring an unprecedented increase in international tourist arrivals to Armenia. Lots of new international flights were scheduled to Yerevan and Gyumri, including the ones from low cost airlines, like Ryanair and Wizz Air. Unfortunately, things changed drastically and unexpected travel restrictions caused by the pandemic affected the industry.",
        },
      ],
    },
    {
      title: "Possible Solution",
      data: [
        {
          type: "text",
          value:
            "At these times we keep in mind that new realities require a modern approach to keep the tourism development stable, existing infrastructures functioning and the Armenian destination attractive. To achieve these goals we have created very quickly a new Tech & Travel tool, which offers:",
        },
        {
          type: "text",
          value:
            "- a unified voucher platform for customers with attractive discounts from a wide range of Armenian brands. Vouchers with up to 3 year’s validity period make customers’ future travel decisions flexible. Fast and secure transactions are made to carry out a carefree payment process.",
        },
        {
          type: "text",
          value:
            "- an opportunity for local businesses to get an income in advance and provide the service in the future when things are back to normal. With no monthly or sign-up fees, the local SME’s benefit from this sales tool and marketing campaigns of Keepsme platform.",
        },
      ],
    },
    {
      title: "Key Findings",
      data: [
        {
          type: "text",
          value:
            "It's better to keep things simple: It can be difficult to figure out what's wrong with a plant and how to fix it. ",
        },
        {
          type: "text",
          value:
            "It is critical to keep track of time: It takes too long to look for help on the internet, and it doesn't always work. It takes far too long to determine whether or not the assistance will be useful.",
        },
        {
          type: "text",
          value:
            "Real-life assistance: Users want to be able to get assistance from seasoned gardeners. ",
        },
        {
          type: "text",
          value:
            "Vegetables are widely consumed: Growing vegetable gardens was something that everyone enjoyed. ",
        },
        {
          type: "text",
          value:
            "The worst are pests and plant diseases: Dealing with plant problems and losing a harvest is the most aggravating and difficult thing to cope with.",
        },
      ],
    },
    {
      title: "Paint Points",
      data: [
        {
          type: "text",
          value:
            "I find it frustrating when the digital voucher platform I use has limited options for retailers and products. It feels like my options are restricted and I may not be able to find what I need.",
        },
        {
          type: "text",
          value:
            "Sometimes, the platform can be slow or unresponsive, which is especially frustrating when I'm trying to make a purchase. It can be a waste of time and make me hesitant to use the platform again in the future.",
        },
        {
          type: "text",
          value:
            "Another issue is when the platform is difficult to navigate or confusing to use. It can be overwhelming to try to find what I need and I may end up abandoning my purchase altogether.",
        },
        {
          type: "text",
          value:
            "Lastly, I have concerns about the security of my personal information and payment details when using a digital voucher platform. I want to feel confident that my information is safe and protected from any potential breaches or cyber attacks.",
        },
      ],
    },
    {
      title: "Possible Solution",
      data: [
        {
          type: "text",
          value:
            "As a possible solution to the frustration of limited options for retailers and products, digital voucher platforms could consider expanding their partnerships with more retailers to offer a wider range of choices for users. They could also offer personalized recommendations based on users' past purchases or preferences.\nTo address the issue of slow or unresponsive platforms, digital voucher platforms could improve their technical infrastructure and invest in more reliable servers to ensure smooth and speedy transactions. They could also offer multiple payment options to prevent payment failures due to network issues.\nIn order to make the platform more user-friendly, digital voucher platforms could redesign their interface to make it more intuitive and easy to navigate. They could also offer filters and search options to help users find what they are looking for more quickly and efficiently.\nTo alleviate concerns about security, digital voucher platforms could implement stronger data encryption measures and ensure compliance with industry standards for data protection. They could also provide clear and transparent information about their data protection policies and procedures to give users peace of mind when using the platform.",
        },
      ],
    },
    {
      title: "Research",
      data: [
        {
          type: "text",
          value:
            "In September 2021, our team initiated a comprehensive effort to create and integrate a design system across all the company's products. At that time, the company was using separate UI kits for each product, which although functional, presented limitations and risks. The creation of a centralized design system was deemed necessary to address these challenges.",
        },
        {
          type: "text",
          value:
            "As someone who thrives on taking on new challenges, I was honored to be selected as a lead in this process.",
        },
        {
          type: "group",
          value: {
            title: "Contributions",
            bullets: [
              "- Led an active phase of work on a company design system",
              "- Created and maintained company design system and interface guidelines",
              "- Active role in the planning and control of the development team",
              "- Heavily involved in the process of integrating the design system into company products (strategic planning, brainstorming/creativity, communication with external teams)",
            ],
          },
        },
      ],
    },
    {
      title: "Achievements",
      data: [
        {
          type: "text",
          value:
            "List of places which can provide you a voucher with detailed description and usage rules.",
        },
        {
          type: "text",
          value:
            "Rating system which can be useful for tourists and foreign citizens that live in Armenia.",
        },
        {
          type: "text",
          value:
            "Clean summary of most relevant information. Quick access to wallets and stats as well as transactions.",
        },
        {
          type: "text",
          value:
            "Multi-directional scalability and end-to-end management through dealer onboarding, hierarchy management and custom business rules within a table view.",
        },
        {
          type: "text",
          value:
            "Exporting yearly/monthly/daily reports in a format which is worked for you the best.",
        },
        {
          type: "text",
          value:
            "Separate portal for the partners with additional information which will help with integrating with system.",
        },
        {
          type: "image",
          value: "keeps-me-app-1.png",
        },
      ],
    },
  ],
  previousPage: "/works/list-am-app",
  nextPage: "/works/medical-app",
};

const WORK_MEDICAL_APP_DETAILED = {
  title: TITLES.medicalApp,
  banner: "images/medical-app/banner.png",
  caseStudy: "https://www.behance.net/gallery/185396179/Medical-App-Case-Study",
  sections: [
    {
      title: "My Role",
      data: [
        {
          type: "text",
          value: "UX Researcher / UX Designer / UI Designer",
        },
      ],
    },
    {
      title: "Pain Points",
      data: [
        {
          type: "text",
          value:
            "Medical records are extremely important and sensitive documents that contain a lot of private medical information about a person. These documents are critical for both patients and doctors in terms of receiving and providing accurate medical diagnoses. However, over time, these documents are either lost or misplaced, resulting in the loss of vital information. This has resulted in a total mess for both patients and doctors, which must be resolved.",
        },
        {
          type: "group",
          value: {
            title: "Patients",
            bullets: [
              "- Unable to provide medical history in emergency situation",
              "- Carry multiple physical documents for every doctor's visit",
              "- Delayed admission procedure due to unavailability of medical insurance details",
              "- Unavailability of emergency contacts in times of urgency",
            ],
          },
        },
        {
          type: "group",
          value: {
            title: "Doctors",
            bullets: [
              "- Unavailability of patients historical medical data during emergency",
              "- Delay in providing appropriate medical assistance",
              "- Unavailability of patients OPD (Outpatient Department) visit history",
            ],
          },
        },
      ],
    },
    {
      title: "Possible Solution",
      data: [
        {
          type: "text",
          value:
            "MedicalApp is an innovative healthcare app that serves as a comprehensive and secure medical partner for patients and healthcare providers. The app provides a digital platform that enables patients to store their medical records in one place, making it easy to access and share their health information with healthcare professionals. The app is designed with advanced features that make it easy for patients to keep track of their health data, including doctor's appointments, medication schedules, test results, and more. Patients can upload and manage their medical records from different sources, such as hospitals, clinics, and labs, eliminating the need for physical copies and saving time and effort.",
        },
        {
          type: "group",
          value: {
            title: "Key Features",
            bullets: [
              "- Patients can upload, store & access their Personal Records, Medical Records & Health Insurance records",
              "- Patient can book appointments with doctors from within the app",
              "- Doctor's dashboard allows to easily access patient's Historical Medical Records, Diagnosis & Medical Reports",
              "- QR Scan & Facial Recognition Scan which will allow health care providers to access the user's medical records in an emergency. To ensure user privacy records can only be accessed via an OT sent to the user/emergency contact.",
            ],
          },
        },
      ],
    },
    {
      title: "Research Insights",
      data: [
        {
          type: "text",
          value:
            "According to a recent survey conducted by our team, an unexpectedly high percentage of females between the ages of 25 and 60, 41% to be exact, reported using an online doctor consultation mobile application on a regular basis to address various non-emergency health concerns. This finding reveals the increasing acceptance and adoption of telehealth services, especially among the female population. While men also made use of these online medical consultation apps, their usage numbers came in significantly lower at only 28%.The survey results highlight the fact that these types of telehealth and mHealth solutions are becoming an important supplement to in-person doctor visits.",
        },
        {
          type: "text",
          value:
            "This study highlights the increasing preference among people for mobile apps. The convenience, ease of use, and customized user experience offered by mobile apps seem to resonate well with users seeking online doctor consultations and medical advice from the comfort of their homes or on the go. Mobile apps are fast emerging as the preferred choice for accessing online healthcare services among the technologically-savvy population. Overall, this study underscores the growing popularity and importance of mobile healthcare apps in enabling patient-doctor interactions and the delivery of virtual care.",
        },
        {
          type: "text",
          value:
            "Participants frequently struggle to keep comprehensive and up-to-date medical records, especially when they see multiple doctors across various healthcare networks and systems. As a result, patients often cannot access their important medical information quickly and easily during medical emergencies or when seeing a new physician for the first time. Not having immediate access to their medical records puts patients' health and safety at risk in urgent situations where doctors need to make quick, informed treatment decisions. Patients would benefit greatly from improved medical record-keeping technologies and systems that allow them to maintain complete, centralized, and accessible health records.",
        },
        {
          type: "text",
          value:
            "The participant desires an application in which their personal health information, including medical records, health insurance records, test results, and other sensitive health data are securely stored and protected. Having a digital repository of one's health records in a single place would provide numerous benefits, including easy access to information for both the individual and their doctors, simplified sharing of records between healthcare providers, and a comprehensive overview of health metrics and conditions over time. However, given the sensitive nature of health data, privacy and security are of paramount importance.",
        },
        {
          type: "text",
          value:
            "App should include variety of doctors from different medical specialties In order to provide the most comprehensive health care services to users, the app should feature doctors and specialists from a wide range of medical fields. Patients should have access to general practitioners as well as specialists in areas like cardiology, oncology, orthopedics, pediatrics, and more. Only by including a diverse set of doctors and medical experts will the app be able to handle the health needs of all users. Having doctors from various cultural and linguistic backgrounds is also important to serve patient populations with different backgrounds. Overall, an app focused on health and wellness should aim to provide an inclusive experience with options for patients of all demographics.",
        },
        {
          type: "text",
          value:
            "The participants in the study expressed a desire for an application where they can access patient information and data in an efficient and straightforward manner. Specifically, they want an app that allows doctors, nurses, and other healthcare providers to look up their patients' medical histories, recent vitals, lab test results, and other details important for caring for patients and monitoring their conditions. The healthcare providers need to be able to quickly see an overview of a patient's health status and retrieve key facts about their treatment and condition at any time in order to provide the best possible care. An easy-to-use app that gives clinicians a comprehensive look at patient data would greatly improve their ability to treat patients and enhance the overall patient experience.",
        },
      ],
    },
    {
      title: "User Journey Map",
      data: [
        {
          type: "text",
          value:
            "The provided user journey map offers a clear and concise representation of how users will interact with the application. The map starts at the very beginning of a user's journey, highlighting the initial discovery phase and continuing with the process of engagement until the extension phase is reached. It provides a comprehensive overview of the different stages that the user will pass through while interacting with the application, allowing businesses to understand the user experience from start to finish. With this visual illustration, companies can gain insights into how their application is being used and make improvements accordingly to enhance the overall user experience. Based on my analysis, I have identified the crucial interactions and touch points that the user will encounter during their experience with the app. This knowledge has been extremely beneficial in enhancing and optimizing the overall user experience of the app. Essentially, by mapping out the various interactions and touch points, I have gained insight into the user's journey as they navigate the app. This has allowed me to fine-tune the various aspects of the app experience, and ultimately improve user satisfaction and engagement. Furthermore, being able to understand and optimize the user experience is critical in today's competitive business landscape.",
        },
        {
          type: "image",
          value: "images/medical-app/work-item_user-journey-map.png",
        },
      ],
    },
    {
      title: "Competitive Analysis",
      data: [
        {
          type: "text",
          value:
            "We conducted an extensive competitive analysis of prominent healthcare applications currently available on the market. This in-depth analysis helps us to thoroughly understand the various weaknesses and strengths of these competing apps, allowing us to gain valuable insights into how our competitors operate and identify potential opportunities where we may be able to outperform them. By closely examining our competitors' offerings, we can determine what features and functionalities they may be lacking that users in the healthcare space are demanding. We can also assess what types of tools and resources they provide to their users that are particularly useful or well-received, so we know what types of high-value features we should incorporate into our own healthcare app. Conducting this competitive research is crucial to developing a healthcare app that stands out from the crowd and provides meaningful value to users. Only by fully grasping the landscape of existing options can we craft an application that avoids the common pitfalls, leverages the latest trends, and introduces innovative new solutions tailored to the needs of healthcare professionals and patients. Our competitive analysis will serve as an indispensable guide as we work to build the next must-have healthcare app.",
        },
        {
          type: "image",
          value: "images/medical-app/work-item_competetive-analysis.png",
        },
      ],
    },
    {
      title: "Finale UI",
      data: [
        {
          type: "text",
          value:
            "The provided user journey map offers a clear and concise representation of how users will interact with the application. The map starts at the very beginning of a user's journey, highlighting the initial discovery phase and continuing with the process of engagement until the extension phase is reached. It provides a comprehensive overview of the different stages that the user will pass through while interacting with the application, allowing businesses to understand the user experience from start to finish. With this visual illustration, companies can gain insights into how their application is being used and make improvements accordingly to enhance the overall user experience. Based on my analysis, I have identified the crucial interactions and touch points that the user will encounter during their experience with the app. This knowledge has been extremely beneficial in enhancing and optimizing the overall user experience of the app. Essentially, by mapping out the various interactions and touch points, I have gained insight into the user's journey as they navigate the app. This has allowed me to fine-tune the various aspects of the app experience, and ultimately improve user satisfaction and engagement. Furthermore, being able to understand and optimize the user experience is critical in today's competitive business landscape. [Still in progress]....",
        },
      ],
    },
  ],
  previousPage: "/works/list-am-app",
  nextPage: "/works/hca-healthcare-app",
};

const WORK_HCA_HEALTHCARE_APP_DETAILED = {
  title: TITLES.hcaHealthcare,
  banner: "images/hca/banner.png",
  sections: [
    {
      title: "My Role",
      data: [
        {
          type: "text",
          value: "UX Designer / UI Designer",
        },
      ],
    },
    {
      title: "About",
      data: [
        {
          type: "text",
          value:
            "HCA Healthcare is an American for-profit operator of health care facilities that was founded in 1968. It is based in Nashville, Tennessee, and, as of May 2020, owns and operates 186 hospitals and approximately 2,000 sites of care, including surgery centers, freestanding emergency rooms, urgent care centers and physician clinics in 21 states and the United Kingdom.[5] As of 2021, HCA Healthcare is ranked #62 on the Fortune 500 rankings of the largest United States corporations by total revenue.[6]",
        },
      ],
    },
    {
      title: "Possible Solution",
      data: [
        {
          type: "text",
          value:
            "HCA Healthcare created the Sepsis Prediction and Optimization of Therapy (SPOT) platform to collect and analyze clinical data and signal caregivers in real time to initiate early sepsis care. HCA Healthcare used Red Hat open source software to create a scalable, container-based Platform-as-a-Service (PaaS) foundation for SPOT. The group also used Red Hat automation, management, and analytics software to support real-time data collection, analysis, and proactive notification processes.",
        },
        {
          type: "text",
          value:
            "Addressing the issues facing HCA Healthcare will require a multi-faceted approach that focuses on improving patient safety, enhancing billing transparency, and improving working conditions for staff.\nTo address patient safety and quality of care concerns, HCA Healthcare should consider implementing additional measures such as increasing staffing levels, investing in employee training and education, and improving communication and collaboration between care teams. The organization should also prioritize ongoing monitoring and review of clinical practices to ensure compliance with industry standards and best practices.\nTo improve billing practices, HCA Healthcare should prioritize transparency and clear communication with patients regarding the cost of services. This may involve implementing pricing transparency initiatives, such as providing patients with detailed breakdowns of the costs associated with their care, as well as increasing efforts to ensure that billing practices are in compliance with relevant regulations and standards.\nTo address concerns regarding staff working conditions, HCA Healthcare should consider increasing staff compensation and benefits, improving scheduling practices to prevent burnout, and investing in employee engagement and retention initiatives.\nOverall, addressing the challenges facing HCA Healthcare will require a commitment to continuous improvement and a willingness to listen to patient feedback and concerns. By prioritizing patient safety, transparency, and employee well-being, HCA Healthcare can take steps towards improving the quality of care and rebuilding trust with patients and stakeholders.",
        },
      ],
    },
    {
      title: "Problems",
      data: [
        {
          type: "text",
          value:
            "HCA Healthcare has recently faced a range of issues that have raised concerns among patients and stakeholders alike. Specifically, the organization has been grappling with challenges related to patient safety and quality of care, with some reports indicating that medical errors and infections have been linked to their hospitals.\nFurthermore, HCA Healthcare has been the subject of scrutiny with regards to their billing practices, as some patients have alleged that they were charged exorbitant amounts for healthcare services. Additionally, there are concerns regarding the working conditions for staff, including low pay and long hours leading to burnout and high turnover rates.\nAs a potential consumer of healthcare services, these issues are cause for alarm. Trust in healthcare providers is of utmost importance when it comes to seeking care, and HCA Healthcare must prioritize addressing these issues in order to ensure the safety and satisfaction of patients. It is essential that the organization takes these matters seriously and commits to implementing measures to improve the quality of care provided and address the concerns that have been raised.",
        },
      ],
    },
    {
      title: "Good Points",
      data: [
        {
          type: "text",
          value:
            "There are many things that people love about HCA Healthcare. One of the things that seems to stand out is their commitment to using cutting-edge medical technology and innovative approaches to healthcare. This can be particularly reassuring for patients who are seeking the most advanced treatments and procedures available.\nAdditionally, many people appreciate the high level of care and attention they receive from HCA Healthcare's staff. The organization has a reputation for providing compassionate, patient-centered care that prioritizes the needs and preferences of individuals.\nAnother thing that people seem to love about HCA Healthcare is their wide range of services and specialties. With hospitals and clinics located throughout the country, patients have access to a variety of healthcare options and can receive care for a wide range of conditions and illnesses.\nOverall, it seems that people appreciate HCA Healthcare's focus on providing high-quality care that is personalized to each patient's needs. This, combined with their commitment to innovation and access to a broad range of healthcare services, makes HCA Healthcare a popular choice for many individuals seeking healthcare services.",
        },
      ],
    },
    {
      title: "Bad Points",
      data: [
        {
          type: "text",
          value:
            "One of the main concerns seems to be related to patient safety and the quality of care provided by the organization. Some patients have reported experiencing medical errors or infections while receiving care at HCA Healthcare facilities, which can be concerning and lead to a lack of trust in the organization.\nAnother issue that some people have raised concerns about is HCA Healthcare's billing practices. Some patients have reported being charged exorbitant amounts for healthcare services, and there have been allegations of overbilling and other billing-related issues. This can be frustrating and can make it difficult for patients to manage the financial aspects of their healthcare.\nFinally, there are some concerns about the working conditions for staff at HCA Healthcare. Some employees have reported low pay, long hours, and high rates of burnout, which can impact the quality of care provided to patients and lead to high staff turnover rates.\nOverall, it seems that people who have negative opinions about HCA Healthcare are primarily concerned with patient safety and the organization's overall commitment to quality care. Additionally, concerns about billing practices and staff working conditions can also contribute to negative perceptions of the organization.",
        },
      ],
    },
  ],
  previousPage: "/works/medical-app",
  nextPage: "/works/inecobank-app",
};

// ! IGNORE
const WORK_SPAARKD_APP_DETAILED = {
  title: TITLES.spaarkd,
  banner: "spaarkd-app-banner.png",
  sections: [
    {
      title: "My Role",
      data: [
        {
          type: "text",
          value: "UI Designer",
        },
      ],
    },
    {
      title: "About",
      data: [
        {
          type: "text",
          value:
            "The creative spark for real sustainable change within the fashion industry that unlocks the full potential of product makers, creators, collaborators and global communities. Discovery phase for SPVRKD 1.0 and parallel development.",
        },
      ],
    },
    {
      title: "Responsibilities",
      data: [
        {
          type: "text",
          value:
            "I have taken a leading role in establishing a consistent visual language and design approach across various products and platforms. I have worked closely with stakeholders and cross-functional teams to ensure that the design system meets the needs of the business, the users, and the development team.",
        },
        {
          type: "text",
          value:
            "In addition to my design system work, I have participated in various workshops to facilitate collaboration and alignment across teams. I have also supported the development team by providing design deliverables, such as wireframes, prototypes, and high-fidelity mockups, that are in line with the design system guidelines.",
        },
        {
          type: "text",
          value:
            "Overall, my contributions have been instrumental in helping the team achieve their goals and deliver high-quality products that are both visually appealing and user-friendly.",
        },
      ],
    },
    {
      title: "Challenges",
      data: [
        {
          type: "text",
          value:
            "Working on a project with tight deadlines can be challenging, but with my experience, I have learned to manage my time effectively and prioritize tasks to ensure that the project is completed on time. This involves setting realistic timelines, breaking down the work into manageable tasks, and regularly checking in with team members to ensure that everyone is on track.\nIn addition to tight deadlines, I have also worked on projects with complex user flows. These types of projects require a deep understanding of user needs and behaviors, as well as the ability to create interfaces that are intuitive and easy to use. I have experience conducting user research, creating user personas, and mapping out user journeys to ensure that the design meets the needs of the target audience.\nTo tackle complex user flows, I use a variety of techniques such as user testing, prototyping, and iterative design to ensure that the user interface is effective and meets the goals of the project. I also work closely with cross-functional teams to ensure that everyone understands the user flows and has input into the design process.",
        },
      ],
    },
    {
      title: "Stakeholder Engagement",
      data: [
        {
          type: "text",
          value:
            "Stakeholder engagement is a topic that I find incredibly important and interesting. As someone who has worked on various projects in the past, I understand the value of involving stakeholders in decision-making processes.\nIn my experience, stakeholder engagement is not only about gathering information and feedback from stakeholders, but it is also about building relationships and trust with them. By engaging with stakeholders and demonstrating a willingness to listen to their concerns and ideas, you can create a sense of ownership and buy-in for the project's goals and outcomes.\nMoreover, stakeholder engagement can help to identify potential risks, challenges, and opportunities that may not be apparent to the project team. By involving stakeholders from diverse backgrounds and perspectives, you can gain insights into their unique needs and expectations and design solutions that are more inclusive and effective.\nHowever, stakeholder engagement is not always easy or straightforward. It can be time-consuming, resource-intensive, and require a considerable amount of communication and coordination. Moreover, stakeholders may have conflicting interests or agendas, which can lead to disagreements and tensions.\nDespite these challenges, I believe that stakeholder engagement is an essential aspect of any successful project. By engaging with stakeholders and involving them in decision-making processes, you can create more sustainable, equitable, and impactful outcomes that meet the needs of all stakeholders involved.",
        },
      ],
    },
    {
      title: "Final UI",
      data: [
        {
          type: "text",
          value:
            "As a modern and innovative app development company, we are always striving to create apps that are not only functional but also visually appealing and fashionable. We understand that in today's fast-paced digital world, users have high expectations when it comes to the look and feel of the apps they use. That's why we prioritize design and aesthetics in all of our projects.",
        },
        {
          type: "text",
          value:
            "Our team of skilled designers and developers work closely together to ensure that every aspect of our apps is carefully crafted to provide the best user experience possible. From the initial wireframes to the final polished design, we take great care to create apps that are not only beautiful but also intuitive and easy to use.",
        },
        {
          type: "text",
          value:
            "We believe that a well-designed app can not only attract users but also keep them engaged and coming back for more. That's why we invest a lot of time and effort in researching the latest design trends and incorporating them into our projects.\nIn addition to design, we also prioritize functionality and performance. We understand that users expect apps to be fast, reliable, and efficient. That's why we use the latest technologies and frameworks to create apps that are not only visually stunning but also performant and stable.",
        },
        {
          type: "text",
          value:
            "Overall, we are proud of the progress we've made in design and believe that our apps stand out from the competition. We look forward to continuing to innovate and create apps that users love.",
        },
      ],
    },
  ],
  previousPage: "/works/hca-healthcare-app",
  nextPage: "/works/inecobank-app",
};

const WORK_INECOBANK_APP_DETAILED = {
  title: TITLES.inecobank,
  banner: "images/inecobank/banner.png",
  sections: [
    {
      title: "My Role",
      data: [
        {
          type: "text",
          value: "UX Researcher / UX Designer / UI Designer",
        },
      ],
    },
    {
      title: "About",
      data: [
        {
          type: "text",
          value:
            "Being one of the leading banks in the Southern Caucasus region, Inecobank CJSC offers full range of banking services, including digital banking solutions to individuals, SMEs and corporate clients.",
        },
        {
          type: "text",
          value:
            "The bank was founded on February 7, 1996. Since then, the Bank has been providing unmatched convenience in Armenia by serving more than 520 000 customers. To introduce completely new banking services the Bank has developed and provided industry leading banking solutions in the Armenian market.",
        },
        {
          type: "text",
          value:
            "Today the Bank has established correspondent relations with a number of leading banks; and since 1998 it has been cooperating with more than 30 high ranking international financial organizations.",
        },
      ],
    },
    {
      title: "Digital Solution",
      data: [
        {
          type: "text",
          value:
            "In 2022, Inecobank introduced Apple Pay for iPhone and Apple Watch users, an easier, faster and safer way to make non-cash payments worldwide.",
        },
        {
          type: "text",
          value:
            "In 2021, paylater modern payment option was introduced to ensure the trendy Buy Now Pay Later culture in Armenia. It allows you to buy now and pay in parts without additional fees.",
        },
        {
          type: "text",
          value:
            "In 2021, Inecobank introduced NFC – the innovative non-cash payment system, which allows you to make fast and contactless payments on your Android smartphone.",
        },
        {
          type: "text",
          value:
            'In 2019 the bank introduced new feature - "Transfer to Card", which enables InecoOnline and InecoMobile users to make account-to-card and card-to-card transfers to the cards issued by the banks partnering ArCa system.',
        },
        {
          type: "text",
          value:
            "In 2018 the bank was the first in the banking system to launch InecoPay payment system enabling to make payments from smartphones.",
        },
        {
          type: "text",
          value:
            "In 2017, the bank was the first to introduce a fully automated consumer lending solution through its mobile and online applications. As a result the loans are provided 24 hours a day, 7 days a week.",
        },
        {
          type: "text",
          value:
            "In 2014 the bank launched InecoMobile, its mobile banking application. Currently the application is one of the leading financial applications in the country.",
        },
        {
          type: "text",
          value:
            "In 2012, with the introduction of InecoOnline, the bank was one of the first to provide 24/7 banking services to its customers.",
        },
        {
          type: "text",
          value:
            "In 2009, the bank digitalized and fully automated the “Point of Sale Loan” product, reducing the loan generation from 3-4 days to a few minutes.",
        },
      ],
    },
    {
      title: "Responsibilities",
      data: [
        {
          type: "text",
          value:
            "I understand that my role is crucial in creating a successful product that meets the needs and expectations of my target audience. To achieve this, I always start by conducting thorough user research using methods such as surveys, interviews, and observations. Through this process, I identify user needs, behaviors, and pain points, which I analyze to derive patterns and insights.",
        },
        {
          type: "text",
          value:
            "With this information, I proceed to determine the information architecture of the product. This step involves creating a sitemap that outlines the structure of the website or app and how users will navigate through it. I always design the information architecture with the user in mind, ensuring that it's easy for them to find the information they need quickly and easily.",
        },
        {
          type: "text",
          value:
            "Once I have created the sitemap, I then move to create prototypes and wireframes. These tools are essential for testing and iterating on my design, making it more user-friendly and intuitive. I create an interactive prototype that simulates how users will interact with the product and a wireframe that shows the layout and functionality of each page. These tools enable me to test the product with users and make necessary adjustments to improve the user experience.",
        },
        {
          type: "text",
          value:
            "As a designer, implementing QR payment in a banking app can be a great feature to enhance user experience and streamline transactions. QR payment allows users to make payments by scanning a QR code using their mobile device, making the process quick, easy, and secure.",
        },
        {
          type: "text",
          value:
            "To implement QR payment in a banking app, the first step is to integrate a QR code scanner within the app. This scanner should be able to read QR codes from any device and quickly process the payment. The app should also have a feature that allows users to generate QR codes for payments they want to receive.",
        },
        {
          type: "text",
          value:
            "To ensure security, the app should have a two-factor authentication process for transactions. This could involve biometric authentication or a PIN code. Additionally, the app should be able to detect fraudulent QR codes and alert the user before processing any transactions.",
        },
        {
          type: "text",
          value:
            "To make the feature user-friendly, the app should have a clear and concise interface that guides the user through the payment process. It should also provide real-time feedback on the status of the transaction, including the amount paid, the recipient, and the date and time.",
        },
        {
          type: "text",
          value:
            "Overall, implementing QR payment in a banking app can provide numerous benefits for users, including convenience, speed, and security. As a designer, it's important to ensure the feature is easy to use and provides a seamless experience for users.",
        },
      ],
    },
  ],
  previousPage: "/works/hca-healthcare-app",
  nextPage: "/works/novartis-app",
};

export const WORK_NOVARTIS_APP_DETAILED = {
  title: TITLES.novartis,
  banner: "images/novartis/banner.png",
  sections: [
    {
      title: "My Role",
      data: [
        {
          type: "text",
          value: "UX Researcher / UX Designer / UI Designer",
        },
      ],
    },
    {
      title: "About",
      data: [
        {
          type: "text",
          value:
            "Data 42 is a strategic initiative at Novartis targeting developing of the next-gen platform for data analytics.",
        },
      ],
    },
    {
      title: "Responsibilities",
      data: [
        {
          type: "text",
          value:
            "I understand that my role is crucial in creating a successful product that meets the needs and expectations of my target audience. To achieve this, I always start by conducting thorough user research using methods such as surveys, interviews, and observations. Through this process, I identify user needs, behaviors, and pain points, which I analyze to derive patterns and insights.",
        },
        {
          type: "text",
          value:
            "With this information, I proceed to determine the information architecture of the product. This step involves creating a sitemap that outlines the structure of the website or app and how users will navigate through it. I always design the information architecture with the user in mind, ensuring that it's easy for them to find the information they need quickly and easily.",
        },
        {
          type: "text",
          value:
            "Once I have created the sitemap, I then move to create prototypes and wireframes. These tools are essential for testing and iterating on my design, making it more user-friendly and intuitive. I create an interactive prototype that simulates how users will interact with the product and a wireframe that shows the layout and functionality of each page. These tools enable me to test the product with users and make necessary adjustments to improve the user experience.",
        },
        {
          type: "text",
          value:
            "Overall, as a UX designer, I understand that each step of the product development process is crucial to create a product that meets the needs of my users. Through my user research, information architecture, and prototyping, I can ensure that my design is user-friendly and intuitive, providing an excellent user experience.",
        },
      ],
    },
    {
      title: "User Research",
      data: [
        {
          type: "text",
          value:
            "During the user interviews, I aimed to understand the typical tasks that users perform while working with Real World Data and the specific challenges they face while using the Medical Code List Builder (MCLB). I asked questions about their workflow, the tools they use, and their pain points in the process.",
        },
        {
          type: "text",
          value:
            "Based on the feedback I received from the interviews, I was able to identify common themes and patterns in the users' experiences. This information will be valuable in creating a more user-friendly and efficient tool for working with Real World Data and specifically the \nMedical Code List Builder. I plan to use the insights gained from these interviews to improve the design and functionality of MCLB and create a more intuitive user experience for those who work with Real World Data.",
        },
      ],
    },
    {
      title: "Analyse Interview",
      data: [
        {
          type: "text",
          value:
            "Creating the Confluence page and documenting the observations and soundbites allowed me to effectively communicate the findings from the user interviews to my team. By prioritizing users' pain points, we can focus our efforts on improving the most critical aspects of the tool, which will have the greatest impact on the user experience.",
        },
        {
          type: "text",
          value:
            "In addition to documenting pain points, I also identified areas where users expressed satisfaction and provided positive feedback. This information is equally important as it allows us to understand what is working well and build upon those strengths to further enhance the user experience. With a clear understanding of users' needs and pain points, we can make informed decisions and develop a more effective and user-friendly Medical Code List Builder tool.",
        },
      ],
    },
    {
      title: "User Journey",
      data: [
        {
          type: "text",
          value:
            "Creating a User Journey Map was a crucial step in addressing knowledge gaps about the system from both stakeholder's and developer's perspectives. By visualizing the general flows of the system and the pain points experienced by users, we were able to gain a deeper understanding of the user experience and identify areas where improvements could be made.",
        },
        {
          type: "text",
          value:
            "Presenting the User Journey Map to stakeholders and developers allowed us to align our understanding of the system and its shortcomings. It also provided an opportunity to discuss potential solutions and prioritize areas for improvement. The User Journey Map served as a useful tool for facilitating communication and collaboration between different teams, ultimately leading to a more effective and user-friendly Medical Code List Builder tool.",
        },
      ],
    },
    {
      title: "Design System Support",
      data: [
        {
          type: "text",
          value:
            "Working with a Design System based on the Blueprint Framework allowed me to maintain consistency and efficiency in the design and development process. By keeping the design system up to date during the implementation of new features, I ensured that all components were in sync with the latest design standards and guidelines.",
        },
        {
          type: "text",
          value:
            "In addition to using the existing components, I also created new layouts to increase the flexibility of the system. These new layouts were designed with the user in mind, ensuring that they were intuitive and easy to use. By leveraging the existing design system and creating new layouts as needed, I was able to streamline the design and development process, resulting in a more cohesive and user-friendly Medical Code List Builder tool.",
        },
      ],
    },
  ],
  previousPage: "/works/inecobank-app",
  nextPage: null,
};

export const getAppDetailedData = (app) => {
  switch (app) {
    case "planty-app":
      return WORK_PLANTY_APP_DETAILED;
    case "roommate-app":
      return WORK_ROOMMATE_APP_DETAILED;
    case "list-am-app":
      return WORK_LIST_AM_APP_DETAILED;
    case "fin-fly-app":
      return WORK_FIN_FLY_APP_DETAILED;
    case "keeps-me-app":
      return WORK_KEEPS_ME_APP_DETAILED;
    case "medical-app":
      return WORK_MEDICAL_APP_DETAILED;
    case "hca-healthcare-app":
      return WORK_HCA_HEALTHCARE_APP_DETAILED;
    case "spaarkd-app":
      return WORK_SPAARKD_APP_DETAILED;
    case "inecobank-app":
      return WORK_INECOBANK_APP_DETAILED;
    case "novartis-app":
      return WORK_NOVARTIS_APP_DETAILED;
    default:
      break;
  }
};

export const WORKS = [
  {
    id: "planty-app",
    title: TITLES.plantyApp,
    cover: "/images/planty/cover.png"
  },
  {
    id: "roommate-app",
    title: TITLES.roommate,
    cover: "/images/roommate/cover.png"
  },
  {
    id: "list-am-app",
    title: TITLES.listAm,
    cover: "/images/list-am/cover.png"
  },
  // {
  //   id: "fin-fly-app",
  //   title: TITLES.finFly,
  // },
  // {
  //   id: "keeps-me-app",
  //   title: TITLES.keepsMe,
  // },
  {
    id: "medical-app",
    title: TITLES.medicalApp,
    cover: "/images/medical-app/cover.png"
  },
  {
    id: "hca-healthcare-app",
    title: TITLES.hcaHealthcare,
    cover: "/images/hca/cover.png"
  },
  // {
  //   id: "spaarkd-app",
  //   title: TITLES.spaarkd,
  // },
  {
    id: "inecobank-app",
    title: TITLES.inecobank,
    cover: "/images/inecobank/cover.png"
  },
  {
    id: "novartis-app",
    title: TITLES.novartis,
    cover: "/images/novartis/cover.png"
  },
];
