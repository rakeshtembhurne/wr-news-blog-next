import categoryData from 'app/category-data.json'

const headerNavLinks = [{ href: '/', title: 'Home' }]
Object.keys(categoryData).forEach((category) => {
  const title = category[0].toUpperCase() + category.split(' ').join('-').slice(1)
  headerNavLinks.push({ href: `/category/${category}`, title: title })
})
headerNavLinks.push({ href: '/about', title: 'About' })

export default headerNavLinks
