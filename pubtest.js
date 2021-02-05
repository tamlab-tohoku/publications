<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script language="javascript" type="text/javascript">
  rep_url = "https://raw.githubusercontent.com/tamlab-tohoku/publications/main/";

  url2021 = rep_url + "journal_2021.json";
  url2020 = rep_url + "journal_2020.json";

  $.when(
      $.getJSON(url2021),
      $.getJSON(url2020)
  ).then((data2021, data2020) => {
      const cdata = [data2021, data2020];

      for(var i in data){
          var authors = data[i].author.join(', ');
          $("#journal_list").append("<li>[" + (data.length-i) +"] " + authors + ": <strong>" + data[i].title +"<\/strong>, <i>" + data[i].journal + "<\/i>, " + data[i].vol + ", " + data[i].no + ", " + data[i].page + ", " + data[i].year + ". <a href=\"" + data[i].url + "\">" + data[i].url + "<\/a>");
      }
    }, () => {
        $("#journal_list").append("<li>Cannot acquire data.<\/li>")
    });
  
</script>