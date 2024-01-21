import Users from "../Models/Users.js"
import { createError } from "../error.js";


export const user = (req, res , next)=>{
  res.json(req.user);
  next();
}

export const update = async (req, res , next) => {
    if (req.params.id === req.user.id){
        try {
            const updatedUser = await Users.findByIdAndUpdate(
                req.params.id,
                {
                    $set : req.body,
                },
                {new : true}
            );
            res.status(200).json(updatedUser);
        }catch(err){
            next(err);
        }
    }else {
        return next (createError(403, "You can updatre only your accpunt !"))
    }
};



export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            await Users.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted.");
        } catch (err) {
            next(err);
        }
    } else {
        return next(createError(403, "You can delete only your account!"));
    }
};

export const getUser = async (req, res, next) => {
    try {
      const user = await Users.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };


  export const subscribe = async (req, res, next) => {
    try {
      await Users.findByIdAndUpdate(req.user.id, {
        $push: { subscribedCourses: req.body.id },
      });
      res.status(200).json("Subscription successfull.")
    } catch (err) {
      next(err);
    }
  };


  export const unsubscribe = async (req, res, next) => {
    try {
      try {
        await Users.findByIdAndUpdate(req.user.id, {
          $pull: { subscribedCourses: req.body.id },
        });
        res.status(200).json("Unsubscription successfull.")
      } catch (err) {
        next(err);
      }
    } catch (err) {
      next(err);
    }
  };
