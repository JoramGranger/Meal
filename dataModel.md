### RESTAURANT
id:                 ID
name:               STRING          ISREQUIRED
image:              STRING          ISREQUIRED
deliveryFee         FLOAT           ISREQUIRED          
minDeliveryTime     INT             ISREQUIRED      
maxDeliveryTime     INT             ISREQUIRED 
rating              FLOAT       
address             STRING          ISREQUIRED
latitude            STRING          ISREQUIRED     
longitude           STRING          ISREQUIRED 

----------------------------------------------
# RELATIONSHIP 
# RESTAURANT - DISH [1:*]
----------------------------------------------

### DISH
id:                 ID
name:               STRING          ISREQUIRED
image:              STRING          
description         STRING
price:              FLOAT           ISREQUIRED

----------------------------------------------

