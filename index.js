// https://gorest.co.in/public/v2/users
const https = require('https');
const axios = require('axios');
const agent = new https.Agent({
    rejectUnauthorized: false,
})

// async function getUser() {
//     try {
//         const response = await axios.post('https://192.168.122.12:8006/api2/json/access/ticket',
//             //  {
//             //     "password": 123456,
//             //     "username": "root@pam"
//             // }
//             {
//                 httpsAgent: agent
//             }
//         );
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//         console.error("error");
//     }
// }


// axios({
//     method: 'POST',
//     url: 'https://192.168.122.12:8006/api2/json/access/ticket/',
//     httpsAgent: agent,
//     data: {
//         "password": 123456, "username": "root@pam"
//     }
// })
//     .then(function (response) {
//         console.log(response);
//     });


async function send_req() {
    return await axios({
        method: 'POST',
        url: 'https://192.168.122.12:8006/api2/json/access/ticket/',
        httpsAgent: agent,
        data: {
            "password": 123456, "username": "root@pam"
        }
    })
    // .then(function (response) {
    //     console.log(response);
    // });

}

send_req()