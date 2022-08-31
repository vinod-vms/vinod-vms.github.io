var myTopic;
var us = document.getElementById("us");
us.addEventListener("click", myUrlFn1);
var india = document.getElementById("india");
india.addEventListener("click", myUrlFn2);
var bbc = document.getElementById("bbc");
bbc.addEventListener("click", myUrlFn3);
var x = window.matchMedia("(max-width: 768px)");
function myUrlFn1() {
    myTopic = 'country=us&';
    myFunction(x)
}

function myUrlFn2() {
    myTopic = 'country=in&';
    myFunction(x)
}

function myUrlFn3() {
    myTopic = 'sources=bbc-news&';
    myFunction(x)
}
myTopic = 'country=in&';
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");

function myFunction(x) {
    if (x.matches) {
        var li_s =  document.querySelectorAll("#myUl > li");
    li_s.forEach(item => item.style.listStyleType = "disc");
        one.innerHTML = "Updating News..."
        two.innerHTML = "Updating News..."
        three.innerHTML = "Updating News..."
        four.innerHTML = "Updating News..."
        five.innerHTML = "Updating News..."
        six.innerHTML = "Updating News..."
        seven.innerHTML = "Updating News..."
        eight.innerHTML = "Updating News..."
        nine.innerHTML = "Updating News..."
        ten.innerHTML = "Updating News..."
        var url = 'https://newsapi.org/v2/top-headlines?' + `${myTopic}` + 'apiKey=b239337e7bb5435ea0f696ca87535274';
        var req = new Request(url);
        fetch(req).then(function(response) {
            return response.json().then(function(data) {
                return {
                    data: data,
                    status: response.status
                }
            }).then(function(res) {
                one.innerHTML = '<a href="' + res.data.articles[0].url + '"' + 'target="_blank">' + res.data.articles[0].title + '</a>';
                two.innerHTML = '<a href="' + res.data.articles[1].url + '"' + 'target="_blank">' + res.data.articles[1].title + '</a>';
                three.innerHTML = '<a href="' + res.data.articles[2].url + '"' + 'target="_blank">' + res.data.articles[2].title + '</a>';
                four.innerHTML = '<a href="' + res.data.articles[3].url + '"' + 'target="_blank">' + res.data.articles[3].title + '</a>';
                five.innerHTML = '<a href="' + res.data.articles[4].url + '"' + 'target="_blank">' + res.data.articles[4].title + '</a>';
                six.innerHTML = '<a href="' + res.data.articles[5].url + '"' + 'target="_blank">' + res.data.articles[5].title + '</a>';
                seven.innerHTML = '<a href="' + res.data.articles[6].url + '"' + 'target="_blank">' + res.data.articles[6].title + '</a>';
                eight.innerHTML = '<a href="' + res.data.articles[7].url + '"' + 'target="_blank">' + res.data.articles[7].title + '</a>';
                nine.innerHTML = '<a href="' + res.data.articles[8].url + '"' + 'target="_blank">' + res.data.articles[8].title + '</a>';
                ten.innerHTML = '<a href="' + res.data.articles[9].url + '"' + 'target="_blank">' + res.data.articles[9].title + '</a>'
            })
        })
    } else {
        var url = 'https://newsapi.org/v2/top-headlines?' + `${myTopic}` + 'apiKey=b239337e7bb5435ea0f696ca87535274';
        var req = new Request(url);
        fetch(req).then(function(response) {
            return response.json().then(function(data) {
                return {
                    data: data,
                    status: response.status
                }
            }).then(function(res) {
                one.innerHTML = '<a href="' + res.data.articles[0].url + '"' + 'target="_blank">' + res.data.articles[0].title + '</a>';
                two.innerHTML = '<a href="' + res.data.articles[1].url + '"' + 'target="_blank">' + res.data.articles[1].title + '</a>';
                three.innerHTML = '<a href="' + res.data.articles[2].url + '"' + 'target="_blank">' + res.data.articles[2].title + '</a>';
                four.innerHTML = '<a href="' + res.data.articles[3].url + '"' + 'target="_blank">' + res.data.articles[3].title + '</a>';
                five.innerHTML = '<a href="' + res.data.articles[4].url + '"' + 'target="_blank">' + res.data.articles[4].title + '</a>';
                six.innerHTML = '<a href="' + res.data.articles[5].url + '"' + 'target="_blank">' + res.data.articles[5].title + '</a>';
                seven.innerHTML = '<a href="' + res.data.articles[6].url + '"' + 'target="_blank">' + res.data.articles[6].title + '</a>';
                eight.innerHTML = '<a href="' + res.data.articles[7].url + '"' + 'target="_blank">' + res.data.articles[7].title + '</a>';
                nine.innerHTML = '<a href="' + res.data.articles[8].url + '"' + 'target="_blank">' + res.data.articles[8].title + '</a>';
                ten.innerHTML = '<a href="' + res.data.articles[9].url + '"' + 'target="_blank">' + res.data.articles[9].title + '</a>'
            })
        })
    }
}

myFunction(x);
x.addListener(myFunction);
var selectnews = document.getElementById("selectnews");
selectnews.addEventListener("change", myUrlFn);

function myUrlFn() {
    myTopic = ` ` + selectnews.elements.thenews.value + ` `;
    myFunction2()
}

function myFunction2() {
    var url = 'https://newsapi.org/v2/top-headlines?' + `${myTopic}` + 'apiKey=b239337e7bb5435ea0f696ca87535274';
    var req = new Request(url);
    fetch(req).then(function(response) {
        return response.json().then(function(data) {
            return {
                data: data,
                status: response.status
            }
        }).then(function(res) {
            one.innerHTML = '<a href="' + res.data.articles[0].url + '"' + 'target="_blank">' + res.data.articles[0].title + '</a>';
            two.innerHTML = '<a href="' + res.data.articles[1].url + '"' + 'target="_blank">' + res.data.articles[1].title + '</a>';
            three.innerHTML = '<a href="' + res.data.articles[2].url + '"' + 'target="_blank">' + res.data.articles[2].title + '</a>';
            four.innerHTML = '<a href="' + res.data.articles[3].url + '"' + 'target="_blank">' + res.data.articles[3].title + '</a>';
            five.innerHTML = '<a href="' + res.data.articles[4].url + '"' + 'target="_blank">' + res.data.articles[4].title + '</a>';
            six.innerHTML = '<a href="' + res.data.articles[5].url + '"' + 'target="_blank">' + res.data.articles[5].title + '</a>';
            seven.innerHTML = '<a href="' + res.data.articles[6].url + '"' + 'target="_blank">' + res.data.articles[6].title + '</a>';
            eight.innerHTML = '<a href="' + res.data.articles[7].url + '"' + 'target="_blank">' + res.data.articles[7].title + '</a>';
            nine.innerHTML = '<a href="' + res.data.articles[8].url + '"' + 'target="_blank">' + res.data.articles[8].title + '</a>';
            ten.innerHTML = '<a href="' + res.data.articles[9].url + '"' + 'target="_blank">' + res.data.articles[9].title + '</a>'
        })
    })
}