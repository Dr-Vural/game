(function () {
  var s, id;
  try {
    s = window.localStorage;
    var q = new URLSearchParams(location.search).get('vml-owner');
    if (q === '1') s.setItem('vml-owner', '1');
    if (q === '0') s.removeItem('vml-owner');
    if (/(?:^|;\s*)vml_owner=1/.test(document.cookie) || s.getItem('vml-owner') === '1') {
      window.vmlSayac = function () {};
      return;
    }
    id = s.getItem('vml-id');
    if (!id || !/^[A-Za-z0-9_-]{16,64}$/.test(id)) {
      var b = new Uint8Array(16);
      crypto.getRandomValues(b);
      id = Array.prototype.map
        .call(b, function (x) {
          return ('0' + x.toString(16)).slice(-2);
        })
        .join('');
      s.setItem('vml-id', id);
    }
  } catch (e) {
    window.vmlSayac = function () {};
    return;
  }

  function gonder(page) {
    try {
      page = String(page || '')
        .toLowerCase()
        .replace(/[^a-z0-9/_-]+/g, '-')
        .replace(/^[/-]+|[/-]+$/g, '')
        .slice(0, 60)
        .replace(/[/-]+$/, '');
      var day = new Date().toISOString().slice(0, 10);
      var key = day + '|' + page;
      if ((s.getItem('vml-sent') || '').split(',').indexOf(key) > -1) return;
      fetch('https://labs.vumatech.net/api/ping', {
        method: 'POST',
        mode: 'no-cors',
        keepalive: true,
        body: JSON.stringify({ d: id, p: page }),
      })
        .then(function () {
          var sent = (s.getItem('vml-sent') || '').split(',').filter(function (k) {
            return k.indexOf(day) === 0 && k !== key;
          });
          s.setItem('vml-sent', sent.concat(key).join(','));
        })
        .catch(function () {});
    } catch (e) {}
  }

  window.vmlSayac = gonder;
  gonder(location.pathname.replace(/(\/index)?\.html$/i, ''));
})();
