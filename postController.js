import Post from './post.js';
import postService from './postService.js';

class PostController {
    async create(req, res) {
        try {
            console.log(req.files)
            const post = await postService.create(req.body, req.files.picture)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
            console.log(e)
        }
    }
    async getAll(req, res){
        try {
            const posts = await postService.getAll()
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res){
        try {
            
            const {id} = req.params
            const post = await Post.findById(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
            console.log(e)
        }
    }
    async update(req, res){
        try {
            const updatedPost = await postService.update(req.body)
            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res){
        try {
            const post = await postService.delete(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();