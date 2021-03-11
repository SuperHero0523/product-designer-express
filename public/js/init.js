jQuery(document).ready(function () {

  if (typeof FancyProductDesignerPlus === 'undefined') {
    alert("For this demo the Fancy Product Designer Plus Add-On is required!");
    return false;
  }

  var $yourDesigner = $('#clothing-designer'),
    pluginOpts = {
      productsJSON: 'json/products.json',
      designsJSON: 'json/designs.json',
      editorMode: false,
      fonts: [
        { name: "Helvetica" },
        { name: "Times New Roman" },
        { name: "Pacifico", url: "Enter_URL_To_Pacifico" },
        { name: "Arial" },
        { name: "Lobster", url: "google" },
      ],
      customTextParameters: {
        colors: false,
        removable: true,
        resizable: true,
        draggable: true,
        rotatable: true,
        autoCenter: true,
        boundingBox: "inside",
      },
      customImageParameters: {
        draggable: true,
        removable: true,
        resizable: true,
        rotatable: true,
        colors: "#000",
        autoCenter: true,
        boundingBox: "inside",
        minDPI: 0,
      },
      actions: {
        top: ["download", "print", "snap", "preview-lightbox"],
        right: [
          "magnify-glass",
          "zoom",
          "reset-product",
          "qr-code",
          "ruler",
        ],
        bottom: ["undo", "redo"],
        left: ["manage-layers", "info", "save", "load"],
      },
      mainBarModules: ["names-numbers", "drawing", "images", "designs", "products"],
      colorSelectionPlacement: "inside-br",
      namesNumbersDropdown: ["S", "M", "L", "XL"],
      namesNumbersEntryPrice: 10,
      bulkVariationsPlacement: "#my-variations",
      bulkVariations: {
        Size: ["XL", "L", "M", "S"],
        Color: ["Red", "Blue"],
      },
      fitImagesInCanvas: true,
      maxCanvasHeight: true
    },
    yourDesigner = new FancyProductDesigner($yourDesigner, pluginOpts);
    
  //print button
  $("#print-button").on('click', function () {
    yourDesigner.print();
    return false;
  });

  //create an image
  $("#image-button").on('click', function () {
    var image = yourDesigner.createImage();
    return false;
  });

  //checkout button with getProduct()
  $("#checkout-button").on('click', function () {
    var product = yourDesigner.getProduct();
    console.log(product);
    return false;
  });

  //event handler when the price is changing
  $yourDesigner.on("priceChange", function (evt, price, currentPrice) {
    $("#thsirt-price").text(currentPrice);
  });
});