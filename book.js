rep_url = "https://raw.githubusercontent.com/tamlab-tohoku/publications/main/";

url2019 = rep_url + "book_2019.json";
url2013 = rep_url + "book_2013.json";
url2010 = rep_url + "book_2010.json";
url2007 = rep_url + "book_2007.json";
url2006 = rep_url + "book_2006.json";
$.when(
    $.getJSON(url2019),
    $.getJSON(url2013),
    $.getJSON(url2010),
    $.getJSON(url2007),
    $.getJSON(url2006)
)
.done(function(data2019, data2013, data2010, data2007, data2006){
     const cdata = [...data2019[0], ...data2013[0], ...data2010[0], ...data2007[0], ...data2006[0]];
     for(var i in cdata){
        var authors = cdata[i].author.join(', ');
        var editors = cdata[i].editor.join(', ');
         $("#book_list").append("<li>[" + (cdata.length-i) +"] " + authors + ": <strong>" + cdata[i].title +"<\/strong>, <i>" + cdata[i].book + "<\/i>, " + editors + " (Eds.), " + cdata[i].publisher + cdata[i].page + ", " + cdata[i].year + ". <br><a href=\"" +cdata[i].url + "\">" + cdata[i].url + "<\/a><\/li>");
  }
})
.fail(function(){
  $("#book_list").append("<li>Cannot get data.<\/li>")
});
