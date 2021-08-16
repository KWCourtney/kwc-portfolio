import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  constructor() { }

  getProjects()  {
    return  [

      {
        id: 1,
        name: 'metis',
        style: 'apothecom',
        body: 'I collaborated with a geographically-distributed team consisting of stakeholders and the development, design, and UX leads on a Roche interactive medical tool built with Angular, Typescript, and styled using a custom Angular Material theme, SCSS, Bootstrap Utilities, and Flexbox.',
        backgroundImage: 'Portfolio-Detail-Background-METIS-0539f7',
        backgroundImageAlt: 'Portfolio Background Image METIS',
        backgroundColor: '#0539f7',
        skills:
          [
            {
              icon: 'fab fa-angular',
              name: 'angular / material'
            },
            {
              icon: 'fab fa-bootstrap',
              name: 'bootstrap / utilities'
            },
            // {
            //   icon: 'fas fa-code-branch',
            //   name: 'devops'
            // },
            {
              icon: 'fas fa-th',
              name: 'flexbox'
            },
            {
              icon: 'fas fa-code',
              name: 'front-end development'
            },
            {
              icon: 'fab fa-css3',
              name: 'scss'
            },
        ],
        company: 'apothecom / roche',
        projectType: 'interactive medical tool',
        tabContent: [


                {
                  header: 'The',
                  header1: 'Assignment',
                  subHead: 'Customize and extend the Angular Material front-end library',
                  body: 'I was responsible for front-end concerns, focusing on design-related changes extending the Angular Material front-end library. I reported to and worked in tandem with the Development Team Lead writing new code, optimizing existing code, and consolidating code into reusable Angular components, variables, partials, and mixins.',
                  image: 'Portfolio-Modal-METIS-Image-01'
                },
                {
                  header: 'From XD',
                  header1: 'To Angular',
                  subHead: 'Convert Adobe XD prototypes into cross-browser compatible Angular code',
                  body: 'I worked with the Design Lead, whose Adobe XD prototypes I converted into pixel-perfect, cross-browser compatible, responsive front-end code (HTML, SCSS) using the Angular Material Design Framework.',
                  image: 'Portfolio-Modal-METIS-Image-02'
                },
                {
                  header: 'DevOps and',
                  header1: 'MS Teams',
                  subHead: 'Manage tasks and time in DevOps and present work to team via MS Teams',
                  body: 'I used DevOps to manage my tasks and to keep the Development Team Lead abreast of my daily progress.  Given the position was 100% remote, I presented my work in bi-weekly MS Teams meetings, during which I showed my progress to the team, got their feedback, and gathered updated requirements.',
                  image: 'Portfolio-Modal-METIS-Image-03'
                },

        ],
      },
      {
        id: 2,
        name: 'OASYS',
        style:'oasys',
        body: 'I initiated and led the redesign of Omnicom’s timesheet app. I simplified the UI and streamlined the UX following the principles "Big, Bold, + Accessible", and added 2 pieces of functionality that appear first every time the app is opened: Status, which gives users their current status, and Quick Add, which allows users to update and submit without having to navigate deeper into the app.',
        backgroundImage: 'Portfolio-Detail-Background-OASYS-00cfb3',
        backgroundImageAlt: 'Portfolio Background Image OASYS',
        backgroundColor: '#00cfb3',
        skills:
        [
          {
            icon: 'fas fa-mobile-alt',
            name: 'mobile app'
          },
          {
            icon: 'fas fa-file-code',
            name: 'technical spec'
          },
          {
            icon: 'fas fa-image',
            name: 'ui/ux design'
          },
          {
            icon: 'fas fa-users-cog',
            name: 'user testing'
          },
          {
            icon: 'fas fa-poll',
            name: 'wireflows'
          },
        ],
        company: 'bbdo / omnicom',
        projectType: 'mobile timesheet app',
        tabContent:
          [
            {
              header: 'The',
              header1: 'Mission',
              subHead: 'Redesign the Omnicom mobile timesheet app with the goal of increasing user adoption',
              body: 'I initiated and led the redesign of Omnicom’s mobile timesheet app, which had failed to gain any traction in the organization due to its UI and UX, both of which mirrored the out-of-the-box look and feel of the Dynamics AX web app, which wasn\'t suited to a mobile app.',
              image: 'Portfolio-Modal-OASYS-Image-01',
            },
            {
              header: 'Distill',
              header1: 'and Simplify',
              subHead: 'Distill and simplify the UI and UX to make the app intuitive and user-centric',
              body: 'I distilled the UI down to the essential elements needed to add time and submit timesheets, instead of mirroring the web portal.  Following the principles "Big, Bold, + Accessible", I maximized the size of all UI elements and the amount of white space.',
              image: 'Portfolio-Modal-OASYS-Image-02',
            },
            {
              header: 'New',
              header1: 'Features',
              subHead: 'I created 2 new pieces of functionality to vastly simplify app use',
              body: 'I created 2 new pieces of functionality -- Status and Quick Add -- which appear first every time the app is opened.  Status shows users items that require their attention. Quick Add allows them to add time without having to navigate into the app.',
              image: 'Portfolio-Modal-OASYS-Image-03',
            },
            {
              header: 'Prioritize',
              header1: 'User Testing',
              subHead: 'Create wireflows and use them to test select end-users',
              body: 'Given the app would be used globally by employees with disparate sets of technical skills, we prioritized user testing.  We tested select users from different departments with varying technical skills using wireflows and user flows that I created. With the information gathered, I updated the wireframes and used them to write a comprehensive functional spec of the app to be used by the offshore development team.',
              image: 'Portfolio-Modal-OASYS-Image-04',
            },
        ],
      },
      {
        id: 3,
        name: 'Cradle',
        style:'cradle',
        body: 'I designed and coded the front-end of a highly customized SharePoint DAMS (Digital Asset Management System). Using what I\'d learned about modular development at the UN, I spearheaded an initiative to rearchitect the code – introducing reusable web parts, a master page, and styles and divided the code into smaller projects, one for each subsite and a set of common code.',
        backgroundImage: 'Portfolio-Detail-Background-Cradle-042ec4',
        backgroundImageAlt: 'Portfolio Background Image Cradle',
        backgroundColor: '#042ec4',
        skills:
        [
          {
            icon: 'far fa-lightbulb',
            name: 'branding'
          },
          {
            icon: 'fas fa-code',
            name: 'front-end development'
          },
          {
            icon: 'fas fa-sitemap',
            name: 'info architecture'
          },
          {
            icon: 'fas fa-share-alt',
            name: 'sharepoint'
          },
          {
            icon: 'fas fa-image',
            name: 'ui/ux design'
          },
        ],
        company: 'bbdo / omnicom',
        projectType: 'digital asset management system',
        tabContent:
          [
            {
              header: 'A Seamless',
              header1: 'Interface',
              subHead: 'Design and develop the look and feel for a large-scale, enterprise content management system',
              body: 'I created the design for and coded the front-end of a highly customized SharePoint DAMS (Digital Asset Management System) consisting of 5 functionally different subsites developed using both SharePoint web parts and third party components, ensuring a seamless, consistent UI and UX across the portal.',
              image: 'Portfolio-Modal-Cradle-Image-01',
            },
            {
              header: 'Consistent',
              header1: 'and Efficient',
              subHead: 'Implement modular web development for a large-scale, complex digital asset management system',
              body: 'Recognizing the need for more efficient development and deployment processes, I worked with the team to re-architect the source code.  What started out as one solution containing hundreds of files became several projects -- one for each subsite and another with common code -- containing reusable web parts, master pages, and style sheets. The result? A consistent code base, faster deployment times, and a vastly improved end-user experience.',
              image: 'Portfolio-Modal-Cradle-Image-02',
            },
            {
              header: 'Functional',
              header1: 'Templates',
              subHead: 'Increased UX/UI consistency and created a more efficient, cost-effective development process',
              body: 'I worked with the team to implement a process that involved me creating a full set of functional, front-end templates  -- one for each type of page, web part, and component -- which I passed off to the back-end developers, who used them to build the site.  The result? A more stream-lined, efficient development process that not only cut down development time, but greatly improved end-user experience.',
              image: 'Portfolio-Modal-Cradle-Image-03',
            },
        ],

      },
      {
        id: 4,
        name: 'Views',
        style:'views',
        body: 'Using rough sketches from the business owner and login credentials to a popular PM tool, I designed a user-focused project management web app, which allowed the Accounts Teams to more effectively allocate resources.  I created wireframes and wrote a technical spec, which I used to create comps and code mobile-first, front-end Angular templates.',
        backgroundImage: 'Portfolio-Detail-Background-Views-0539f7',
        backgroundImageAlt: 'Portfolio Background Image Views',
        backgroundColor: '#0539f7',
        skills:
        [
          {
            icon: 'fas fa-history',
            name: 'agile'
          },
          {
            icon: 'fab fa-angular',
            name: 'angular material'
          },
          {
            icon: 'fas fa-code',
            name: 'front-end development'
          },
          {
            icon: 'fab fa-css3',
            name: 'scss'
          },
          {
            icon: 'fas fa-file-code',
            name: 'technical spec'
          },
          {
            icon: 'fas fa-image',
            name: 'ui/ux design'
          },
          {
            icon: 'fas fa-file-invoice',
            name: 'wireframes'
          },
        ],
        company: 'bbdo / omnicom',
        projectType: 'project management web app',
        tabContent:
        [
          {
            header: 'The',
            header1: 'Mission',
            subHead: 'Build a user-centric project management tool from the ground up',
            body: 'Using my ability to deal with ambiguity and to leverage design as a means to bring clarity to abstract ideas and my past experience collaborating with stakeholders to create web apps from the ground up, I worked with the account manager to define the requirements, which I used to design and built the front end of a project management web app.  ',
            image: 'Portfolio-Modal-Views-Image-01',
          },
          {
            header: 'Jack of',
            header1: 'All Trades',
            subHead: 'Ensure the technical feasibility of the designs ensuring a more cost-efficient development process',
            body: 'Being both the UI/UX designer and front-end developer on this project, I was easily able to ensure the technical feasibility of my designs ensuring a more cost-efficient, streamlined development process. In addition to my design and front-end development roles, I wrote the technical spec for the app and an accompanying list of the components -- both Angular and third party -- to be used.',
            image: 'Portfolio-Modal-Views-Image-03',
          },
          {
            header: 'Don\'t Run',
            header1: 'Sprint',
            subHead: 'Use the Agile methodology to plan and execute the development life cycle',
            body: 'Given my team was between project managers, the backend developer and I defined the project timeline, demos, and deliverables using the Agile methodology.  Our modular approach to developing and prior experience working together on Angular projects made it easy for us to create sprints and adhere to a tight demo and deployment schedule.',
            image: 'Portfolio-Modal-Views-Image-02',
          },
        ],
      },
      {
        id: 5,
        name: 'The UN',
        style:'the-un',
        body: 'I developed the UI for UNICEF\'s SharePoint-based global intranet, including all visual elements, master pages, page templates, styles, and web components. Additionally, I played an integral role in architecting, administering, and maintaining the site, as well as implementing enhancements, deploying code, and training end users.',
        backgroundImage: 'Portfolio-Detail-Background-The-UN-00cfb3',
        backgroundImageAlt: 'Portfolio Background Image The UN',
        backgroundColor: '#00cfb3',
        skills:
        [
          {
            icon: 'far fa-lightbulb',
            name: 'branding'
          },
          {
            icon: 'fas fa-code',
            name: 'front-end development'
          },
          {
            icon: 'fas fa-sitemap',
            name: 'sharepoint'
          },
          {
            icon: 'fas fa-child',
            name: 'team lead'
          },
          {
            icon: 'fas fa-image',
            name: 'ui/ux design'
          },
        ],
        company: 'the united nations',
        projectType: 'global intranet portal',
        tabContent:
        [
          {
            header: 'Started at',
            header1: 'the Bottom',
            subHead: 'Learning SharePoint from the ground up was one of the most fulfilling aspects of my career',
            body: 'Prior to working at the UN, I\'d never worked with SharePoint. I learned SharePoint from the ground up.  At a time when it wasn\'t easy to customize SharePoint\'s UI, I mastered doing so allowing us to implement a custom UI that erased SharePoint\'s user-unfriendly out of the box look and feel and branding for individual field offices\' subsites.',
            image: 'Portfolio-Modal-The-UN-Image-01',
          },
          {
            header: 'Introduce',
            header1: 'Templates',
            subHead: 'I introduced page templating allowing non-technical end-users to update their own content',
            body: 'I created and implemented SharePoint page templates, which saved time and money by allowing end-users in the field offices to update all content on their subsites.  Additionally, I designed and developed SharePoint Master Page templates that made the development process more efficient and resulted in a more consistent end-user experience.',
            image: 'Portfolio-Modal-The-UN-Image-02',
          },
          {
            header: 'Front-end',
            header1: 'Concerns',
            subHead: 'I welcomed the responsibilities and challenges I faced as the only front-end developer on the project',
            body: 'I was the sole front-end developer for UNICEF\'s intranet: a large-scale, global CMS (content management system). I was responsible for all front-end concerns, with a focus on translating comps, created in conjunction with the Art Director, into functional, cross-browser compatible SharePoint templates and web parts, which were passed to the backend developers.  I led bi-weekly site reviews during which I presented my progress to and sought feedback from the development team and key stakeholders.',
            image: 'Portfolio-Modal-The-UN-Image-03',
          },
        ],
      },
      {
        id: 6,
        name: 'Talent',
        style:'talent',
        body: 'Tasked with the goal of centralizing and more efficiently tracking media buyouts, my team met numerous times with an inhouse production team to conceive, design, and build a web app from the ground up, which involved translating complex user needs, technical constraints, and business goals into an intuitive, user-centered web app that catered to end-users of varying technical skills.',
        backgroundImage: 'Portfolio-Detail-Background-Talent-042ec4',
        backgroundImageAlt: 'Portfolio Background Image Talent',
        backgroundColor: '#0791B8',
        skills:
        [
          {
            icon: 'fas fa-history',
            name: 'agile'
          },
          {
            icon: 'fab fa-angular',
            name: 'angular'
          },
          {
            icon: 'fab fa-bootstrap',
            name: 'bootstrap / utilities'
          },
          {
            icon: 'fab fa-css3',
            name: 'css'
          },
          {
            icon: 'fas fa-mobile-alt',
            name: 'responsive'
          },
          {
            icon: 'fas fa-image',
            name: 'ui/ux design'
          },
          {
            icon: 'fas fa-code',
            name: 'ui development'
          },
        ],
        company: 'bbdo / omnicom',
        projectType: 'media buy tracking tool',
        tabContent:
          [
            {
              header: 'Complex',
              header1: 'Requirements',
              subHead: 'Build a web app that captures the functionality of a manual system',
              body: 'Prior to the creation of the Talent portal, the production team kept track of media buyouts using an arcane, manual system that was difficult to use and cost the company thousands of dollars in lapsed buyout fees.  Our job: build an effective, user-friendly web app that captured the functionality of the manual system coupled with personalization (My Queue) and email alerts for expiration dates.  In addition to the technical requirements, understanding the mindset of the production team was integral to building the tool, which is why numerous meetings were required.',
              image: 'Portfolio-Modal-Talent-Image-01'
            },
            {
              header: 'Google',
              header1: 'Flights',
              subHead: 'I came up with a design solution inspired by Google Flights',
              body: 'Using my ability to deal with ambiguity and to leverage design as a means to bring clarity to complex user needs coupled with extensive research, I came up with a solution inspired by Google Flights, who display initial search results as a pared-down list whose entries can be opened with an accordion to display greater detail without having to navigate to another page or open a popup.',
              image: 'Portfolio-Modal-Talent-Image-02'
            },
            {
              header: 'Jack of',
              header1: 'All Trades',
              subHead: 'I created comps, compiled a list of components, and code functional front-end templates',
              body: 'Filling the roles of UI Designer and Developer, I created comps in Adobe XD, compiled a list of Angular and 3rd party components to be used, and code functional front-end templates, which I handed off to the backend developer following the Agile plan we\d created. As with previous Angular projects, I created the project, the file structure, the components, the SCSS files, and graphic assets. I installed Bootstrap, jQuery, and other 3rd party libraries, added routing, and wrote the markup for all components to create fully functional front-end templates, which were checked into DevOps for the backend developer.',
              image: 'Portfolio-Modal-Talent-Image-03'
            },
        ],
      },
    ];
  }
}
