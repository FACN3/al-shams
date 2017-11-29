var request = function(method, url, data, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open(method, url, true);
  if (method === "POST") {
    xhr.send(data);
  } else {
    xhr.send();
  }
};
