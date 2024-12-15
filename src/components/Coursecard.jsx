import '../styles/Coursecard.css';
import Proptypes from 'prop-types';

const Coursecard = (props) => {

    const {course_id, course_name, review, writer} = props

    return (
        <div className='center-container'>
            <div className='coursecard'>
                <div className='coursecard-header'>
                    <span className="code">{course_id} | {course_name} </span>
                </div>
                <div className='comment-content'>
                    {review}
                </div>
                <div className='comment-author'> 
                    รีวิวโดย<i> {writer}</i>
                </div>
                <hr/>
                <div className='comment-actions'>
                    <div className="icon">
                        <span>👏 0</span>
                        <span>💬 0</span>
                    </div>
                    <button>แชร์</button>
                </div>
            </div>
        </div>
    )
}

Coursecard.proptypes = {
    course_id: Proptypes.string.isRequired, 
    course_name: Proptypes.string.isRequired,
    review: Proptypes.string.isRequired, 
    writer: Proptypes.string.isRequired
}

export default Coursecard