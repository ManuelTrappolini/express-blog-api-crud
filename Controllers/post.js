const posts = require('../data/db.js')
const fs = require('fs')

const index = (req,res)=>{
    res.json({
        data:posts,
        count:posts.length
    })
}

const store = (req,res) => {
    console.log(req.body);

    const post = {

        title:req.body.title,
		slug:req.body.slug,
        content:req.body.content,
        image:req.body.image,
        tags:req.body.tags,
    };

    posts.push(post);

    fs.writeFileSync('./data/db.js', `module.exports = ${JSON.stringify(posts, null , 4)}`);

    res.json({
        status:201,
        data: posts,
        counter: posts.length
    })
}

module.exports = {
    store,
    index
}