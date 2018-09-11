function createXMLDOM() {
  var version = [
    'MSXML2.DOMDocument6.0',
    'MSXML2.DOMDocument3.0',
    'MSXML2.DOMDocument'
  ];

  for (var i = 0; i < version.length; i++) {
    try {
      var xmlDom = new ActiveXObject(version[i]);
      consoel.log(xmlDom);
    } catch (e) {
      //跳过
    }
  }
}