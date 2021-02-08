rep_url = "https://raw.githubusercontent.com/tamlab-tohoku/publications/main/";

url2021 = rep_url + "intconf_2021.json";
url2020 = rep_url + "intconf_2020.json";
url2019 = rep_url + "intconf_2019.json";
url2018 = rep_url + "intconf_2018.json";
url2017 = rep_url + "intconf_2017.json";
url2016 = rep_url + "intconf_2016.json";
url2015 = rep_url + "intconf_2015.json";
url2014 = rep_url + "intconf_2014.json";
url2013 = rep_url + "intconf_2013.json";
url2012 = rep_url + "intconf_2012.json";
url2011 = rep_url + "intconf_2011.json";
url2010 = rep_url + "intconf_2010.json";
url2009 = rep_url + "intconf_2009.json";
url2008 = rep_url + "intconf_2008.json";
url2007 = rep_url + "intconf_2007.json";
url2006 = rep_url + "intconf_2006.json";
url2005 = rep_url + "intconf_2005.json";
url2004 = rep_url + "intconf_2004.json";
url2003 = rep_url + "intconf_2003.json";


$.when(
    $.getJSON(url2021),
    $.getJSON(url2020)/*,
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
    $.getJSON(url2003)*/
)
//.done(function(data2021, data2020, data2019, data2018, data2017, data2016, data2015, data2014, data2013, data2012, data2011, data2010, data2009, data2008, data2007, data2006, data2005, data2004, data2003){
//     const cdata = [...data2021[0], ...data2020[0], ...data2019[0], ...data2018[0], ...data2017[0], ...data2016[0], ...data2015[0], ...data2014[0], ...data2013[0], ...data2012[0], ...data2011[0], ...data2010[0], ...data2009[0], ...data2008[0], ...data2007[0], ...data2006[0], ...data2005[0], ...data2004[0], ...data2003[0]];
.done(function(data2021, data2020){
  const cdata = [...data2021[0], ...data2020[0]];
  for(var i in cdata){
        var authors = cdata[i].author.join(', ');
         $("#intl_list").append("<li>[" + (cdata.length-i) +"] " + authors + ": <strong>" + cdata[i].title +"<\/strong>, <i>" + cdata[i].procs + "<\/i>, " + cdata[i].page + ", " + cdata[i].place + ", " + cdata[i].month + ", " + cdata[i].year + ". <br>" + cdata[i].url + "<\/li>");
     }
})
.fail(function(){
  $("#intl_list").append("<li>Cannot get data.<\/li>")
});
