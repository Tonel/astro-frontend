import './BlogCard.scss'
import dayjs from 'dayjs'

export default function BlogPost({ blog }) {
  return (
    <div
      className='blog-card'
      onClick={(e) => {
        e.preventDefault()
        // redirect to the blog post page
        window.location.href = blog._url
      }}
    >
      <div className='date'>
        Released On {dayjs(blog.publishedAt).format('MMMM D, YYYY')}
      </div>
      <div className='title'>
        <a href={blog._url}>{blog.title}</a>
      </div>
    </div>
  )
}
