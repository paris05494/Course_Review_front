import '../styles/Questioncard.css'
import Proptypes from 'prop-types';
import FormComponent from './Form';
import { useState } from 'react';

const Questioncard = (props) => {

    const {course_id, course_name, question, writer} = props

    const [showPopup, setShowPopup] = useState(false);
    // เปิด/ปิดฟอร์ม
    const openForm = () => setShowPopup(true);
    const closeForm = () => setShowPopup(false);
    
    return (
        <div className='center-container' >
            <div className='coursecard'>
                <div className='coursecard-header'>
                    <span className="code">{course_id} | {course_name} </span>
                </div>
                <div className='comment-content'>
                    {question}
                </div>
                <div className='comment-author'> 
                    รีวิวโดย<i> {writer}</i>
                </div>
                <form className='comment-actions'>
                    <label className="answer"><input type="text" id="pin" placeholder="ตอบคำถามนี้"></input></label>
                    <div>
                        <button onClick={openForm}>สร้างคำถาม</button>
                        {showPopup && (<FormComponent onClose={closeForm} /> )}
                    </div>
                </form>
            </div>
        </div>
    )
}

Questioncard.proptypes = {
    course_id: Proptypes.string.isRequired, 
    course_name: Proptypes.string.isRequired,
    review: Proptypes.string.isRequired, 
    writer: Proptypes.string.isRequired
}

export default Questioncard