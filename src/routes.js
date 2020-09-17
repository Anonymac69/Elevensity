import showBlog from './components/showBlog'
import addBlog from './components/addBlog'
import listBlog from './components/listBlogs'
import singleBlog from './components/singleBlog'

export default [
  { path: '/', component: showBlog },
  { path: '/add', component: addBlog },
  { path: '/topics', component: listBlog },
  { path: '/blog/:id', component: singleBlog }
]