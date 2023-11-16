import Link from "next/link";

export default function ReactBootstrap() {
  return (
    <main className="flex flex-col p-24">
      <h1 className="md:text-4xl font-medium mb-2">
        How to Add React-Bootstrap to NextJS
      </h1>
      <p>
        I this tutorial you'll learn how to add{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          react-bootstrap
        </code>{" "}
        to NextJS and start using its components.
      </p>
      <h2 className="md:text-2xl font-medium my-2">What is React Bootstrap?</h2>
      <p>
        React Bootstrap rebuilds Bootstrap — the most popular frontend framework
        for React, removing the unnecessary jQuery dependency. As one of the
        oldest React frameworks, React Bootstrap has evolved and matured
        linearly with React. Additionally, each component is implemented with
        accessibility in mind, so it offers a set of accessible-by-default
        design elements.
      </p>
      <h2 className="md:text-2xl font-medium my-2">Why React Bootstrap?</h2>
      <p>
        React-Bootstrap is a complete re-implementation of the Bootstrap
        components using React. It has no dependency on either bootstrap.js or
        jQuery. If you have React setup and React-Bootstrap installed, you have
        everything you need. Methods and events using jQuery is done
        imperatively by directly manipulating the DOM. In contrast, React uses
        updates to the state to update the virtual DOM. In this way,
        React-Bootstrap provides a more reliable solution by incorporating
        Bootstrap functionality into React's virtual DOM. Below are a few
        examples of how React-Bootstrap components differ from Bootstrap.
      </p>
      <h2 className="md:text-2xl font-medium my-2">Install and Setup</h2>
      <p>
        To use react-bootstrap with NextJS, first we install the{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          react-bootstrap
        </code>{" "}
        and{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          bootstrap
        </code>{" "}
        packages.
      </p>
      <p>
        {" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          npm install react-bootstrap bootstrap
        </code>
      </p>
      <p>
        We'll only use the{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          scss
        </code>{" "}
        files from bootstrap for the styling.
      </p>
      <p>
        Next, in{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          src/app/globals.css
        </code>
        , let's import{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          bootstrap.min.css
        </code>
        .
      </p>
      <p>Now, we can use the bootstrap components in our project.&nbsp;</p>
      <h2 className="md:text-2xl font-medium my-2">RSC Gotcha</h2>
      <p>
        With the introduction of Next 13+ and the increase in popularity of RSC
        an important caveat of using React-Bootstrap is the{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          `use-client`
        </code>{" "}
        wrapper needed for a lot of components. A lot of the codebase for
        React-Bootstrap depends on user context or state thus making them
        incompatible for RSC. However, components are still SSR'd and produce
        HTML that is sent to the client, thus React-Bootstrap components are all
        SSR compatible. The best solution seems to wrap components as close to
        the leafs in{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          `use-client`
        </code>{" "}
        . Interesting discussion on the topic in this GitHub{" "}
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="https://github.com/react-bootstrap/react-bootstrap/issues/6475"
        >
          issue
        </Link>{" "}
        .
      </p>
    </main>
  );
}
