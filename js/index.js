function submit()
  {
    //do ajax call to get data from server
        var prodCode = $('#prodCode').val(); //document.forms['frmProduct'].elements['prodCode'].value;

        if (prodCode.length == 0)
        {
                alert('Please enter a Product Code');
                return;
        }

        $.ajax(
        {
             type: 'POST',
             url: 'http://10.0.4.50/scon/sc09app.php?CPROG=STSCAN',
             cache: false,
            // contentType: "text/html",
            // data: {'request':'GETPRODINFO','eanCode':prodCode},
             data: {'ProdCode':prodCode,'CPROG':'STSCAN'},
             dataType: 'json',
             success: function(data)
                 {
                    if (data.errmsg == "")
                    {
                        //  alert(data.prodDesc);
                        $('#prodDesc').val(data.prodDesc);
                        $('#physical').val(data.physStock);

                        $('#allocated').val(data.allocated);
                        $('#free').val(data.freeStock);

                        $('#onOrder').val(data.onOrder);
                        $('#fwdOrders').val(data.fwdOrder);

                        $('#backOrders').val(data.backOrder);
                        $('#allLocns').val(data.allLocations);
                    }
                    else
                    {
                        alert(data.errmsg);
                        document.forms['frm1'].elements['prodCode'].value = "";
                        document.forms['frm1'].elements['prodCode'].focus();
                    }
                 },
             error: function(jqo, txt, err)
                {
                        alert(txt);
                }
          }
         );

  }