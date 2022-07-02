import BlogModel from '../models/BlogModel.js'

//methods for CRUD
//show every records
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find();
        res.status(200).json(blogs)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// show unique record for id
export const getBlog = async (req, res) => {
    try {
        const id = req.params.id
        await BlogModel.findById({ _id: id }).then((blog) => {
            res.status(200).json(blog)
        })

    } catch (error) {
        res.json({ message: error.message })
    }
}

// created a record
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.status(200).json({
            "message": "blog created succesfully"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// update a record 
export const updateBlog = async (req, res) => {
    try {
        const id = req.params.id
        await BlogModel.updateOne({ _id: id }, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message": "blog updated succesfully"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// delete a record
export const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id
        await BlogModel.deleteOne({_id: id}).then(res =>{
            console.log(res)
        })
        res.status(200).json({
            "message": "blog deleted succesfully"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}