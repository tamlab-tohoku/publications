<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script language="javascript" type="text/javascript">
  rep_url = "https://raw.githubusercontent.com/tamlab-tohoku/publications/main/";
  
  
  
  
  url = rep_url + "journal_2021.json";
  $(function() {
      $.getJSON(url, function(data) {
             for(var i in data){
               var authors = data[i].author.join(', ');
                 $("#journal_list").append("<li>[" + (data.length-i) +"] " + authors + ": <strong>" + data[i].title +"<\/strong>, <i>" + data[i].book + "<\/i>, " + data[i].vol + ", " + data[i].no + ", " + data[i].page + ", " + data[i].year + ". <a href=\"" + data[i].url + "\">" + data[i].url + "<\/a>");
             }
      });
  });
  
</script>