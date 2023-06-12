const User = require("../models/UserModel")
module.exports.addToLikedMovies = async (req, res) => {
    try{
        const {email, data} = req.body
        const user = await User.findOne({email})
    
    if(user){
        const {likeMovies } = user
        const movieAlreadyLiked = likeMovies.find(({id}) => (id = data.id))
    
    if(!movieAlreadyLiked){
        await User.findByIdAndUpdate(user._id, {
            likedMovies: [...user.likedMovies, data]
        },
        {new:true})
        
    }
    else return res.json("Movie Already Added")
}else await User.create({email, likedMovies:[data]})
return res.json ({msg: "Movie added"})
}catch(error){
        return res.json({msg: "Error in Adding Movies"})
    }
}