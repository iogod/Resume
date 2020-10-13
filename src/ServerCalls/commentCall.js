import React from 'react'
import Axios from 'axios'
let tester = {}
//  export const caller = () => {

//     Axios.get('/comment').then(res => {

//         tester = res.data
    
//         }).catch(err => {


//             console.log(err)
//         })

//         return tester
// }
 export async function caller ()  {

   Axios.get('/comment').then(res => {

        tester = res.data
    
        }).catch(err => {


            console.log(err)
        })

        return tester
}


