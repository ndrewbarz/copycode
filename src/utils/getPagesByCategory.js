export const getPagesByCategory = function (pages) {
  const pagesByCategory = {}

  pages.group.forEach(pageGroup => {
    // Grab the category key from the 1st item in the pages list
    // they all have the same category key, so no need to iterate each one
    const categoryKey = pageGroup.edges[0].node.fields.category
    pagesByCategory[categoryKey] = {}
    pagesByCategory[categoryKey].pages = pageGroup.edges
    pagesByCategory[categoryKey].categoryName = categoryKey
    pagesByCategory[categoryKey].categoryId = categoryKey
  })

  return pagesByCategory
}
