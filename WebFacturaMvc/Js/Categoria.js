/// <reference path="C:\Users\Jorge\Downloads\FACTURA_JHONNYv2\FACTURA_JHONNYv2\WebFacturaMvc\Views\Producto\ProductoCreate.cshtml" />
$("#btnNuevo").click(function (eve) {
    $("#modal-content").load("/Producto/Create");
});