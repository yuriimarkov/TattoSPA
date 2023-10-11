module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET',"4bba05130fc41b5263c60f274b40594c7ae7ce08ba97ed1a06e23f2b9084d898f74f6fe38cb19eafb17a7dcb38ebbcb154840c810ced7281cdd77c623a1fd8d898f58d44803d309c3d58849c6bed72baddff893d5603e23b27ae007b4c98b0e61132efefaea082923d5329ea26e6f20c524de73e097563d3034fa2d8140695fe"),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
