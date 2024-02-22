import './BlogPagination.scss';

export default function BlogPagination({ pages = [] }) {
  return (
    <div className='blog-pagination'>
      {pages.map((page) => {
        return (
          <span
            key={page.number}
            className={`pagination-element ${page.current ? 'current' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = page.url;
            }}
          >
            <a href={page.url}>{page.number}</a>
          </span>
        );
      })}
    </div>
  );
}
