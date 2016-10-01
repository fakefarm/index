describe("Partial", function () {
  it("can be initialized", function () {
    var partial = new APP.Partial;
    expect(typeof(partial)).toEqual('object');
  });

  describe("arguments", function () {
    it("takes a file name", function () {
      var partial = new APP.Partial('intro')
      expect(partial.file).toBe('intro')
    });

    it("takes an id to attach to", function () {
      var partial = new APP.Partial('intro', 'main-intro')
      expect(partial.id).toBe('#main-intro')
    });
  });

  it("render() inserts contents", function () {


      var PartialResponse = {
        render: {
          success: {
            status: 200,
            responseText: '<nav></nav>'
          }
        }
      };

      jasmine.Ajax.install();

      var partial = new APP.Partial;
      partial.render();

      request = jasmine.Ajax.requests.mostRecent();
      request.respondWith(PartialResponse.render.success);
      expect(request.method).toBe('GET');
      // expect(request.url).toBe('nav.html');

    // it("description", function () {
    //
    // });
  });
});
