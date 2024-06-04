# Blossom Green

This project consists of old React code written for a florist's website. No configuration should be required before starting the app.

## Running the app in development

First, you'll need to get the app's dependencies via an `npm install`.

Then, you should be able to run the app straight away using `npm start`.

## Your tasks

The florist has identified several ways in which they would like their website to be improved.

1. At the moment, customers don't know how many items they have in their basket without navigating to the basket page and back. The florist would like you to add the customer's current item count inside brackets into the basket tab in the navbar, straight after the word "basket". The count should start at zero and update immediately whenever a new item is added to or removed from the basket.
1. Sometimes, customers reach the basket page after shopping for a while and decide they don't want a certain item after all. At the moment, they have to navigate back to the products page to remove the item. The florist would like you to add plus and minus buttons around the product counts in the summary table on the basket page. They should be stylistically the same as or similar to the plus and minus buttons on the products page, and they should allow the customer to edit their basket within the basket page itself.
1. The products page currently takes a while to load, and when it does load, it displays the florist's entire range. The florist would like you to paginate this page so that customers can view up to 12 products at a time, and move to the next set of products when they are ready. This should improve the page's performance noticeably. You should be able to achieve this by examining the `client.js` file inside the `api` folder, but note that you shouldn't edit this file.
1. At the moment, if a customer refreshes the website, their basket is lost. The florist would like you to implement a solution so that customers' baskets will persist across refreshes. You should research and use session storage to achieve this.
