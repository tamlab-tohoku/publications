rep_url = "https://raw.githubusercontent.com/tamlab-tohoku/publications/main/";

var time = new Date().getTime();

url2019 = rep_url + "invited_2019.json" +"?" + time;
url2018 = rep_url + "invited_2018.json"+"?" + time;
url2017 = rep_url + "invited_2017.json"+"?" + time;
url2015 = rep_url + "invited_2015.json"+"?" + time;
url2012 = rep_url + "invited_2012.json"+"?" + time;
$.when(
    $.getJSON(url2019),
    $.getJSON(url2018),
    $.getJSON(url2017),
    $.getJSON(url2015),
    $.getJSON(url2012)
)
.done(function(data2019, data2018, data2017, data2015, data2012){
     const cdata = [...data2019[0], ...data2018[0], ...data2017[0], ...data2015[0], ...data2012[0]];
     for(var i in cdata){
        var authors = cdata[i].author.join(', ');
         $("#invited_list").append("<li>" + authors + ": <strong>" + cdata[i].title +"<\/strong>, <i>" + cdata[i].event + "<\/i>, " + cdata[i].year+ "年" + cdata[i].month + "月" + cdata[i].date + "日.<\/li>");
  }
})
.fail(function(){
  $("#invited_list").append("<li>Cannot get data.<\/li>");
});
