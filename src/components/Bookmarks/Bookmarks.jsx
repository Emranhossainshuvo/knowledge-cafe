import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 text-center ms-5 bg-gray-200 rounded-xl p-4">
            <div className='mb-4'>
                <h3 className="text-4xl">Reading Time {readingTime} min</h3>
            </div>
            <h2 className="text-3xl">Bookmarks {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;