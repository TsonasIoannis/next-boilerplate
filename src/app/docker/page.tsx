import Link from "next/link";

export default function Docker() {
  return (
    <main className="flex flex-col p-24">
      <h1 className="md:text-4xl font-medium mb-2">
        Understanding Next.JS Docker Images{" "}
      </h1>
      <p>
        If you&apos;ve tried to containerize a NextJS app, you&apos;ve probably
        found the&nbsp;
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="https://nextjs.org/docs/pages/building-your-application/deploying#docker-image"
        >
          official documentation
        </Link>{" "}
        &nbsp;to be a bit lacking. Especially for beginners, the&nbsp;
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile"
        >
          provided Dockerfile
        </Link>
        &nbsp; might be confusing. In this post, we&apos;ll go over the
        Dockerfile and explain what exactly is going on!
      </p>

      <h2 className="md:text-2xl font-medium my-2">The Dockerfile</h2>

      <p>
        Let&apos;s start by looking at the Dockerfile&nbsp;
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile"
        >
          provided by the wonderful NextJS
        </Link>
        &nbsp; team.
      </p>

      <p>
        The Dockerfile can be broken down into <strong>4</strong> parts: the
        base image, the dependency installation, the build, and the runtime.
      </p>

      <h3 className="md:text-1xl font-medium my-2">The Base Image</h3>

      <p>
        The first part (and first line!) of the Dockerfile is the base image
        that the Docker Image is built on top of. Similar to an operating system
        like Linux or Windows, the base image provides the foundation and
        structure for the rest of the image. In this case, we use
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          node:lts-alpine
        </code>
        , which is a small but powerful image that contains NodeJS. The{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          lts
        </code>{" "}
        refers to the version of NodeJS. If you want to use a different version,
        you could replace it with any applicable version!
      </p>

      <h3 className="md:text-1xl font-medium my-2">Dependency Installation</h3>

      <p>
        As always with Next.JS projects, we first need to install our
        dependencies. This is done in the next block. But before we install our
        dependencies, we see the line:
        <br />
      </p>
      <pre>
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          RUN apk add --no-cache libc6-compat
        </code>
      </pre>

      <p>
        Why is this line here? Well, the{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          node:lts-alpine
        </code>{" "}
        image is based on Alpine Linux, which is a very small Linux
        distribution. However, it is so small that it doesn&apos;t have all the
        libraries that
        <em>some</em> NodeJS packages need. The{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          libc6-compat
        </code>
        package provides some of these libraries, reducing the chance of errors
        when installing dependencies. This line isn&apos;t always needed, but
        it&apos;s a good idea to include it just in case. If you want a more
        in-depth explanation of why this might be needed, check out&nbsp;
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine"
        >
          this Github Repo.
        </Link>
      </p>

      <p>
        Now we can finally start working on our dependencies! To keep everything
        neat and tidy, we first create a new directory called{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          /app
        </code>
        and set it as our working directory. Then, we copy over the
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          package.json
        </code>
        , and{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          package-lock.json
        </code>
        , files.
      </p>

      <pre>
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          RUN npm ci
        </code>
      </pre>

      <p>
        This block of code it will run{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          npm ci
        </code>
        .
      </p>

      <h3 className="md:text-1xl font-medium my-2">The Build</h3>

      <p>
        The next part of the Dockerfile contains the actual build process where
        we compile our NextJS app.
      </p>

      <p>
        As before, we first start a new image layer and set our working
        directory to{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          /app
        </code>
        . Then, we copy over the
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          node_modules
        </code>{" "}
        folder from our previous image layer. After copying the{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          node_modules
        </code>{" "}
        folder, we copy over the rest of our app. This is done in two steps to
        improve build times. If we copied over the entire app first, then every
        time we made a change to our app, we would have to reinstall our
        dependencies. By copying over the
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          node_modules
        </code>{" "}
        folder first, we can skip the dependency installation step if we
        haven&apos;t changed our dependencies! Smart, right?
      </p>

      <p>
        Finally, we run{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          yarn build
        </code>{" "}
        to execute the command that is defined in our{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          package.json
        </code>{" "}
        file. This command is usually
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          next build
        </code>
        , but it can be changed to whatever you want. It doesn&apos;t really
        matter if we use{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          yarn
        </code>{" "}
        or{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          npm
        </code>
        here, because we already installed our dependencies in the previous step
        and the package manager doesn&apos;t really matter for the build
        process!
      </p>

      <h3>The Runtime</h3>

      <p>
        And finally, we are done with installing our dependencies and building
        our app! The last part of the Dockerfile is the runtime, where we
        actually run our app. This part is a bit longer, so let&apos;s go
        through it step by step.
      </p>

      <p>
        Again, we start by creating a new image layer and setting our working
        directory to{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          /app
        </code>
        . We then set the{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          NODE_ENV
        </code>
        environment variable to{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          PRODUCTION
        </code>
        . This signals to NextJS that we are running in production mode, which
        will improve performance. This can also affect other parts of your app
        and NodeJS. Check out this awesome&nbsp;
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="https://nodejs.dev/en/learn/nodejs-the-difference-between-development-and-production/"
        >
          documentation page
        </Link>
        &nbsp; for more information!
      </p>

      <p>
        Next, we create a new group and user. This is done to improve security.
        If we didn&apos;t do this, our app would run as{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          root
        </code>
        , which can be a security issue. Generally, you want to try to follow
        the&nbsp;
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="https://en.wikipedia.org/wiki/Principle_of_least_privilege"
        >
          &quot;Principle of least privilege&quot;
        </Link>
        &nbsp; , which states that you should only give your app the permissions
        that it needs. In this case, our app doesn&apos;t need root permissions,
        so we create a new user and group for it. We then finally switch to this
        new user with{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          USER nextjs
        </code>
        .
      </p>

      <p>
        Now we can finally copy over the build artifacts from the previous image
        layer. We first copy over the{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          ./public
        </code>{" "}
        folder which includes all of our static assets. Then, we copy over the
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          ./.next/standalone
        </code>{" "}
        and{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          ./.next/static folders
        </code>
        , which include all of our compiled code. This step will only work if
        you set your{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          output
        </code>{" "}
        mode in your&nbsp;
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="https://nextjs.org/docs/pages/api-reference/next-config-js/output"
        >
          Next.JS Config
        </Link>
        &nbsp; . If you don&apos;t set your{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          output
        </code>{" "}
        mode, your dependencies will not be included!
      </p>

      <p>
        At this point we have improved security, enabled production mode, and
        copied over all the build artifacts. The next 3 lines are all about
        networking and making our Next.JS app available to the the network.
      </p>

      <p>
        We first expose port{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          3000
        </code>{" "}
        to the network with
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          EXPOSE 3000
        </code>
        . This doesn&apos;t actually do anything, but it&apos;s a good practice
        to include it so that other developers know which port the Docker
        Container will be running on. Next, we set the{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          PORT
        </code>
        environment variable to{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          3000
        </code>
        . This is used by NextJS to determine which port to run on. Finally, we
        set the{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          HOST
        </code>
        environment variable to{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          localhost
        </code>
        .
      </p>

      <p>
        The last line is the actual command that is run when the Docker
        Container is started and is not executed during the image build process.
        Since we compiled the Next.JS app to a standalone file, we can simply
        start it with{" "}
        <code className="text-sm sm:text-base inline-flex text-left items-center bg-gray-700 text-white rounded-lg p-1">
          node server.js
        </code>
        . That&apos;s it! We&apos;re done! 🎉🎉🎉
      </p>

      <h2 className="md:text-2xl font-medium my-2">Conclusion</h2>

      <p>
        I hope this post helped you understand the NextJS Dockerfile a bit
        better.
      </p>
    </main>
  );
}
