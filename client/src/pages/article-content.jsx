const articles = [
  {
    name: "learn-react",
    title: "Learn React",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      `ReactJS is JavaScript library used for building reusable UI components. According to React official documentation, following is the definition −

      React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.
      
      React Features
      JSX − JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended.
      
      Components − React is all about components. You need to think of everything as a component. This will help you maintain the code when working on larger scale projects.
      
      Unidirectional data flow and Flux − React implements one-way data flow which makes it easy to reason about your app. Flux is a pattern that helps keeping your data unidirectional.
      
      License − React is licensed under the Facebook Inc. Documentation is licensed under CC BY 4.0.
      
      React Advantages
      Uses virtual DOM which is a JavaScript object. This will improve apps performance, since JavaScript virtual DOM is faster than the regular DOM.
      
      Can be used on client and server side as well as with other frameworks.
      
      Component and data patterns improve readability, which helps to maintain larger apps.
      
      React Limitations
      Covers only the view layer of the app, hence you still need to choose other technologies to get a complete tooling set for development.
      
      Uses inline templating and JSX, which might seem awkward to some developers.`,
    ],
  },
  // {
  //   name: "learn-nextjs",
  //   title: "Learn Next.js",
  //   image:
  //     "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: [
  //     `Next.js is a JavaScript library for building user interfaces. It's the most popular framework used to create interactive web applications.`,
  //   ],
  // },
  {
    name: "learn-vue",
    title: "Learn Vue",
    image:
      "https://images.unsplash.com/photo-1561883088-039e53143d73?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      `Vue.js (pronounced /vjuː/, like view) is a library for building interactive web interfaces. The goal of Vue.js is to provide the benefits of reactive data binding and composable view components with an API that is as simple as possible.

      Vue.js itself is not a full-blown framework - it is focused on the view layer only. It is therefore very easy to pick up and to integrate with other libraries or existing projects. On the other hand, when used in combination with proper tooling and supporting libraries, Vue.js is also perfectly capable of powering sophisticated Single-Page Applications.
      
      If you are an experienced frontend developer and want to know how Vue.js compares to other libraries/frameworks, check out the Comparison with Other Frameworks; if you are more interested about how Vue.js approaches larger-scale applications, check out the section on Building Larger-Scale Applications.
      
      Reactive Data Binding
      At the core of Vue.js is a reactive data-binding system that makes it extremely simple to keep your data and the DOM in sync. When using jQuery to manually manipulate the DOM, the code we write is often imperative, repetitive and error-prone. Vue.js embraces the concept of data-driven view. In plain words, it means we use special syntax in our normal HTML templates to “bind” the DOM to the underlying data. Once the bindings are created, the DOM will then be kept in sync with the data. Whenever you modify the data, the DOM updates accordingly. As a result, most of our application logic is now directly manipulating data, rather than messing around with DOM updates. This makes our code easier to write, easier to reason about and easier to maintain.`,
    ],
  },
  {
    name: "learn-svelte",
    title: "Learn Svelte",
    image:
      "https://images.unsplash.com/photo-1610989001873-03968eed0f08?q=80&w=2745&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      `Web applications are becoming more popular day by day. They’re a growing world which people choose for its simplicity, speed, and cross-platform availability. Single Page Applications (SPAs) have taken a huge part in this process. Frameworks like Angular, Vue.js, and React help developers to deliver the best user experience in a short period leaving the code supportable and extendable. These tools have long remained most popular in the field, with many advantages over the newly created packages. It has felt like an oligopoly in the SPA world. However, a group of forward-looking developers targeting this market could enter with a serious competitor—Svelte.

      Svelte is a new approach to building user interfaces. Let’s dive in and explore what makes it so fresh by creating a common log-in form.
      
      Architecture
      Svelte is architected to be faster than any other library. It’s reached by shifting the step of loading a framework for building a virtual DOM. Instead of using a tool during the running process, it’s compiled to vanilla JS at the building stage so the application requires no dependencies to start.
      
      Svelte	Other SPA libraries (React, Vue.js, Angular, etc.)
      1. Open a website
      2. Render the page using pure JS
      
      1. Open a website
      2. Wait until the code for building a virtual DOM is loaded
      3. Render the page using the library
      
      The table above describes why Svelte is an absolute winner in startup performance. That’s not gained by any sort of optimization but by using the available browser JavaScript compiler instead of a side compiler.`,
    ],
  },
];

export default articles;
