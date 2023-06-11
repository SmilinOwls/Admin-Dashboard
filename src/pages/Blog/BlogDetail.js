import React from 'react'
import CustomInput from '../../components/CustomInput';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

function BlogDetail({formData, handleChange}) {
    return (
        <>
            <div className="mt-3 w-50">
                <form action="" method="">
                    <h5>Title</h5>
                    <CustomInput type="text" name="title" label="Enter blog title..." onChange={handleChange}/>
                    <h5>Content</h5>
                    <ReactQuill theme="snow" placeholder='Enter blog content...' value={formData.content} onChange={handleChange} className="bg-white h-50" />
                </form>
            </div>
        </>
    )
}

export default BlogDetail