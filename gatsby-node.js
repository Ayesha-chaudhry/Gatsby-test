//************************3rdly For Content full ********************/

exports.createPages = async ({actions, graphql}) => {
    const {createPages} = actions;

    const result = await graphql(
        {
            allContentfulElectronics {
                nodes {
                  slug
                  title
                  desc {
                    raw
                  }
                }
              }
            }
            
        }
                   
    )

    console.log(JSON.stringify(result))
}





//***************************Secondly used clients only route***********************************
//Implement the Gatsby API “onCreatePage”. This is
//called after every page is created.
// exports.onCreatePage = async ({ page, actions }) => {
//     const { createPage } = actions
  
//     // Only update the `/app` page.
//     if (page.path.match(/^\/product/)) {
//       // page.matchPath is a special key that's used for matching pages
//       // with corresponding routes only on the client.
//       page.matchPath = "/product/*"
  
//       // Update the page.
//       createPage(page)
//     }
//   }






//****************************/ Firstly used for showing page by router**************************************
// const arr = [
//     {
//         name: "Fruite" , dec:""
//     }
// ]

// exports.createPages = async function ({actions}) {

//     actions.createPage({
//         path: "fruits",
//         component: require.resolve(`./src/templates/fruits.tsx`),
//         context: {
//             name: "Mango",
//             desc: "Eveyones favroite summer fruite"
//         },
//     });
//     console.log("End of Gatsby Node File");
// }
