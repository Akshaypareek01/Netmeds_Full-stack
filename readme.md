//Deployed to ATLAS
// 3 collection-users,products,carts
// cartmodel,productmodel has initial schema
//completed CART functionality

                     ------------------------------------------------------------------
GET https://netmeds.onrender.com/product           ----> FOR ALL PRODUCTS
GET https://netmeds.onrender.com/cart/userid       ----> FOR PERSONAL CART
POST https://netmeds.onrender.com/cart             ----> FOR ADD TO CART              required : userid in body
DELETE https://netmeds.onrender.com/cart/id        ----> FOR REMOVING FROM CART       required:object id in params
PATCH DELETE https://netmeds.onrender.com/cart/id  ----> FOR SELECTING QUANTITY        required:object id in params and quantity in bodya as Number
