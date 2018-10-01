var load = function(){
    console.log("sto chiamando load");
    var value = document.getElementById('myInput').value;
    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?q=" + value + "&APPID=265565a5548c69b79f11ac9a9680bfa7" ,
        complete: function(response) {
            console.log("response:", response);
            //console.log(response.status);
            //console.log(response.responseJSON);
            document.getElementById('myId').innerHTML = response.responseText;
        } 
    });
}



var posts = [
    {
        title:"Lorem ipsum",
        description: "Ciao",
        id: 0
    }, 
    {
        title:"goihdwqoiboqw ipsum",
        description: "Ciao0",
        id: 1
    }, 
    {
        title:" jinosq  n ipsum",
        description: "Ciao1",
        id: 2
    }, 
    {
        title:"Lodinwqndo orem ipsum",
        description: "Ciao2",
        id: 3
    }
]

posts[1].title = "Ciao 122";

var post = {
    id: 14,
    title: "ciao sono il nuovo post",
    description: "verrò inserito tramite push"
}

posts.push(post);

posts.push({
    id: 14,
    title: "ciao sono il nuovo post",
    description: "verrò inserito tramite push"
})

var last = posts.pop();
var first = posts.shift();


var posts2 = [
    {
        title:"Lorem ipsum1",
        date: "02/12/1983",
        description: "Ciao",
        id: 23
    }
];

var finalPosts = posts.concat(posts2);

finalPosts.splice(3, 1);

delete posts2[0].date;
