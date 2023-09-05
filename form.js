function table1(){
        var fname=document.get.ElementById("firstname").value;
        var lname=document.get.ElementById("lastname").value;
        var address=document.get.ElementById("address").value;
        var pincode=document.get.ElementById("pincode").value;
       var food= document.get.ElementByName("food").value;
       
       var checkcount=0;
       var count;
       for(count=0;count<food.length;count++){
        if(food[count].checked == true){
            checkcount++;

        }
       }
       if(checkcount<2){
        document.getElementById("notvalid").innerHtml="please select atleast 2"
       }
       var table=`<tr>
                <td>${fname}</td>
                <td>${lname}</td>
                <td>${address}</td>
                <td>${pincode}</td>
                <td>${food}</td>
              </tr>`;
    document.getElementById("tb1").innerHTML+=table;

}

