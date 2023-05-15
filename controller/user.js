const fs = require('fs');

function get(req, res) {
    fs.readFile("users.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file users ")
        } else {
            res.send(JSON.parse(data));
        }

    })
}
//אפשרות ראשונה ליצא פונקציה מדף
function getById(req, res){
    console.log(req.params)
    fs.readFile("users.json", "utf-8", (err, data) => { 
        if (err) {
            res.status(500).send("error read file users ")
        } else {
            let u = JSON.parse(req.params.id);
            console.log(u)
        console.log(u+"eertgff");
    let user=undefined;
            data = JSON.parse(data);
        for (let i = 0; i < data.length; i++) {
            if(data[i].tz==u){
            user=data[i]
            }
        }
            if (user == undefined) {
                res.status(500).send("not found student by tz ");
            } else {
                res.send(user);}}})}
               
function getById2 (req, res)  {
   console.log('hello');
    fs.readFile("users.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file users ")
        } else {
            console.log(req.body);
            let u = JSON.parse(req.body);
             console.log(u.name+u.password);
            data = JSON.parse(data);
            let user = undefined;
            for (let i = 0; i < data.length; i++) {
                if(data[i].id==u.password&&data[i].name==u.name)
                  user=data[i];
            }
            
            if (user == undefined) {
                res.status(500).send("not found student by tz ");
            } else {
                res.send(user);
            }

        }


    })
}

function post(req, res) {

    fs.readFile("users.json", "utf-8", (err, data) => {
        //המרה של טקסט למערך
        let users = JSON.parse(data);
        //body =  לתוכן שנשלח בפונקציה פןסט 
        users.push(req.body);
        fs.writeFile("users.json", JSON.stringify(users), (err) => {
            if (err) {
                res.status(500).send("error  in add users ");
            } else {
                res.send("sucess add");
            }
        })
    })
}

//אפשרות שניה ליצא פונקציה מדף
exports.get = get;
exports.getById=getById;
exports.post=post;