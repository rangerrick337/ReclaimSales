$(document).ready(function() {
// <---- Add and implement Amazon Search Button *---->
  // 1. Create search button
  var searchButton = document.createElement('button');
  searchButton.className = "btn btn-default";
  searchButton.type = "submit";
  searchButton.innerHTML = "search";

  // 2. add button
  var amazonSearch = document.getElementById("amazon-search");
  amazonSearch.appendChild(searchButton);

  // 3. Add event handler
  searchButton.addEventListener ("click", function() {
    var searchURL = "https://www.amazon.com/s/?field-keywords=" + document.getElementById("search").value;
    window.open(searchURL, "_blank")
  });

  // <---- Add and implement Calculate Button *---->
  // 1. Create Calculate button
  var calculateButton = document.createElement('button');
  calculateButton.className = "btn btn-success";
  calculateButton.type = "button";
  calculateButton.innerHTML = "Calculate";

  // 2. add button
  var calculator = document.getElementById("calculate-button");
  calculator.appendChild(calculateButton);

  // 3. Add event handler
  calculateButton.addEventListener ("click", function() {
    // alert("this happened");
    var retailPrice = document.getElementById("retail-price").value;
    var wholesalePrice = document.getElementById("wholesale-price").value;
    var mfgCost = document.getElementById("mfg-cost").value;
    var amazonSales = document.getElementById("amazon-sales").value;

    calculateAll(retailPrice, wholesalePrice, mfgCost, amazonSales);
  });

  var calculateAll = function (retailPrice, wholesalePrice, mfgCost, amazonSales) {
  // Calculate Current Profit Per Unit
    var currentProfitPerUnit = wholesalePrice - mfgCost;
    // get local currency and format number
    var currentProfitPerUnitFixed = currentProfitPerUnit.toLocaleString(undefined, {style: 'currency', currency: 'USD'});
    // insert
    var currentProfitPerUnitElement = document.getElementById("ppu-current");
    currentProfitPerUnitElement.innerHTML = currentProfitPerUnitFixed;

  // Calculate Projected Profit Per Unit
    var projectedProfitPerUnit = (retailPrice * .83) - mfgCost;
    // get local currency and format number
    var projectedProfitPerUnitFixed = projectedProfitPerUnit.toLocaleString(undefined, {style: 'currency', currency: 'USD'});
    // projectedProfitPerUnitFixed.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // insert
    var projectedProfitPerElement = document.getElementById("ppu-projected");
    projectedProfitPerElement.innerHTML = "<b>" + projectedProfitPerUnitFixed;

  // Calculate Current Revenue Estimate from Amazon Sales
    var currentRevenue = currentProfitPerUnit * amazonSales;
    // get local currency and format number
    var currentRevenueFixed = currentRevenue.toLocaleString(undefined, {style: 'currency', currency: 'USD'});
    // insert
    var currentRevenueElement = document.getElementById("revenue-current");
    currentRevenueElement.innerHTML = currentRevenueFixed;

  // Calculate Projected Revenue Estimate from Amazon Sales
    var projectedRevenue = projectedProfitPerUnit * amazonSales;
    // get local currency and format number
    var projectedRevenueFixed = projectedRevenue.toLocaleString(undefined, {style: 'currency', currency: 'USD'});
    // insert
    var projectedRevenueElement = document.getElementById("revenue-projected");
    projectedRevenueElement.innerHTML = "<b>" + projectedRevenueFixed;

  // Calculate Increased Revenue Estimate from Amazon Sales
    var increasedRevenue = projectedRevenue - currentRevenue;
    // get local currency and format number
    var increasedRevenueFixed = increasedRevenue.toLocaleString(undefined, {style: 'currency', currency: 'USD'});
    // insert
    var increasedRevenueElement = document.getElementById("increased-revenue");
    increasedRevenueElement.innerHTML = "<b><u>" + increasedRevenueFixed;

  };


});
