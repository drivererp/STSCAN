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
                        $('#code').html(data.prodCode);

                        $('#prodDesc').html(data.prodDesc);
                        $('#physical').html(data.physStock);

                        $('#allocated').html(data.allocated);
                        $('#free').html(data.freeStock);

                        $('#fwdProdUsage').html('2000.000');

                        $('#onOrder').html(data.onOrder);
                        $('#fwdOrders').html(data.fwdOrder);

                        $('#backOrders').html(data.backOrder);
                        $('#allLocns').html(data.allLocations);
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