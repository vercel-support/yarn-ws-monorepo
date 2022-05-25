# Deploying Monorepos with Yarn Workspaces and Vercel

In this repository, you will deploy a monorepo with Yarn workspaces and the following components:

- A `create-react-app` application
- A Next.js application
- A common library containing a utility function shared between each application

You can follow the step by step guide [here](https://vercel.com/guides/deploying-yarn-monorepos-to-vercel).

To deploy to Vercel, please follow these steps:

1. Clone this repository
2. Deploy both applications to Vercel from this same repository by [creating a new Vercel Project with Git](https://vercel.com/docs/concepts/git#deploying-a-git-repository) twice and selecting the repository from the **Import Git Repository** section. Use the following configuration for each Vercel Project:

- For the `apps/frontend` `create-react-app` application, choose **Create React App** as the framework and **apps/frontend** as the root directory
- For the `apps/nextapp` `Next.js` application, choose **Next.js** as the framework and **apps/nextapp** as the root directory

The result will be 2 separate sites deployed with 2 different frameworks from the same repository.
