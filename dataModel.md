### RESTAURANT
id:                 ID
name:               STRING          ISREQUIRED
image:              STRING          ISREQUIRED
deliveryFee         FLOAT           ISREQUIRED          
minDeliveryTime     INT             ISREQUIRED      
maxDeliveryTime     INT             ISREQUIRED 
rating              FLOAT       
address             STRING          ISREQUIRED
latitude            FLOAT           ISREQUIRED     
longitude           FLOAT           ISREQUIRED 

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


### USER
id:                 ID
name:               STRING          ISREQUIRED
address:            STRING          ISREQUIRED
latitude            FLOAT           ISREQUIRED     
longitude           FLOAT           ISREQUIRED 
----------------------------------------------
# RELATIONSHIP 
# USER - ORDER [1:*]
----------------------------------------------
### BASKET
id:                 ID
----------------------------------------------
# RELATIONSHIP 
# BASKET - BASKETDISHES [1:*]
# BASKET - USER [1:1]
# BASKET - RESTAURANT [1:1]
----------------------------------------------

### BASKETDISH
id:                 ID
quantity:           INT             ISREQUIRED
----------------------------------------------
# RELATIONSHIP 
# BASKETDISH - DISH [1:1]
----------------------------------------------
### ORDER
id:                 ID
total:              FLOAT
status:             OrderStatus[NEW, COOKING, READY_FOR_PICKUP, PICKED_UP, COMPLETED]
----------------------------------------------
# RELATIONSHIP 
# ORDER - RESTAURANT [1:1]
# ORDER - ORDERDISHES [1:*]
----------------------------------------------
### ORDERDISH
id:                 ID
quantity:           INT             ISREQUIRED
----------------------------------------------
# RELATIONSHIP 
# ORDERDISH - DISH [1:1]
----------------------------------------------


