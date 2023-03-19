const express = require('express')
const data = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>CPE499</title>
        <link rel="stylesheet" href="style.css">  
    </head>
    <body>
        <table>
            <h1>ประวัติ ส่วนตัว</h1>
            <div class = "a1">
                <ul>
                     <li>ชื่อ-นามสกุล    :  นายภานุวัฒน์ คล้ายบุญมี</li>
                     <li>ชื่อเล่น        :   เต้ย</li>
                     <li>วัน/เดือน/ปีเกิด  :  13/02/2545</li>
                     <li>เบอร์ติดต่อ     :   0958748331</li>
                     <li>gmail         :  1234toysusu@gmail.com</li>
                </ul>
            </div>
        </table>
    </body>
    </html>
`

module.exports = data;