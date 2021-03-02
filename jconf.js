rep_url = "https://raw.githubusercontent.com/tamlab-tohoku/publications/main/";

var time = new Date().getTime();

url2021 = rep_url + "jconf_2021.json"+"?" + time;
url2020 = rep_url + "jconf_2020.json"+"?" + time;
url2019 = rep_url + "jconf_2019.json"+"?" + time;
url2018 = rep_url + "jconf_2018.json"+"?" + time;
url2017 = rep_url + "jconf_2017.json"+"?" + time;
url2016 = rep_url + "jconf_2016.json"+"?" + time;
url2015 = rep_url + "jconf_2015.json"+"?" + time;
url2014 = rep_url + "jconf_2014.json"+"?" + time;
url2013 = rep_url + "jconf_2013.json"+"?" + time;
url2012 = rep_url + "jconf_2012.json"+"?" + time;
url2011 = rep_url + "jconf_2011.json"+"?" + time;
url2010 = rep_url + "jconf_2010.json"+"?" + time;
url2009 = rep_url + "jconf_2009.json"+"?" + time;
url2008 = rep_url + "jconf_2008.json"+"?" + time;
url2007 = rep_url + "jconf_2007.json"+"?" + time;
url2006 = rep_url + "jconf_2006.json"+"?" + time;
url2005 = rep_url + "jconf_2005.json"+"?" + time;
url2004 = rep_url + "jconf_2004.json"+"?" + time;
url2003 = rep_url + "jconf_2003.json"+"?" + time;

$.when(
    $.getJSON(url2021),
    $.getJSON(url2020),
    $.getJSON(url2019),
    $.getJSON(url2018),
    $.getJSON(url2017),
    $.getJSON(url2016),
    $.getJSON(url2015),
    $.getJSON(url2014),
    $.getJSON(url2013),
    $.getJSON(url2012),
    $.getJSON(url2011),
    $.getJSON(url2010),
    $.getJSON(url2009),
    $.getJSON(url2008),
    $.getJSON(url2007),
    $.getJSON(url2006),
    $.getJSON(url2005),
    $.getJSON(url2004),
    $.getJSON(url2003)
)
.done(function(data2021, data2020, data2019, data2018, data2017, data2016, data2015, data2014, data2013, data2012, data2011, data2010, data2009, data2008, data2007, data2006, data2005, data2004, data2003){

  const cdata = [...data2021[0], ...data2020[0], ...data2019[0], ...data2018[0], ...data2017[0], ...data2016[0], ...data2015[0], ...data2014[0], ...data2013[0], ...data2012[0], ...data2011[0], ...data2010[0], ...data2009[0], ...data2008[0], ...data2007[0], ...data2006[0], ...data2005[0], ...data2004[0], ...data2003[0]];
  for(var i in cdata){
    var authors = cdata[i].author.join(', ');
    //authors = authors.replace('Yusuke Tamura', '<u>Yusuke Tamura</u>');
    //authors = authors.replace('田村雄介', '<u>田村雄介</u>');
    if(cdata[i].review != ""){
      $("#jconf_list").append("<li>" + authors + ": <strong>" + cdata[i].title +　"<\/strong>, <i>" + cdata[i].procs + "<\/i>, " + cdata[i].page + ", " + cdata[i].place + ", " + cdata[i].year + "年" + cdata[i].month + "月. (" + cdata[i].review + ")");
    }else{
      $("#jconf_list").append("<li>" + authors + ": <strong>" + cdata[i].title +　"<\/strong>, <i>" + cdata[i].procs + "<\/i>, " + cdata[i].page + ", " + cdata[i].place + ", " + cdata[i].year + "年" + cdata[i].month + "月.");
    }
    if(cdata[i].award != ""){
      $("#jconf_list").append("<div id=\"award\">" + cdata[i].award + "<\/div>");
    }
    $("#jconf_list").append("<\/li>");
  }
})
.fail(function(){
  $("#jconf_list").append("<li>Cannot get data.<\/li>");
});
