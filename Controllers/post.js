const posts = require('../data/db.js')
const fs = require('fs')

const index = (req, res) => {
    res.json({
        data: posts,
        count: posts.length
    })
}

const store = (req, res) => {
    console.log(req.body);

    const post = {

        title: req.body.title,
        id: Number(posts[posts.length - 1].id + 1),
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    };

    posts.push(post);

    fs.writeFileSync('./data/db.js', `module.exports = ${JSON.stringify(posts, null, 4)}`);

    res.json({
        status: 201,
        data: posts,
        counter: posts.length
    })
}

function show  (req,res)  {
    const post = posts.find(post => post.id === Number(req.params.id));
    if(!post){
        return res.status(404).json({
            error: "404! not found"
        })
    }
    return res.status(200).json({
        data: post
    })
}

const update = (req, res) => {
    const {body,id} = req
    let findPostIndex = posts.find(post => post.id === Number(req.params.id));
    posts[findPostIndex] = { ...posts[findPostIndex], ...body}
    return res.status(200).json({ findPostIndex})
    
}


module.exports = {
    store,
    index,
    show,
    update
}