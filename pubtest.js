<script language="javascript" type="text/javascript">
  rep_url = "https://raw.githubusercontent.com/tamlab-tohoku/publications/main/";

  url2021 = rep_url + "journal_2021.json";
  url2020 = rep_url + "journal_2020.json";

  $.when(
      $.getJSON(url2021),
      $.getJSON(url2020)
  ).then((data2021, data2020) => {
      const cdata = data2021.concat(data2020);
      $("#journal_list").append("<li>" + cdata.length+"<\/li>");

      for(var i in cdata){
          var authors = cdata[i].author.join(', ');
          $("#journal_list").append("<li>[" + (cdata.length-i) +"] " + authors + ": <strong>" + cdata[i].title +"<\/strong>, <i>" + cdata[i].journal + "<\/i>, " + cdata[i].vol + ", " + cdata[i].no + ", " + cdata[i].page + ", " + cdata[i].year + ". <a href=\"" +cdata[i].url + "\">" + cdata[i].url + "<\/a>");
      }
    }, () => {
        $("#journal_list").append("<li>Cannot get data.<\/li>")
    });
  
</script>