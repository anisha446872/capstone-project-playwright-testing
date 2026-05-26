// // class CartPage {

// //   constructor(page) {

// //     this.page = page;

// //     // Navigation
// //     this.productsBtn =
// //       page.locator("a[href='/products']").first();

// //     this.cartBtn =
// //       page.locator("a[href='/view_cart']").first();

// //     // Cart Elements
// //     this.cartTable =
// //       page.locator('#cart_info_table');

// //     this.proceedToCheckoutBtn =
// //       page.locator('a:has-text("Proceed To Checkout")');

// //   }

// //   async goToProductsPage() {

// //     await this.productsBtn.click();

// //   }

// //   async openCart() {

// //     await this.cartBtn.click();

// //   }

// // }

// // module.exports = { CartPage };



// class CartPage {

//   constructor(page) {

//     this.page = page;

//     // Navigation
//     this.productsBtn =
//       page.locator("a[href='/products']").first();

//     this.cartBtn =
//       page.locator("a[href='/view_cart']").first();

//   }

//   async goToProductsPage() {

//     await this.productsBtn.click();

//   }

//   async openCart() {

//     await this.cartBtn.click();

//   }

// }

// module.exports = { CartPage };

class CartPage {

  constructor(page) {

    this.page = page;

    // Navigation
    this.productsBtn =
      page.locator("a[href='/products']").first();

    this.cartBtn =
      page.locator("a[href='/view_cart']").first();

  }

  async goToProductsPage() {

    await this.productsBtn.click();

  }

  async openCart() {

    await this.cartBtn.click();

  }

}

module.exports = { CartPage };