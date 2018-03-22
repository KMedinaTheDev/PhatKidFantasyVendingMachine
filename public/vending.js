// Morning Challenge - build a simple connected vending machine. The public should be able to see 5 items with numbers. Let the users enter the number for the correlated item and they receive that item. Then have a logged in view where the vending machine owner can see the total number of items left and how much money they have made so far
//


//what can the user do?

// public- can select from 5 items, and receive item -by entering correlated item number

// owner can login and see and see the total numbers of items left and money made

//what does the user see?
// public sees 5 items with prices and item returned
// owner sees items left and money made

//what does the user expect?

<div class="tracking">
<ul class="orders">
<% for(var i=0; i <orders.length; i++) {%>
  <li class="item">
    <span><%= orders[i].item %></span>
    <span><%= orders[i].price %></span>

  </li>
<% } %>
</ul>
</div>
