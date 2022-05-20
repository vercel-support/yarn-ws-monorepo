# Deploying Monorepos with Yarn Workspaces and Vercel

In this guide, you will deploy a Monorepo with Yarn Workspaces and the following components:

- A `Create-react-app` project with a frontend and backend
- A `Next.js` project
- A common library folder containing a utility function shared between each project

To deploy to Vercel, please follow these steps:
1. Clone this repository
2. Deploy each of the 2 projects to Vercel from this same repository by [creating a new Vercel Project with Git](https://vercel.com/docs/concepts/git#deploying-a-git-repository) and selecting the repository from the **Import Git Repository** section.
  - For the **frontend** `create-react-app` project, choose **Create React App** as the framework and **frontend** as the root directory
  - For the **nextapp** `Next.js` project, choose **Next.js** as the framework and **nextapp** as the root directory

The result will be 2 separate sites deployed with 2 different frameworks from the same repository.
