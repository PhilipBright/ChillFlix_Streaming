const Favorite = require("../models/FavoriteModel");

module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await Favorite.findOne({ email });

    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);

      if (!movieAlreadyLiked) {
        await Favorite.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );
      } else {
        return res.json("Movie Already Added");
      }
    } else {
      await Favorite.create({ email, likedMovies: [data] });
    }
    
    return res.json({ msg: "Movie added" });
  } catch (error) {
    return res.json({ msg: "Error in Adding Movies" });
  }
};
    