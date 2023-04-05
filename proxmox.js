proxmox = require("proxmox")('root@pam', '123456', '192.168.122.12');



// proxmox.getClusterStatus(function (err, response) {
//     if (err) throw err;
//     else {
//         data = JSON.parse(response);
//         console.log(data);
//     }
// });




// Successful ticket

// proxmox.access.postTicket({
//     "password": 123456,
//     "username": "root@pam"
// }, function (err, response) {
//     if (err) throw err;
//     else {
//         data = JSON.parse(response);
//         console.log(data);
//     }
// })





// Successful clone

// proxmox.qemu.clone(
//   node="pve",
//   vmid=9000,
//   {
//   "newid":103,
//   "node":"pve",
//   "vmid":9000,
//   "full":1,
//   "name":"jadid"
// },function (err, response) {
//       if (err) throw err;
//       else {
//           data = JSON.parse(response);
//           console.log(data);
//       }
//   }
// )







// Successful configuration change

proxmox.qemu.setConfig(
  node="pve",
  vmid=103,
  {
    "memory":2048,
    "sockets":1,
    "cores":2
  },function (err, response) {
          if (err) throw err;
          else {
              data = JSON.parse(response);
              console.log(data);
          }
      }
)