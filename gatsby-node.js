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
      image: "https://resize.hswstatic.com/w_907/gif/smilingdog-1.jpg",
    },
    {
      slug: "sparky",
      name: "Sparky",
      breed: "Corgi",
      image: "https://www.dogstrust.org.uk/dogimages/1221207_sparky_20191213024809_sparky-b_800.jpg",
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
