describe("Nav", function () {
  it("can be initialized", function () {
    var nav = new APP.Nav;
    expect(typeof(nav)).toEqual('object');
  });

  describe("methods", function () {

    it("html() will provide the html", function () {
      // read more about ajax;
      // https://github.com/jasmine/jasmine-ajax#example
      // http://jasmine.github.io/2.0/ajax.html

      var NavResponses = {
        html: {
          success: {
            status: 200,
            responseText: '<nav></nav>'
          }
        }
      };

      jasmine.Ajax.install();

      var nav = new APP.Nav;
      nav.html();

      request = jasmine.Ajax.requests.mostRecent();
      request.respondWith(NavResponses.html.success);
      expect(request.method).toBe('GET');
      expect(request.url).toBe('nav.html');


      // onSuccess = jasmine.createSpy('onSuccess');
      // onFailure = jasmine.createSpy('onFailure');

      // nav.html({
      //   onSuccess: onSuccess,
      //   onFailure: onFailure
      // })
    });
    
  });
});
