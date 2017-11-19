import { TABLES } from '../constants';
import * as UsersService from '../services';

/**
 * POST /login
 */

export function getUsers(req, res) {
    const users = UsersService.getAllUsers();
    users.then(function (resolve) {
        res.send(resolve);
    });
}

export function login(req, res, next) {

  //   return req.logIn(user, (loginErr) => {
  //     if (loginErr) return res.sendStatus(401);
  //     return res.sendStatus(200);
  //   });
  // })(req, res, next);
}

/**
 * POST /logout
 */
export function logout(req, res) {
  // req.logout();
  // res.sendStatus(200);
}

/**
 * POST /signup
 * Create a new local account
 */
export function signUp(req, res, next) {
  // User.findOne({ where: { email: req.body.email } }).then((existingUser) => {
  //   if (existingUser) {
  //     return res.sendStatus(409);
  //   }

  //   const user = User.build({
  //     email: req.body.email,
  //     password: req.body.password
  //   });

  //   return user.save().then(() => {
  //     req.logIn(user, (err) => {
  //       if (err) return res.sendStatus(401);
  //       return res.sendStatus(200);
  //     });
  //   });
  // }).catch(err =>
  //   next(err)
  // );
}
