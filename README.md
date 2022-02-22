# Lumago Learning

Lumago Learning is a developing e-learning platform designed to teach financial literacy to youth aged 14-18.

## Our Mission

We believe it's essential for the children of today to learn how to manage their money properly. We want every young person to receive the guidance and education to attain financial freedom. Our platform will be designed to be learn crucial concepts through digestible lessons and activities. We strive to be an accessible solution that can help stop the financial literacy gap regardless of location, income, and race.

## Why Open Source?

We hope by open-sourcing our project, we can receive mentorship, advice, and contributions from people all over the globe that want to use their skills to help the next generation stay out of debt and have the means to reach their goals.

At the moment our platform is in heavy reconstruction from previous iterations achieving the same mission. Once the core pieces are migrated in, we would love help with the following activies:

- **Connecting to People in Education**: We'd love to chat with teachers, school board members, or college about how we can improve personal finance learning for young people.
- **UI/UX Design Guidance**: We want to make sure our platform is properly made for an engaging and effective learning experience. Please let us know of any improvements we should make or even show us better designs yourself.
- **Curriculum Writing/Development**: We aren't the experts when it comes to financial literacy, and we would appreciate any help on curriculum. Our current curriculum is in dire need of a professional and caring nudge in the right direction from someone with the right experience.
- **UI Development**: Our UI is built with Typescript, Tailwind, and monitored with Storybook. We are always open for improving our current component library through more tests, refactoring, or new components.

## How to Contribute

Our integration of Sanity.io as a Headless CMS makes it difficult to run the Next.js application itself. Besides the previously mentioned areas, you can contribute code best in the `components`, `studio`, and soon-to-be `test folders. Plans are being done to ensure contributors can locally use Storybook and eventually Sanity Studio.

## Roadmap (2/21/2022)

Lumago Learning has a long way to go and has many things to improve before it can be ready. Here's what we are working on in the mean time as we get to an alpha release:

- Content Draft/Placeholders: Making test or draft courses to see how it plays with our frontend.
- Refactored + New UI Components: Lots of cleanup to make everything work nicely.
- Refactored Next.js Web App: Make everything work nicely with our CMS.
- Auth for Users: Use Next-Auth, Prisma, MySQL, and Planetscale to handle the database needs outside of content.
