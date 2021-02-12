rep_url = "https://raw.githubusercontent.com/tamlab-tohoku/publications/main/";

var time = new Date().getTime();

url2019 = rep_url + "review_2019.json"+"?" + time;
url2018 = rep_url + "review_2018.json"+"?" + time;
url2012 = rep_url + "review_2012.json"+"?" + time;
$.when(
    $.getJSON(url2019),
    $.getJSON(url2018),
    $.getJSON(url2012)
)
.done(function(data2019, data2018, data2012){
     const cdata = [...data2019[0], ...data2018[0],  ...data2012[0]];
     for(var i in cdata){
        var authors = cdata[i].author.join(', ');
        //authors = authors.replace('Yusuke Tamura', '<u>Yusuke Tamura</u>');
        //authors = authors.replace('田村雄介', '<u>田村雄介</u>');
         $("#review_list").append("<li>" + authors + ": <strong>" + cdata[i].title +"<\/strong>, <i>" + cdata[i].journal + "<\/i>, " + cdata[i].vol + ", " + cdata[i].no + ", " + cdata[i].page + ", " + cdata[i].year + ". <br><a href=\"" +cdata[i].url + "\">" + cdata[i].url + "<\/a><\/li>");
  }
})
.fail(function(){
  $("#review_list").append("<li>Cannot get data.<\/li>")
});
