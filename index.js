
let Employee = require("./Employee");

let emploee_arr = [
    {
        name: "K.K 1",
        username: "k.k1",
        password: "786",
        email: "k.k1@gamil.com",
    },
    {
        name: "K.K 2",
        username: "k.k3",
        password: "786",
        email: "k.k3@gmail.com",
    }
];

let emp = new Employee();

emp.get_all({username : "tariq2"});

//emp.insert(emploee_arr[0]);
//emp.insertMany(emploee_arr);
//emp.update({ username: "tariq4" },{username:"tariq1"});
//emp.updateMany({ username: "tariq4" }, { username: "tariq1" });

//emp.delete({like : 213});
//emp.deleteMany({username:"tariq4"});





