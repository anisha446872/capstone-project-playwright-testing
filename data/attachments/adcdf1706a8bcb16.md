# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/product.spec.js >> Product Module Tests >> Verify user can add product to cart
- Location: tests/product/product.spec.js:365:5

# Error details

```
Error: locator.click: Element is outside of the viewport
Call log:
  - waiting for locator('.add-to-cart').first()
    - locator resolved to <a data-product-id="1" class="btn btn-default add-to-cart">…</a>
  - attempting click action
    - scrolling into view if needed
    - done scrolling

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e38]:
    - img "Website for practice" [ref=e39]
    - textbox "Search Product" [ref=e40]
    - button "" [ref=e41] [cursor=pointer]:
      - generic [ref=e42]: 
  - generic [ref=e45]:
    - generic [ref=e47]:
      - heading "Category" [level=2] [ref=e48]
      - generic [ref=e49]:
        - heading " Women" [level=4] [ref=e52]:
          - link " Women" [ref=e53] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e55]: 
            - text: Women
        - heading " Men" [level=4] [ref=e58]:
          - link " Men" [ref=e59] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e61]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e64]:
          - link " Kids" [ref=e65] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e67]: 
            - text: Kids
      - generic [ref=e68]:
        - heading "Brands" [level=2] [ref=e69]
        - list [ref=e71]:
          - listitem [ref=e72]:
            - link "(6) Polo" [ref=e73] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e74]: (6)
              - text: Polo
          - listitem [ref=e75]:
            - link "(5) H&M" [ref=e76] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e77]: (5)
              - text: H&M
          - listitem [ref=e78]:
            - link "(5) Madame" [ref=e79] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e80]: (5)
              - text: Madame
          - listitem [ref=e81]:
            - link "(3) Mast & Harbour" [ref=e82] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e83]: (3)
              - text: Mast & Harbour
          - listitem [ref=e84]:
            - link "(4) Babyhug" [ref=e85] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e86]: (4)
              - text: Babyhug
          - listitem [ref=e87]:
            - link "(3) Allen Solly Junior" [ref=e88] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e89]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e90]:
            - link "(3) Kookie Kids" [ref=e91] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e92]: (3)
              - text: Kookie Kids
          - listitem [ref=e93]:
            - link "(5) Biba" [ref=e94] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e95]: (5)
              - text: Biba
    - generic [ref=e97]:
      - heading "All Products" [level=2] [ref=e98]
      - generic [ref=e100]:
        - generic [ref=e101]:
          - generic [ref=e102]:
            - img "ecommerce website products" [ref=e103]
            - heading "Rs. 500" [level=2] [ref=e104]
            - paragraph [ref=e105]: Blue Top
            - generic [ref=e106] [cursor=pointer]:
              - generic [ref=e107]: 
              - text: Add to cart
          - generic [ref=e108]:
            - heading "Rs. 500" [level=2] [ref=e109]
            - paragraph [ref=e110]: Blue Top
            - generic [ref=e111] [cursor=pointer]:
              - generic [ref=e112]: 
              - text: Add to cart
        - list [ref=e114]:
          - listitem [ref=e115]:
            - link " View Product" [ref=e116] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=e117]: 
              - text: View Product
      - generic [ref=e119]:
        - generic [ref=e120]:
          - generic [ref=e121]:
            - img "ecommerce website products" [ref=e122]
            - heading "Rs. 400" [level=2] [ref=e123]
            - paragraph [ref=e124]: Men Tshirt
            - generic [ref=e125] [cursor=pointer]:
              - generic [ref=e126]: 
              - text: Add to cart
          - generic [ref=e127]:
            - heading "Rs. 400" [level=2] [ref=e128]
            - paragraph [ref=e129]: Men Tshirt
            - generic [ref=e130] [cursor=pointer]:
              - generic [ref=e131]: 
              - text: Add to cart
        - list [ref=e133]:
          - listitem [ref=e134]:
            - link " View Product" [ref=e135] [cursor=pointer]:
              - /url: /product_details/2
              - generic [ref=e136]: 
              - text: View Product
      - generic [ref=e138]:
        - generic [ref=e139]:
          - generic [ref=e140]:
            - img "ecommerce website products" [ref=e141]
            - heading "Rs. 1000" [level=2] [ref=e142]
            - paragraph [ref=e143]: Sleeveless Dress
            - generic [ref=e144] [cursor=pointer]:
              - generic [ref=e145]: 
              - text: Add to cart
          - generic [ref=e146]:
            - heading "Rs. 1000" [level=2] [ref=e147]
            - paragraph [ref=e148]: Sleeveless Dress
            - generic [ref=e149] [cursor=pointer]:
              - generic [ref=e150]: 
              - text: Add to cart
        - list [ref=e152]:
          - listitem [ref=e153]:
            - link " View Product" [ref=e154] [cursor=pointer]:
              - /url: /product_details/3
              - generic [ref=e155]: 
              - text: View Product
      - generic [ref=e157]:
        - generic [ref=e158]:
          - generic [ref=e159]:
            - img "ecommerce website products" [ref=e160]
            - heading "Rs. 1500" [level=2] [ref=e161]
            - paragraph [ref=e162]: Stylish Dress
            - generic [ref=e163] [cursor=pointer]:
              - generic [ref=e164]: 
              - text: Add to cart
          - generic [ref=e165]:
            - heading "Rs. 1500" [level=2] [ref=e166]
            - paragraph [ref=e167]: Stylish Dress
            - generic [ref=e168] [cursor=pointer]:
              - generic [ref=e169]: 
              - text: Add to cart
        - list [ref=e171]:
          - listitem [ref=e172]:
            - link " View Product" [ref=e173] [cursor=pointer]:
              - /url: /product_details/4
              - generic [ref=e174]: 
              - text: View Product
      - generic [ref=e176]:
        - generic [ref=e177]:
          - generic [ref=e178]:
            - img "ecommerce website products" [ref=e179]
            - heading "Rs. 600" [level=2] [ref=e180]
            - paragraph [ref=e181]: Winter Top
            - generic [ref=e182] [cursor=pointer]:
              - generic [ref=e183]: 
              - text: Add to cart
          - generic [ref=e184]:
            - heading "Rs. 600" [level=2] [ref=e185]
            - paragraph [ref=e186]: Winter Top
            - generic [ref=e187] [cursor=pointer]:
              - generic [ref=e188]: 
              - text: Add to cart
        - list [ref=e190]:
          - listitem [ref=e191]:
            - link " View Product" [ref=e192] [cursor=pointer]:
              - /url: /product_details/5
              - generic [ref=e193]: 
              - text: View Product
      - generic [ref=e195]:
        - generic [ref=e196]:
          - generic [ref=e197]:
            - img "ecommerce website products" [ref=e198]
            - heading "Rs. 400" [level=2] [ref=e199]
            - paragraph [ref=e200]: Summer White Top
            - generic [ref=e201] [cursor=pointer]:
              - generic [ref=e202]: 
              - text: Add to cart
          - generic [ref=e203]:
            - heading "Rs. 400" [level=2] [ref=e204]
            - paragraph [ref=e205]: Summer White Top
            - generic [ref=e206] [cursor=pointer]:
              - generic [ref=e207]: 
              - text: Add to cart
        - list [ref=e209]:
          - listitem [ref=e210]:
            - link " View Product" [ref=e211] [cursor=pointer]:
              - /url: /product_details/6
              - generic [ref=e212]: 
              - text: View Product
      - generic [ref=e214]:
        - generic [ref=e215]:
          - generic [ref=e216]:
            - img "ecommerce website products" [ref=e217]
            - heading "Rs. 1000" [level=2] [ref=e218]
            - paragraph [ref=e219]: Madame Top For Women
            - generic [ref=e220] [cursor=pointer]:
              - generic [ref=e221]: 
              - text: Add to cart
          - generic [ref=e222]:
            - heading "Rs. 1000" [level=2] [ref=e223]
            - paragraph [ref=e224]: Madame Top For Women
            - generic [ref=e225] [cursor=pointer]:
              - generic [ref=e226]: 
              - text: Add to cart
        - list [ref=e228]:
          - listitem [ref=e229]:
            - link " View Product" [ref=e230] [cursor=pointer]:
              - /url: /product_details/7
              - generic [ref=e231]: 
              - text: View Product
      - generic [ref=e233]:
        - generic [ref=e234]:
          - generic [ref=e235]:
            - img "ecommerce website products" [ref=e236]
            - heading "Rs. 700" [level=2] [ref=e237]
            - paragraph [ref=e238]: Fancy Green Top
            - generic [ref=e239] [cursor=pointer]:
              - generic [ref=e240]: 
              - text: Add to cart
          - generic [ref=e241]:
            - heading "Rs. 700" [level=2] [ref=e242]
            - paragraph [ref=e243]: Fancy Green Top
            - generic [ref=e244] [cursor=pointer]:
              - generic [ref=e245]: 
              - text: Add to cart
        - list [ref=e247]:
          - listitem [ref=e248]:
            - link " View Product" [ref=e249] [cursor=pointer]:
              - /url: /product_details/8
              - generic [ref=e250]: 
              - text: View Product
      - generic [ref=e252]:
        - generic [ref=e253]:
          - generic [ref=e254]:
            - img "ecommerce website products" [ref=e255]
            - heading "Rs. 499" [level=2] [ref=e256]
            - paragraph [ref=e257]: Sleeves Printed Top - White
            - generic [ref=e258] [cursor=pointer]:
              - generic [ref=e259]: 
              - text: Add to cart
          - generic [ref=e260]:
            - heading "Rs. 499" [level=2] [ref=e261]
            - paragraph [ref=e262]: Sleeves Printed Top - White
            - generic [ref=e263] [cursor=pointer]:
              - generic [ref=e264]: 
              - text: Add to cart
        - list [ref=e266]:
          - listitem [ref=e267]:
            - link " View Product" [ref=e268] [cursor=pointer]:
              - /url: /product_details/11
              - generic [ref=e269]: 
              - text: View Product
      - generic [ref=e271]:
        - generic [ref=e272]:
          - generic [ref=e273]:
            - img "ecommerce website products" [ref=e274]
            - heading "Rs. 359" [level=2] [ref=e275]
            - paragraph [ref=e276]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e277] [cursor=pointer]:
              - generic [ref=e278]: 
              - text: Add to cart
          - generic [ref=e279]:
            - heading "Rs. 359" [level=2] [ref=e280]
            - paragraph [ref=e281]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e282] [cursor=pointer]:
              - generic [ref=e283]: 
              - text: Add to cart
        - list [ref=e285]:
          - listitem [ref=e286]:
            - link " View Product" [ref=e287] [cursor=pointer]:
              - /url: /product_details/12
              - generic [ref=e288]: 
              - text: View Product
      - generic [ref=e290]:
        - generic [ref=e291]:
          - generic [ref=e292]:
            - img "ecommerce website products" [ref=e293]
            - heading "Rs. 278" [level=2] [ref=e294]
            - paragraph [ref=e295]: Frozen Tops For Kids
            - generic [ref=e296] [cursor=pointer]:
              - generic [ref=e297]: 
              - text: Add to cart
          - generic [ref=e298]:
            - heading "Rs. 278" [level=2] [ref=e299]
            - paragraph [ref=e300]: Frozen Tops For Kids
            - generic [ref=e301] [cursor=pointer]:
              - generic [ref=e302]: 
              - text: Add to cart
        - list [ref=e304]:
          - listitem [ref=e305]:
            - link " View Product" [ref=e306] [cursor=pointer]:
              - /url: /product_details/13
              - generic [ref=e307]: 
              - text: View Product
      - generic [ref=e309]:
        - generic [ref=e310]:
          - generic [ref=e311]:
            - img "ecommerce website products" [ref=e312]
            - heading "Rs. 679" [level=2] [ref=e313]
            - paragraph [ref=e314]: Full Sleeves Top Cherry - Pink
            - generic [ref=e315] [cursor=pointer]:
              - generic [ref=e316]: 
              - text: Add to cart
          - generic [ref=e317]:
            - heading "Rs. 679" [level=2] [ref=e318]
            - paragraph [ref=e319]: Full Sleeves Top Cherry - Pink
            - generic [ref=e320] [cursor=pointer]:
              - generic [ref=e321]: 
              - text: Add to cart
        - list [ref=e323]:
          - listitem [ref=e324]:
            - link " View Product" [ref=e325] [cursor=pointer]:
              - /url: /product_details/14
              - generic [ref=e326]: 
              - text: View Product
      - generic [ref=e328]:
        - generic [ref=e329]:
          - generic [ref=e330]:
            - img "ecommerce website products" [ref=e331]
            - heading "Rs. 315" [level=2] [ref=e332]
            - paragraph [ref=e333]: Printed Off Shoulder Top - White
            - generic [ref=e334] [cursor=pointer]:
              - generic [ref=e335]: 
              - text: Add to cart
          - generic [ref=e336]:
            - heading "Rs. 315" [level=2] [ref=e337]
            - paragraph [ref=e338]: Printed Off Shoulder Top - White
            - generic [ref=e339] [cursor=pointer]:
              - generic [ref=e340]: 
              - text: Add to cart
        - list [ref=e342]:
          - listitem [ref=e343]:
            - link " View Product" [ref=e344] [cursor=pointer]:
              - /url: /product_details/15
              - generic [ref=e345]: 
              - text: View Product
      - generic [ref=e347]:
        - generic [ref=e348]:
          - generic [ref=e349]:
            - img "ecommerce website products" [ref=e350]
            - heading "Rs. 478" [level=2] [ref=e351]
            - paragraph [ref=e352]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e353] [cursor=pointer]:
              - generic [ref=e354]: 
              - text: Add to cart
          - generic [ref=e355]:
            - heading "Rs. 478" [level=2] [ref=e356]
            - paragraph [ref=e357]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e358] [cursor=pointer]:
              - generic [ref=e359]: 
              - text: Add to cart
        - list [ref=e361]:
          - listitem [ref=e362]:
            - link " View Product" [ref=e363] [cursor=pointer]:
              - /url: /product_details/16
              - generic [ref=e364]: 
              - text: View Product
      - generic [ref=e366]:
        - generic [ref=e367]:
          - generic [ref=e368]:
            - img "ecommerce website products" [ref=e369]
            - heading "Rs. 1200" [level=2] [ref=e370]
            - paragraph [ref=e371]: Little Girls Mr. Panda Shirt
            - generic [ref=e372] [cursor=pointer]:
              - generic [ref=e373]: 
              - text: Add to cart
          - generic [ref=e374]:
            - heading "Rs. 1200" [level=2] [ref=e375]
            - paragraph [ref=e376]: Little Girls Mr. Panda Shirt
            - generic [ref=e377] [cursor=pointer]:
              - generic [ref=e378]: 
              - text: Add to cart
        - list [ref=e380]:
          - listitem [ref=e381]:
            - link " View Product" [ref=e382] [cursor=pointer]:
              - /url: /product_details/18
              - generic [ref=e383]: 
              - text: View Product
      - generic [ref=e385]:
        - generic [ref=e386]:
          - generic [ref=e387]:
            - img "ecommerce website products" [ref=e388]
            - heading "Rs. 1050" [level=2] [ref=e389]
            - paragraph [ref=e390]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e391] [cursor=pointer]:
              - generic [ref=e392]: 
              - text: Add to cart
          - generic [ref=e393]:
            - heading "Rs. 1050" [level=2] [ref=e394]
            - paragraph [ref=e395]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e396] [cursor=pointer]:
              - generic [ref=e397]: 
              - text: Add to cart
        - list [ref=e399]:
          - listitem [ref=e400]:
            - link " View Product" [ref=e401] [cursor=pointer]:
              - /url: /product_details/19
              - generic [ref=e402]: 
              - text: View Product
      - generic [ref=e404]:
        - generic [ref=e405]:
          - generic [ref=e406]:
            - img "ecommerce website products" [ref=e407]
            - heading "Rs. 1190" [level=2] [ref=e408]
            - paragraph [ref=e409]: Cotton Mull Embroidered Dress
            - generic [ref=e410] [cursor=pointer]:
              - generic [ref=e411]: 
              - text: Add to cart
          - generic [ref=e412]:
            - heading "Rs. 1190" [level=2] [ref=e413]
            - paragraph [ref=e414]: Cotton Mull Embroidered Dress
            - generic [ref=e415] [cursor=pointer]:
              - generic [ref=e416]: 
              - text: Add to cart
        - list [ref=e418]:
          - listitem [ref=e419]:
            - link " View Product" [ref=e420] [cursor=pointer]:
              - /url: /product_details/20
              - generic [ref=e421]: 
              - text: View Product
      - generic [ref=e423]:
        - generic [ref=e424]:
          - generic [ref=e425]:
            - img "ecommerce website products" [ref=e426]
            - heading "Rs. 1530" [level=2] [ref=e427]
            - paragraph [ref=e428]: Blue Cotton Indie Mickey Dress
            - generic [ref=e429] [cursor=pointer]:
              - generic [ref=e430]: 
              - text: Add to cart
          - generic [ref=e431]:
            - heading "Rs. 1530" [level=2] [ref=e432]
            - paragraph [ref=e433]: Blue Cotton Indie Mickey Dress
            - generic [ref=e434] [cursor=pointer]:
              - generic [ref=e435]: 
              - text: Add to cart
        - list [ref=e437]:
          - listitem [ref=e438]:
            - link " View Product" [ref=e439] [cursor=pointer]:
              - /url: /product_details/21
              - generic [ref=e440]: 
              - text: View Product
      - generic [ref=e442]:
        - generic [ref=e443]:
          - generic [ref=e444]:
            - img "ecommerce website products" [ref=e445]
            - heading "Rs. 1600" [level=2] [ref=e446]
            - paragraph [ref=e447]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e448] [cursor=pointer]:
              - generic [ref=e449]: 
              - text: Add to cart
          - generic [ref=e450]:
            - heading "Rs. 1600" [level=2] [ref=e451]
            - paragraph [ref=e452]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e453] [cursor=pointer]:
              - generic [ref=e454]: 
              - text: Add to cart
        - list [ref=e456]:
          - listitem [ref=e457]:
            - link " View Product" [ref=e458] [cursor=pointer]:
              - /url: /product_details/22
              - generic [ref=e459]: 
              - text: View Product
      - generic [ref=e461]:
        - generic [ref=e462]:
          - generic [ref=e463]:
            - img "ecommerce website products" [ref=e464]
            - heading "Rs. 1100" [level=2] [ref=e465]
            - paragraph [ref=e466]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e467] [cursor=pointer]:
              - generic [ref=e468]: 
              - text: Add to cart
          - generic [ref=e469]:
            - heading "Rs. 1100" [level=2] [ref=e470]
            - paragraph [ref=e471]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e472] [cursor=pointer]:
              - generic [ref=e473]: 
              - text: Add to cart
        - list [ref=e475]:
          - listitem [ref=e476]:
            - link " View Product" [ref=e477] [cursor=pointer]:
              - /url: /product_details/23
              - generic [ref=e478]: 
              - text: View Product
      - generic [ref=e480]:
        - generic [ref=e481]:
          - generic [ref=e482]:
            - img "ecommerce website products" [ref=e483]
            - heading "Rs. 849" [level=2] [ref=e484]
            - paragraph [ref=e485]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e486] [cursor=pointer]:
              - generic [ref=e487]: 
              - text: Add to cart
          - generic [ref=e488]:
            - heading "Rs. 849" [level=2] [ref=e489]
            - paragraph [ref=e490]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e491] [cursor=pointer]:
              - generic [ref=e492]: 
              - text: Add to cart
        - list [ref=e494]:
          - listitem [ref=e495]:
            - link " View Product" [ref=e496] [cursor=pointer]:
              - /url: /product_details/24
              - generic [ref=e497]: 
              - text: View Product
      - generic [ref=e499]:
        - generic [ref=e500]:
          - generic [ref=e501]:
            - img "ecommerce website products" [ref=e502]
            - heading "Rs. 1299" [level=2] [ref=e503]
            - paragraph [ref=e504]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e505] [cursor=pointer]:
              - generic [ref=e506]: 
              - text: Add to cart
          - generic [ref=e507]:
            - heading "Rs. 1299" [level=2] [ref=e508]
            - paragraph [ref=e509]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e510] [cursor=pointer]:
              - generic [ref=e511]: 
              - text: Add to cart
        - list [ref=e513]:
          - listitem [ref=e514]:
            - link " View Product" [ref=e515] [cursor=pointer]:
              - /url: /product_details/28
              - generic [ref=e516]: 
              - text: View Product
      - generic [ref=e518]:
        - generic [ref=e519]:
          - generic [ref=e520]:
            - img "ecommerce website products" [ref=e521]
            - heading "Rs. 1000" [level=2] [ref=e522]
            - paragraph [ref=e523]: Green Side Placket Detail T-Shirt
            - generic [ref=e524] [cursor=pointer]:
              - generic [ref=e525]: 
              - text: Add to cart
          - generic [ref=e526]:
            - heading "Rs. 1000" [level=2] [ref=e527]
            - paragraph [ref=e528]: Green Side Placket Detail T-Shirt
            - generic [ref=e529] [cursor=pointer]:
              - generic [ref=e530]: 
              - text: Add to cart
        - list [ref=e532]:
          - listitem [ref=e533]:
            - link " View Product" [ref=e534] [cursor=pointer]:
              - /url: /product_details/29
              - generic [ref=e535]: 
              - text: View Product
      - generic [ref=e537]:
        - generic [ref=e538]:
          - generic [ref=e539]:
            - img "ecommerce website products"
            - heading "Rs. 1500" [level=2] [ref=e540]
            - paragraph [ref=e541]: Premium Polo T-Shirts
            - generic [ref=e542] [cursor=pointer]:
              - generic [ref=e543]: 
              - text: Add to cart
          - generic [ref=e544]:
            - heading "Rs. 1500" [level=2] [ref=e545]
            - paragraph [ref=e546]: Premium Polo T-Shirts
            - generic [ref=e547] [cursor=pointer]:
              - generic [ref=e548]: 
              - text: Add to cart
        - list [ref=e550]:
          - listitem [ref=e551]:
            - link " View Product" [ref=e552] [cursor=pointer]:
              - /url: /product_details/30
              - generic [ref=e553]: 
              - text: View Product
      - generic [ref=e555]:
        - generic [ref=e556]:
          - generic [ref=e557]:
            - img "ecommerce website products"
            - heading "Rs. 850" [level=2] [ref=e558]
            - paragraph [ref=e559]: Pure Cotton Neon Green Tshirt
            - generic [ref=e560] [cursor=pointer]:
              - generic [ref=e561]: 
              - text: Add to cart
          - generic [ref=e562]:
            - heading "Rs. 850" [level=2] [ref=e563]
            - paragraph [ref=e564]: Pure Cotton Neon Green Tshirt
            - generic [ref=e565] [cursor=pointer]:
              - generic [ref=e566]: 
              - text: Add to cart
        - list [ref=e568]:
          - listitem [ref=e569]:
            - link " View Product" [ref=e570] [cursor=pointer]:
              - /url: /product_details/31
              - generic [ref=e571]: 
              - text: View Product
      - generic [ref=e573]:
        - generic [ref=e574]:
          - generic [ref=e575]:
            - img "ecommerce website products" [ref=e576]
            - heading "Rs. 799" [level=2] [ref=e577]
            - paragraph [ref=e578]: Soft Stretch Jeans
            - generic [ref=e579] [cursor=pointer]:
              - generic [ref=e580]: 
              - text: Add to cart
          - generic [ref=e581]:
            - heading "Rs. 799" [level=2] [ref=e582]
            - paragraph [ref=e583]: Soft Stretch Jeans
            - generic [ref=e584] [cursor=pointer]:
              - generic [ref=e585]: 
              - text: Add to cart
        - list [ref=e587]:
          - listitem [ref=e588]:
            - link " View Product" [ref=e589] [cursor=pointer]:
              - /url: /product_details/33
              - generic [ref=e590]: 
              - text: View Product
      - generic [ref=e592]:
        - generic [ref=e593]:
          - generic [ref=e594]:
            - img "ecommerce website products"
            - heading "Rs. 1200" [level=2] [ref=e595]
            - paragraph [ref=e596]: Regular Fit Straight Jeans
            - generic [ref=e597] [cursor=pointer]:
              - generic [ref=e598]: 
              - text: Add to cart
          - generic [ref=e599]:
            - heading "Rs. 1200" [level=2] [ref=e600]
            - paragraph [ref=e601]: Regular Fit Straight Jeans
            - generic [ref=e602] [cursor=pointer]:
              - generic [ref=e603]: 
              - text: Add to cart
        - list [ref=e605]:
          - listitem [ref=e606]:
            - link " View Product" [ref=e607] [cursor=pointer]:
              - /url: /product_details/35
              - generic [ref=e608]: 
              - text: View Product
      - generic [ref=e610]:
        - generic [ref=e611]:
          - generic [ref=e612]:
            - img "ecommerce website products"
            - heading "Rs. 1400" [level=2] [ref=e613]
            - paragraph [ref=e614]: Grunt Blue Slim Fit Jeans
            - generic [ref=e615] [cursor=pointer]:
              - generic [ref=e616]: 
              - text: Add to cart
          - generic [ref=e617]:
            - heading "Rs. 1400" [level=2] [ref=e618]
            - paragraph [ref=e619]: Grunt Blue Slim Fit Jeans
            - generic [ref=e620] [cursor=pointer]:
              - generic [ref=e621]: 
              - text: Add to cart
        - list [ref=e623]:
          - listitem [ref=e624]:
            - link " View Product" [ref=e625] [cursor=pointer]:
              - /url: /product_details/37
              - generic [ref=e626]: 
              - text: View Product
      - generic [ref=e628]:
        - generic [ref=e629]:
          - generic [ref=e630]:
            - img "ecommerce website products"
            - heading "Rs. 2300" [level=2] [ref=e631]
            - paragraph [ref=e632]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e633] [cursor=pointer]:
              - generic [ref=e634]: 
              - text: Add to cart
          - generic [ref=e635]:
            - heading "Rs. 2300" [level=2] [ref=e636]
            - paragraph [ref=e637]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e638] [cursor=pointer]:
              - generic [ref=e639]: 
              - text: Add to cart
        - list [ref=e641]:
          - listitem [ref=e642]:
            - link " View Product" [ref=e643] [cursor=pointer]:
              - /url: /product_details/38
              - generic [ref=e644]: 
              - text: View Product
      - generic [ref=e646]:
        - generic [ref=e647]:
          - generic [ref=e648]:
            - img "ecommerce website products"
            - heading "Rs. 3000" [level=2] [ref=e649]
            - paragraph [ref=e650]: Cotton Silk Hand Block Print Saree
            - generic [ref=e651] [cursor=pointer]:
              - generic [ref=e652]: 
              - text: Add to cart
          - generic [ref=e653]:
            - heading "Rs. 3000" [level=2] [ref=e654]
            - paragraph [ref=e655]: Cotton Silk Hand Block Print Saree
            - generic [ref=e656] [cursor=pointer]:
              - generic [ref=e657]: 
              - text: Add to cart
        - list [ref=e659]:
          - listitem [ref=e660]:
            - link " View Product" [ref=e661] [cursor=pointer]:
              - /url: /product_details/39
              - generic [ref=e662]: 
              - text: View Product
      - generic [ref=e664]:
        - generic [ref=e665]:
          - generic [ref=e666]:
            - img "ecommerce website products"
            - heading "Rs. 3500" [level=2] [ref=e667]
            - paragraph [ref=e668]: Rust Red Linen Saree
            - generic [ref=e669] [cursor=pointer]:
              - generic [ref=e670]: 
              - text: Add to cart
          - generic [ref=e671]:
            - heading "Rs. 3500" [level=2] [ref=e672]
            - paragraph [ref=e673]: Rust Red Linen Saree
            - generic [ref=e674] [cursor=pointer]:
              - generic [ref=e675]: 
              - text: Add to cart
        - list [ref=e677]:
          - listitem [ref=e678]:
            - link " View Product" [ref=e679] [cursor=pointer]:
              - /url: /product_details/40
              - generic [ref=e680]: 
              - text: View Product
      - generic [ref=e682]:
        - generic [ref=e683]:
          - generic [ref=e684]:
            - img "ecommerce website products" [ref=e685]
            - heading "Rs. 5000" [level=2] [ref=e686]
            - paragraph [ref=e687]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e688] [cursor=pointer]:
              - generic [ref=e689]: 
              - text: Add to cart
          - generic [ref=e690]:
            - heading "Rs. 5000" [level=2] [ref=e691]
            - paragraph [ref=e692]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e693] [cursor=pointer]:
              - generic [ref=e694]: 
              - text: Add to cart
        - list [ref=e696]:
          - listitem [ref=e697]:
            - link " View Product" [ref=e698] [cursor=pointer]:
              - /url: /product_details/41
              - generic [ref=e699]: 
              - text: View Product
      - generic [ref=e701]:
        - generic [ref=e702]:
          - generic [ref=e703]:
            - img "ecommerce website products" [ref=e704]
            - heading "Rs. 1400" [level=2] [ref=e705]
            - paragraph [ref=e706]: Lace Top For Women
            - generic [ref=e707] [cursor=pointer]:
              - generic [ref=e708]: 
              - text: Add to cart
          - generic [ref=e709]:
            - heading "Rs. 1400" [level=2] [ref=e710]
            - paragraph [ref=e711]: Lace Top For Women
            - generic [ref=e712] [cursor=pointer]:
              - generic [ref=e713]: 
              - text: Add to cart
        - list [ref=e715]:
          - listitem [ref=e716]:
            - link " View Product" [ref=e717] [cursor=pointer]:
              - /url: /product_details/42
              - generic [ref=e718]: 
              - text: View Product
      - generic [ref=e720]:
        - generic [ref=e721]:
          - generic [ref=e722]:
            - img "ecommerce website products"
            - heading "Rs. 1389" [level=2] [ref=e723]
            - paragraph [ref=e724]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e725] [cursor=pointer]:
              - generic [ref=e726]: 
              - text: Add to cart
          - generic [ref=e727]:
            - heading "Rs. 1389" [level=2] [ref=e728]
            - paragraph [ref=e729]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e730] [cursor=pointer]:
              - generic [ref=e731]: 
              - text: Add to cart
        - list [ref=e733]:
          - listitem [ref=e734]:
            - link " View Product" [ref=e735] [cursor=pointer]:
              - /url: /product_details/43
              - generic [ref=e736]: 
              - text: View Product
  - contentinfo [ref=e737]:
    - generic [ref=e742]:
      - heading "Subscription" [level=2] [ref=e743]
      - generic [ref=e744]:
        - textbox "Your email address" [ref=e745]
        - button "" [ref=e746] [cursor=pointer]:
          - generic [ref=e747]: 
        - paragraph [ref=e748]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e752]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  269 |             await page.click('#submit_search');
  270 | 
  271 |             await expect(page.locator('body'))
  272 |                 .toContainText(product);
  273 | 
  274 |         });
  275 | 
  276 |     }
  277 | 
  278 |     // TC06
  279 |     test('Verify women category visible', async ({ page }) => {
  280 | 
  281 |         await expect(page.locator('body'))
  282 |             .toContainText('Women');
  283 | 
  284 |     });
  285 | 
  286 |     // TC07
  287 |     test('Verify men category visible', async ({ page }) => {
  288 | 
  289 |         await expect(page.locator('body'))
  290 |             .toContainText('Men');
  291 | 
  292 |     });
  293 | 
  294 |     // TC08
  295 |     test('Verify kids category visible', async ({ page }) => {
  296 | 
  297 |         await expect(page.locator('body'))
  298 |             .toContainText('Kids');
  299 | 
  300 |     });
  301 | 
  302 |     // TC09
  303 |     test('Verify brands section visible', async ({ page }) => {
  304 | 
  305 |         await expect(page.locator('body'))
  306 |             .toContainText('Brands');
  307 | 
  308 |     });
  309 | 
  310 |     // TC10
  311 |     test('Verify first product visible', async ({ page }) => {
  312 | 
  313 |         await expect(
  314 |             page.locator('.product-image-wrapper').first()
  315 |         ).toBeVisible();
  316 | 
  317 |     });
  318 | 
  319 |     // TC11
  320 |     test('Verify product details page opens', async ({ page }) => {
  321 | 
  322 |         await page.locator(
  323 |             'a[href*="/product_details/"]'
  324 |         ).first().click({ force: true });
  325 | 
  326 |         await expect(page.locator('body'))
  327 |             .toContainText('Availability');
  328 | 
  329 |     });
  330 | 
  331 |     // TC12
  332 |     test('Verify product name visible', async ({ page }) => {
  333 | 
  334 |         await page.locator(
  335 |             'a[href*="/product_details/"]'
  336 |         ).first().click({ force: true });
  337 | 
  338 |         await expect(page.locator('body'))
  339 |             .toContainText('Category');
  340 | 
  341 |     });
  342 | 
  343 |     // TC13
  344 |     test('Verify product price visible', async ({ page }) => {
  345 | 
  346 |         await page.locator(
  347 |             'a[href*="/product_details/"]'
  348 |         ).first().click({ force: true });
  349 | 
  350 |         await expect(page.locator('body'))
  351 |             .toContainText('Rs.');
  352 | 
  353 |     });
  354 | 
  355 |     // TC14
  356 |     test('Verify add to cart button visible', async ({ page }) => {
  357 | 
  358 |         await expect(
  359 |             page.locator('.add-to-cart').first()
  360 |         ).toBeVisible();
  361 | 
  362 |     });
  363 | 
  364 |     // TC15
  365 |     test('Verify user can add product to cart', async ({ page }) => {
  366 | 
  367 |         await page.locator('.add-to-cart')
  368 |             .first()
> 369 |             .click({ force: true });
      |              ^ Error: locator.click: Element is outside of the viewport
  370 | 
  371 |         await expect(page.locator('body'))
  372 |             .toContainText('Added!');
  373 | 
  374 |     });
  375 | 
  376 |     // TC16
  377 |     test('Verify continue shopping visible', async ({ page }) => {
  378 | 
  379 |         await page.locator('.add-to-cart')
  380 |             .first()
  381 |             .click({ force: true });
  382 | 
  383 |         await expect(page.locator('.modal-content'))
  384 |             .toContainText('Continue Shopping');
  385 | 
  386 |     });
  387 | 
  388 |     // TC17
  389 |     test('Verify view cart visible', async ({ page }) => {
  390 | 
  391 |         await page.locator('.add-to-cart')
  392 |             .first()
  393 |             .click({ force: true });
  394 | 
  395 |         await expect(page.locator('.modal-content'))
  396 |             .toContainText('View Cart');
  397 | 
  398 |     });
  399 | 
  400 |     // TC18
  401 |     test.skip('Verify modal visible', async ({ page }) => {
  402 | 
  403 |         await page.locator('.add-to-cart')
  404 |             .first()
  405 |             .click({ force: true });
  406 | 
  407 |         await expect(page.locator('.modal-content'))
  408 |             .toBeVisible();
  409 | 
  410 |     });
  411 | 
  412 |     // TC19
  413 |     test.skip('Verify all products visible', async ({ page }) => {
  414 | 
  415 |         await expect(page.locator('body'))
  416 |             .toContainText('All Products');
  417 | 
  418 |     });
  419 | 
  420 |     // TC20
  421 |     test('Verify category visible', async ({ page }) => {
  422 | 
  423 |         await expect(page.locator('body'))
  424 |             .toContainText('Category');
  425 | 
  426 |     });
  427 | 
  428 | });
```