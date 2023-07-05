const Favorite = require("../models/FavoriteModel");
// module.exports.addToLikedMovies = async (req, res) => {
//   try {
//     const { email, data } = req.body;
//     console.log("Received request to add movie:", data);
//     const user = await Favorite.findOne({ email });
//     console.log("User:", user);

//     if (user) {
//       const { likedMovies } = user;
//       const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);

//       if (!movieAlreadyLiked) {
//         await Favorite.findByIdAndUpdate(
//           user._id,
//           {
//             likedMovies: [...user.likedMovies, data],
//           },
//           { new: true }
//         );
//       } else {
//         return res.json("Movie Already Added");
//       }
//     } else {
//       await Favorite.create({ email, likedMovies: [data] });
//     }

//     return res.json({ msg: "Movie added" });
//   } catch (error) {
//     console.error("Error in Adding Movies:", error);
//     return res.json({ msg: "Error in Adding Movies" });
//   }
// };
module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await Favorite.findOne({ email });
    if (user) {
      return res.json({ msg: "success", movies: user.likedMovies });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching movies." });
  }
};

module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user =  await Favorite.findOne({ email });
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
      } else return res.json({ msg: "Movie already added to the liked list." });
    } else await Favorite.create({ email, likedMovies: [data] });
    return res.json({ msg: "Movie successfully added to liked list." });
  } catch (error) {
    return res.json({ msg: "Error adding movie to the liked list" });
  }
};

// module.exports.removeFromLikedMovies = async (req, res) => {
//   try {
//     const { email, movieId } = req.body;
//     const user = await Favorite.findOne({ email });
//     if (user) {
//       const movies = user.likedMovies;
//       const movieIndex = movies.findIndex(({ id }) => id === movieId);
//       if (!movieIndex) {
//         res.status(400).send({ msg: "Movie not found." });
//       }
//       movies.splice(movieIndex, 1);
//       await Favorite.findByIdAndUpdate(
//         user._id,
//         {
//           likedMovies: movies,
//         },
//         { new: true }
//       );
//       return res.json({ msg: "Movie successfully removed.", movies });
//     } else return res.json({ msg: "User with given email not found." });
//   } catch (error) {
//     return res.json({ msg: "Error removing movie to the liked list" });
//   }
// };