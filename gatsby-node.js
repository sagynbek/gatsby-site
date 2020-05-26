/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  // pull in or use whatever data
  const dogData = [
    {
      slug: "fido",
      name: "Fido",
      breed: "Sheltie",
    },
    {
      slug: "sparky",
      name: "Sparky",
      breed: "Corgi",
    },
  ]
  
  dogData.forEach(dog => {
    createPage({
      path: `/dog/${dog.slug}`,
      component: require.resolve(`./src/templates/dog-template.tsx`),
      context: { dog },
    })
  })
}
