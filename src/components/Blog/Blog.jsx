import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover, reading_time, author, posted_date, author_img, hashtags } = blog || [];
    return (
        <div className='mb-20'>
            <img className='w-full mb-5 rounded-lg' src={cover} alt="" />
            <div className='flex justify-between mb-5'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>  
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                    onClick={() => handleAddToBookmark(blog)}
                     className='ml-2 text-gray-600'>
                        <FaBookmark />
                    </button>
                </div>
            </div>
            <h2 className="text-5xl mb-5">{title}</h2>
            <p>
                {
                    hashtags?.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;